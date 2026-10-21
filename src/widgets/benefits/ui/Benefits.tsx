import type { ReactNode } from 'react'
import { Section } from '@/shared/ui'
import styles from './Benefits.module.css'

interface Benefit {
  icon: ReactNode
  title: string
  text: string
}

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const benefits: Benefit[] = [
  {
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
      </svg>
    ),
    title: '16 dragões lendários',
    text: 'Do Fúria da Noite ao Bewilderbeast: o catálogo completo das espécies dos filmes, cada uma com carenagem, som e comportamento próprios.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
        <path d="M9.5 17.5h5" />
        <path d="M9 8.5l2 2 4-4" />
      </svg>
    ),
    title: 'App de treinamento',
    text: 'Missões diárias, truques e um sistema de vínculo que evolui conforme você cuida. Seu dragão aprende com a sua rotina.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 2.5c2.5 3.5 5.5 5.5 5.5 9.5A5.5 5.5 0 0 1 12 21.5 5.5 5.5 0 0 1 6.5 12c0-1.6.6-3 1.8-4.2.2 1.5 1 2.6 2.2 2.9C10 8 10.4 5 12 2.5Z" />
      </svg>
    ),
    title: 'Sopro com efeito real',
    text: 'Plasma, gelo, ácido ou lava: cada espécie projeta o seu elemento com LED de alta densidade, névoa fria e som sincronizado.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l7 3v6c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6Z" />
        <path d="M9 12l2 2 4-4.5" />
      </svg>
    ),
    title: 'Modo família seguro',
    text: 'Carenagem sem cantos quentes, velocidade de asas limitada e controle parental opcional. Diversão pesada, risco leve.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="2.5" y="7" width="15" height="10" rx="2.5" />
        <path d="M20 10v4" />
        <rect x="5.5" y="10" width="8" height="4" rx="1" />
      </svg>
    ),
    title: 'Bateria de dia inteiro',
    text: 'Até 14 horas em modo companhia e recarga de 0 a 80% em 45 minutos. As asas recolhem e o modo guarda economiza energia.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M4 20l4-1 9.5-9.5a2.1 2.1 0 0 0-3-3L5 16Z" />
        <path d="M13.5 6.5l4 4" />
      </svg>
    ),
    title: 'Acabamento colecionável',
    text: 'Pintura na paleta das capas dos filmes — preto, marrom, branco, vermelho e amarelo — com detalhes metálicos à mão e base de exibição inclusa.',
  },
]

export function Benefits() {
  return (
    <Section
      id="diferenciais"
      eyebrow="Diferenciais"
      title="Não é um brinquedo. É um vínculo."
      description="O RobotDragon nasceu para quem cresceu querendo um dragão de verdade. Cada detalhe foi feito para durar — e para ser único."
    >
      <ul className={styles.grid}>
        {benefits.map((benefit) => (
          <li key={benefit.title} className={styles.card}>
            <span className={styles.icon}>{benefit.icon}</span>
            <h3 className={styles.title}>{benefit.title}</h3>
            <p className={styles.text}>{benefit.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
