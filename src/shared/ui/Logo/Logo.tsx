import styles from './Logo.module.css'

export interface LogoProps {
  compact?: boolean
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className={styles.logo}>
      <svg
        className={styles.mark}
        viewBox="0 0 48 48"
        role="img"
        aria-label="RobotDragon"
        focusable="false"
      >
        <defs>
          <linearGradient id="df-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffc94a" />
            <stop offset="1" stopColor="#d4372a" />
          </linearGradient>
        </defs>
        <path
          d="M24 3 42 12.5v13C42 37 34 43.5 24 46 14 43.5 6 37 6 25.5v-13z"
          fill="none"
          stroke="url(#df-grad)"
          strokeWidth="2.5"
        />
        <path
          d="M24 11c3 4 7 5 10 4-1 3-4 5-7 5 5 3 8 8 7 14-3-2-5-5-6-9-1 3-4 5-8 5-4 0-7-3-8-7 3 1 6 0 8-3-3-2-4-6-3-9 2 1 5 2 7 0z"
          fill="url(#df-grad)"
        />
        <circle cx="22" cy="26" r="1.6" fill="#0b0908" />
      </svg>
      {!compact && (
        <span className={styles.word}>
          Robot<span className={styles.accent}>Dragon</span>
        </span>
      )}
    </span>
  )
}
