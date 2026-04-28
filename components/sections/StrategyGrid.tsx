'use client'

const strategies = [
  {
    n: '01 / Digital Marketing',
    title: 'VirgoCX — Digital Marketing Assessment',
    desc: 'Full-scope assessment for a Canadian crypto exchange: technical SEO, on-page/off-page strategy, community via Discord, platform-specific crypto audience tactics.',
    linkLabel: 'View Assessment',
    href: 'https://drive.google.com/file/d/1eqxOBtkyOhO7upyxosxu1A5_VDlKRLF9/view',
  },
  {
    n: '02 / Go-To-Market',
    title: 'VCIB — Co-op Housing Financing',
    desc: 'GTM plan for Vancity Community Investment Bank: audience mapping, direct mail, geo-targeted Google display, earned media strategy for co-op housing mortgage products.',
    linkLabel: 'View Plan',
    href: 'https://docs.google.com/presentation/d/1uo4rpEJNlm7SJI-FfqMm2rP8nJvEmsGpgolZRzo7qyU/edit',
  },
]

export function StrategyGrid() {
  return (
    <div
      style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--color-border)' }}
    >
      {/* Ghost word */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-1rem',
          right: '-1rem',
          fontSize: 'clamp(5rem, 14vw, 13rem)',
          fontWeight: 800,
          letterSpacing: '-0.05em',
          color: 'var(--color-ghost)',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        PLAN
      </div>

      <div
        className="strategy-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', position: 'relative', zIndex: 1 }}
      >
        {strategies.map((s, i) => (
          <div
            key={s.n}
            style={{
              padding: '3rem var(--side-pad)',
              borderRight: i < strategies.length - 1 ? '1px solid var(--color-border)' : 'none',
              transition: 'background .15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '')}
          >
            <div
              className="font-mono-dm"
              style={{ fontSize: '0.6rem', color: 'var(--color-pink)', marginBottom: '2rem' }}
            >
              {s.n}
            </div>
            <div
              style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: '0.75rem' }}
            >
              {s.title}
            </div>
            <p
              className="font-mono-dm"
              style={{ fontSize: '0.68rem', lineHeight: 1.8, color: 'var(--color-muted)', marginBottom: '1.5rem' }}
            >
              {s.desc}
            </p>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="strat-link font-mono-dm"
              style={{
                fontSize: '0.65rem',
                color: 'var(--color-pink)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'gap .2s',
              }}
            >
              {s.linkLabel} →
            </a>
          </div>
        ))}
      </div>

      <style>{`
        .strategy-grid { @media (max-width: 900px) { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px) {
          .strategy-grid { grid-template-columns: 1fr !important; }
          .strategy-grid > div { border-right: none !important; border-bottom: 1px solid var(--color-border); }
        }
      `}</style>
    </div>
  )
}
