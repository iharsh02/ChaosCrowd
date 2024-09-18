"use client";
import { WalletName } from "@solana/wallet-adapter-base";
import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { LuWallet } from "react-icons/lu";

const WalletConnection = () => {
  const { select, wallets, publicKey, disconnect, connecting } = useWallet();
  const [open, setOpen] = useState<boolean>(false);

  const handleWalletSelect = async (walletName: WalletName) => {
    if (walletName) {
      try {
        select(walletName);
        setOpen(false);
      } catch (error) {
        console.log("Wallet connection error:", error);
      }
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  return (
    <div className="text-white">
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="flex gap-2 items-center">
          {!publicKey ? (
            <DialogTrigger asChild>
              <Button aria-label="Connect Wallet">
                {connecting ? (
                  <span className="loading loading-dots loading-xs"></span>
                ) : (
                  <LuWallet />
                )}
              </Button>
            </DialogTrigger>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="dark:bg-black text-center text-white px-4 py-2 rounded-md text-base font-mono font-medium hover:bg-gray-600 transition-colors">
                  <span className="text-sm">{`${publicKey.toBase58().slice(0, 4)}...${publicKey
                    .toBase58()
                    .slice(-4)}`}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black rounded-lg hover:bg-gray-600">
                <DropdownMenuItem>
                  <div
                    onClick={handleDisconnect}
                    className="w-full h-full text-center p-2  text-white backdrop-blur-sm font-mono rounded transition duration-150 ease-in-out hover:bg-gray-600"
                  >
                    Disconnect
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <DialogContent className="bg-neutral-900 border-none backdrop-blur-sm bg-opacity-90 rounded-xl shadow-2xl max-w-md">
            <DialogTitle className="text-2xl font-bold text-center mb-6 text-white">
              Select a Wallet
            </DialogTitle>
            <div className="space-y-4">
              {wallets.map((wallet) => (
                <button
                  key={wallet.adapter.name}
                  onClick={() => handleWalletSelect(wallet.adapter.name)}
                  className="w-full flex items-center space-x-3 hover:bg-gray-600 text-white rounded-lg p-3 transition duration-150 ease-in-out"
                >
                  <Image
                    src={wallet.adapter.icon}
                    alt={wallet.adapter.name}
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                  <span className="font-medium">{wallet.adapter.name}</span>
                </button>
              ))}
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default WalletConnection;