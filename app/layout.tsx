import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Born Elder | Creative Technologist",
  description: "Portfolio of Born Elder - Artist, Developer, and Creative Technologist based in Ajo, Arizona.",
  keywords: "Born Elder, Creative Technologist, Artist, Developer, Blockchain, NFT, Music Production, Ajo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 scanlines`}
        suppressHydrationWarning={true}
      >
        <div className="min-h-screen">
          <Navigation />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
