import React from "react";
import { Share, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CardProps {
  id: string;
  name: string | null;
  title: string;
  image: string;
  description: string;
}

export function Card({ name, title, image, description, id }: CardProps) {
  const { toast } = useToast();

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const specificPath = `/api/actions/donate?id=${id}`;
  const fullUrl = `${baseUrl}${specificPath}`;

  // New Solana action URL
  const solanaActionUrl = `https://dial.to/?action=solana-action:${encodeURIComponent(
    fullUrl
  )}&cluster=devnet`;

  const handleCopyUrl = () => {
    navigator.clipboard
      .writeText(solanaActionUrl)
      .then(() => {
        toast({
          title: "URL Copied",
          description:
            "The Solana action URL has been copied to your clipboard.",
          className: "bg-green-800 text-white border-green-600",
        });
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
        toast({
          title: "Error",
          description: "Failed to copy URL. Please try again.",
          variant: "destructive",
          className: "bg-red-500 text-white border-red-600",
        });
      });
  };

  const handleShare = () => {
    const tweetText = encodeURIComponent(
      `Check out this Solana campaign: ${title}\n\n`
    );
    const tweetUrl = encodeURIComponent(solanaActionUrl);
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;

    // Open Twitter share dialog in a new window
    window.open(twitterShareUrl, "_blank");
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-neutral-800 text-black dark:text-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center">
          <div>
            <div className="text-sm font-medium">{title}</div>
            <div className="text-sm ">posted by : {name}</div>
          </div>
        </div>
        <p className="mt-2">{description}</p>
        <img
          className="mt-2 object-cover rounded-2xl w-full"
          src={image || ""}
          alt="image"
        />
        <div className="mt-4 flex justify-between text-gray-500">
          <Button
            variant="ghost"
            className="flex items-center space-x-2 hover:text-green-500"
            onClick={handleShare}
          >
            <Share size={18} />
            <span>share</span>
          </Button>
          <Button
            variant="ghost"
            className="flex items-center space-x-2 hover:text-blue-500"
            onClick={handleCopyUrl}
          >
            <Copy size={18} />
            <span>copy</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
