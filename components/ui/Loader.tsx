import { LoaderCircle } from "lucide-react";

export default function Loader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full py-10 text-gray-700 animate-fade-in">
      <LoaderCircle className="animate-spin w-10 h-10 text-blue-500 mb-3" />
      <p className="text-lg font-medium">{text}</p>
    </div>
  );
}
