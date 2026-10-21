import type { ReactNode } from 'react'
import styles from './Container.module.css'

export interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={[styles.container, className].filter(Boolean).join(' ')}>{children}</div>
  )
}
