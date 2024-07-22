'use client'

import { Tooltip } from 'react-tooltip'

interface Props {
  tooltip: string[]
  tooltipId: string
}

export default function CharacterTooltip({ tooltip, tooltipId }: Props) {
  console.log('tooltip', tooltip)

  // HTML 태그를 제거하고 텍스트만 추출
  const plainTextTooltips = tooltip
    .map((htmlString) => htmlString.replace(/<[^>]*>/g, ''))
    .filter(
      (text) =>
        !text.includes(
          '카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.',
        ),
    )

  return (
    <>
      <Tooltip
        id={tooltipId}
        place={'top'}
        html={`<ul>
                        ${plainTextTooltips.map((item) => `<li>${item}</li>`).join('')}
                    </ul>`}
        style={{ zIndex: 9999 }}
      />
    </>
  )
}
