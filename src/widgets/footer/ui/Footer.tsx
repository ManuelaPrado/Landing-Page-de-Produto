import { Container, Logo } from '@/shared/ui'
import { site } from '@/shared/config'
import { scrollToSection } from '@/shared/lib'
import styles from './Footer.module.css'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>{site.tagline}</p>
          <p className={styles.pitch}>{site.shortPitch}</p>
        </div>

        <nav className={styles.links} aria-label="Atalhos do rodapé">
          <span className={styles.linksTitle}>Navegar</span>
          {site.nav.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.link}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className={styles.links}>
          <span className={styles.linksTitle}>Redes</span>
          {site.social.map((item) => (
            <a
              key={item.label}
              className={styles.link}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </a>
          ))}
          <a className={styles.link} href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
        </div>
      </Container>

      <Container className={styles.bottom}>
        <p>
          © {year} {site.name}. Projeto fictício e acadêmico — nenhum produto é real.
        </p>
        <p className={styles.disclaimer}>
          Site de fãs para fins de estudo. “Como Treinar o Seu Dragão” e seus dragões são marcas e
          imagens de seus respectivos detentores (DreamWorks). As imagens são usadas apenas de forma
          ilustrativa e sem fins comerciais.
        </p>
      </Container>
    </footer>
  )
}
