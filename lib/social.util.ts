import { socialPlatforms } from "@/constants/socials"

export function getSocialIcon(platform: string): React.ReactNode {
    const found = socialPlatforms.find((p) => p.name === platform)
    return found ? found.icon : null
}

export function getSocialIconColor(platform: string) {
    const found = socialPlatforms.find((p) => p.name === platform)
    return found ? found.color : null
}
