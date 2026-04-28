'use client'

export function PanelSkeleton() {
  return (
    <div className="absolute inset-0 p-8 flex flex-col gap-3.5 z-20" style={{ background: 'var(--color-bg)' }}>
      <div className="skel-bar" style={{ width: '68%' }} />
      <div className="skel-bar" style={{ width: '82%', animationDelay: '0.15s' }} />
      <div className="skel-bar" style={{ width: '54%', animationDelay: '0.3s' }} />
      <div className="skel-bar" style={{ width: '75%', animationDelay: '0.45s' }} />
      <div className="skel-block" />
    </div>
  )
}
