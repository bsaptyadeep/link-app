import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const WelcomeScreen = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center space-y-8">
                    {/* Success Icon */}
                    <div className="relative">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                            <CheckCircle className="w-12 h-12 text-green-600" />
                        </div>
                        <div className="absolute -top-2 -right-2">
                            <Sparkles className="w-8 h-8 text-yellow-500 animate-bounce" />
                        </div>
                    </div>

                    {/* Success Message */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-gray-900 text-balance">Welcome aboard! 🎉</h1>
                        <p className="text-lg text-gray-600 text-pretty">
                            Your account has been created successfully. We're excited to have you join our community!
                            Please wait while we redirect you to your dashboard.
                        </p>
                    </div>

                    {/* Success Details */}
                    <Card className="text-left border-green-200 bg-green-50/50">
                        <CardContent className="pt-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-gray-700">Account created successfully</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-gray-700">Redirecting to dashboard...</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Additional Links */}
                    <div className="text-center text-sm text-gray-500">
                        <p>
                            Need help getting started?{" "}
                            <Link href="/help" className="text-blue-600 hover:text-blue-700 font-medium">
                                Visit our help center
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeScreen
