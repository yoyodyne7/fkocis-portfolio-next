'use client'
import { motion } from 'framer-motion'

const paragraphVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: 'spring' as const, stiffness: 60, damping: 18 },
  }),
}

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: 'var(--color-cream)', padding: 'var(--section-pad) var(--side-pad)' }}
    >
      {/* Ghost word */}
      <span
        className="ghost-word pointer-events-none select-none"
        aria-hidden="true"
        style={{ bottom: '-5%', right: '-2%', opacity: 0.6 }}
      >
        ABOUT
      </span>

      <div
        className="relative z-10"
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        {/* Rotated label */}
        <motion.div
          className="flex justify-end"
          style={{ paddingTop: '0.25rem' }}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }}
        >
          <span
            className="font-semibold tracking-[0.12em] uppercase"
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-muted)',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            About
          </span>
        </motion.div>

        {/* Content */}
        <div className="relative" style={{ paddingLeft: '2rem' }}>
          {/* Animated green left border */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full origin-top"
            style={{ background: 'var(--color-green)' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring' as const, stiffness: 60, damping: 18, delay: 0.1 }}
          />

          <span className="section-label">About</span>

          <motion.h2
            className="font-bold"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '1.5rem',
              color: 'var(--color-ink)',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }}
          >
            Who I am.
          </motion.h2>

          {[
            '15+ years building brand and content systems that connect positioning to revenue. I\'ve led marketing across national consumer brands, retail channels, regulated industries, and financial institutions — always at the intersection of brand clarity and measurable business growth.',
            'Today I layer in generative AI and agentic workflows to scale content output without scaling headcount. The work moves faster. The strategy doesn\'t change.',
          ].map((para, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={i > 0 ? 'mt-4' : ''}
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.75,
                color: 'var(--color-ink)',
                maxWidth: '60ch',
              }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Mobile override */}
      <style>{`
        @media (max-width: 640px) {
          #about > div:last-of-type {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          #about .about-label-col { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  )
}
