import type { Metadata } from 'next'
import { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
import CharacterDetail from './_component/CharacterDetail'
import styles from './page.module.scss'

/**
 * @description
 * 검색된 캐릭터 정보 페이지
 */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const characterName = decodeURIComponent(params.characterName)

  return {
    title: `${characterName}의 검색 결과`,
  }
}

interface Props {
  params: {
    characterName: string
  }
}

export default function page({ params }: Props) {
  const { characterName } = params

  return (
    <section>
      <Suspense
        fallback={
          <>
            <Skeleton className={styles.titleSkeleton} />
            <Skeleton className={styles.characterImageSkeleton} />
            <Skeleton className={styles.characterInformationSkeleton} />
          </>
        }
      >
        <CharacterDetail characterName={characterName} />
      </Suspense>
    </section>
  )
}
