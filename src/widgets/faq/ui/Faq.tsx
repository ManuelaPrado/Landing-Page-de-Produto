import { useState } from 'react'
import { Section } from '@/shared/ui'
import styles from './Faq.module.css'

const faq = [
  {
    q: 'O RobotDragon já está à venda?',
    a: 'Ainda não. Estamos na fase de pré-venda: ao entrar na lista você garante preço de lançador e prioridade quando as primeiras unidades saírem, em 2026.',
  },
  {
    q: 'Posso escolher qualquer dragão dos filmes?',
    a: 'Sim. Todas as 16 espécies do nosso catálogo — do Fúria da Noite ao Bewilderbeast — podem ser selecionadas na hora da reserva. Cada uma tem carenagem, som e efeito de sopro próprios.',
  },
  {
    q: 'Ele realmente solta fogo?',
    a: 'O sopro é uma simulação segura: luz de alta densidade, névoa fria e som sincronizado criam a ilusão de plasma, gelo, ácido ou lava. Nada de chama real, nada de calor perigoso.',
  },
  {
    q: 'É seguro para crianças?',
    a: 'Foi projetado para isso. A carenagem não tem cantos quentes, as asas têm velocidade de segurança e existe um modo família com controle parental no app.',
  },
  {
    q: 'Preciso instalar algo no celular?',
    a: 'Um app gratuito acompanha o produto e roda em Android e iOS. Ele cuida do treinamento, das missões diárias e das atualizações de comportamento do seu dragão.',
  },
  {
    q: 'Posso trocar de dragão depois?',
    a: 'A espécie-base é escolhida na compra, mas as peças colecionáveis e os pacotes de efeito podem ser trocados depois. No kit Chefe da Vila você recebe três dragões de uma vez.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section
      id="faq"
      eyebrow="Dúvidas frequentes"
      title="Perguntas antes de acender o sopro"
      description="Reunimos as dúvidas mais comuns de quem quer treinar o próprio dragão."
    >
      <ul className={styles.list}>
        {faq.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <li key={item.q} className={[styles.item, isOpen ? styles.open : ''].join(' ')}>
              <button
                type="button"
                className={styles.question}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className={styles.signal} aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && <p className={styles.answer}>{item.a}</p>}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
