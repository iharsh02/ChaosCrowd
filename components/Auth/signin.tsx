"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export function Login() {
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/discover" });
  };

  return (
    <div className="h-[100vh] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Sign in to your account to continue
              </p>
            </div>
            <Separator />
            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full py-6 flex items-center justify-center space-x-3 text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-600 border border-gray-300 dark:border-gray-600 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FcGoogle className="w-6 h-6" />
              <span>Continue with Google</span>
            </Button>
          </div>
          <div className="px-8 py-4 bg-gray-50 dark:bg-neutral-900 text-center">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              By signing in, you agree to our{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
