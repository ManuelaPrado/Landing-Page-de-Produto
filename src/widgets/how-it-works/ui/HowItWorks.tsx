import { Section } from '@/shared/ui'
import styles from './HowItWorks.module.css'

const steps = [
  {
    title: 'Escolha a espécie',
    text: 'Navegue pelo catálogo e decida entre os 16 dragões dos filmes. Defina a cor da carenagem e o pacote de efeitos.',
  },
  {
    title: 'Desembale e conecte',
    text: 'Ligue o RobotDragon e pareie com o app em segundos. Uma calibração guiada ajusta asas, som e sensores ao seu ambiente.',
  },
  {
    title: 'Treine e crie vínculo',
    text: 'Cumpra missões diárias, ensine truques e acenda o sopro. O sistema de vínculo reconhece a sua voz e evolui com você.',
  },
  {
    title: 'Mostre a sua lenda',
    text: 'Exponha na base incluída, troque as peças colecionáveis e compartilhe a ficha do seu dragão com a comunidade RobotDragon.',
  },
]

export function HowItWorks() {
  return (
    <Section
      id="como-funciona"
      eyebrow="Como funciona"
      title="Da caixa ao primeiro voo em uma tarde"
      description="Sem montagem complicada e sem manuais gigantes. Em quatro passos o seu dragão já reconhece o seu nome."
    >
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
