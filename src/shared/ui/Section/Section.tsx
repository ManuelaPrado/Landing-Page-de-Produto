import type { ReactNode } from 'react'
import styles from './Section.module.css'
import { Container } from '../Container'

export interface SectionProps {
  id?: string
  eyebrow?: string
  title?: ReactNode
  description?: ReactNode
  children: ReactNode
  className?: string
  align?: 'center' | 'start'
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = 'center',
}: SectionProps) {
  return (
    <section id={id} className={[styles.section, className].filter(Boolean).join(' ')}>
      <Container>
        {(eyebrow || title || description) && (
          <header className={[styles.head, styles[align]].join(' ')}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  )
}
