import { Section, StarRating } from '@/shared/ui'
import { TestimonialCard, testimonials } from '@/entities/testimonial'
import styles from './Testimonials.module.css'

export function Testimonials() {
  return (
    <Section
      id="avaliacoes"
      eyebrow="Prova social"
      title="Quem já treinou não volta atrás"
      description="Avaliações fictícias de futuros treinadores que participaram dos testes de campo do RobotDragon."
    >
      <div className={styles.summary}>
        <StarRating value={5} size={24} />
        <span className={styles.summaryText}>
          <strong>4,9</strong> de 5 · mais de 1.200 pessoas na lista de espera
        </span>
      </div>

      <ul className={styles.grid}>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
