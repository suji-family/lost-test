import Logo from './Logo'
import styles from './Navigator.module.scss'
import NavigatorItem from './NavigatorItem'

export default function Navigator() {
  // TODO: 메뉴 선정해서 채워넣기
  const navigatorList = [
    { text: '새소식', url: '/news' },
    { text: '게임정보', url: '/' },
    { text: '가이드', url: '/' },
  ]

  return (
    <nav className={styles.navigator}>
      <Logo />

      <ul className={styles.navList}>
        {navigatorList.map(({ text, url }) => (
          <li className={styles.navItem}>
            <NavigatorItem text={text} url={url} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
