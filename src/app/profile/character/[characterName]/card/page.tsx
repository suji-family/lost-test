import CharacterCardModal from '../_component/CharacterCardModal'

interface Props {
  params: {
    characterName: string
  }
}

export default function page({ params }: Props) {
  const { characterName } = params

  return (
    <section>
      <p>새로고침했을 때 url</p>
      <CharacterCardModal characterName={characterName} />
    </section>
  )
}
