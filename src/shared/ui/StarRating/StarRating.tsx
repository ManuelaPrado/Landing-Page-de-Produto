import styles from './StarRating.module.css'

export interface StarRatingProps {
  value: number
  size?: number
}

export function StarRating({ value, size = 18 }: StarRatingProps) {
  const rounded = Math.round(value)

  return (
    <span
      className={styles.stars}
      role="img"
      aria-label={`${value.toFixed(1)} de 5 estrelas`}
      style={{ fontSize: `${size}px` }}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rounded ? styles.on : styles.off} aria-hidden="true">
          ★
        </span>
      ))}
    </span>
  )
}
