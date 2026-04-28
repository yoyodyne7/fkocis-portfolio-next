'use client'

const links = [
  { source: 'Strategy Online',  title: 'Rust-Oleum Harnesses the Sound of Power', href: 'https://strategyonline.ca/2023/07/04/rustoleum-harnesses-the-sound-of-power/' },
  { source: 'Campaign Canada',  title: 'Rust-Oleum — "Lazy Work"',                 href: 'https://www.campaigncanada.ca/article/rust-oleum-lazy-work-by-andso-and-the-deli/4trndctrtgenhs5p0zggs9d1n8' },
  { source: 'Ads of the World', title: 'Tremclad Turbo — PSSSHHHT',               href: 'https://www.adsoftheworld.com/campaigns/pssshhht' },
]

export function CoverageLinks() {
  return (
    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="cov-link"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.1rem var(--side-pad)',
            borderBottom: '1px solid var(--color-border)',
            textDecoration: 'none',
            color: 'var(--color-ink)',
            gap: '2rem',
            transition: 'background .12s',
          }}
        >
          <span
            className="font-mono-dm"
            style={{
              fontSize: '0.6rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-green)',
              minWidth: '11rem',
              flexShrink: 0,
            }}
          >
            {link.source}
          </span>
          <span
            className="cov-title"
            style={{ fontSize: '0.9rem', fontWeight: 600, flex: 1, transition: 'color .2s' }}
          >
            {link.title}
          </span>
          <span
            className="cov-arr"
            style={{ fontSize: '0.8rem', color: 'var(--color-border)', transition: 'color .2s, transform .2s' }}
          >
            →
          </span>

          <style>{`
            .cov-link:hover { background: #fff; }
            .cov-link:hover .cov-title { color: var(--color-pink); }
            .cov-link:hover .cov-arr { color: var(--color-pink); transform: translateX(3px); }
          `}</style>
        </a>
      ))}
    </div>
  )
}
