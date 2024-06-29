import Link from 'next/link'
import styles from './NavigatorItem.module.scss'

interface Props {
  text?: string
  url?: string
}

export default function NavigatorItem({ text, url = '/' }: Props) {
  return (
    <Link href={url} className={styles.navItem}>
      {text}
    </Link>
  )
}
