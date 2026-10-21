import type { ReactNode } from 'react'
import styles from './Badge.module.css'

export interface BadgeProps {
  children: ReactNode
  tone?: 'gold' | 'red' | 'brown' | 'steel'
}

export function Badge({ children, tone = 'gold' }: BadgeProps) {
  return <span className={[styles.badge, styles[tone]].join(' ')}>{children}</span>
}
