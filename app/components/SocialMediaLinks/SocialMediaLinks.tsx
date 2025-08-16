"use client"

import React from "react"

import { ExternalLink } from "lucide-react"
import { SocialLink } from "@/types/socials"
import { IPageSocial } from "@/types/page"
import { get } from "http"
import { getSocialIcon, getSocialIconColor } from "@/lib/social.util"

interface SocialMediaIconsProps {
  socials: IPageSocial []
  size?: "sm" | "md" | "lg"
  showLabels?: boolean
  className?: string
}

export default function SocialMediaIcons({
  socials,
  size = "md",
  showLabels = false,
  className = "",
}: SocialMediaIconsProps) {
    const socialLinks: SocialLink[] = socials.map((social) => ({
      id: social.id,
      platform: social.platform,
      url: social.url,
      icon: getSocialIcon(social.platform) || <></>,
      color: getSocialIconColor(social.platform) || "",
    }))
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const handleSocialClick = (url: string) => {
    if (url && url.trim()) {
      // Ensure URL has protocol
      const formattedUrl = url.startsWith("http") ? url : `https://${url}`
      window.open(formattedUrl, "_blank", "noopener,noreferrer")
    }
  }

  const validLinks = socialLinks.filter((link) => link.url && link.url.trim())

  if (validLinks.length === 0) {
    return null
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {validLinks.map((link) => (
        <div key={link.id} className="flex flex-col items-center gap-2">
          <button
            onClick={() => handleSocialClick(link.url)}
            className={`
              ${sizeClasses[size]} 
              bg-white 
              border-2 border-gray-100 
              rounded-xl 
              shadow-sm 
              hover:shadow-md 
              hover:scale-105 
              hover:border-violet-200
              transition-all 
              duration-200 
              flex 
              items-center 
              justify-center 
              group
              relative
              overflow-hidden
            `}
            title={`Visit ${link.platform}`}
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

            {/* Icon with original color */}
            <div className={`${link.color} relative z-10`}>
              {React.isValidElement(link.icon)
                ? React.cloneElement(link.icon as React.ReactElement<any>, { className: iconSizes[size] })
                : link.icon}
            </div>

            {/* External link indicator */}
          </button>

          {showLabels && <span className="text-xs font-medium text-gray-600 text-center">{link.platform}</span>}
        </div>
      ))}
    </div>
  )
}

