"use client"
import Link from "next/link";
import { ArrowRight, Brush, LayoutTemplate, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Page, ProfilePage } from "@/types/page";
import { useEffect, useState } from "react";
import PageService from "../../lib/services/page";
import UserService from "../../lib/services/user";
import { User } from "@/types/User";
import PageCard from "./components/PageCard/PageCard";
import Loader from "@/components/ui/Loader"
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ProfilePageService } from "@/lib/services/profilePage";
import ProfileUrlCard from "./components/ProfileCard/ProfileCard";

export default function DashboardPage() {
  const router = useRouter();
  const [activePages, setActivePages] = useState<Page[]>([]);
  const [profilePage, setProfilePage] = useState<ProfilePage | null>(null);
  const PageServiceInstance = PageService.getInstance();
  const profilePageInstance = ProfilePageService.getInstance();
  const [baseUrl, setBaseUrl] = useState('');
  const UserServiceInstance = UserService.getInstance();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfilePages = async () => {
      const response = await profilePageInstance.getProfilePage();
      setProfilePage(response);
    };

    const fetchPages = async () => {
      const response = await PageServiceInstance.getPages();
      setActivePages(response);
    };

    const fetchUser = async () => {
      const response = await UserServiceInstance.getUser();
      setUser(response);
    };

    const load = async () => {
      try {
        setBaseUrl(window.location.origin);
        await Promise.all([
          fetchProfilePages(),
          fetchPages(),
          fetchUser()
        ]);
      } catch (error) {
        console.error("Error in fetchPages", error)
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [])

  const handleDeletePage = async (pageId: string) => {
    try {
      await PageServiceInstance.deletePage(pageId);
      setActivePages((prevState) => {
        return [...prevState.filter((page) => page.pageId.toString() !== pageId)]
      })
    } catch (error) {
      console.error("Error in Deleting Page:", pageId);
    }
  }

  const handleOpenPage = async (pageUrl: string) => {
    router.push(pageUrl)
  }

  const handleEditPage = async (pageId: string) => {
    router.push(`/dashboard/editor?pageId=${pageId}`);
  }

  const handleCreateProfile = async () => {
    router.push(`/dashboard/temp?pagetype=profile`);
  }

  if (isLoading) return <Loader text="Fetching data..." />;

  return (
    <div className="flex flex-col gap-8 p-6">
      {
        profilePage === null ?
          <Card className="mb-8 border-0 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-black/10"></div>
            <CardContent className="relative p-8">
              <div className="flex items-center justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-violet-300" />
                    <Badge
                      variant="secondary"
                      className="bg-white/15 text-white border-0 hover:bg-white/25 backdrop-blur-sm"
                    >
                      ✨ New
                    </Badge>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Create Your Stunning Profile Page</h2>
                    <p className="text-lg text-violet-50 max-w-md">
                      Stand out from the crowd! Build a beautiful, shareable bio page that showcases your personality and
                      drives engagement.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={handleCreateProfile}
                      size="lg"
                      className="bg-white text-violet-700 hover:bg-violet-50 font-semibold px-8 shadow-lg"
                    >
                      <Star className="w-5 h-5 mr-2" />
                      Create Profile Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Sparkles className="w-16 h-16 text-violet-300" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card> :
          <ProfileUrlCard handle={profilePage.handle} />
      }
      <div>
        <p className="text-muted-foreground">Manage your profile and Active Pages</p>
      </div>
      {
        activePages.length > 0 &&
        <div className="grid gap-6 md:grid-cols-3">
          {activePages.map((page) => (
            <PageCard
              key={page.pageId}
              page={{
                id: page.pageId.toString(),
                title: page.name,
                description: page.description,
                baseUrl: baseUrl,
                route: `/${user?.profileName}/${page.name}`,
                isActive: true,
              }}
              onDelete={handleDeletePage}
              onOpen={handleOpenPage}
              onEdit={handleEditPage}
            />
          ))}
        </div>}
      <div className="grid gap-6 md:grid-cols-2">
        {/* <Card
          className={`group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden`}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brush className="h-5 w-5" />
              Edit Your Profile
            </CardTitle>
            <CardDescription>Customize your profile and add links</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Update your profile information, add new links, and customize your page appearance.
            </p>
          </CardContent>
          <CardFooter>
            <Button
            className="gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200"
             asChild>
              <Link href="/dashboard/editor">
                Go to Editor <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card> */}
        <Card
          className={`group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden`}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LayoutTemplate className="h-5 w-5" />
              Browse Templates
            </CardTitle>
            <CardDescription>Select from beautiful templates</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Browse through our collection of professionally designed templates for your page.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              className="gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200"
              asChild>
              <Link href="/dashboard/temp">
                View Templates <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
