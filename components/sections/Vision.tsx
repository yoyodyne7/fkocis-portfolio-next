'use client'

const expertise = [
  'Integrated Marketing & Brand Strategy',
  'TV & Digital Video Production',
  'Influencer & Creator Management',
  'Omnichannel Activation & Retail Media',
  'Content Strategy & Copywriting',
  'SEO, SEM & Performance Marketing',
  'PR & Media Relations',
  'Event Production & Experiential',
]

export function Vision() {
  return (
    <div
      id="vision"
      style={{
        padding: '7rem var(--side-pad)',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'center',
      }}
      className="vision-layout"
    >
      {/* Ghost word */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          fontWeight: 800,
          letterSpacing: '-0.05em',
          color: 'var(--color-ghost)',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        VISION
      </div>

      {/* Left */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="font-mono-dm"
          style={{ fontSize: '0.62rem', color: 'var(--color-pink)', letterSpacing: '0.12em', marginBottom: '1.5rem' }}
        >
          Frank Kocis — Senior Marketing Leader
        </div>
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.05em',
            marginBottom: '2rem',
          }}
        >
          Built on
          <br />
          strategy,
          <br />
          <em style={{ color: 'var(--color-pink)', fontStyle: 'italic' }}>sold by story.</em>
        </h2>
        <div
          className="font-mono-dm"
          style={{ fontSize: '0.75rem', lineHeight: 1.9, color: 'var(--color-muted)' }}
        >
          <p>
            15+ years leading integrated marketing across North America — at{' '}
            <strong style={{ color: 'var(--color-ink)' }}>Rust-Oleum Canada</strong> building
            omnichannel activation systems across national portfolios.
          </p>
          <p style={{ marginTop: '1rem' }}>
            My approach: consumer insight, customer strategy, and commercial objectives translated
            into retailer-ready activation that actually moves product. Simplify complexity. Build
            alignment. Deliver incremental value.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Outside brand marketing, I co-produced{' '}
            <strong style={{ color: 'var(--color-ink)' }}>Spotlight Toronto Events</strong> —
            celebrated food festivals (SLURP Noodlefest, PintxosTO) that brought Toronto&apos;s
            best chefs together. I also write across categories: consumer goods, finance, food, and
            tech.
          </p>
        </div>
      </div>

      {/* Right — expertise list */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ul style={{ listStyle: 'none' }}>
          {expertise.map((item, i) => (
            <li
              key={item}
              className="exp-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.9rem 0',
                borderBottom: '1px solid var(--color-border)',
                borderTop: i === 0 ? '1px solid var(--color-border)' : 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'color .2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-pink)'
                const dot = e.currentTarget.querySelector('.exp-dot') as HTMLElement
                if (dot) dot.style.background = 'var(--color-pink)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = ''
                const dot = e.currentTarget.querySelector('.exp-dot') as HTMLElement
                if (dot) dot.style.background = 'var(--color-green)'
              }}
            >
              <span
                className="exp-dot"
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--color-green)',
                  flexShrink: 0,
                  transition: 'background .2s',
                  display: 'inline-block',
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .vision-layout { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </div>
  )
}
