/**
 * @description
 * 모바일 버전 바텀 네비게이션
 */

import Logo from '../Logo'
import styles from './BottomNavigator.module.scss'

export default function BottomNavigator() {
  return (
    <section className={styles.nav}>
      {/* 메뉴여는거 */}
      <Logo />
      {/* 검색 */}
    </section>
  )
}
