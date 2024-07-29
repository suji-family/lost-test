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
      <CharacterCardModal characterName={characterName} />
    </section>
  )
}
