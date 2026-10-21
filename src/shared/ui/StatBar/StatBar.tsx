import styles from './StatBar.module.css'

export interface StatBarProps {
  label: string
  value: number
  tone?: 'gold' | 'red' | 'steel'
}

export function StatBar({ label, value, tone = 'gold' }: StatBarProps) {
  const clamped = Math.max(0, Math.min(100, value))

  return (
    <div className={styles.row}>
      <div className={styles.head}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{clamped}</span>
      </div>
      <div className={styles.track}>
        <div
          className={[styles.fill, styles[tone]].join(' ')}
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-label={label}
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}
