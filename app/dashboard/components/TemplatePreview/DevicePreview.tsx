"use client"

import { User } from "lucide-react"
import type { Template } from "@/types/template"
import { IPageLink, IPageSocial } from "@/types/page"
import SocialMediaIcons from "@/app/components/SocialMediaLinks/SocialMediaLinks"

interface DevicePreviewProps {
  template: Template
  previewType?: "mobile" | "desktop",
  links: IPageLink[],
  socials?: IPageSocial [],
  userName: string,
  pageName: string,
  signedProfilePictureUrl?: string
}

export function DevicePreview({ template, previewType, links, userName, pageName, socials, signedProfilePictureUrl }: DevicePreviewProps) {

  const handleOpenLink = (url: string) => {
    if(previewType==="mobile") {
      return;
    }
    window.open(url, "_blank");
  };

  return (
    <div
      className={`relative h-full rounded-xl`}
    >
      {/* Preview Container */}
      <div className={`h-full pt-10 w-full  flex flex-col gap-3 items-center`} style={template.metadata.background}>
        {/* Mini Profile */}
        <div
          className={`${previewType === "mobile"? "h-12 w-12": "h-40 w-40"} bg-white/90 flex items-center justify-center mb-2`}
          style={template.metadata.profileRing}
        >
          {signedProfilePictureUrl ? (
            <img src={signedProfilePictureUrl} alt={userName} className="object-cover rounded-full" />
          ) : (
            <User className={`${previewType === "mobile"? "h-6 w-6": "h-20 w-20"} text-gray-400`} />
          )}
        </div>

        <h3 className={`${previewType === "mobile" ? "text-sm": "text-lg"} font-bold mb-1`} style={template.metadata.textColor}>
          {userName}
        </h3>
        <p className={`${previewType === "mobile" ? "text-sm": "text-lg"} mb-3 text-center`} style={template.metadata.bioColor}>
          {pageName}
        </p>

        {/* Mini Links */}
        <div className={`space-y-2 w-full ${previewType === "mobile" ? "max-w-32" : "max-w-48"}`}>
            {
                links.map((link) => (
                    <div
                        key={link.id}
                        className={`flex items-center justify-center gap-2 p-2 rounded-lg ${previewType === "mobile" ? "text-xs" : "text-base"}  cursor-pointer`}
                        style={template.metadata.buttonStyle}
                        onClick={() => handleOpenLink(link.url)}
                    >
                        <span>{link.label}</span>
                    </div>
                ))
            }
        </div>
        <div className="mt-5">
          {
          socials && socials.length > 0 && (
            <SocialMediaIcons socials={socials} />  
          )
        }
        </div>
      </div>
    </div>
  )
}
