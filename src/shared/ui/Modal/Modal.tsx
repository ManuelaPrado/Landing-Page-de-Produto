import { useEffect } from 'react'
import type { ReactNode } from 'react'
import styles from './Modal.module.css'

export interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  label?: string
}

export function Modal({ open, onClose, children, label }: ModalProps) {
  useEffect(() => {
    if (!open) return

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKey)

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar">
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}
