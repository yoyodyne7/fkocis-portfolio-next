'use client'
import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  FilePdf,
  FileDoc,
  YoutubeLogo,
  InstagramLogo,
  Presentation,
  FolderOpen,
  ArrowSquareOut,
} from '@phosphor-icons/react'
import { workItems, type WorkItem } from '@/lib/work-items'
import { usePanelContext } from '@/components/work-panel/PanelContext'

const typeIcon = (type: string) => {
  switch (type) {
    case 'PDF':    return <FilePdf size={13} weight="fill" />
    case 'DOC':    return <FileDoc size={13} weight="fill" />
    case 'VIDEO':  return <YoutubeLogo size={13} weight="fill" />
    case 'REEL':   return <InstagramLogo size={13} weight="fill" />
    case 'SLIDES': return <Presentation size={13} weight="fill" />
    case 'FOLDER': return <FolderOpen size={13} weight="fill" />
    default:       return null
  }
}

function WorkRow({ item }: { item: WorkItem }) {
  const { activeItem, openPanel, closePanel } = usePanelContext()
  const prefersReduced = useReducedMotion()
  const rowRef = useRef<HTMLLIElement>(null)
  const isActive = activeItem?.id === item.id

  const handleClick = () => {
    if (isActive) closePanel()
    else openPanel(item, rowRef.current)
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (isActive) closePanel()
      else openPanel(item, e.currentTarget as HTMLElement)
    }
  }

  const rowVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReduced
        ? { duration: 0.35, ease: 'easeOut' as const }
        : { type: 'spring' as const, stiffness: 80, damping: 20 },
    },
  }

  return (
    <motion.li
      ref={rowRef}
      variants={rowVariants}
      animate={{ backgroundColor: isActive ? 'var(--color-pink-light)' : 'transparent' }}
      whileHover={{ backgroundColor: isActive ? 'var(--color-pink-light)' : 'var(--color-cream)' }}
      transition={{ duration: 0.18 }}
      className="cursor-pointer relative"
      style={{
        display: 'grid',
        gridTemplateColumns: '3rem 1fr auto auto auto',
        alignItems: 'center',
        gap: '1.25rem',
        padding: '1.25rem 0',
        borderTop: '1px solid var(--color-border)',
      }}
      onClick={handleClick}
      onKeyDown={handleKey}
      role="button"
      tabIndex={0}
      aria-label={`Open ${item.title}`}
    >
      {/* Row number */}
      <motion.span
        className="font-bold tabular-nums"
        animate={{ color: isActive ? 'var(--color-pink)' : 'var(--color-muted)' }}
        whileHover={{ color: 'var(--color-pink)', x: prefersReduced ? 0 : 4 }}
        transition={{ duration: 0.15 }}
        style={{ fontSize: '0.75rem' }}
      >
        {item.id}
      </motion.span>

      {/* Title + desc */}
      <div className="min-w-0">
        <motion.div
          className="font-bold leading-tight"
          animate={{ color: isActive ? 'var(--color-pink)' : 'var(--color-ink)' }}
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}
        >
          {item.title}
        </motion.div>
        <div style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginTop: '0.1rem' }}>
          {item.description}
        </div>
      </div>

      {/* Type badge */}
      <motion.span
        className="hidden sm:inline-flex items-center gap-1 font-bold tracking-[0.1em] uppercase rounded-sm flex-shrink-0"
        animate={{
          background: isActive ? 'var(--color-pink-light)' : 'var(--color-border)',
          color: isActive ? 'var(--color-pink)' : 'var(--color-muted)',
        }}
        style={{ fontSize: '0.5625rem', padding: '0.2rem 0.45rem' }}
      >
        {typeIcon(item.type)}
        {item.type}
      </motion.span>

      {/* External link */}
      <a
        href={item.directUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${item.title} in new tab`}
        className="flex items-center justify-center rounded-md flex-shrink-0 transition-colors duration-150 z-10"
        style={{ width: 28, height: 28, color: 'var(--color-muted)' }}
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
      >
        <ArrowSquareOut size={13} />
      </a>

      {/* Arrow */}
      <motion.span
        className="flex-shrink-0"
        animate={{
          color: isActive ? 'var(--color-pink)' : 'var(--color-muted)',
          x: prefersReduced ? 0 : (isActive ? 5 : 0),
        }}
        whileHover={{ color: 'var(--color-pink)', x: prefersReduced ? 0 : 8 }}
        transition={{ type: 'spring' as const, stiffness: 200, damping: 20 }}
        style={{ fontSize: '1rem' }}
        aria-hidden="true"
      >
        →
      </motion.span>
    </motion.li>
  )
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
}

export function WorkList() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="work"
      className="relative overflow-hidden"
      style={{ padding: 'var(--section-pad) var(--side-pad)' }}
    >
      {/* Ghost word */}
      <span
        className="ghost-word pointer-events-none select-none"
        aria-hidden="true"
        style={{ top: '-5%', right: '-2%', opacity: 0.6 }}
      >
        WORK
      </span>

      {/* Header */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={
          prefersReduced
            ? { duration: 0.4, ease: 'easeOut' as const }
            : { type: 'spring' as const, stiffness: 60, damping: 18 }
        }
      >
        <span className="section-label">Selected Work</span>
        <h2
          className="font-bold"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: 'var(--color-ink)',
          }}
        >
          Work Samples.
        </h2>
      </motion.div>

      {/* List */}
      <motion.ul
        className="relative z-10 list-none mt-0"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5% 0px' }}
        role="list"
      >
        {workItems.map((item) => (
          <WorkRow key={item.id} item={item} />
        ))}
      </motion.ul>
      <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: 0 }} />
    </section>
  )
}
