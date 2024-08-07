import { NavDepthItem } from '@/app/_models/navigator'
import Link from 'next/link'
import styles from './NavigatorDepthItem.module.scss'

type Props = NavDepthItem

export default function NavigatorDepthItem({ text, url }: Props) {
  return (
    <Link className={styles.depthItem} href={url}>
      {text}
    </Link>
  )
}
