import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
  title: "Streamyfin",
  description: "A modern Jellyfin client for iPhone, iPad, Apple TV and Android with support for downloads, Live TV, skip intro & credits, trickplay images and more!",
  // Used for link previews (Discord, iMessage, social media)
  openGraph: {
    title: "Streamyfin: now on Apple TV",
    description: "A modern Jellyfin client for iPhone, iPad, Apple TV and Android.",
    url: "https://streamyfin.app",
    siteName: "Streamyfin",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
