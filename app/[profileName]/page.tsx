"use client"

import React, { useEffect, useState } from 'react'
import { DevicePreview } from '../dashboard/components/TemplatePreview/DevicePreview'
import { useParams } from 'next/dist/client/components/navigation';
import { Template } from '@/types/template';
import { ProfilePage } from '@/types/page';
import ViewProfilePageService from '@/lib/services/viewProfilePage';
import { DEFAULT_TEMPLATES } from '@/constants/templates';

const ProfilePageComponent = () => {
  const { profileName } = useParams();
  const [profilePageData, setProfilePageData] = useState<ProfilePage | null>(null);
  const [currentTemplate, setCurrentTemplate] = useState<Template | null>(null);
  const viewProfilePageService = ViewProfilePageService.getInstance();

  useEffect(() => {
    const fetchProfilePageData = async (handleName: string) => {
      try {
        const response = await viewProfilePageService.getProfilePageByHandle(handleName);
        const responseTemplate = DEFAULT_TEMPLATES.find((template) => template.id === response.templateId);
        if (responseTemplate) {
          setCurrentTemplate(responseTemplate)
        }
        if (response)
          setProfilePageData(response)
      } catch (error) {
        console.error("Error in fetchProfilePageData", error)
      }
    }

    if (typeof profileName === "string") {
      fetchProfilePageData(profileName);
    }

  }, [profileName])
  return (
    <div className="h-[100vh]">
      {
        (currentTemplate && profilePageData) ?
          <DevicePreview
            template={currentTemplate}
            links={profilePageData?.links || []}
            userName={profilePageData?.handle || ""}
            pageName={String(profilePageData?.bio) || ""}
            previewType="desktop"
            socials={profilePageData?.socials || []}
          /> : <></>}
    </div>
  )
}

export default ProfilePageComponent
