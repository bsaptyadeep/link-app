export const BASE_URL: string = "https://link-app-server-1070592419718.asia-south1.run.app"


export const DEFAULT_TEMPLATES = [
    {
        id: 1,
        name: "Minimal",
        description: "Clean and simple design",
        metadata: {
            background: "bg-white",
            buttonStyle: "bg-black text-white rounded-md",
        },
    },
    {
        id: 2,
        name: "Gradient",
        description: "Colorful gradient background",
        metadata: {
            background: "bg-gradient-to-b from-rose-100 to-indigo-100",
            buttonStyle: "bg-white/80 backdrop-blur rounded-lg shadow-sm",
        },
    },
    {
        id: 3,
        name: "Dark",
        description: "Sleek dark mode design",
        metadata: {
            background: "bg-gray-900",
            buttonStyle: "bg-gray-800 text-white rounded-md border border-gray-700",
        },
    },
    {
        id: 4,
        name: "Colorful",
        description: "Vibrant and playful design",
        metadata: {
            background: "bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500",
            buttonStyle: "bg-white/90 backdrop-blur rounded-full shadow-md",
        },
    },
]
