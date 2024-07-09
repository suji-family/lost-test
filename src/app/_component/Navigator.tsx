import Logo from './Logo'
import styles from './Navigator.module.scss'
import NavigatorItem from './NavigatorItem'

export default function Navigator() {
  // TODO: 메뉴 선정해서 채워넣기
  const navigatorList = [
    { text: '새소식', url: '/news' },
    {
      text: '게임정보',
      url: '/profile',
    },
    { text: '가이드', url: '/guide' },
  ]

  return (
    <nav className={styles.navigator}>
      <div className={styles.navWrapper}>
        <Logo />

        <ul className={styles.navList}>
          {navigatorList.map(({ text, url }) => (
            <li key={`nav-${url}`} className={styles.navItem}>
              <NavigatorItem text={text} url={url} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
