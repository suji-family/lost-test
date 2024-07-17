import styles from './SearchGuide.module.scss'

export default function SearchGuide() {
  return (
    <section className={styles.searchGuideContainer}>
      <h1>전투 정보실</h1>
      <p className={styles.searchGuide}>캐릭터명을 입력 후 검색해주세요.</p>
      <p>장비 / 아바타 능력치 및 전투스킬을 확인 할 수 있습니다.</p>
    </section>
  )
}
