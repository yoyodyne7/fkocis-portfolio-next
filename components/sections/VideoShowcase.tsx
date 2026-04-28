'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useHoverPreview } from '@/components/ui/HoverPreview'

const videos = [
  {
    num: '01',
    title: 'Tremclad Turbo — "PSSSSHT"',
    cat: 'TV Campaign · Award Nominated',
    year: '2023',
    href: 'https://www.youtube.com/watch?v=c8vsWYM2RKY',
    youtubeId: 'c8vsWYM2RKY',
  },
  {
    num: '02',
    title: 'Concrobium — Defend Your Home',
    cat: 'TV Campaign',
    year: '2022',
    href: 'https://www.youtube.com/watch?v=Imqk0tjOWZY',
    youtubeId: 'Imqk0tjOWZY',
  },
  {
    num: '03',
    title: 'Colour Spark — "Greatest Colours"',
    cat: 'Product Launch · 58% Lift',
    year: '2023',
    href: 'https://www.youtube.com/watch?v=e6WZcKRa9h8',
    youtubeId: 'e6WZcKRa9h8',
  },
  {
    num: '04',
    title: 'Rust-Oleum Low Odour — "The Nose"',
    cat: 'Product Campaign',
    year: '2022',
    href: 'https://www.youtube.com/watch?v=cXb5-Xbh31I',
    youtubeId: 'cXb5-Xbh31I',
  },
]

function VideoRow({
  num, title, cat, year, href, youtubeId, isOpen, onToggle, onClose,
}: (typeof videos)[number] & { isOpen: boolean; onToggle: () => void; onClose: () => void }) {
  const { show, hide, track } = useHoverPreview()
  const thumbUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`

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
          aria-label="Open on YouTube"
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
            style={{ overflow: 'hidden', background: '#000', borderBottom: '1px solid var(--color-border)', position: 'relative' }}
          >
            <button
              onClick={onClose}
              className="font-mono-dm"
              style={{
                position: 'absolute',
                top: 12,
                right: 16,
                zIndex: 2,
                background: 'rgba(255,255,255,0.12)',
                border: 'none',
                color: '#fff',
                fontSize: '0.75rem',
                cursor: 'pointer',
                padding: '4px 10px',
                borderRadius: 4,
                letterSpacing: '0.05em',
              }}
            >
              ✕ close
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              style={{ width: '100%', aspectRatio: '16/9', border: 'none', display: 'block' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .work-item-row:hover { background: #fff; }
        .work-item-row:hover .work-row-title { color: var(--color-pink); }
        @media (max-width: 900px) {
          .work-item-row { grid-template-columns: 2.5rem 1fr auto !important; }
          .work-row-cat, .work-row-year { display: none; }
        }
      `}</style>
    </div>
  )
}

export function VideoShowcase() {
  const [openNum, setOpenNum] = useState<string | null>(null)

  return (
    <div>
      {videos.map((v) => (
        <VideoRow
          key={v.num}
          {...v}
          isOpen={openNum === v.num}
          onToggle={() => setOpenNum(openNum === v.num ? null : v.num)}
          onClose={() => setOpenNum(null)}
        />
      ))}
    </div>
  )
}
