import { useState } from 'react'
import type { CSSProperties } from 'react'
import { Badge } from '@/shared/ui'
import type { Dragon } from '../model/types'
import styles from './DragonCard.module.css'

export interface DragonCardProps {
  dragon: Dragon
  onSelect: (dragon: Dragon) => void
}

export function DragonCard({ dragon, onSelect }: DragonCardProps) {
  const [failed, setFailed] = useState(false)

  return (
    <button
      type="button"
      className={styles.card}
      style={{ '--accent': dragon.accent } as CSSProperties}
      onClick={() => onSelect(dragon)}
      aria-label={`Ver habilidades e lenda de ${dragon.name}`}
    >
      <span className={styles.media}>
        {failed ? (
          <span className={styles.fallback}>Imagem indisponível</span>
        ) : (
          <img
            className={styles.img}
            src={dragon.image}
            alt={dragon.name}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </span>

      <span className={styles.body}>
        <span className={styles.tags}>
          <Badge tone="brown">{dragon.dragonClass}</Badge>
          <Badge tone="gold">{dragon.rarity}</Badge>
        </span>
        <span className={styles.name}>{dragon.name}</span>
        <span className={styles.tagline}>{dragon.tagline}</span>
        <span className={styles.cta}>Ver habilidades e lenda</span>
      </span>
    </button>
  )
}
