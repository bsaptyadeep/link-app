"use client"

import { User, Globe, Instagram, Youtube } from "lucide-react"
import type { Template } from "@/types/template"

interface TemplatePreviewProps {
  template: Template
  isSelected?: boolean
  onClick?: () => void
}

export function TemplatePreview({ template, isSelected, onClick }: TemplatePreviewProps) {
  return (
    <div
      className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        isSelected ? "ring-4 ring-blue-500 shadow-xl scale-105" : "shadow-lg"
      }`}
      onClick={onClick}
    >
      {/* Preview Container */}
      <div className="h-64 w-full p-4 flex flex-col items-center" style={template.metadata.background}>
        {/* Mini Profile */}
        <div
          className="h-12 w-12 bg-white/90 flex items-center justify-center mb-2"
          style={template.metadata.profileRing}
        >
          <User className="h-6 w-6 text-gray-400" />
        </div>

        <h3 className="text-sm font-bold mb-1" style={template.metadata.textColor}>
          John Doe
        </h3>
        <p className="text-xs mb-3 text-center" style={template.metadata.bioColor}>
          Creator
        </p>

        {/* Mini Links */}
        <div className="space-y-2 w-full max-w-32">
          <div
            className="flex items-center justify-center gap-2 p-2 rounded-lg text-xs"
            style={template.metadata.buttonStyle}
          >
            <Globe className="h-3 w-3" />
            <span>Website</span>
          </div>
          <div
            className="flex items-center justify-center gap-2 p-2 text-xs rounded-lg"
            style={template.metadata.buttonStyle}
          >
            <Instagram className="h-3 w-3" />
            <span>Instagram</span>
          </div>
          <div
            className="flex items-center justify-center gap-2 p-2 rounded-lg text-xs"
            style={template.metadata.buttonStyle}
          >
            <Youtube className="h-3 w-3" />
            <span>YouTube</span>
          </div>
        </div>
      </div>

      {/* Template Info */}
      <div className="bg-white p-3 border-t">
        <h4 className="font-semibold text-gray-800 text-sm">{template.name}</h4>
        <p className="text-xs text-gray-600 mt-1">{template.description}</p>
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  )
}
