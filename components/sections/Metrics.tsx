'use client'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const stats = [
  { n: '25%+', label: 'Portfolio Sales\nGrowth', ghost: '25' },
  { n: '75%',  label: 'ROAS\nImprovement',     ghost: '75' },
  { n: '58%',  label: 'Launch\nLift',           ghost: '58' },
  { n: '10',   label: 'National TV\nCampaigns', ghost: '10' },
]

export function Metrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReduced = useReducedMotion()

  return (
    <div
      ref={ref}
      className="stats-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      {stats.map((s, i) => (
        <div
          key={s.n}
          className="stat-cell"
          style={{
            padding: '3rem var(--side-pad)',
            borderRight: i < stats.length - 1 ? '1px solid var(--color-border)' : 'none',
            position: 'relative',
            overflow: 'hidden',
            transition: 'background .15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#fff')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '')}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '-1rem',
              right: '-1rem',
              fontSize: '6rem',
              fontWeight: 800,
              color: 'var(--color-ghost)',
              letterSpacing: '-0.04em',
              pointerEvents: 'none',
              lineHeight: 1,
            }}
          >
            {s.ghost}
          </div>

          <div style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={prefersReduced ? { opacity: 0 } : { y: '105%' }}
              animate={inView
                ? prefersReduced ? { opacity: 1 } : { y: 0 }
                : {}}
              transition={{ type: 'spring', stiffness: 55, damping: 18, delay: i * 0.1 }}
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: 'var(--color-pink)',
                lineHeight: 1,
                letterSpacing: '-0.04em',
              }}
            >
              {s.n}
            </motion.div>
          </div>

          <motion.div
            className="font-mono-dm"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 + 0.25 }}
            style={{
              marginTop: '0.5rem',
              fontSize: '0.62rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              lineHeight: 1.5,
              position: 'relative',
              zIndex: 1,
              whiteSpace: 'pre-line',
            }}
          >
            {s.label}
          </motion.div>
        </div>
      ))}

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-cell { border-right: none !important; border-bottom: 1px solid var(--color-border); }
        }
      `}</style>
    </div>
  )
}
