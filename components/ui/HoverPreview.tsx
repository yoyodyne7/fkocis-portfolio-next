'use client'
import {
  createContext,
  useContext,
  useRef,
  useCallback,
  type ReactNode,
} from 'react'

interface HoverPreviewCtx {
  show: (imgSrc: string | null, swatchBg?: string, swatchTxt?: string) => void
  hide: () => void
  track: (e: { clientX: number; clientY: number }) => void
}

const Ctx = createContext<HoverPreviewCtx>({
  show: () => {},
  hide: () => {},
  track: () => {},
})

export function useHoverPreview() {
  return useContext(Ctx)
}

export function HoverPreviewProvider({ children }: { children: ReactNode }) {
  const wrapRef  = useRef<HTMLDivElement>(null)
  const imgRef   = useRef<HTMLImageElement>(null)
  const swatchRef = useRef<HTMLDivElement>(null)

  const show = useCallback(
    (imgSrc: string | null, swatchBg?: string, swatchTxt?: string) => {
      const el = wrapRef.current
      if (!el) return
      if (imgSrc) {
        imgRef.current!.src = imgSrc
        imgRef.current!.style.display = 'block'
        swatchRef.current!.style.display = 'none'
      } else {
        swatchRef.current!.style.background = swatchBg || '#E4197C'
        swatchRef.current!.textContent = swatchTxt || ''
        swatchRef.current!.style.display = 'flex'
        imgRef.current!.style.display = 'none'
      }
      el.style.opacity = '1'
      el.style.transform = 'scale(1)'
    },
    []
  )

  const hide = useCallback(() => {
    const el = wrapRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'scale(0.92)'
  }, [])

  const track = useCallback((e: { clientX: number; clientY: number }) => {
    const el = wrapRef.current
    if (!el) return
    const x = e.clientX + 24
    const y = e.clientY - 88
    el.style.left = Math.min(x, window.innerWidth - 280) + 'px'
    el.style.top = Math.max(y, 8) + 'px'
  }, [])

  return (
    <Ctx.Provider value={{ show, hide, track }}>
      {children}
      <div
        ref={wrapRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          zIndex: 500,
          pointerEvents: 'none',
          width: 260,
          height: 175,
          overflow: 'hidden',
          boxShadow: '0 16px 48px rgba(0,0,0,.18)',
          opacity: 0,
          transform: 'scale(0.92)',
          transition: 'opacity .2s, transform .2s',
          top: 0,
          left: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'none' }}
        />
        <div
          ref={swatchRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            fontWeight: 800,
            letterSpacing: '-0.05em',
            color: '#fff',
          }}
        />
      </div>
    </Ctx.Provider>
  )
}
