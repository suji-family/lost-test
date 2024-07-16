// Stat 정의
export interface Stat {
  Type: string
  Value: string
  Tooltip: string[]
}

// Tendency 정의
export interface Tendency {
  Type: string
  Point: number
  MaxPoint: number
}

//  ArmoryProfile 정의
export interface ArmoryProfile {
  CharacterImage: string
  ExpeditionLevel: number
  PvpGradeName: string
  TownLevel: number | null
  TownName: string
  Title: string
  GuildMemberGrade: string
  GuildName: string
  UsingSkillPoint: number
  TotalSkillPoint: number
  Stats: Stat[]
  Tendencies: Tendency[]
  ServerName: string
  CharacterName: string
  CharacterLevel: number
  CharacterClassName: string
  ItemAvgLevel: string
  ItemMaxLevel: string
}

// 캐릭터 정보
export type CharacterInfo = { ArmoryProfile: ArmoryProfile }
