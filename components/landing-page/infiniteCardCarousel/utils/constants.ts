export const LANDING_PAGE_INFINITE_CARD_CAROUSEL_ANIMATION_DURATION: number = 50;
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import { ILandingPageCardCarousel } from "./interface";

export const landingPageCards: ILandingPageCardCarousel[] = [
    {
      id: 1,
      title: "Creative Design",
      color: "bg-amber-400",
      image: Image1,
      borderRadius: 200,
      width: 300
    },
    {
      id: 2,
      title: "Strategic Thinking",
      color: "bg-gray-200",
      image: Image2,
      borderRadius: 50,
      width: 500
    },
    {
      id: 3,
      title: "Modern Aesthetics",
      color: "bg-amber-100",
      image: Image3,
      borderRadius: 20,
      width: 500
    },
    {
      id: 4,
      title: "Creative Design",
      color: "bg-amber-400",
      image: Image1,
      borderRadius: 200,
      width: 300
    },
    {
      id: 5,
      title: "Strategic Thinking",
      color: "bg-gray-200",
      image: Image2,
      borderRadius: 50,
      width: 500
    },
    {
      id: 6,
      title: "Modern Aesthetics",
      color: "bg-amber-100",
      image: Image3,
      borderRadius: 20,
      width: 500
    }
  ]
