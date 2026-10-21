import { Badge, Button, Section } from '@/shared/ui'
import { formatBRL, scrollToSection } from '@/shared/lib'
import styles from './Pricing.module.css'

interface Plan {
  id: string
  name: string
  price: number
  pitch: string
  features: string[]
  highlight?: boolean
}

const plans: Plan[] = [
  {
    id: 'filhote',
    name: 'Filhote',
    price: 1290,
    pitch: 'Para começar com um companheiro clássico.',
    features: [
      '1 dragão do catálogo comum',
      'App RobotDragon (modo básico)',
      'Base de exibição simples',
      'Sopro com 1 efeito',
    ],
  },
  {
    id: 'treinador',
    name: 'Treinador',
    price: 1890,
    pitch: 'A escolha de quem quer o dragão dos sonhos.',
    features: [
      '1 dragão de qualquer espécie',
      'App completo + missões diárias',
      'Base luminosa e peça colecionável extra',
      'Sopro com efeito trocável',
      'Garantia estendida de 2 anos',
    ],
    highlight: true,
  },
  {
    id: 'chefe-da-vila',
    name: 'Chefe da Vila',
    price: 2690,
    pitch: 'O acervo completo para colecionadores.',
    features: [
      '3 dragões do catálogo completo',
      'App premium + modo vínculo avançado',
      'Vitrine colecionável numerada',
      'Carenagem personalizada',
      'Acesso antecipado a novas espécies',
    ],
  },
]

export function Pricing() {
  return (
    <Section
      id="planos"
      eyebrow="Oferta de pré-venda"
      title="Escolha o seu kit"
      description="Reserve agora com preço de lançador. A cobrança só acontece quando a sua linha entrar em produção."
    >
      <ul className={styles.grid}>
        {plans.map((plan) => (
          <li
            key={plan.id}
            className={[styles.card, plan.highlight ? styles.highlight : ''].join(' ')}
          >
            {plan.highlight && <span className={styles.ribbon}>Mais escolhido</span>}
            <header className={styles.head}>
              <h3 className={styles.name}>{plan.name}</h3>
              <p className={styles.pitch}>{plan.pitch}</p>
            </header>

            <p className={styles.price}>
              <span className={styles.amount}>{formatBRL(plan.price)}</span>
              <span className={styles.unit}>à vista · ou 12x sem juros</span>
            </p>

            <ul className={styles.features}>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <Button
              variant={plan.highlight ? 'primary' : 'ghost'}
              className={styles.cta}
              onClick={() => scrollToSection('lista-de-espera')}
            >
              Entrar na lista
            </Button>
          </li>
        ))}
      </ul>

      <p className={styles.note}>
        <Badge tone="red">Pré-venda</Badge> Valores fictícios, para fins de demonstração. Envio
        previsto para 2026.
      </p>
    </Section>
  )
}
