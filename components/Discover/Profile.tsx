"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
export function Profile() {
  const session = useSession();
  return (
    <div>
      <div className="flex justify-between p-5 items-center
       text-black dark:text-white
       bg-white border drop-shadow-lg
       dark:bg-neutral-900 rounded-lg">

        <div className="text-xl flex flex-col gap-2">
          <div>{session.data?.user.name}</div>
          <div className="underline">{session.data?.user.email}</div>
        </div>
        <Image src={session.data?.user.image  || ""
        } alt="profile" width={100} height={100}
         className="
            rounded-full
         " />
      </div>
    </div>
  );
}
