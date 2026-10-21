import { useState } from 'react'
import { Button, Container, Logo } from '@/shared/ui'
import { site } from '@/shared/config'
import { scrollToSection } from '@/shared/lib'
import styles from './Header.module.css'

export function Header() {
  const [open, setOpen] = useState(false)

  function go(id: string) {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <button
          type="button"
          className={styles.brand}
          onClick={() => scrollToSection('topo')}
          aria-label="RobotDragon — ir para o topo"
        >
          <Logo />
        </button>

        <nav className={styles.nav} aria-label="Navegação principal">
          {site.nav.map((item) => (
            <button key={item.id} type="button" className={styles.link} onClick={() => go(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button onClick={() => go('lista-de-espera')}>Entrar na lista</Button>
        </div>

        <button
          type="button"
          className={styles.burger}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className={styles.burgerIcon} aria-hidden="true" />
        </button>
      </Container>

      {open && (
        <div className={styles.drawer}>
          <Container className={styles.drawerInner}>
            {site.nav.map((item) => (
              <button
                key={item.id}
                type="button"
                className={styles.drawerLink}
                onClick={() => go(item.id)}
              >
                {item.label}
              </button>
            ))}
            <Button className={styles.drawerCta} onClick={() => go('lista-de-espera')}>
              Entrar na lista
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
