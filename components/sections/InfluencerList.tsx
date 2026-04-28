'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Script from 'next/script'
import { useHoverPreview } from '@/components/ui/HoverPreview'

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

const influencers = [
  {
    num: '01',
    title: 'Kristen Coutts — Fake Louboutins',
    cat: 'Instagram Reel · Rust-Oleum',
    year: '2025',
    href: 'https://www.instagram.com/reel/DOMKXqfj9E5/',
    thumbUrl: '/influencer/kristen-coutts.jpg',
  },
  {
    num: '02',
    title: 'Refreshed Home Improvements — Magnetic Paint',
    cat: 'Instagram Reel · Rust-Oleum',
    year: '2025',
    href: 'https://www.instagram.com/reel/DGDh6zXgy9r/',
    thumbUrl: '/influencer/refreshed-home.jpg',
  },
  {
    num: '03',
    title: 'Scott McGillivray — Painting 101 (Colour Spark)',
    cat: 'Instagram Reel · HGTV Partnership',
    year: '2023',
    href: 'https://www.instagram.com/reel/Cv0QwOngwJs/',
    thumbUrl: '/influencer/scott-mcgillivray.jpg',
  },
]

function InfluencerRow({
  num, title, cat, year, href, thumbUrl, isOpen, onToggle, onClose,
}: (typeof influencers)[number] & { isOpen: boolean; onToggle: () => void; onClose: () => void }) {
  const { show, hide, track } = useHoverPreview()

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        className="work-item-row"
        onClick={onToggle}
        onKeyDown={(e) => e.key === 'Enter' && onToggle()}
        onMouseEnter={() => { if (!isOpen) show(thumbUrl) }}
        onMouseMove={track}
        onMouseLeave={hide}
        style={{
          display: 'grid',
          gridTemplateColumns: '3rem 1fr auto auto auto',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '1.5rem var(--side-pad)',
          borderBottom: isOpen ? 'none' : '1px solid var(--color-border)',
          color: 'var(--color-ink)',
          transition: 'background .12s',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <span className="font-mono-dm" style={{ fontSize: '0.65rem', color: 'var(--color-border)' }}>
          {num}
        </span>
        <span
          className="work-row-title"
          style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.25rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            transition: 'color .2s',
          }}
        >
          {title}
        </span>
        <span
          className="work-row-cat font-mono-dm"
          style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-muted)', textAlign: 'right' }}
        >
          {cat}
        </span>
        <span
          className="work-row-year font-mono-dm"
          style={{ fontSize: '0.65rem', color: 'var(--color-border)', minWidth: '2.5rem', textAlign: 'right' }}
        >
          {year}
        </span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="font-mono-dm"
          style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textDecoration: 'none', lineHeight: 1 }}
          aria-label="Open on Instagram"
        >
          ↗
        </a>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden', borderBottom: '1px solid var(--color-border)', position: 'relative' }}
          >
            <div style={{ background: 'var(--color-bg)', padding: '1.5rem var(--side-pad)', position: 'relative' }}>
              <button
                onClick={onClose}
                className="font-mono-dm"
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 16,
                  zIndex: 2,
                  background: 'var(--color-ghost)',
                  border: 'none',
                  color: 'var(--color-ink)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  padding: '4px 10px',
                  borderRadius: 4,
                  letterSpacing: '0.05em',
                }}
              >
                ✕ close
              </button>
              <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem' }}>
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={href}
                  data-instgrm-captioned
                  style={{ maxWidth: 540, width: '100%', margin: 0, border: 'none' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function InfluencerList() {
  const [openNum, setOpenNum] = useState<string | null>(null)

  useEffect(() => {
    if (openNum) {
      setTimeout(() => window.instgrm?.Embeds.process(), 100)
    }
  }, [openNum])

  return (
    <div>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      {influencers.map((item) => (
        <InfluencerRow
          key={item.num}
          {...item}
          isOpen={openNum === item.num}
          onToggle={() => setOpenNum(openNum === item.num ? null : item.num)}
          onClose={() => setOpenNum(null)}
        />
      ))}
    </div>
  )
}
