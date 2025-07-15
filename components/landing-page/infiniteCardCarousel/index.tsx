"use client"
import { useState, useEffect } from "react"
import { motion, useMotionValue, animate } from "framer-motion"
import FlipCard from "./components/FlipCard";
import useMeasure from "react-use-measure";
import cardStyles from "./components/FlipCard/styles.module.css";
import { LANDING_PAGE_INFINITE_CARD_CAROUSEL_ANIMATION_DURATION, landingPageCards } from "./utils/constants";
import { v4 as uuidv4 } from 'uuid';

const animationDuration: number = LANDING_PAGE_INFINITE_CARD_CAROUSEL_ANIMATION_DURATION;

export default function InfiniteCardCarousel() {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [stopScroll, setStopScroll] = useState<boolean>(false);
  const [mustFinish, setMustFinish] = useState<boolean>(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 20;

    if (stopScroll) return;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: animationDuration - (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
        }
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: animationDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0
      });
    }

    return controls?.stop;
  }, [xTranslation, width, stopScroll, mustFinish])

  return (
    <div className="relative h-[500px] overflow-hidden">
      <motion.div ref={ref} className="absolute left-0 flex overflow-x-hidden py-8 px-4 scroll-smooth"
        onHoverStart={() => {
          setStopScroll(true);
          setMustFinish(true);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setStopScroll(false);
        }}
        style={{ x: xTranslation }}>
        {[...landingPageCards, ...landingPageCards].map((card) => (
          <FlipCard
          key={uuidv4()}
            width={card.width}
            front={
              <div className={`${cardStyles.flipCardFront} w-full h-full`}
                style={{
                  background: `url(${card.image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: `${card.borderRadius}px`,
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 20px 0px"
                 }}
              >
              </div>}
            back={
              <div className={`${cardStyles.flipCardBack} w-full h-full ${card.color} flex items-center justify-center
            text-bold text-20`}
            style={{
              borderRadius: `${card.borderRadius}px`,
              boxShadow: "rgba(0, 0, 0, 0.12) 0px 20px 20px 0px"
             }}
            >
                <div className="px-5 py-1 bg-white rounded-xl">
                  {card.title}
                </div>
              </div>}
          />
        ))}
      </motion.div>
    </div>
  )
}
