"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Edit, ExternalLink, Check, Globe, Sparkles, Share2, QrCode } from "lucide-react"
import { useRouter } from "next/navigation"

interface ProfileUrlCardProps {
    handle: string
 }

export default function ProfileUrlCard({ handle }: ProfileUrlCardProps) {
    const router = useRouter();
    const [copied, setCopied] = useState(false)
    const fullUrl = `zustbio.com/${handle}`

    const handleCopy = async () => {
        await navigator.clipboard.writeText(fullUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleEdit = () => {
        router.push(`/dashboard/profile`);
    }

    const handleOpen = () => {
        router.push(`/${handle}`)
    }

    return (
        <Card className="mb-8 border-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-100/20 to-purple-100/20"></div>
            <div className="absolute top-4 right-4">
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-200"></div>
                </div>
            </div>

            <CardHeader className="relative pb-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center">
                            <Globe className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <CardTitle className="text-xl bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">
                                Your zustbio URL
                            </CardTitle>
                            <p className="text-sm text-gray-600 mt-1">Share your profile with the world</p>
                        </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                        Live
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="relative space-y-6">
                {/* URL Display/Edit Section */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-violet-100 shadow-sm">
                        <span className="text-gray-500 font-medium">zustbio.com/</span>
                        <span className="flex-1 font-mono text-violet-700 font-semibold">{handle}</span>
                    </div>

                    <p className="text-sm text-gray-600 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-violet-500" />
                        Share this URL with your audience to direct them to your profile page
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">

                    <>
                        <Button
                            onClick={handleCopy}
                            className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4 mr-2" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4 mr-2" />
                                    Copy URL
                                </>
                            )}
                        </Button>

                        <Button
                            variant="outline"
                            className="border-violet-200 hover:bg-violet-50 hover:text-violet-700 bg-transparent"
                            onClick={handleEdit}
                        >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                        </Button>

                        <Button
                            variant="outline"
                            className="border-violet-200 hover:bg-violet-50 hover:text-violet-700 bg-transparent"
                            onClick={handleOpen}
                        >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit
                        </Button>
                    </>
                </div>

                {/* Additional Features */}
                {/* <div className="flex items-center justify-between pt-4 border-t border-violet-100">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Active</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            <span>1.2k views</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-violet-600 hover:text-violet-700 hover:bg-violet-50">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                        </Button>
                        <Button variant="ghost" size="sm" className="text-violet-600 hover:text-violet-700 hover:bg-violet-50">
                            <QrCode className="w-4 h-4 mr-2" />
                            QR Code
                        </Button>
                    </div>
                </div> */}
            </CardContent>
        </Card>
    )
}