import { Template } from "@/types/template";

// export const BASE_URL: string = "https://link-app-server-1070592419718.asia-south1.run.app";
export const BASE_URL = "/api";

// export const DEFAULT_TEMPLATES = [
//     {
//         id: 1,
//         name: "Minimal",
//         description: "Clean and simple design",
//         metadata: {
//             background: "bg-white",
//             buttonStyle: "bg-black text-white rounded-md",
//         },
//     },
//     {
//         id: 2,
//         name: "Gradient",
//         description: "Colorful gradient background",
//         metadata: {
//             background: "bg-gradient-to-b from-rose-100 to-indigo-100",
//             buttonStyle: "bg-white/80 backdrop-blur rounded-lg shadow-sm",
//         },
//     },
//     {
//         id: 3,
//         name: "Dark",
//         description: "Sleek dark mode design",
//         metadata: {
//             background: "bg-gray-900",
//             buttonStyle: "bg-gray-800 text-white rounded-md border border-gray-700",
//         },
//     },
//     {
//         id: 4,
//         name: "Colorful",
//         description: "Vibrant and playful design",
//         metadata: {
//             background: "bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500",
//             buttonStyle: "bg-white/90 backdrop-blur rounded-full shadow-md",
//         },
//     },
// ];

export const DEFAULT_TEMPLATES: Template[] = [
  // === LINEAR GRADIENT TEMPLATES ===
  {
    id: 1,
    name: "Minimal",
    description: "Clean and simple design",
    metadata: {
      background: {
        background: "linear-gradient(to bottom right, #f9fafb, #ffffff)",
      },
      buttonStyle: {
        backgroundColor: "#ffffff",
        color: "#1f2937",
        border: "1px solid #e5e7eb",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
      textColor: { color: "#1f2937" },
      bioColor: { color: "#6b7280" },
      profileRing: {
        border: "4px solid rgba(255, 255, 255, 0.6)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 2,
    name: "Ocean Gradient",
    description: "Calm ocean waves gradient",
    metadata: {
      background: {
        background: "linear-gradient(to bottom right, #60a5fa, #67e8f9, #4ade80)",
      },
      buttonStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(4px)",
        color: "#1e3a8a",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#dbeafe" },
      profileRing: {
        border: "4px solid rgba(255, 255, 255, 0.4)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 3,
    name: "Sunset Gradient",
    description: "Warm sunset colors",
    metadata: {
      background: {
        background: "linear-gradient(to bottom right, #fb923c, #f87171, #ec4899)",
      },
      buttonStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(4px)",
        color: "#9a3412",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#fed7aa" },
      profileRing: {
        border: "4px solid rgba(255, 255, 255, 0.4)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 4,
    name: "Forest Gradient",
    description: "Natural green forest theme",
    metadata: {
      background: {
        background: "linear-gradient(to bottom right, #4ade80, #10b981, #0d9488)",
      },
      buttonStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(4px)",
        color: "#14532d",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#dcfce7" },
      profileRing: {
        border: "4px solid rgba(255, 255, 255, 0.4)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 5,
    name: "Purple Dream",
    description: "Vibrant purple gradient",
    metadata: {
      background: {
        background: "linear-gradient(to bottom right, #a855f7, #ec4899, #f87171)",
      },
      buttonStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(4px)",
        color: "#581c87",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#e9d5ff" },
      profileRing: {
        border: "4px solid rgba(255, 255, 255, 0.4)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 6,
    name: "Dark Gradient",
    description: "Sleek dark mode design",
    metadata: {
      background: {
        background: "linear-gradient(to bottom right, #111827, #1f2937, #000000)",
      },
      buttonStyle: {
        backgroundColor: "rgba(31, 41, 55, 0.8)",
        backdropFilter: "blur(4px)",
        color: "#ffffff",
        border: "1px solid #374151",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#d1d5db" },
      profileRing: {
        border: "4px solid #374151",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 7,
    name: "Golden Hour",
    description: "Warm golden gradient",
    metadata: {
      background: {
        background: "linear-gradient(to bottom right, #fde047, #fed7aa, #fca5a5)",
      },
      buttonStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(4px)",
        color: "#9a3412",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#9a3412" },
      bioColor: { color: "#9a3412" },
      profileRing: {
        border: "4px solid rgba(255, 255, 255, 0.5)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 8,
    name: "Ice Blue",
    description: "Cool ice crystal gradient",
    metadata: {
      background: {
        background: "linear-gradient(to bottom right, #dbeafe, #cffafe, #ccfbf1)",
      },
      buttonStyle: {
        backgroundColor: "#2563eb",
        color: "#ffffff",
        border: "1px solid #2563eb",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#1e3a8a" },
      bioColor: { color: "#1d4ed8" },
      profileRing: {
        border: "4px solid #93c5fd",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 9,
    name: "Rose Gold",
    description: "Elegant rose gold gradient",
    metadata: {
      background: {
        background: "linear-gradient(to bottom right, #fecaca, #fda4af, #fed7aa)",
      },
      buttonStyle: {
        backgroundColor: "#e11d48",
        color: "#ffffff",
        border: "1px solid #e11d48",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#881337" },
      bioColor: { color: "#be185d" },
      profileRing: {
        border: "4px solid #f9a8d4",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 10,
    name: "Cosmic Gradient",
    description: "Deep space galaxy gradient",
    metadata: {
      background: {
        background: "linear-gradient(to bottom right, #312e81, #7c3aed, #be185d)",
      },
      buttonStyle: {
        backgroundColor: "rgba(99, 102, 241, 0.3)",
        backdropFilter: "blur(4px)",
        color: "#ffffff",
        border: "1px solid rgba(129, 140, 248, 0.5)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#c7d2fe" },
      profileRing: {
        border: "4px solid rgba(129, 140, 248, 0.5)",
        borderRadius: "50%",
      },
    },
  },

  // === PATTERN TEMPLATES ===
  {
    id: 11,
    name: "Geometric Pattern",
    description: "Modern geometric shapes",
    metadata: {
      background: {
        backgroundColor: "#0f172a",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(4px)",
        color: "#0f172a",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#cbd5e1" },
      profileRing: {
        border: "4px solid rgba(255, 255, 255, 0.5)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 12,
    name: "Dots Matrix",
    description: "Retro dot matrix design",
    metadata: {
      background: {
        backgroundColor: "#312e81",
        backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      },
      buttonStyle: {
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        backdropFilter: "blur(4px)",
        color: "#ffffff",
        border: "1px solid rgba(129, 140, 248, 0.5)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#c7d2fe" },
      profileRing: {
        border: "4px solid rgba(129, 140, 248, 0.5)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 13,
    name: "Wave Pattern",
    description: "Flowing wave patterns",
    metadata: {
      background: {
        backgroundColor: "#2563eb",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Cpath d='M0 0h100v100H0z' fill='%23ffffff'/%3E%3Cpath d='M0 20c20 0 20-20 40-20s20 20 40 20 20-20 20-20v20c-20 0-20 20-40 20s-20-20-40-20S0 40 0 40z' fill='%23ffffff'/%3E%3C/g%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(4px)",
        color: "#1e3a8a",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#dbeafe" },
      profileRing: {
        border: "4px solid rgba(255, 255, 255, 0.4)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 14,
    name: "Circuit Board",
    description: "Tech circuit patterns",
    metadata: {
      background: {
        backgroundColor: "#14532d",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circuit' x='0' y='0' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Cpath d='M10 10h30v30H10z' fill='none' stroke='%2322c55e' stroke-width='0.5' opacity='0.3'/%3E%3Ccircle cx='25' cy='25' r='2' fill='%2322c55e' opacity='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23circuit)'/%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        backdropFilter: "blur(4px)",
        color: "#dcfce7",
        border: "1px solid rgba(34, 197, 94, 0.5)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#dcfce7" },
      bioColor: { color: "#bbf7d0" },
      profileRing: {
        border: "4px solid rgba(34, 197, 94, 0.5)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 15,
    name: "Hexagon Grid",
    description: "Honeycomb hex patterns",
    metadata: {
      background: {
        backgroundColor: "#6b21a8",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='hex' x='0' y='0' width='56' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23a855f7' stroke-width='1' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23hex)'/%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "rgba(196, 181, 253, 0.9)",
        backdropFilter: "blur(4px)",
        color: "#581c87",
        border: "1px solid rgba(196, 181, 253, 0.5)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#ddd6fe" },
      profileRing: {
        border: "4px solid rgba(196, 181, 253, 0.5)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 16,
    name: "Paper Texture",
    description: "Vintage paper background",
    metadata: {
      background: {
        backgroundColor: "#fbbf24",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='paper' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 0h10v10H0z' fill='%23fbbf24'/%3E%3Cpath d='M5 0h5v5H5z' fill='%23f59e0b'/%3E%3Cpath d='M0 5h5v5H0z' fill='%23f59e0b'/%3E%3Cpath d='M5 5h5v5H5z' fill='%23fbbf24'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23paper)'/%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "#fbbf24",
        color: "#ffffff",
        border: "1px solid #f59e0b",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#fbbf24" },
      bioColor: { color: "#f59e0b" },
      profileRing: {
        border: "4px solid #f59e0b",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 17,
    name: "Neon Grid",
    description: "Cyberpunk neon grid",
    metadata: {
      background: {
        backgroundColor: "#000000",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='neon' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 0h10v10H0z' fill='%23000000'/%3E%3Cpath d='M5 0h5v5H5z' fill='%2300bfff'/%3E%3Cpath d='M0 5h5v5H0z' fill='%2300bfff'/%3E%3Cpath d='M5 5h5v5H5z' fill='%23000000'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23neon)'/%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "rgba(0, 191, 255, 0.2)",
        backdropFilter: "blur(4px)",
        color: "#ffffff",
        border: "1px solid rgba(0, 191, 255, 0.5)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#00bfff" },
      bioColor: { color: "#00bfff" },
      profileRing: {
        border: "4px solid rgba(0, 191, 255, 0.5)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 18,
    name: "Marble Pattern",
    description: "Elegant marble texture",
    metadata: {
      background: {
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='marble' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 0h10v10H0z' fill='%23ffffff'/%3E%3Cpath d='M5 0h5v5H5z' fill='%23d1d5db'/%3E%3Cpath d='M0 5h5v5H0z' fill='%23d1d5db'/%3E%3Cpath d='M5 5h5v5H5z' fill='%23ffffff'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23marble)'/%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "rgba(31, 41, 55, 0.9)",
        backdropFilter: "blur(4px)",
        color: "#ffffff",
        border: "1px solid #374151",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#0f172a" },
      bioColor: { color: "#374151" },
      profileRing: {
        border: "4px solid #cbd5e1",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 19,
    name: "Triangle Mosaic",
    description: "Dynamic triangle patterns",
    metadata: {
      background: {
        backgroundColor: "#ec4899",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='triangle' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 0h10v10H0z' fill='%23ec4899'/%3E%3Cpath d='M5 0h5v5H5z' fill='%23f87171'/%3E%3Cpath d='M0 5h5v5H0z' fill='%23f87171'/%3E%3Cpath d='M5 5h5v5H5z' fill='%23ec4899'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23triangle)'/%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(4px)",
        color: "#ec4899",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#ec4899" },
      profileRing: {
        border: "4px solid rgba(255, 255, 255, 0.4)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 20,
    name: "Wood Grain",
    description: "Natural wood texture",
    metadata: {
      background: {
        backgroundColor: "#78716c",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wood' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 0h10v10H0z' fill='%2378716c'/%3E%3Cpath d='M5 0h5v5H5z' fill='%23a855f7'/%3E%3Cpath d='M0 5h5v5H0z' fill='%23a855f7'/%3E%3Cpath d='M5 5h5v5H5z' fill='%2378716c'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23wood)'/%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(4px)",
        color: "#78716c",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#a855f7" },
      profileRing: {
        border: "4px solid rgba(255, 255, 255, 0.4)",
        borderRadius: "50%",
      },
    },
  },

  // === HYBRID TEMPLATES (Gradient + Pattern) ===
  {
    id: 21,
    name: "Starry Night",
    description: "Gradient with twinkling stars",
    metadata: {
      background: {
        background: "linear-gradient(to bottom right, #312e81, #7c3aed, #be185d)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23ffffff' opacity='0.8'/%3E%3Ccircle cx='40' cy='40' r='1' fill='%23ffffff' opacity='0.8'/%3E%3Ccircle cx='60' cy='60' r='1' fill='%23ffffff' opacity='0.8'/%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        backdropFilter: "blur(4px)",
        color: "#ffffff",
        border: "1px solid rgba(129, 140, 248, 0.5)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#c7d2fe" },
      profileRing: {
        border: "4px solid rgba(129, 140, 248, 0.5)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 22,
    name: "Fabric Gradient",
    description: "Woven texture with gradient",
    metadata: {
      background: {
        background: "linear-gradient(to bottom right, #4b5563, #6b7280, #8b949e)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='fabric' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 0h10v10H0z' fill='%234b5563'/%3E%3Cpath d='M5 0h5v5H5z' fill='%236b7280'/%3E%3Cpath d='M0 5h5v5H0z' fill='%236b7280'/%3E%3Cpath d='M5 5h5v5H5z' fill='%234b5563'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23fabric)'/%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(4px)",
        color: "#0f172a",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#cbd5e1" },
      profileRing: {
        border: "4px solid rgba(255, 255, 255, 0.5)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 23,
    name: "Lava Flow",
    description: "Gradient with flowing shapes",
    metadata: {
      background: {
        background: "linear-gradient(to bottom right, #312e81, #7c3aed, #be185d)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='lava' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 0h10v10H0z' fill='%23312e81'/%3E%3Cpath d='M5 0h5v5H5z' fill='%237c3aed'/%3E%3Cpath d='M0 5h5v5H0z' fill='%237c3aed'/%3E%3Cpath d='M5 5h5v5H5z' fill='%23312e81'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23lava)'/%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(4px)",
        color: "#0f172a",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#cbd5e1" },
      profileRing: {
        border: "4px solid rgba(255, 255, 255, 0.4)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 24,
    name: "Holographic",
    description: "Iridescent rainbow effect",
    metadata: {
      background: {
        backgroundColor: "#000000",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='holographic' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 0h10v10H0z' fill='%23000000'/%3E%3Cpath d='M5 0h5v5H5z' fill='%23ffffff'/%3E%3Cpath d='M0 5h5v5H0z' fill='%23ffffff'/%3E%3Cpath d='M5 5h5v5H5z' fill='%23000000'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23holographic)'/%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(4px)",
        color: "#ffffff",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#cbd5e1" },
      profileRing: {
        border: "4px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "50%",
      },
    },
  },
  {
    id: 25,
    name: "Matrix Code",
    description: "Gradient with falling code",
    metadata: {
      background: {
        background: "linear-gradient(to bottom, #000000, #14532d)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='matrix' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 0h10v10H0z' fill='%23000000'/%3E%3Cpath d='M5 0h5v5H5z' fill='%23ffffff'/%3E%3Cpath d='M0 5h5v5H0z' fill='%23ffffff'/%3E%3Cpath d='M5 5h5v5H5z' fill='%23000000'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23matrix)'/%3E%3C/svg%3E")`,
      },
      buttonStyle: {
        backgroundColor: "rgba(20, 83, 45, 0.2)",
        backdropFilter: "blur(4px)",
        color: "#ffffff",
        border: "1px solid rgba(20, 83, 45, 0.5)",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.5rem",
        transition: "all 0.2s",
      },
      textColor: { color: "#ffffff" },
      bioColor: { color: "#cbd5e1" },
      profileRing: {
        border: "4px solid rgba(20, 83, 45, 0.5)",
        borderRadius: "50%",
      },
    },
  },
]
