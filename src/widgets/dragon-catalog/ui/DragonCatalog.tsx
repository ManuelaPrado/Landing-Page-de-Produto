import { Section } from '@/shared/ui'
import { DragonCard, dragons } from '@/entities/dragon'
import { DragonDetailsModal, useDragonSelection } from '@/features/select-dragon'
import styles from './DragonCatalog.module.css'

export function DragonCatalog() {
  const { selected, select, clear } = useDragonSelection()

  return (
    <Section
      id="dragoes"
      eyebrow="O catálogo"
      title="Escolha o seu dragão"
      description="Cada unidade do RobotDragon é forjada na espécie que você escolher. Clique em um dragão para conhecer suas habilidades, a ficha técnica e a lenda contada nos filmes."
    >
      <div className={styles.grid}>
        {dragons.map((dragon) => (
          <DragonCard key={dragon.id} dragon={dragon} onSelect={select} />
        ))}
      </div>

      <DragonDetailsModal dragon={selected} onClose={clear} />
    </Section>
  )
}
