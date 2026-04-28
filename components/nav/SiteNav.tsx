'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { LinkedinLogo, List, X } from '@phosphor-icons/react'

const navLinks = [
  { label: 'Work', href: '#work-video' },
  { label: 'About', href: '#vision-sec' },
  { label: 'Writing', href: '#writing-sec' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const prefersReduced = useReducedMotion()

  const { scrollY } = useScroll()
  const borderScaleX = useSpring(0, { stiffness: 80, damping: 20 })

  useEffect(() => {
    return scrollY.on('change', (y) => {
      const past = y > 60
      setScrolled(past)
      borderScaleX.set(past ? 1 : 0)
    })
  }, [scrollY, borderScaleX])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const closeMobile = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  const openMobile = () => {
    setMobileOpen(true)
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      <header
        className="sticky top-0 z-[200] flex items-center"
        style={{
          height: 'var(--nav-height)',
          padding: '0 var(--side-pad)',
          background: scrolled ? 'rgba(250,250,248,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <nav className="flex items-center justify-between w-full">
          <div
            className="font-bold tracking-widest uppercase text-[0.8125rem]"
            style={{ color: 'var(--color-ink)' }}
          >
            Frank Kocis
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7 list-none relative">
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className="text-[0.8125rem] font-medium tracking-[0.06em] uppercase transition-colors duration-200"
                  style={{
                    color: activeSection === link.href.slice(1)
                      ? 'var(--color-pink)'
                      : 'var(--color-ink)',
                  }}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                      style={{ background: 'var(--color-pink)' }}
                      transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.linkedin.com/in/frank-kocis-2773003/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center transition-colors duration-200 hover:text-pink-500"
                style={{ color: 'var(--color-ink)' }}
              >
                <LinkedinLogo size={18} weight="fill" />
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8"
            onClick={openMobile}
            aria-label="Open menu"
            style={{ color: 'var(--color-ink)' }}
          >
            <List size={22} />
          </button>
        </nav>

        {/* Scroll border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] origin-left"
          style={{ scaleX: borderScaleX, background: 'var(--color-border)' }}
        />
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[300] flex flex-col items-center justify-center gap-10"
            style={{ background: 'var(--color-bg)' }}
          >
            <button
              className="absolute top-5 flex items-center justify-center w-8 h-8"
              style={{ right: 'var(--side-pad)', color: 'var(--color-ink)' }}
              onClick={closeMobile}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>

            {[...navLinks, { label: 'LinkedIn', href: 'https://www.linkedin.com/in/frank-kocis-2773003/' }].map(
              (link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    prefersReduced
                      ? { delay: i * 0.05, duration: 0.3, ease: 'easeOut' as const }
                      : { delay: i * 0.06, type: 'spring' as const, stiffness: 80, damping: 18 }
                  }
                  className="text-[1.75rem] font-bold tracking-tight transition-colors duration-200"
                  style={{ color: 'var(--color-ink)' }}
                  onClick={closeMobile}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-pink)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
                >
                  {link.label}
                </motion.a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
