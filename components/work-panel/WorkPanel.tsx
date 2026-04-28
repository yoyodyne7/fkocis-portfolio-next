'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, ArrowSquareOut } from '@phosphor-icons/react'
import { usePanelContext } from './PanelContext'
import { PanelSkeleton } from './PanelSkeleton'
import { MagneticButton } from '@/components/ui/MagneticButton'

const FOCUSABLE = 'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'

export function WorkPanel() {
  const { isOpen, activeItem, closePanel, triggerRef } = usePanelContext()
  const [iframeSrc, setIframeSrc] = useState('')
  const [showSkeleton, setShowSkeleton] = useState(true)
  const [showFallback, setShowFallback] = useState(false)
  const [activeVideoId, setActiveVideoId] = useState<string>('')
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const panelRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (isOpen && activeItem) {
      setShowSkeleton(true)
      setShowFallback(false)
      clearTimeout(timeoutRef.current)

      if (activeItem.embedMode === 'video-gallery') {
        const firstId = activeItem.videos?.[0]?.youtubeId ?? ''
        setActiveVideoId(firstId)
        setIframeSrc(firstId ? `https://www.youtube.com/embed/${firstId}` : '')
        timeoutRef.current = setTimeout(() => setShowSkeleton(false), 2000)
      } else {
        setIframeSrc(activeItem.embedUrl)
        timeoutRef.current = setTimeout(() => {
          setShowSkeleton(false)
          if (activeItem.embedMode === 'social') setShowFallback(true)
        }, 4000)
      }
    }
    return () => clearTimeout(timeoutRef.current)
  }, [isOpen, activeItem])

  // Focus close button when panel opens
  useEffect(() => {
    if (!isOpen) return
    const id = setTimeout(() => closeButtonRef.current?.focus(), 50)
    return () => clearTimeout(id)
  }, [isOpen])

  // Keyboard: Escape to close + Tab trap
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePanel()
        return
      }
      if (e.key === 'Tab') {
        const panel = panelRef.current
        if (!panel) return
        const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE))
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus() }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus() }
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, closePanel])

  const selectVideo = useCallback((youtubeId: string) => {
    setActiveVideoId(youtubeId)
    setShowSkeleton(true)
    setIframeSrc(`https://www.youtube.com/embed/${youtubeId}?autoplay=1`)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setShowSkeleton(false), 2000)
  }, [])

  const handleLoad = useCallback(() => {
    clearTimeout(timeoutRef.current)
    setShowSkeleton(false)
  }, [])

  const handleExitComplete = useCallback(() => {
    setIframeSrc('')
    setShowSkeleton(true)
    setShowFallback(false)
    setActiveVideoId('')
    triggerRef.current?.focus()
  }, [triggerRef])

  const embedClass =
    activeItem?.embedMode === 'video'
      ? 'video-mode'
      : activeItem?.embedMode === 'social'
      ? 'social-mode'
      : ''

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[299]"
            style={{ background: 'rgba(26,25,24,0.35)', backdropFilter: 'blur(2px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closePanel}
          />
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence onExitComplete={handleExitComplete}>
        {isOpen && activeItem && (
          <motion.aside
            ref={panelRef}
            className="fixed top-0 right-0 z-[300] flex flex-col"
            style={{
              height: '100dvh',
              width: 'min(46vw, 100vw)',
              minWidth: 340,
              background: 'var(--color-bg)',
              borderLeft: '1px solid var(--color-border)',
              boxShadow: '-4px 0 40px rgba(26,25,24,0.08)',
            }}
            initial={prefersReduced ? { opacity: 0 } : { x: '100%' }}
            animate={prefersReduced ? { opacity: 1 } : { x: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { x: '100%' }}
            transition={
              prefersReduced
                ? { duration: 0.25 }
                : { type: 'spring' as const, stiffness: 300, damping: 35 }
            }
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between gap-3 flex-shrink-0"
              style={{
                padding: '0.875rem 1.25rem',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className="inline-flex items-center gap-1 font-bold tracking-[0.1em] uppercase rounded-sm flex-shrink-0"
                  style={{
                    fontSize: '0.5625rem',
                    padding: '0.22rem 0.5rem',
                    color: 'var(--color-pink)',
                    background: 'var(--color-pink-light)',
                  }}
                >
                  {activeItem.type}
                </span>
                <span
                  className="font-bold truncate"
                  style={{
                    fontSize: '0.875rem',
                    letterSpacing: '-0.01em',
                    color: 'var(--color-ink)',
                  }}
                >
                  {activeItem.title}
                </span>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                <MagneticButton strength={0.4}>
                  <a
                    href={activeItem.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in new tab"
                    className="flex items-center justify-center rounded-md transition-colors duration-150"
                    style={{ width: 32, height: 32, color: 'var(--color-muted)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
                  >
                    <ArrowSquareOut size={14} />
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.4}>
                  <button
                    ref={closeButtonRef}
                    onClick={closePanel}
                    aria-label="Close panel"
                    className="flex items-center justify-center rounded-md transition-colors duration-150"
                    style={{
                      width: 32, height: 32,
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: 'var(--color-muted)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
                  >
                    <X size={16} />
                  </button>
                </MagneticButton>
              </div>
            </div>

            {/* Body */}
            {activeItem.embedMode === 'video-gallery' ? (
              <div className="flex flex-col flex-1 overflow-hidden">
                {/* Active player */}
                <div className="relative flex-shrink-0" style={{ background: '#0e0e0e' }}>
                  <AnimatePresence>
                    {showSkeleton && (
                      <motion.div
                        className="absolute inset-0 z-20"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <PanelSkeleton />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <iframe
                    key={iframeSrc}
                    src={iframeSrc}
                    title={activeItem.title}
                    onLoad={handleLoad}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    style={{ width: '100%', aspectRatio: '16/9', border: 'none', display: 'block' }}
                  />
                </div>

                {/* Thumbnail list */}
                <div className="flex-1 overflow-y-auto" style={{ padding: '0.75rem' }}>
                  {activeItem.videos?.map((video) => {
                    const isActive = video.youtubeId === activeVideoId
                    return (
                      <motion.button
                        key={video.youtubeId}
                        onClick={() => selectVideo(video.youtubeId)}
                        className="w-full flex items-center gap-3 rounded-md text-left transition-colors duration-150"
                        style={{
                          padding: '0.5rem',
                          background: isActive ? 'var(--color-pink-light)' : 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          marginBottom: '0.25rem',
                        }}
                        whileHover={{ backgroundColor: isActive ? 'var(--color-pink-light)' : 'var(--color-cream)' }}
                      >
                        {/* Thumbnail */}
                        <div
                          className="relative flex-shrink-0 overflow-hidden rounded"
                          style={{ width: 96, height: 54 }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                            alt={video.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                          />
                          {isActive && (
                            <div
                              className="absolute inset-0 flex items-center justify-center"
                              style={{ background: 'rgba(228,25,124,0.55)' }}
                            >
                              <span style={{ color: 'white', fontSize: '1rem' }}>▶</span>
                            </div>
                          )}
                        </div>

                        {/* Title */}
                        <span
                          className="font-medium leading-snug"
                          style={{
                            fontSize: '0.8125rem',
                            color: isActive ? 'var(--color-pink)' : 'var(--color-ink)',
                          }}
                        >
                          {video.title}
                        </span>
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="flex-1 relative overflow-hidden">
                {/* Skeleton */}
                <AnimatePresence>
                  {showSkeleton && (
                    <motion.div
                      className="absolute inset-0 z-20"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <PanelSkeleton />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Embed */}
                <div
                  className={`absolute inset-0 w-full h-full ${embedClass}`}
                  style={
                    embedClass === 'video-mode'
                      ? { display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0e0e0e', padding: '1.5rem' }
                      : embedClass === 'social-mode'
                      ? { display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fafafa', padding: '1rem' }
                      : {}
                  }
                >
                  {!showFallback && (
                    <iframe
                      src={iframeSrc}
                      title={activeItem.title}
                      onLoad={handleLoad}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      style={
                        embedClass === 'video-mode'
                          ? { width: '100%', maxWidth: 580, height: 'auto', aspectRatio: '16/9', border: 'none', borderRadius: 6 }
                          : embedClass === 'social-mode'
                          ? { width: 340, maxWidth: '100%', height: 600, border: 'none', borderRadius: 12 }
                          : { width: '100%', height: '100%', border: 'none', display: 'block' }
                      }
                    />
                  )}
                </div>

                {/* Fallback */}
                {showFallback && (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center"
                    style={{ padding: '2rem' }}
                  >
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', maxWidth: '28ch', lineHeight: 1.5 }}>
                      This content can&apos;t be embedded directly.
                    </p>
                    <a
                      href={activeItem.directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-pink)',
                        textDecoration: 'underline',
                        textUnderlineOffset: 3,
                      }}
                    >
                      Open in new tab →
                    </a>
                  </div>
                )}
              </div>
            )}
          </motion.aside>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          aside[role="dialog"] { width: 100vw !important; min-width: unset !important; }
        }
      `}</style>
    </>
  )
}
