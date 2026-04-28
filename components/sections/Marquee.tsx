'use client'
import { useRef } from 'react'
import { motion, useMotionValue, useAnimationFrame, useReducedMotion } from 'framer-motion'
import { skills } from '@/lib/work-items'

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const speed = useRef(1)
  const isPaused = useRef(false)
  const prefersReduced = useReducedMotion()

  useAnimationFrame((_, delta) => {
    if (prefersReduced || !trackRef.current) return
    const contentWidth = trackRef.current.scrollWidth / 2
    const target = isPaused.current ? 0 : 1
    speed.current += (target - speed.current) * 0.08
    const next = x.get() - delta * 0.035 * speed.current
    x.set(next <= -contentWidth ? 0 : next)
  })

  const allSkills = [...skills, ...skills]

  return (
    <div
      className="overflow-hidden relative"
      style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '0.75rem 0',
        maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
      }}
      onMouseEnter={() => { isPaused.current = true }}
      onMouseLeave={() => { isPaused.current = false }}
      aria-hidden="true"
    >
      <motion.div
        ref={trackRef}
        className="flex w-max"
        style={{ x }}
      >
        {allSkills.map((skill, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="font-semibold tracking-[0.13em] uppercase whitespace-nowrap px-8"
              style={{ fontSize: '0.6875rem', color: 'var(--color-muted)' }}
            >
              {skill}
            </span>
            {prefersReduced ? (
              <span
                className="inline-block rounded-full flex-shrink-0"
                style={{ width: 4, height: 4, background: 'var(--color-pink)', marginRight: '2rem' }}
              />
            ) : (
              <motion.span
                className="inline-block rounded-full flex-shrink-0"
                style={{ width: 4, height: 4, background: 'var(--color-pink)', marginRight: '2rem' }}
                animate={{ scale: [0.8, 1.3, 0.8] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: (i % skills.length) * 0.2,
                  ease: 'easeInOut',
                }}
              />
            )}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
