import { StarRating } from '@/shared/ui'
import type { Testimonial } from '../model/types'
import styles from './TestimonialCard.module.css'

export interface TestimonialCardProps {
  testimonial: Testimonial
}

function initials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className={styles.card}>
      <StarRating value={testimonial.rating} />
      <blockquote className={styles.text}>“{testimonial.text}”</blockquote>
      <figcaption className={styles.author}>
        <span className={styles.avatar} aria-hidden="true">
          {initials(testimonial.name)}
        </span>
        <span className={styles.meta}>
          <span className={styles.name}>{testimonial.name}</span>
          <span className={styles.sub}>
            {testimonial.location} · treina {testimonial.dragon}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}
