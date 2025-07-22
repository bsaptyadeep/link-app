"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, ExternalLink, Copy, Eye, CheckCircle2, Trash2, Check } from "lucide-react"
import { useState } from "react"

export interface PageItem {
  id: string
  title: string
  description: string
  url: string
  isActive: boolean
  views?: number
  lastUpdated?: string
}

interface PageCardProps {
  page: PageItem
  onEdit?: (pageId: string) => void
  onOpen?: (pageId: string) => void
  onCopy?: (url: string, pageId: string) => void
  onDelete?: (pageId: string) => void
  isCopied?: boolean
  className?: string
}

export default function PageCard({
  page,
  onEdit,
  onOpen,
  onDelete,
  className = "",
}: PageCardProps) {
  const [isCopied, setIsCopied] = useState(false)
  const [copyError, setCopyError] = useState<string | null>(null)

  const handleEdit = () => {
    onEdit?.(page.id)
  }

  const handleOpen = () => {
    onOpen?.(page.id)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(page.url)
      setIsCopied(true)
      setCopyError(null)

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (err) {
      console.error("Failed to copy URL:", err)
      setCopyError("Failed to copy")

      // Clear error after 2 seconds
      setTimeout(() => {
        setCopyError(null)
      }, 2000)
    }
  }

  const handleDelete = () => {
    onDelete?.(page.id)
  }

  return (
    <Card
      className={`group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardHeader className="relative pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
              {page.title}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{page.description}</p>
          </div>
          <Badge
            variant={page.isActive ? "default" : "secondary"}
            className={`ml-2 ${
              page.isActive
                ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-100"
                : "bg-gray-100 text-gray-600 border-gray-200"
            }`}
          >
            {page.isActive ? (
              <>
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Active
              </>
            ) : (
              "Draft"
            )}
          </Badge>
        </div>

        {/* Stats */}
        {(page.views !== undefined || page.lastUpdated) && (
          <div className="flex items-center gap-4 text-xs text-gray-500">
            {page.views !== undefined && (
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {page.views.toLocaleString()} views
              </div>
            )}
            {page.lastUpdated && <div>Updated {page.lastUpdated}</div>}
          </div>
        )}
      </CardHeader>

      <CardContent className="relative space-y-4">
        {/* URL Display */}
        <div className="bg-gray-50/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200/50 relative group/url">
          <p className="text-sm text-gray-700 font-mono break-all pr-8">{page.url}</p>
          <Button
            onClick={handleCopy}
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 h-auto opacity-50 group-hover/url:opacity-100 transition-opacity"
            aria-label={isCopied ? "URL copied" : "Copy URL"}
          >
            {isCopied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          </Button>
        </div>

        {copyError && <p className="text-xs text-red-500 -mt-2">{copyError}</p>}

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            onClick={handleEdit}
            className="flex-1 gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Edit className="w-4 h-4" />
            Edit
          </Button>
          <Button
            onClick={handleOpen}
            variant="outline"
            className="gap-2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-gray-50"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="hidden sm:inline">Open</span>
          </Button>
          <Button
            onClick={handleDelete}
            variant="outline"
            size="icon"
            className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-200"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
