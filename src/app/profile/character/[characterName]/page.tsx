import { Suspense } from 'react'
import CharacterDetail from './_component/CharacterDetail'

/**
 * @description
 * 검색된 캐릭터 정보 페이지
 */

interface Props {
  params: {
    characterName: string
  }
}

export default function page({ params }: Props) {
  const { characterName } = params

  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <CharacterDetail characterName={characterName} />
      </Suspense>
    </section>
  )
}
