import styles from './CharacterDetailHeader.module.scss'

interface Props {
  CharacterName: string
  ServerName: string
  CharacterClassName: string
}

export default function CharacterDetailHeader({
  CharacterName,
  ServerName,
  CharacterClassName,
}: Props) {
  return (
    <div className={styles.characterHeader}>
      <span>{CharacterName}</span> &nbsp;
      <span>{ServerName}</span> &nbsp;
      <span>{CharacterClassName}</span>
    </div>
  )
}
