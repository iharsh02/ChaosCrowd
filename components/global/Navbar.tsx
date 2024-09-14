"use client";
import React, { useState } from 'react';
import WalletConnection from "../adapterUi/WalletConnection";
import { ModeToggle } from "./toggle-mode";
import { Menu } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-5 left-0 right-0">
      <div className="flex justify-center">
        <div className="flex justify-between items-center bg-white dark:bg-neutral-900 dark:text-white text-black border text-xl rounded-lg w-full lg:w-1/2 p-4">
          <div className="text-2xl">ChaosCrowd</div>
          
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
            <div className='flex gap-2 justify-around  items-center'>
             <p>Connect Wallet</p>
              <WalletConnection />
            </div>
            <div className='flex gap-2 justify-around items-center'>
              <p>Switch Modes</p> <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
