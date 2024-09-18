import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import AppWalletProvider from "@/provider/AppWalletProvider";
import Boilerplate from "@/components/global/Boilerplate";
import { Providers } from "@/provider/SessionProvider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ChaosCrowd",
  description:
    "Empowering creators and innovators to bring their ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AppWalletProvider>
              <Boilerplate>
                {children}
                <Toaster />
              </Boilerplate>
            </AppWalletProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
