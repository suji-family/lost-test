type NavItem = {
  text: string
  url: string
}

export type NavDepthItem = NavItem

export type NavMainItem = NavItem & {
  depthList: NavDepthItem[] | []
}

export type NavList = NavMainItem[]
