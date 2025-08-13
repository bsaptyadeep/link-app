"use client"
import { Button } from "@/components/ui/button"
import { Suspense } from "react";
import React from "react";
import LandingPageParallex from "./components/ParallaxHoverCard/LandingPageParallex";
import FaqComponent from "./components/FaqComponent";
import { useRouter } from "next/navigation";
import LogoImage from "@/public/icons/zustbio.jpg";


export default function Home() {
  const router = useRouter()

  return (
    <Suspense>
      <div className="flex flex-col min-h-screen bg-[#502274]">
        <header className="sticky top-0 z-50">
          <div className="flex items-center justify-center my-8">
            <div className="bg-white rounded-3xl w-[95%] p-2 px-4 flex flex-row justify-between items-center">
              <img src={LogoImage.src} className="h-8" alt="logo" loading='lazy' />
              <Button 
              onClick={() => {
                router.push(`/dashboard`);
              }}
              className="rounded-3xl bg-black text-white hover:bg-black">
                Login / Register
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
      </div>
    </ Suspense >
  )
}

