export type IPageLink = {
  id: string
  label: string,
  url: string
}

export type IPageSocial = {
  id: string
  platform: string,
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

export type ProfilePageCreate = {
  handle: string,
  bio: string,
  templateId: number,
  links: IPageLink[]
  socials: IPageSocial[],
  localprofileImage?: string,
  profileImageFileName?: string
  signedProfilePictureUrl?: string
}

export type ProfilePageBase = ProfilePageCreate & {
  userId: string
}

export type ProfilePage = ProfilePageBase & {
  pageId: number,
}
