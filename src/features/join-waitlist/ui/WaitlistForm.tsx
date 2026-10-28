import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/shared/ui'
import { dragons, dragonsById } from '@/entities/dragon'
import styles from './WaitlistForm.module.css'

type Status = 'idle' | 'error' | 'success'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export interface WaitlistFormProps {
  defaultDragonId?: string
}

export function WaitlistForm({ defaultDragonId }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [dragonId, setDragonId] = useState(defaultDragonId ?? dragons[0].id)
  const [status, setStatus] = useState<Status>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  if (status === 'success') {
    const chosen = dragonsById.get(dragonId)
    return (
      <div className={styles.success} role="status">
        <span className={styles.successMark} aria-hidden="true">
          ✓
        </span>
        <h3 className={styles.successTitle}>Você está na lista!</h3>
        <p className={styles.successText}>
          Guardamos seu lugar para forjar o <strong>{chosen?.name}</strong>. Enviaremos o convite
          de pré-venda para <strong>{email}</strong> assim que a linha abrir.
        </p>
        <Button
          variant="ghost"
          onClick={() => {
            setStatus('idle')
            setEmail('')
          }}
        >
          Cadastrar outro dragão
        </Button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Seu e-mail</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            autoComplete="email"
            required
            aria-describedby={status === 'error' ? 'email-error' : undefined}
            placeholder="voce@email.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              if (status === 'error') setStatus('idle')
            }}
            aria-invalid={status === 'error'}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Dragão de interesse</span>
          <select
            className={styles.input}
            name="dragon"
            aria-label="Selecione o dragão de interesse"
            value={dragonId}
            onChange={(event) => setDragonId(event.target.value)}
          >
            {dragons.map((dragon) => (
              <option key={dragon.id} value={dragon.id}>
                {dragon.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {status === 'error' && (
        <p id="email-error" className={styles.error} role="alert">
          Digite um e-mail válido para entrar na lista.
        </p>
      )}

      <Button type="submit" size="lg" className={styles.submit}>
        Quero meu lugar na lista
      </Button>

      <p className={styles.note}>
        Simulação acadêmica · nenhum dado é enviado ou armazenado.
      </p>
    </form>
  )
}
