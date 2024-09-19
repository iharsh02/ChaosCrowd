"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import useStore from "@/zustand";
interface Blink {
  id: string;
  label: string;
  username: string | null;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  userId: string;
}

export function Bar() {
  const [search, setSearch] = useState("");

  const setBlink = useStore((state) => state.setBlink);
  const defaultBlink = useStore((state) => state.defaultBlink);

  function searchObjects(array: Blink[], searchTerm: string) {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return array.filter((obj) => {
      return Object.values(obj).some((value) => {
        return String(value).toLowerCase().includes(lowerSearchTerm);
      });
    });
  }

  const router = useRouter();
  return (
    <div
      className="flex items-center justify-between
      rounded-lg mt-2 dark:bg-neutral-900
      text-black dark:text-white
      p-4 bg-white border drop-shadow-lg"
    >
      <div className="text-2xl">Links</div>
      <div className="flex gap-4">
        <Input
          type="search"
          placeholder="search"
          className="hidden md:flex"
          onChange={(e) => {
            setSearch(e.target.value);
            setBlink(searchObjects(defaultBlink, e.target.value));
          }}
        />
        <Button onClick={() => router.push("/dashboard")}>Create Blink</Button>
      </div>
    </div>
  );
}
