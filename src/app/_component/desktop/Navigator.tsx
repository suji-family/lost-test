import Logo from '../Logo'
import styles from './Navigator.module.scss'
import NavigatorList from './NavigatorList'

export default function Navigator() {
  const navigatorList = [
    {
      text: '새소식',
      url: '/news/notice',
      depthList: [
        { text: '공지사항', url: '/news/notice' },
        { text: '이벤트', url: '/news/event' },
      ],
    },
    {
      text: '게임정보',
      url: '/profile',
      depthList: [{ text: '전투정보실', url: '/profile' }],
    },
  ]

  return (
    <nav className={styles.navigator}>
      <div className={styles.navWrapper}>
        <Logo />

        <NavigatorList navigatorList={navigatorList} />
      </div>
    </nav>
  )
}
