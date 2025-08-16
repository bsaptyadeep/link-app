"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Plus,
  Minus,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Music,
  Github,
  Globe,
} from "lucide-react"
import { ProfilePageCreate } from "@/types/page"
import { SocialLink } from "@/types/socials"
import { socialPlatforms } from "@/constants/socials"
import { getSocialIcon, getSocialIconColor } from "@/lib/social.util"

interface IProps {
  profilePageData: ProfilePageCreate,
  setProfilePageData: React.Dispatch<React.SetStateAction<ProfilePageCreate>>
}

export default function SocialLinksManager({ profilePageData, setProfilePageData }: IProps) {
  const [showAddMenu, setShowAddMenu] = useState(false)

  const addSocialLink = (platform: (typeof socialPlatforms)[0]) => {
    const newLink: SocialLink = {
      id: Date.now().toString(),
      platform: platform.name,
      url: "",
      icon: platform.icon,
      color: platform.color,
    }
    setProfilePageData((prevState) => ({
      ...prevState,
      socials: [...prevState.socials, newLink]
    }))
    setShowAddMenu(false)
  }

  const removeSocialLink = (id: string) => {
    setProfilePageData((prevState) => ({
      ...prevState,
      socials: prevState.socials.filter((link) => link.id !== id)
    }))
  }

  const updateSocialLink = (id: string, url: string) => {
    setProfilePageData((prevState) => ({
      ...prevState,
      socials: prevState.socials.map((link) => (link.id === id ? { ...link, url } : link))
    }))
  }

  const availablePlatforms = socialPlatforms.filter(
    (platform) => !(profilePageData?.socials ?? []).some((link) => link.platform === platform.name),
  ) || [];

  console.log("Available platforms:", availablePlatforms)

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">Social icons</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {profilePageData.socials.map((link) => (
          <div key={link.id} className="flex items-center gap-3">
            {/* Social Icon */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 border ${getSocialIconColor(link.platform)||""}`}>
              {getSocialIcon(link.platform)}
            </div>

            {/* URL Input */}
            <div className="flex-1">
              <Input
                type="url"
                value={link.url}
                onChange={(e) => updateSocialLink(link.id, e.target.value)}
                placeholder={socialPlatforms.find((p) => p.name === link.platform)?.placeholder || "Enter URL"}
                className="border-gray-200 focus:border-violet-500 focus:ring-violet-500"
              />
            </div>

            {/* Remove Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => removeSocialLink(link.id)}
              className="border-gray-200 hover:border-red-300 hover:bg-red-50 hover:text-red-600"
            >
              <Minus className="w-4 h-4" />
            </Button>
          </div>
        ))}

        {/* Add Icon Link Button */}
        <div className="relative">
          <Button
            variant="outline"
            onClick={() => setShowAddMenu(!showAddMenu)}
            className="border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300"
            disabled={availablePlatforms.length === 0}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add icon link
          </Button>

          {/* Dropdown Menu */}
          {showAddMenu && availablePlatforms.length > 0 && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <div className="p-2 space-y-1">
                {availablePlatforms.map((platform) => (
                  <button
                    key={platform.name}
                    onClick={() => addSocialLink(platform)}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <div className={`${platform.color}`}>{platform.icon}</div>
                    <span className="text-sm font-medium text-gray-700">{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {availablePlatforms.length === 0 && (
          <Badge variant="secondary" className="text-xs">
            All available platforms added
          </Badge>
        )}
      </CardContent>
    </Card>
  )
}
