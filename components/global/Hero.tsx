"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { signIn, useSession } from "next-auth/react";

export function Hero() {
  const router = useRouter();
  const session = useSession();
  return (
    <section className="flex items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6">
          Easy Project Funding
          <br className="hidden sm:inline" />
          <span className="text-gray-700 dark:text-gray-300">
            Through Social Sharing
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Create{" "}
          <b>
            <u>Blink</u>
          </b>
          , share it on social media, and connect with backers who believe in
          your vision. Our platform makes it easy to showcase your ideas and
          secure the funding you need to bring them to life.
        </p>

        {!session.data?.user ? (
          <Button
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-black dark:text-black dark:bg-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300 ease-in-out"
            onClick={() => signIn()}
          >
            Sign In
          </Button>
        ) : (
          <Button
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-black dark:text-black dark:bg-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300 ease-in-out"
            onClick={() => router.push("/dashboard")}
          >
            Get Started
          </Button>
        )}
      </div>
    </section>
  );
}
