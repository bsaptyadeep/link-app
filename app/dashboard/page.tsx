"use client"
import Link from "next/link";
import { Earth, ArrowRight, Brush, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Page } from "@/types/page";
import { useEffect, useState } from "react";
import PageService from "../../lib/services/page";
import UserService from "../../lib/services/user";
import { User } from "@/types/User";

export default function DashboardPage() {
  const [activePages, setActivePages] = useState<Page[]>([]);
  const PageServiceInstance = PageService.getInstance();
  // const baseUrl = window.location.origin;
  const UserServiceInstance = UserService.getInstance();
  const [user, setUser] = useState<User|null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const pageRes = await PageServiceInstance.getPages();
        setActivePages(pageRes);
        const userRes = await UserServiceInstance.getUser();
        setUser(userRes)
      } catch (error) {
        console.error("Error in fetchPages", error)
      }
    }
    load();
  }, [])

  return (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome, John!</h1>
        <p className="text-muted-foreground">Manage your LinkHub profile and Active Pages</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {activePages.map((page) => (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {page.name}
              </CardTitle>
              <CardDescription>{page.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                {/* <code className="rounded bg-muted px-2 py-1">{baseUrl}/{user?.profileName}/{page.name}</code> */}
                <Button variant="outline" size="sm">
                  Copy
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex-row gap-3">
              <Button asChild>
                <Link href="/dashboard/editor">
                  Edit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant={"outline"} asChild>
                <Link href={`/${page.name}`}>
                  Open <Earth className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
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
            <Button asChild>
              <Link href="/dashboard/editor">
                Go to Editor <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
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
            <Button asChild>
              <Link href="/dashboard/temp">
                View Templates <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Your LinkHub URL</h2>
          <div className="flex items-center gap-2">
            <code className="rounded bg-muted px-2 py-1">linkhub.com/johndoe</code>
            <Button variant="outline" size="sm">
              Copy
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Share this URL with your audience to direct them to your LinkHub page.
          </p>
        </div>
      </div>
    </div>
  );
}
