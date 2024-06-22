'use client'

import clsx from 'clsx'
import styles from './Button.module.scss'

interface Props {
  children: React.ReactNode
  onHandleClick?: () => void
  disabled?: boolean
}

export default function Button({ children, onHandleClick, disabled }: Props) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx([styles.button])}
      onClick={onHandleClick}
    >
      {children}
    </button>
  )
}
