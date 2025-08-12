"use client"

import type { Page } from "@/types/page";
import { useEffect, useState } from "react";
import ViewPageService from "../../../lib/services/viewPage";
import { useParams } from "next/navigation";
import { Template } from "@/types/template";
import { DEFAULT_TEMPLATES } from "@/constants/templates";
import { DevicePreview } from "@/app/dashboard/components/TemplatePreview/DevicePreview";

const Page = () => {
    const { profileName, pageName } = useParams();
    const [pageData, setPageData] = useState<Page | null>(null);
    const [currentTemplate, setCurrentTemplate] = useState<Template | null>(null)
    const viewpageService = ViewPageService.getInstance();

    useEffect(() => {
        const fetchPageData = async (profileName: string, pageName: string) => {
            try {
                const response = await viewpageService.getPageByUserNameAndPageName(profileName, pageName);
                const responseTemplate = DEFAULT_TEMPLATES.find((template) => template.id === response.templateId);
                if(responseTemplate) {
                    setCurrentTemplate(responseTemplate)
                }
                setPageData(response)
            } catch (error) {
                console.error("Error in fetchPageData", error)
            }
        }

        if (typeof profileName === "string" && typeof pageName === "string") {
            fetchPageData(profileName, pageName);
        }

    }, [profileName, pageName])

    return (
        <div className="h-[100vh]">
        {
            (currentTemplate && pageData) ?
            <DevicePreview
            template={currentTemplate}
            links={pageData?.links || []}
            userName={String(profileName)||""}
            pageName={pageData?.name || ""}
            previewType="desktop"
        />: <></>}
        </div>
    );
};

export default Page;
