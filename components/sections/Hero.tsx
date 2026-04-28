'use client'
import { motion, useReducedMotion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const curtainVariants = {
  full: {
    hidden: { y: '105%' },
    visible: { y: 0, transition: { type: 'spring' as const, stiffness: 55, damping: 18 } },
  },
  reduced: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
  },
}

const itemVariants = {
  full: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 60, damping: 20 } },
  },
  reduced: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' as const } },
  },
}

export function Hero() {
  const prefersReduced = useReducedMotion()
  const curtain = prefersReduced ? curtainVariants.reduced : curtainVariants.full
  const item    = prefersReduced ? itemVariants.reduced    : itemVariants.full

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        padding: '9rem var(--side-pad) 5rem',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      {/* Ghost skill words — left column */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '9rem',
          left: 'var(--side-pad)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {['BRAND', 'STRATEGY', 'CONTENT', 'VIDEO', 'INFLUENCER', 'OMNICHANNEL', 'PR', 'EVENTS'].map((w) => (
          <span
            key={w}
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: 'rgba(0,0,0,0.055)',
              textTransform: 'uppercase',
            }}
          >
            {w}
          </span>
        ))}
      </div>

      {/* Ghost name echo */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 'var(--side-pad)',
          bottom: '4.5rem',
          fontSize: 'clamp(5rem, 11vw, 10.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.05em',
          lineHeight: 0.9,
          color: 'rgba(0,0,0,0.06)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          textTransform: 'uppercase',
          transform: 'translate(6px, 6px)',
        }}
      >
        <span style={{ display: 'block' }}>Frank</span>
        <span style={{ display: 'block' }}>Kocis</span>
      </div>

      {/* Hero content */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'end',
        }}
      >
        {/* Name with curtain reveal */}
        <h1
          style={{
            fontSize: 'clamp(4.5rem, 10vw, 9rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: '-0.05em',
          }}
        >
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <motion.span
              className="block"
              style={{ color: 'var(--color-green)' }}
              variants={curtain}
              initial="hidden"
              animate="visible"
            >
              Frank
            </motion.span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <motion.span
              className="block"
              style={{ color: 'var(--color-pink)' }}
              variants={curtain}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.12 }}
            >
              Kocis.
            </motion.span>
          </span>
        </h1>

        {/* Right column — staggered fade-up */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '0.5rem' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            style={{
              fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: 'var(--color-ink)',
            }}
          >
            Senior marketing
            <br />
            leader.{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-pink)' }}>Brand builder.</em>
            <br />
            Results driver.
          </motion.p>

          <motion.p
            variants={item}
            className="font-mono-dm"
            style={{ fontSize: '0.72rem', lineHeight: 1.8, color: 'var(--color-muted)', maxWidth: '28rem' }}
          >
            15+ years building brands across North America — TV campaigns, influencer strategy,
            omnichannel activation, content that earns attention and drives measurable growth.
          </motion.p>

          <motion.div variants={item} style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Based',      value: 'Toronto, ON'   },
              { label: 'Specialty',  value: 'Brand & Content' },
              { label: 'Experience', value: '15+ Years'     },
            ].map((m) => (
              <div key={m.label}>
                <div
                  className="font-mono-dm"
                  style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted)' }}
                >
                  {m.label}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-green)' }}>
                  {m.value}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
