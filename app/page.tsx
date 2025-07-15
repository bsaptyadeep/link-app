"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { lazy, Suspense } from "react";
import React from "react";
import EasyCustomizeImage from "@/assets/images/easy-customize.avif";
import BrandImage from "@/assets/images/brand.avif";
import StartImage from "@/assets/images/start.avif";
import LandingPageParallex from "./components/ParallaxHoverCard/LandingPageParallex";
import FaqComponent from "./components/FaqComponent";
const StartStep = lazy(() => import('@/components/landing-page/startupStep'));


export default function Home() {
  return (
    <Suspense>
      <div className="flex flex-col min-h-screen bg-[#502274]">
        <header className="sticky top-0 z-50">
          <div className="flex items-center justify-center my-8">
            <div className="bg-white rounded-3xl w-[95%] p-2 flex flex-row justify-between">
              <div></div>
              <Button className="rounded-3xl bg-black text-white hover:bg-black">
                Comming Soon
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section>
            <LandingPageParallex />
          </section>
          <section>
            <FaqComponent />
          </section>
        </main>
        {/* <footer className="border-t bg-white">
          <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <span className="bg-primary text-primary-foreground p-1 rounded-md">Link</span>
                <span>Hub</span>
              </div>
              <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} LinkHub. All rights reserved.</p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer> */}
      </div>
    </ Suspense >
  )
}

