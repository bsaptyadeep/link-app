"use client"

import type React from "react"

import { Suspense, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { House, BarChart3, Brush, LayoutTemplate, LogOut, Menu, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/dashboard", icon: House, current: pathname === "/dashboard"},
    { name: "Editor", href: "/dashboard/editor", icon: Brush, current: pathname === "/dashboard/editor" },
    {
      name: "Templates",
      href: "/dashboard/temp",
      icon: LayoutTemplate,
      current: pathname === "/dashboard/temp",
    },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
      current: pathname === "/dashboard/analytics",
      disabled: true,
    },
  ]


  return (
    <Suspense>
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-lg font-semibold"
                onClick={() => setIsMobileNavOpen(false)}
              >
                <span className="bg-primary text-primary-foreground p-1 rounded-md">Link</span>
                <span>Hub</span>
              </Link>
              <div className="my-4 h-px bg-muted" />
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.disabled ? "#" : item.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                    item.current ? "bg-muted" : "hover:bg-muted"
                  } ${item.disabled ? "pointer-events-none opacity-50" : ""}`}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <span className="bg-primary text-primary-foreground p-1 rounded-md">Link</span>
          <span>Hub</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/johndoe" target="_blank">
              Preview
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <div className="relative h-8 w-8 rounded-full bg-muted">
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">JD</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/johndoe" target="_blank">
                  <User className="mr-2 h-4 w-4" />
                  <span>View profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/20 md:block">
          <nav className="grid gap-2 p-4 text-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.disabled ? "#" : item.href}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                  item.current ? "bg-muted" : "hover:bg-muted"
                } ${item.disabled ? "pointer-events-none opacity-50" : ""}`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
    </Suspense>
  )
}

