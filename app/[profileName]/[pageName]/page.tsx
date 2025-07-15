"use client"

import type { Page } from "@/types/page";
import { useEffect, useState } from "react";
import ViewPageService from "../../../lib/services/viewPage";
import { useParams } from "next/navigation";
import { Template } from "@/types/template";
import { DEFAULT_TEMPLATES } from "@/constants/templates";

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
        <div className={`absolute inset-0 overflow-hidden ${currentTemplate?.metadata.background}`}>
            <div className="flex h-full flex-col items-center overflow-y-auto p-4">
                <div className="mt-6 h-20 w-20 rounded-full bg-white shadow-sm"></div>
                <h3 className="mt-4 font-bold">John Doe</h3>
                <p className="text-xs text-muted-foreground">Digital creator & web developer</p>

                <div className="mt-6 w-full space-y-3">
                    {pageData?.links.map((link) => (
                        <div
                            key={link.id}
                            className={`flex w-full items-center justify-center p-2 ${currentTemplate?.metadata.buttonStyle}`}
                        >
                            {link.label || "New Link"}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
