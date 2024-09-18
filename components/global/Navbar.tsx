"use client";
import WalletConnection from "../adapterUi/WalletConnection";
import { ModeToggle } from "./toggle-mode";
import { useRouter } from "next/navigation";
import { NavbarItems } from "./Navbar/NavbarItems";
import { BsChevronDown } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaUserAstronaut } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoLogOutOutline } from "react-icons/io5";
import { GoSignIn } from "react-icons/go";
export function Navbar() {
  const router = useRouter();

  const session = useSession();

  return (
    <div className="fixed top-5 left-0 right-0 z-20">
      <div className="flex justify-center">
        {/* mobile view */}
        <div className="flex justify-between items-center bg-white dark:bg-neutral-800 dark:text-white text-black border text-xl rounded-lg w-full lg:w-1/2 p-4">
          <div className="flex items-center gap-4">
            <div
              className="text-2xl font-bold cursor-pointer"
              onClick={() => router.push("/")}
            >
              ChaosCrowd
            </div>
            {/* Desktop view */}

            <div className="hidden lg:flex gap-4 text-sm">
              <NavbarItems
                label="Discover"
                onClick={() => router.push("/discover")}
              />
              <NavbarItems
                label="Create"
                onClick={() => router.push("/dashboard")}
              />
            </div>

            {/* mobile view */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="text-sm flex items-center gap-2 lg:hidden">
                  <p className="test-sm">Browse</p>
                  <BsChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => router.push("/discover")}>
                  Discover
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                  Create
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop view */}
          <div className="flex gap-2">
            <div className="hidden md:block">
              <WalletConnection />
            </div>

            {!session.data?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="flex items-center cursor-pointer">
                    <AvatarImage
                      src="/avatar.png"
                      height={30}
                      width={30}
                      className="rounded-full"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-center md:hidden">
                      <WalletConnection />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex items-center justify-around gap-5 ">
                      <ModeToggle />
                      <span>Toggle Mode</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div
                      className="flex items-center gap-5 justify-around  w-full"
                      onClick={() => signIn()}
                    >
                      <div className="text-2xl">
                        <GoSignIn />
                      </div>
                      <span>Sign In</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="flex items-center cursor-pointer">
                    <AvatarImage
                      src={session?.data.user.image}
                      height={40}
                      width={40}
                      className="rounded-full"
                    />
                    <AvatarFallback>
                      <FaUserAstronaut />
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    <div className="flex items-center justify-between gap-2">
                      <Avatar>
                        <AvatarImage
                          src={session.data.user.image}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </Avatar>
                      <div>{session.data.user.name}</div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-center md:hidden">
                      <WalletConnection />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex justify-between items-center gap-4">
                      <ModeToggle /> <span>Toggle Mode</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div
                      className="flex justify-around w-full gap-2"
                      onClick={() => signOut()}
                    >
                      <div className="text-2xl">
                        <IoLogOutOutline />
                      </div>
                      <span>Log Out</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
