'use client'

import { Tooltip } from 'react-tooltip'
import styles from './CharacterTooltip.module.scss'

interface Props {
  tooltipId: string
}

export default function CharacterTooltip({ tooltipId }: Props) {
  return (
    <Tooltip
      id={tooltipId}
      place="top"
      render={({ content }) => (
        <div className={styles.tooltip}>
          <ul>
            {(content || '').split('\n').map((item, index) => (
              <li key={`tooltipItem-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      className={styles.tooltip}
    />
  )
}
