'use client'
import { createContext, useContext, useState, useCallback, useRef } from 'react'
import type { WorkItem } from '@/lib/work-items'

interface PanelState {
  isOpen: boolean
  activeItem: WorkItem | null
  openPanel: (item: WorkItem, trigger?: HTMLElement | null) => void
  closePanel: () => void
  triggerRef: React.MutableRefObject<HTMLElement | null>
}

const PanelContext = createContext<PanelState>({
  isOpen: false,
  activeItem: null,
  openPanel: () => {},
  closePanel: () => {},
  triggerRef: { current: null },
})

export function PanelProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<WorkItem | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const openPanel = useCallback((item: WorkItem, trigger?: HTMLElement | null) => {
    triggerRef.current = trigger ?? null
    setActiveItem(item)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closePanel = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [])

  return (
    <PanelContext.Provider value={{ isOpen, activeItem, openPanel, closePanel, triggerRef }}>
      {children}
    </PanelContext.Provider>
  )
}

export function usePanelContext() {
  return useContext(PanelContext)
}
