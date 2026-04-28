'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { InstagramLogo } from '@phosphor-icons/react'
import { MagneticButton } from '@/components/ui/MagneticButton'

const paragraphVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 60, damping: 18 },
  },
}

export function FeaturedProject() {
  return (
    <section
      id="featured"
      className="relative overflow-hidden"
      style={{ background: 'var(--color-cream)', padding: 'var(--section-pad) var(--side-pad)' }}
    >
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
            Personal Project
          </span>
        </motion.div>

        {/* Content */}
        <div className="relative" style={{ paddingLeft: '2rem', isolation: 'isolate' }}>
          {/* Ghost word */}
          <span
            className="ghost-word pointer-events-none select-none"
            aria-hidden="true"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.5,
              zIndex: -1,
            }}
          >
            farang
          </span>

          {/* Animated pink left border */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full origin-top"
            style={{ background: 'var(--color-pink)' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring' as const, stiffness: 60, damping: 18, delay: 0.1 }}
          />

          <span className="section-label">Featured Project</span>

          <div
            className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10"
            style={{ marginBottom: '1.25rem' }}
          >
            <motion.h2
              className="font-bold"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: 'var(--color-pink)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }}
            >
              farang.
            </motion.h2>

            {/* Logo — mix-blend-mode:multiply dissolves white background on cream */}
            <motion.div
              style={{ flexShrink: 0, width: 100, marginBottom: '0.25rem' }}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring' as const, stiffness: 60, damping: 18, delay: 0.08 }}
              whileHover={{
                scale: 1.06,
                rotate: 2,
                filter: 'drop-shadow(2px 2px 0 #1D8A45) drop-shadow(-1px -1px 0 #E4197C)',
              }}
            >
              <Image
                src="/farang-logo.png"
                alt="farang logo"
                width={100}
                height={100}
                className="w-full h-auto"
                style={{ mixBlendMode: 'multiply' }}
              />
            </motion.div>
          </div>

          <p
            className="font-medium tracking-[0.06em] uppercase"
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-muted)',
              marginBottom: '1rem',
            }}
          >
            Thai Food Pop-up · Word Logo Refresh
          </p>

          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              color: 'var(--color-ink)',
              maxWidth: '60ch',
              marginBottom: '1.5rem',
            }}
          >
            In addition to meaning &ldquo;foreigner&rdquo; (derived from &ldquo;Frankish&rdquo;),{' '}
            <em>farang</em> is also the Thai word for guava — which made pink, green, and white
            the obvious palette choice for this word logo refresh.
          </motion.p>

          <MagneticButton strength={0.2} className="inline-flex">
            <a
              href="https://www.instagram.com/farang.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold transition-colors duration-150"
              style={{ fontSize: '0.875rem', color: 'var(--color-pink)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-pink)')}
            >
              <InstagramLogo size={14} weight="fill" />
              View on Instagram
              <motion.span
                style={{ display: 'inline-block' }}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring' as const, stiffness: 200, damping: 20 }}
              >
                →
              </motion.span>
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Mobile override */}
      <style>{`
        @media (max-width: 640px) {
          #featured > div:last-of-type {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
