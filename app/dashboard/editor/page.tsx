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
import { IPageLink } from "@/types/page"
import PageService from '@/lib/services/page';
import { DEFAULT_TEMPLATES } from '@/constants/templates';
import { Spinner } from "@radix-ui/themes";
import UserService from '@/lib/services/user';
import { User } from '@/types/User';

export default function EditorPage() {
  const [links, setLinks] = useState<IPageLink []>([
    { id: "1", label: "My Website", url: "https://example.com" },
    { id: "2", label: "My Blog", url: "https://blog.example.com" },
  ])
  const searchParams = useSearchParams();
  const templateId = searchParams.get('templateId');
  const pageId = searchParams.get('pageId');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [pageName, setPageName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true);
  const [isPublishingPage, setIsPublishingPage] = useState<boolean>(false);
  const [isSavingChanges, setIsSavingChanges] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const userService = UserService.getInstance();
  const pageService = PageService.getInstance();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await userService.getUser();
      setUser(response);
    }
    fetchUser()
  }, [])


  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        if (!templateId || typeof templateId !== "string") return;
        const selectedTemplate = DEFAULT_TEMPLATES.find(template => template.id === Number(templateId))
        if(selectedTemplate)
        setSelectedTemplate(selectedTemplate);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    const fetchPage = async () => {
      if (!pageId || typeof pageId !== "string") return;
      const pageList = await pageService.getPages([Number(pageId)]);
      if (pageList.length > 0) {
        const page = pageList[0];
        setPageName(page.name);
        setLinks(page.links.map(link => ({ id: uuidv4(), label: link.label, url: link.url })));
        const selectedTemplate = DEFAULT_TEMPLATES.find(template => template.id === Number(page.templateId))
        if(selectedTemplate)
        setSelectedTemplate(selectedTemplate);
      }
    }

    fetchPage()
    fetchTemplate();
  }, [pathname]);


  if (loading) return <Loader text="Fetching templates..." />;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  const addLink = () => {
    setLinks([...links, { id: uuidv4(), label: "New Link", url: "" }])
  }

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id))
  }

  const updateLink = (id: string, field: string, value: string) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, [field]: value } : link)))
  }

  const handlePageChange = () => {
    if(!selectedTemplate) return;
    try {
      setIsSavingChanges(true);
      const updatedPage = {
        templateId: selectedTemplate.id,
        name: pageName,
        description: "",
        links
      };
      pageService.updatePage(Number(pageId), updatedPage);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsPublishingPage(false);
    }
    console.log("Page name changed:", {
          templateId: selectedTemplate.id,
          name: pageName,
          description: "",
          links
        });
    // setPageName(e.target.value);
  }

  const handlePublish = async () => {
    try {
      setIsPublishingPage(true);
      if (selectedTemplate?.id) {
        const newPage = await PageService.getInstance().createPage({
          templateId: selectedTemplate.id,
          name: pageName,
          description: "",
          links
        });
        const pageId = newPage.pageId;
        if (pageId) {
          router.push(`/${user?.profileName}/${pageName}`);
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
        <h1 className="text-2xl font-bold">Edit Your Page</h1>
        <div className="flex flex-row gap-3">
          {pageId ?
            <Button onClick={handlePageChange}>
              Save Changes {isPublishingPage ? <Spinner /> : <ExternalLink className="ml-2 h-4 w-4" />}
            </Button> :
            <Button onClick={handlePublish}>
              Publish {isPublishingPage ? <Spinner /> : <ExternalLink className="ml-2 h-4 w-4" />}
            </Button>
          }
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <Input
            placeholder="Page Name"
            value={pageName}
            onChange={(e) => {
              setPageName(e.target.value);
            }}
          />
          <Tabs defaultValue="links">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="links">Links</TabsTrigger>
            </TabsList>
            <TabsContent value="links" className="space-y-4 pt-4">
              <div className="space-y-4">
                {links.map((link) => (
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
          </Tabs>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <div className="text-center">
            <h2 className="mb-2 font-semibold">Preview</h2>
            {
              selectedTemplate &&
              <div className="relative mx-auto h-[500px] w-[250px] overflow-hidden rounded-[32px] border-8 border-muted bg-background p-2">
                <div className={`absolute inset-0 rounded-[24px] overflow-hidden ${selectedTemplate.metadata.background}`}>
                  <div className="flex h-full flex-col items-center overflow-y-auto p-4">
                    <div className="mt-6 h-20 w-20 rounded-full bg-white shadow-sm"></div>
                    <h3 className="mt-4 font-bold">John Doe</h3>
                    <p className="text-xs text-muted-foreground">Digital creator & web developer</p>

                    <div className="mt-6 w-full space-y-3">
                      {links.map((link) => (
                        <div
                          key={link.id}
                          className={`flex w-full items-center justify-center p-2 ${selectedTemplate.metadata.buttonStyle}`}
                        >
                          {link.label || "New Link"}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

