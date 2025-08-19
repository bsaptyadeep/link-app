"use client"
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react"
import { ExternalLink, Grip, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Template } from "@/types/template"
import Loader from "@/components/ui/Loader"
import { ProfilePageCreate } from "@/types/page"
import { DEFAULT_TEMPLATES } from '@/constants/templates';
import { Spinner } from "@radix-ui/themes";
import UserService from '@/lib/services/user';
import { User } from '@/types/User';
import { DevicePreview } from '../components/TemplatePreview/DevicePreview';
import SocialLinksManager from '../components/SocialLinkManager/social-link-manager';
import ProfileInfoManager from '../components/ProfileInfoManager/ProfileInfoManager';
import { ProfilePageService } from '@/lib/services/profilePage';

export default function MyProfilePage() {
    const searchParams = useSearchParams();
    const templateId = searchParams.get('templateId');
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
    const [profilePageData, setProfilePageData] = useState<ProfilePageCreate>({
        handle: "",
        bio: "",
        templateId: templateId ? Number(templateId) : 0,
        links: [
        { id: "1", label: "My Website", url: "https://example.com" },
        { id: "2", label: "My Blog", url: "https://blog.example.com" },
    ],
        socials: []
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [isPublishingPage, setIsPublishingPage] = useState<boolean>(false);
    const [isSavingChanges, setIsSavingChanges] = useState<boolean>(false);
    const router = useRouter();
    const pathname = usePathname();
    const userService = UserService.getInstance();
    const profilePageService = ProfilePageService.getInstance();
    const [isProfilePageExists, setIsProfilePageExists] = useState<boolean>(false);
    const [profileImageFile, setProfileImageFile] = useState<File | null>(null);

    useEffect(() => {
        const fetchTemplate = async () => {
            try {
                if (!templateId || typeof templateId !== "string") return;
                const selectedTemplate = DEFAULT_TEMPLATES.find(template => template.id === Number(templateId))
                if (selectedTemplate)
                    setSelectedTemplate(selectedTemplate);
            } catch (err: any) {
                setError(err.message || "An error occurred");
            }
        };

        const fetchProfilePage = async () => {
            try {
                const profilePage = await profilePageService.getProfilePage();
                if (profilePage) {
                    setProfilePageData(profilePage)
                    setIsProfilePageExists(true);
                    const selectedTemplate = DEFAULT_TEMPLATES.find(template => template.id === Number(profilePage.templateId))
                    if (selectedTemplate)
                        setSelectedTemplate(selectedTemplate);
                }
            } catch (err: any) {
            }
        }

        const handleLoad = async () => {
            await Promise.all([fetchProfilePage(), fetchTemplate()]);
            setLoading(false);
        };

        handleLoad();
    }, [pathname]);


    if (loading) return <Loader text="Fetching templates..." />;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    const addLink = () => {
        setProfilePageData(prevState => ({
            ...prevState,
            links: [...prevState.links, { id: uuidv4(), label: "New Link", url: "" }]
        }))
    }

    const removeLink = (id: string) => {
        setProfilePageData(prevState => ({
            ...prevState,
            links: prevState.links.filter((link) => link.id !== id)
        }))
    }

    const updateLink = (id: string, field: string, value: string) => {
        setProfilePageData(prevState => ({
            ...prevState,
            links: prevState.links.map((link) => (link.id === id ? { ...link, [field]: value } : link))
        }))
    }

    const handlePageChange = async () => {
        if (!selectedTemplate) return;
        try {
            setIsSavingChanges(true);
            await profilePageService.updateProfilePage(profilePageData, profileImageFile);
        } catch (err: any) {
            setError(err.message || "An error occurred");
        } finally {
            setIsSavingChanges(false);
        }
        console.log("Page name changed:", profilePageData);
    }

    const handlePublish = async () => {
        try {
            setIsPublishingPage(true);
            if (selectedTemplate?.id) {
                const newPage = await profilePageService.createProfilePage({
                    ...profilePageData,
                    templateId: selectedTemplate.id
                }, profileImageFile);
                const pageId = newPage.pageId;
                if (pageId) {
                    router.push(`/${profilePageData.handle}`);
                }
            }
        } catch (err: any) {
            setError(err.message || "An error occurred");
        } finally {
            setIsPublishingPage(false);
        }
    }

    return (
        <div className="container mx-auto p-6">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">My Profile</h1>
                <div className="flex flex-row gap-3">
                    {isProfilePageExists ?
                        <Button disabled = {isSavingChanges} onClick={handlePageChange}>
                            Save Changes {isSavingChanges ? <Spinner /> : <ExternalLink className="ml-2 h-4 w-4" />}
                        </Button> :
                        <Button disabled = {isPublishingPage} onClick={handlePublish}>
                            Publish {isPublishingPage ? <Spinner /> : <ExternalLink className="ml-2 h-4 w-4" />}
                        </Button>
                    }
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_300px]">
                <div className="space-y-6">
                    <Tabs defaultValue="details">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="details">Details</TabsTrigger>
                            <TabsTrigger value="links">Links</TabsTrigger>
                            <TabsTrigger value="socials">Socials</TabsTrigger>
                        </TabsList>
                        <TabsContent value="details" className="space-y-4 pt-4">
                            <ProfileInfoManager profilePageData={profilePageData} setProfilePageData={setProfilePageData} setProfileImageFile={setProfileImageFile} />
                        </TabsContent>
                        <TabsContent value="links" className="space-y-4 pt-4">
                            <div className="space-y-4">
                                {profilePageData.links.map((link) => (
                                    <div key={link.id} className="flex items-center gap-2 rounded-lg border p-3">
                                        <div className="cursor-move">
                                            <Grip className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <div className="grid flex-1 gap-2">
                                            <Input
                                                placeholder="Link Title"
                                                value={link.label}
                                                onChange={(e) => updateLink(link.id, "label", e.target.value)}
                                            />
                                            <Input
                                                placeholder="URL"
                                                value={link.url}
                                                onChange={(e) => updateLink(link.id, "url", e.target.value)}
                                            />
                                        </div>
                                        <Button variant="ghost" size="icon" onClick={() => removeLink(link.id)}>
                                            <Trash2 className="h-5 w-5" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                            <Button onClick={addLink} className="w-full" variant="outline">
                                <Plus className="mr-2 h-4 w-4" /> Add Link
                            </Button>

                            <Separator className="my-4" />
                        </TabsContent>
                        <TabsContent value="socials" className="space-y-4 pt-4">
                            <SocialLinksManager profilePageData={profilePageData} setProfilePageData={setProfilePageData} />
                        </TabsContent>
                    </Tabs>
                </div>

                <div className="rounded-lg border bg-card p-4">
                    <div className="text-center">
                        <h2 className="mb-2 font-semibold">Preview</h2>
                        {
                            selectedTemplate &&
                            <div className="relative mx-auto h-[500px] w-[250px] overflow-hidden rounded-[32px] border-8 border-muted bg-background">
                                <DevicePreview signedProfilePictureUrl={ profilePageData?.localprofileImage ||profilePageData?.signedProfilePictureUrl || ""} pageName={profilePageData?.bio || ""} userName={profilePageData?.handle || ""} links={profilePageData?.links || []} template={selectedTemplate} previewType="mobile" />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

