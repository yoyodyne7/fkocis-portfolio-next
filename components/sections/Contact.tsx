'use client'

const LI_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const IG_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

export function Contact() {
  return (
    <>
      <section
        id="contact-content"
        style={{
          padding: '8rem var(--side-pad)',
          position: 'relative',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          borderTop: '1px solid var(--color-border)',
          alignItems: 'end',
        }}
        className="contact-layout"
      >
        {/* Ghost word */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(6rem, 18vw, 16rem)',
            fontWeight: 800,
            letterSpacing: '-0.05em',
            color: 'var(--color-ghost)',
            pointerEvents: 'none',
            userSelect: 'none',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          HELLO
        </div>

        {/* Left */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontSize: 'clamp(3rem, 7vw, 7rem)',
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: '-0.06em',
              marginBottom: '2.5rem',
            }}
          >
            Let&apos;s build
            <br />
            something
            <br />
            <em style={{ color: 'var(--color-pink)', fontStyle: 'italic' }}>great.</em>
          </h2>
          <a
            href="mailto:frankjkocis@gmail.com"
            style={{
              display: 'inline-block',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--color-ink)',
              textDecoration: 'none',
              borderBottom: '2px solid var(--color-pink)',
              paddingBottom: 2,
              transition: 'color .2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-pink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
          >
            frankjkocis@gmail.com
          </a>
        </div>

        {/* Right */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            justifyContent: 'flex-end',
          }}
        >
          <p
            className="font-mono-dm"
            style={{ fontSize: '0.72rem', lineHeight: 1.9, color: 'var(--color-muted)' }}
          >
            Senior marketing leadership available for new opportunities. Based in Toronto, Ontario
            — open to in-person and remote engagements across North America.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              {
                icon: LI_ICON,
                label: 'LinkedIn',
                handle: '/in/frank-kocis-2773003',
                href: 'https://www.linkedin.com/in/frank-kocis-2773003/',
              },
              {
                icon: IG_ICON,
                label: 'Instagram',
                handle: '@frankkocis',
                href: 'https://www.instagram.com/',
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-lnk font-mono-dm"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.7rem',
                  color: 'var(--color-ink)',
                  textDecoration: 'none',
                  transition: 'color .2s',
                }}
              >
                {s.icon}
                <span style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</span>
                <span className="social-handle" style={{ color: 'var(--color-muted)', transition: 'color .2s' }}>{s.handle}</span>

                <style>{`
                  .social-lnk:hover { color: var(--color-pink); }
                  .social-lnk:hover .social-handle { color: var(--color-pink); }
                `}</style>
              </a>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .contact-layout { grid-template-columns: 1fr !important; gap: 3rem !important; padding: 5rem var(--side-pad) !important; }
          }
        `}</style>
      </section>

      <footer
        style={{
          padding: '1.25rem var(--side-pad)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--color-border)',
        }}
        className="font-mono-dm footer-bar"
      >
        <span style={{ fontSize: '0.6rem', color: 'var(--color-muted)', letterSpacing: '0.06em' }}>© 2026 Frank Kocis</span>
        <span style={{ fontSize: '0.6rem', color: 'var(--color-muted)', letterSpacing: '0.06em' }}>Marketing &amp; Brand Strategist</span>
        <span style={{ fontSize: '0.6rem', color: 'var(--color-muted)', letterSpacing: '0.06em' }}>Toronto, Canada</span>

        <style>{`
          @media (max-width: 900px) {
            .footer-bar { flex-direction: column !important; gap: 0.75rem !important; text-align: center !important; }
          }
        `}</style>
      </footer>
    </>
  )
}
