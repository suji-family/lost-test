import Link from 'next/link'
import { NavMainItem } from '../_models/navigator'
import NavigatorDepthItem from './NavigatorDepthItem'
import styles from './NavigatorItem.module.scss'

export default function NavigatorItem({
  text,
  url = '/',
  depthList,
}: NavMainItem) {
  return (
    <section className={styles.navItem}>
      <Link href={url} className={styles.navTitle}>
        {text}
      </Link>

      <ul className={styles.navDepth}>
        {depthList.map(({ url, text }) => (
          <NavigatorDepthItem url={url} text={text} key={`nav-depth-${url}`} />
        ))}
      </ul>
    </section>
  )
}
