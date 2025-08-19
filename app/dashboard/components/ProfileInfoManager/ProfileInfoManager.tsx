"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Upload, Camera, Save } from "lucide-react"
import { ProfilePageCreate } from "@/types/page"

interface IProps {
  profilePageData: ProfilePageCreate,
  setProfilePageData: React.Dispatch<React.SetStateAction<ProfilePageCreate>>,
  setProfileImageFile: React.Dispatch<React.SetStateAction<File | null>>
}

export default function ProfileInfoManager({ profilePageData, setProfilePageData, setProfileImageFile }: IProps) {
  const [isEditing, setIsEditing] = useState(false)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfilePageData((prev) => ({
          ...prev,
          localprofileImage: e.target?.result as string,
        }))
      }
      setProfileImageFile(file);
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to your backend
    console.log("Saving profile data:", profilePageData)
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-violet-600" />
            <CardTitle>Profile Information</CardTitle>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
            className="border-violet-200 text-violet-600 hover:bg-violet-50"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Profile Picture Section */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <Avatar className="w-20 h-20 border-4 border-violet-100">
              <AvatarImage src={ profilePageData?.localprofileImage || profilePageData?.signedProfilePictureUrl || "/placeholder.svg"} alt="Profile" />
              <AvatarFallback className="bg-violet-100 text-violet-600 text-xl font-semibold">
                {profilePageData?.handle.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {isEditing && (
              <label className="absolute -bottom-2 -right-2 bg-violet-600 hover:bg-violet-700 text-white rounded-full p-2 cursor-pointer transition-colors">
                <Camera className="w-4 h-4" />
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">Profile Picture</h3>
            <p className="text-sm text-gray-600 mb-3">Upload a profile picture to personalize your bio page</p>
            {isEditing && (
              <label className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 text-violet-600 rounded-lg cursor-pointer hover:bg-violet-100 transition-colors">
                <Upload className="w-4 h-4" />
                Upload Image
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            )}
          </div>
        </div>

        {/* Handle/Username Section */}
        <div className="space-y-2">
          <Label htmlFor="handle" className="text-sm font-medium text-gray-700">
            Handle / Username
          </Label>
          {isEditing ? (
            <div className="flex items-center gap-2">
              <span className="text-gray-500 font-mono">zustbio.com/</span>
              <Input
                id="handle"
                value={profilePageData.handle}
                onChange={(e) => setProfilePageData((prev) => ({ ...prev, handle: e.target.value }))}
                className="flex-1 font-mono focus:ring-violet-500 focus:border-violet-500"
                placeholder="your-handle"
              />
            </div>
          ) : (
            <div className="p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-500 font-mono">zustbio.com/</span>
              <span className="font-mono font-semibold text-violet-600">{profilePageData.handle}</span>
            </div>
          )}
          <p className="text-xs text-gray-500">
            This will be your unique URL that people can visit to see your profile
          </p>
        </div>

        {/* Bio Section */}
        <div className="space-y-2">
          <Label htmlFor="bio" className="text-sm font-medium text-gray-700">
            Bio
          </Label>
          {isEditing ? (
            <Textarea
              id="bio"
              value={profilePageData.bio}
              onChange={(e) => setProfilePageData((prev) => ({ ...prev, bio: e.target.value }))}
              className="min-h-[100px] focus:ring-violet-500 focus:border-violet-500"
              placeholder="Tell people about yourself..."
            />
          ) : (
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-700 leading-relaxed">{profilePageData.bio}</p>
            </div>
          )}
          <p className="text-xs text-gray-500">
            Write a short description about yourself that will appear on your profile page
          </p>
        </div>

        {/* Save Button */}
        {isEditing && (
          <div className="flex justify-end pt-4 border-t border-gray-100">
            <Button onClick={handleSave} className="bg-violet-600 hover:bg-violet-700 text-white px-6">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
