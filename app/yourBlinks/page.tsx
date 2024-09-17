"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { Profile } from "@/components/Discover/Profile";
import { Input } from "@/components/ui/input";
import fetchUserById from "@/lib/fetchUser";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

const FollowSuggestionCard = ({ data, handle, avatarSrc, id }) => {
  const copyToClipboard = async (id) => {
    try {
      await navigator.clipboard.writeText(
        `http://localhost:3000/api/actions/donate?id=${id}`
      );
    } catch (err) {}
  };

  return (
    <Card className="w-full mb-2 hover:scale-105 cursor-pointer">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={avatarSrc} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{data.title}</p>
            <p className="text-sm text-gray-500">@{id}</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            copyToClipboard(id);
            toast("Event has been created", {
              description: "Your link has been copied to the clipboard!",
              type: "success",
              style: {
                backgroundColor: "green", // Background color
                color: "white", // Text color
                border: "1px solid white", // Border
              },
            });
          }}
        >
          <Copy size={16} />
        </Button>
      </CardContent>
    </Card>
  );
};
const FollowSuggestions = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);

  const suggestions = [
    {
      name: "Usersname",
      handle: "crypto_tips",
      avatarSrc: "/path/to/avatar1.jpg",
    },
    {
      name: "BlockchainNews",
      handle: "chain_updates",
      avatarSrc: "/path/to/avatar2.jpg",
    },
    {
      name: "DeFiGuru",
      handle: "defi_master",
      avatarSrc: "/path/to/avatar3.jpg",
    },
  ];

  useEffect(() => {
    async function fetchSuggestions() {
      if (status === "authenticated" && session?.user?.id) {
        console.log("User ID:", session.user.id);
        try {
          const response = await fetchUserById(session.user.id);
          console.log("User data:", response.blinks);
          setUserData(response.blinks);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    }

    fetchSuggestions();
  }, [session, status]);

  return (
    <div className="  ml-[100px]  mt-10 h-[100vh] p-6 rounded-lg">
      <div className="flex">
        <div className="basis-[50%]">
          <Profile />
          <h2 className="text-xl font-bold mb-4 mt-5 text-white">
            Your Blinks!
          </h2>
          <div className="   max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 ">
            {userData?.map((suggestion, index) => (
              <FollowSuggestionCard key={suggestion.id} {...suggestion} />
            ))}
          </div>
        </div>
        <div className="basis-[50%]">
          <JupiterExchange />
        </div>
      </div>
    </div>
  );
};

// {
//     "id": "cm168xdbd000410pmkn5ri7an",
//     "data": {
//         "label": "Test",
//         "title": "Vinay",
//         "wallet": "H1V3XkxhGuADph1ajAWmTjwUcY6Y8EVX3PfXosdsP2JM",
//         "actions": [
//             {
//                 "value": "60"
//             }
//         ],
//         "imageUrl": "https://plus.unsplash.com/premium_photo-1661936361131-c421746dcd0d?q=80&w=2759&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "customInput": true,
//         "description": "kjbhjbh"
//     },
//     "createdAt": "2024-09-17T09:43:03.326Z",
//     "updatedAt": "2024-09-17T09:43:03.326Z",
//     "userId": "cm168wzb8000010pmx5fisfeu"
// }

export default FollowSuggestions;

const JupiterExchange = () => {
  return (
    <div className="max-w-md mx-auto">
      <Card className="mb-4 bg-gradient-to-br from-blue-900 to-black text-white">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 mr-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
            <h2 className="text-xl font-bold">Jupiter</h2>
          </div>

          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">
            Building the best exchange in crypto.
          </h1>

          <p className="mb-4">
            Join us as a space catdet and drive the decentralization meta
            together.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "Spot Aggregation",
              "Limit Orders",
              "DCA",
              "Perps",
              "Jupiter Start",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-white border-white hover:bg-white/20"
              >
                {item}
              </Button>
            ))}
          </div>

          <div className="relative w-40 h-40 float-right -mt-32 mr-4">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full"></div>
            <img
              src="/api/placeholder/160/160"
              alt="Space cat"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
          </div>

          <Button variant="secondary" className="mr-2">
            Swap | Jupiter
          </Button>

          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm hover:underline">
              jup.ag
            </a>
            <a href="#" className="text-sm hover:underline">
              @Jupiterxchange
            </a>
            <a href="#" className="text-sm hover:underline">
              jup
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
