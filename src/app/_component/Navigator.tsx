import clsx from 'clsx'
import styles from './Navigator.module.scss'

interface Props {
  className?: string
}

export default function Navigator({ className }: Props) {
  return <nav className={clsx(styles.navigator, className ?? null)}></nav>
}
