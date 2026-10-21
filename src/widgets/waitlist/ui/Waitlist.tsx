import { Button, Container, Badge } from '@/shared/ui'
import { WaitlistForm } from '@/features/join-waitlist'
import { scrollToSection } from '@/shared/lib'
import styles from './Waitlist.module.css'

export function Waitlist() {
  return (
    <section id="lista-de-espera" className={styles.section}>
      <Container className={styles.panel}>
        <div className={styles.copy}>
          <Badge tone="gold">Lista de espera</Badge>
          <h2 className={styles.title}>
            Garanta o seu lugar na <span className={styles.accent}>forja</span>
          </h2>
          <p className={styles.text}>
            A primeira fornada do RobotDragon vai ser limitada. Entre na lista para escolher a sua
            espécie com prioridade e receber o convite de pré-venda antes de todo mundo.
          </p>
          <div className={styles.quick}>
            <Button variant="ghost" onClick={() => scrollToSection('dragoes')}>
              Rever o catálogo
            </Button>
          </div>
        </div>

        <div className={styles.formWrap}>
          <WaitlistForm />
        </div>
      </Container>
    </section>
  )
}
