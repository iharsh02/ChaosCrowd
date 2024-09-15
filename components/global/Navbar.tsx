"use client";

import React, { useCallback, useState } from "react";
import WalletConnection from "../adapterUi/WalletConnection";
import { ModeToggle } from "./toggle-mode";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { NavbarItems } from "./Navbar/NavbarItems";
import { BsChevronDown } from "react-icons/bs";
import { MobileMenu } from "./Navbar/MobileMenu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileMenu = useCallback(() => {
    setMobileMenu((current) => !current);
  }, []);

  return (
    <div className="fixed top-5 left-0 right-0">
      <div className="flex justify-center">
        {/* mobile view */}
        <div className="flex justify-between items-center bg-white dark:bg-neutral-900 dark:text-white text-black border text-xl rounded-lg w-full lg:w-1/2 p-4">
          <div className="flex items-center gap-4">
            <div
              className="text-2xl font-bold cursor-pointer"
              onClick={() => router.push("/")}
            >
              ChaosCrowd
            </div>

            {/* Desktop view */}
            <div className="hidden lg:flex gap-4 text-sm">
              <NavbarItems label="Discover" />
              <NavbarItems label="Create" />
            </div>

            <div
              className="text-sm flex items-center gap-2 lg:hidden"
              onClick={toggleMobileMenu}
            >
              <p className="test-sm">Browse</p>
              <BsChevronDown
                className={`text-black dark:text-white transition ${
                  mobileMenu ? `rotate-180` : `rotate-0`
                }`}
              />
            </div>

            <MobileMenu visible={mobileMenu} />
          </div>

          {/* Desktop view */}
          <div className="hidden lg:flex gap-2">
            <WalletConnection />
            <ModeToggle />
          </div>

          {/* Mobile view - Hamburger icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-5 right-5 mt-2 bg-white dark:bg-neutral-800 border rounded-lg p-5 ">
          <div className="flex flex-col gap-4 text-black dark:text-white">
            <div className="flex gap-2 justify-around  items-center">
              <p>Connect Wallet</p>
              <WalletConnection />
            </div>
            <div className="flex gap-2 justify-around items-center">
              <p>Switch Modes</p> <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
