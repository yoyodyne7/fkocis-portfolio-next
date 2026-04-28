import type { ReactNode } from 'react'

interface SectionRowProps {
  num: string
  title: string
  right?: ReactNode
  id?: string
}

export function SectionRow({ num, title, right, id }: SectionRowProps) {
  return (
    <div
      id={id}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '1rem var(--side-pad)',
        borderBottom: '1px solid var(--color-border)',
        position: 'sticky',
        top: 'var(--nav-height)',
        zIndex: 10,
        background: 'rgba(250,250,248,0.95)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <span
        className="font-mono-dm"
        style={{ fontSize: '0.62rem', color: 'var(--color-pink)', letterSpacing: '0.12em' }}
      >
        {num}
      </span>
      <span
        style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </span>
      {right && (
        <span
          className="font-mono-dm"
          style={{ marginLeft: 'auto', fontSize: '0.6rem', color: 'var(--color-muted)' }}
        >
          {right}
        </span>
      )}
    </div>
  )
}
