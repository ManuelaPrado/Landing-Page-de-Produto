import { useCallback, useState } from 'react'
import type { Dragon } from '@/entities/dragon'

export interface DragonSelection {
  selected: Dragon | null
  isOpen: boolean
  select: (dragon: Dragon) => void
  clear: () => void
}

export function useDragonSelection(): DragonSelection {
  const [selected, setSelected] = useState<Dragon | null>(null)

  const select = useCallback((dragon: Dragon) => setSelected(dragon), [])
  const clear = useCallback(() => setSelected(null), [])

  return { selected, isOpen: selected !== null, select, clear }
}
