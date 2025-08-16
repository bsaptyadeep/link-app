import {
  Plus,
  Minus,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Music,
  Github,
  Globe,
} from "lucide-react"

export const socialPlatforms = [
  {
    name: "instagram",
    icon: <Instagram className="w-5 h-5" />,
    color: "text-pink-600",
    placeholder: "https://instagram.com/username",
  },
  {
    name: "youtube",
    icon: <Youtube className="w-5 h-5" />,
    color: "text-red-600",
    placeholder: "https://youtube.com/channel",
  },
  {
    name: "facebook",
    icon: <Facebook className="w-5 h-5" />,
    color: "text-blue-600",
    placeholder: "https://facebook.com/username",
  },
  {
    name: "twitter",
    icon: <Twitter className="w-5 h-5" />,
    color: "text-sky-500",
    placeholder: "https://twitter.com/username",
  },
  {
    name: "linkedin",
    icon: <Linkedin className="w-5 h-5" />,
    color: "text-blue-700",
    placeholder: "https://linkedin.com/in/username",
  },
  {
    name: "tiktok",
    icon: <Music className="w-5 h-5" />,
    color: "text-black",
    placeholder: "https://tiktok.com/@username",
  },
  {
    name: "discord",
    icon: <MessageCircle className="w-5 h-5" />,
    color: "text-indigo-600",
    placeholder: "https://discord.gg/server",
  },
  {
    name: "github",
    icon: <Github className="w-5 h-5" />,
    color: "text-gray-800",
    placeholder: "https://github.com/username",
  }
]