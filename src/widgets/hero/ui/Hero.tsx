import { Badge, Button, Container } from '@/shared/ui'
import { dragonsById } from '@/entities/dragon'
import { scrollToSection } from '@/shared/lib'
import styles from './Hero.module.css'

const heroDragon = dragonsById.get('furias-da-noite')

const metrics = [
  { value: '16', label: 'modelos de dragão' },
  { value: 'IA', label: 'treinamento adaptativo' },
  { value: '2026', label: 'pré-venda' },
]

export function Hero() {
  return (
    <section className={styles.hero} id="topo">
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <Badge tone="red">dragão-robô colecionável</Badge>
          <h1 className={styles.title}>
            Escolha o seu dragão.
            <span className={styles.titleAccent}> Treine a lenda.</span>
          </h1>
          <p className={styles.pitch}>
            O <strong>RobotDragon</strong> é o dragão-robô de companhia que você monta do seu jeito:
            escolha uma das 16 espécies lendárias dos filmes, ensine truques, acenda o sopro e
            escreva a sua própria lenda em casa.
          </p>
          <div className={styles.ctas}>
            <Button size="lg" onClick={() => scrollToSection('dragoes')}>
              Escolher meu dragão
            </Button>
            <Button size="lg" variant="ghost" onClick={() => scrollToSection('como-funciona')}>
              Ver como funciona
            </Button>
          </div>
          <dl className={styles.metrics}>
            {metrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <dt className={styles.metricValue}>{metric.value}</dt>
                <dd className={styles.metricLabel}>{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.visual}>
          <div className={styles.spotlight} aria-hidden="true" />
          {heroDragon && (
            <img className={styles.heroImage} src={heroDragon.image} alt={heroDragon.name} />
          )}
          <div className={`${styles.chip} ${styles.chipTop}`}>
            <span className={styles.chipDot} aria-hidden="true" />
            Sopro de plasma
          </div>
          <div className={`${styles.chip} ${styles.chipBottom}`}>
            <span className={styles.chipDot} aria-hidden="true" />
            Ecolocalização
          </div>
        </div>
      </Container>
    </section>
  )
}
