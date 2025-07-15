"use client"
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import TwitterIcon from "./SVGAssests/TwitterIcon";
import InstagramIcon from "./SVGAssests/InstagramIcon";
import TiktokIcon from "./SVGAssests/TiktokIcon";
import SpotifyIcon from "./SVGAssests/SpotifyIcon";
import PageClaimBox from "../PageClaimBox";

export default function LandingPageParallex() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    setMousePosition({
      x: mouseX / 20, // Increased divisor for smoother movement across larger area
      y: mouseY / 20,
    })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <div className="flex flex-col lg:flex-row" onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}>
      <div className="m-2 md:w-full lg:w-1/2 flex flex-col gap-10">
        <div className="md:ml-10 flex flex-col gap-10">
          <h1 className="text-[#d2e823] font-[820] text-center md:text-left tracking-[-0.02em] max-w-none ml-0 mr-auto font-[Linksans Linksansvf,sans-serif] text-4xl md:text-[6.28vw] leading-[107%]">
            Your style is your Identity, be the Master of your brand.
          </h1>
          <p className="font-[418] mb-0 font-[Linksans Linksansvf,sans-serif] text-center md:text-left md:text-[1.29vw] font-normal leading-[150%] text-white">Today’s top brands do more than sell — they stand for something. From sustainability to social good, purpose-driven branding is shaping a better world. </p>

        </div>
        {/* CTA Buttons */}
        <PageClaimBox />
      </div>
      <div
        className="hidden  min-h-screen w-1/2 md:flex items-center justify-center p-8 cursor-pointer"
      >
        <motion.div
          className="relative"
          animate={{
            translateZ: isHovered ? 120 : 80,
            translateX: mousePosition.x * 0.2,
            translateY: mousePosition.y * 0.2,
            rotateY: mousePosition.x * 0.3,
            rotateX: mousePosition.y * 0.2,// Add 30 degrees to the base rotation
            scale: isHovered ? 1.05 : 1,
          }}
          initial={{
            rotateY: 30, // Set initial rotation to 30 degrees
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          <motion.div
            className="relative w-80 h-[620px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl"
            animate={{
              translateZ: isHovered ? 20 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/landing-page-mockup.png')]"
                animate={{
                  translateZ: isHovered ? 10 : 0,
                  translateX: mousePosition.x * 0.1,
                  translateY: mousePosition.y * 0.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
              <motion.div
                className="relative z-20 px-6 space-y-4"
                animate={{
                  translateZ: isHovered ? 50 : 0,
                  translateX: mousePosition.x * 0.4,
                  translateY: mousePosition.y * 0.4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >

                <motion.div
                  className="absolute bottom-[10px] left-[60px] rounded-full px-6 py-2"
                  animate={{
                    translateZ: isHovered ? 100 : 0,
                    translateX: mousePosition.x * 2,
                    translateY: mousePosition.y * 2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}>
                  <div>

                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-80 left-[60px] bg-white rounded-full px-6 py-2"
                animate={{
                  translateZ: isHovered ? 120 : 80,
                  translateX: mousePosition.x * 0.4,
                  translateY: mousePosition.y * 0.4,
                  rotateY: mousePosition.x * 0.3,
                  rotateX: mousePosition.y * 0.2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <p>Listen to Podcast</p>
              </motion.div>

              <motion.div
                className="absolute top-[260px] left-[60px] bg-white rounded-full px-6 py-2"
                animate={{
                  translateZ: isHovered ? 120 : 80,
                  translateX: mousePosition.x * 0.4,
                  translateY: mousePosition.y * 0.4,
                  rotateY: mousePosition.x * 0.3,
                  rotateX: mousePosition.y * 0.2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}>
                <p>Check out Dates</p>
              </motion.div>

              <motion.div
                className="absolute top-32 right-4 w-3 h-3 bg-yellow-400 rounded-full opacity-60"
                animate={{
                  translateZ: isHovered ? 100 : 0,
                  translateX: mousePosition.x * 1.2,
                  translateY: mousePosition.y * 1.2,
                  rotate: isHovered ? 180 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
              <motion.div
                className="absolute top-48 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-60"
                animate={{
                  translateZ: isHovered ? 110 : 0,
                  translateX: mousePosition.x * 1.5,
                  translateY: mousePosition.y * 1.5,
                  rotate: isHovered ? -180 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            </div>

            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
          </motion.div>

          <motion.div
            className="absolute -right-20 bottom-20 bg-white/15 backdrop-blur-sm rounded-2xl p-4 w-64 shadow-2xl border border-white/20 flex flex-row justify-between"
            animate={{
              translateZ: isHovered ? 120 : 80,
              translateX: mousePosition.x * 0.8,
              translateY: mousePosition.y * 0.8,
              rotateY: mousePosition.x * 0.3,
              rotateX: mousePosition.y * 0.2,
            }}
            initial={{
              translateZ: 80,
              rotateY: 15,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 25,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className="bg-white p-3 rounded-full w-fit">
              <TwitterIcon />
            </div>
            <div className="bg-white p-3 rounded-full w-fit">
              <InstagramIcon />
            </div>
            <div className="bg-white p-3 rounded-full w-fit">
              <TiktokIcon />
            </div>
            <div className="bg-white p-3 rounded-full w-fit">
              <SpotifyIcon />
            </div>
          </motion.div>

          {/* Shadow */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-black/20 rounded-full blur-xl"
            animate={{
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.6 : 0.3,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
