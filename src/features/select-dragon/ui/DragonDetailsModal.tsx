import { Badge, Modal, StatBar } from '@/shared/ui'
import { STAT_LABELS } from '@/entities/dragon'
import type { Dragon, DragonStats } from '@/entities/dragon'
import styles from './DragonDetailsModal.module.css'
import type { CSSProperties } from 'react'

export interface DragonDetailsModalProps {
  dragon: Dragon | null
  onClose: () => void
}

const STAT_ORDER: (keyof DragonStats)[] = [
  'velocidade',
  'fogo',
  'forca',
  'astucia',
  'resistencia',
]

export function DragonDetailsModal({ dragon, onClose }: DragonDetailsModalProps) {
  return (
    <Modal
      open={dragon !== null}
      onClose={onClose}
      label={dragon ? `Detalhes de ${dragon.name}` : 'Detalhes do dragão'}
    >
      {dragon && (
        <article
          className={styles.content}
          style={{ '--accent': dragon.accent } as CSSProperties}
        >
          <div className={styles.hero}>
            <div className={styles.media}>
              <img className={styles.img} src={dragon.image} alt={dragon.name} />
            </div>

            <div className={styles.info}>
              <div className={styles.badges}>
                <Badge tone="brown">{dragon.dragonClass}</Badge>
                <Badge tone="gold">{dragon.rarity}</Badge>
              </div>
              <h3 className={styles.name}>{dragon.name}</h3>
              <p className={styles.tagline}>{dragon.tagline}</p>
              <dl className={styles.meta}>
                <div>
                  <dt>Montaria</dt>
                  <dd>{dragon.rider}</dd>
                </div>
                <div>
                  <dt>Estreia</dt>
                  <dd>{dragon.debut}</dd>
                </div>
              </dl>
            </div>
          </div>

          <section className={styles.stats}>
            <h4 className={styles.sectionTitle}>Ficha técnica</h4>
            <div className={styles.statsGrid}>
              {STAT_ORDER.map((key) => (
                <StatBar key={key} label={STAT_LABELS[key]} value={dragon.stats[key]} />
              ))}
            </div>
          </section>

          <div className={styles.columns}>
            <section className={styles.block}>
              <h4 className={styles.sectionTitle}>Habilidades</h4>
              <ul className={styles.abilities}>
                {dragon.abilities.map((ability) => (
                  <li key={ability}>{ability}</li>
                ))}
              </ul>
            </section>

            <section className={styles.block}>
              <h4 className={styles.sectionTitle}>História &amp; lenda</h4>
              <p className={styles.lore}>{dragon.lore}</p>
            </section>
          </div>
        </article>
      )}
    </Modal>
  )
}
