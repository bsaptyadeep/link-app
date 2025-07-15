export type IPageLink = {
  id: string
  label: string,
  url: string
}

export type PageBase = PageCreate & {
  userId: string
}

export type PageCreate = {
  name: string,
  description: string,
  templateId: number,
  links: IPageLink[]
}

export type Page = PageBase & {
  pageId: number
}