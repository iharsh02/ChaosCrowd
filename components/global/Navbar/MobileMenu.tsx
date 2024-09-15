"use client";

import { useRouter } from "next/navigation";

interface MobileMenuProps {
  visible?: boolean;
}

export function MobileMenu({ visible }: MobileMenuProps) {
  const router = useRouter();
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-white  dark:bg-neutral-800 rounded-md text-md w-56 absolute top-14 left-5 py-5 flex-col broder-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div
          className="px-3 text-center text-black dark:text-white  hover:underline"
          onClick={() => router.push("/discover")}
        >
          Discover
        </div>
        <div
          className="px-3 text-center text-black dark:text-white hover:underline"
          onClick={() => router.push("/dashboard")}
        >
          Create
        </div>
      </div>
    </div>
  );
}
