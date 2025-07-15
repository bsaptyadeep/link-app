import { StaticImageData } from "next/image"

export interface ILandingPageCardCarousel {
  id: number
  title: string
  color: string
  image: StaticImageData
  borderRadius: number
  width: number
}