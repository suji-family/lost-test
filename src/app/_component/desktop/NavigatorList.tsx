import { NavList } from '@/app/_models/navigator'
import NavigatorItem from './NavigatorItem'
import styles from './NavigatorList.module.scss'

interface Props {
  navigatorList: NavList
}

export default function NavigatorList({ navigatorList }: Props) {
  return (
    <ul className={styles.navList}>
      {navigatorList.map(({ text, url, depthList }) => (
        <li key={`nav-${text}`}>
          <NavigatorItem text={text} url={url} depthList={depthList} />
        </li>
      ))}
    </ul>
  )
}
