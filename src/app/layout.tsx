import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Root } from "./root";

import "@radix-ui/themes/styles.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prevention",
  description: "Prevention",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light-theme">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ paddingTop: "60px" }}
      >
        <Root>{children}</Root>
      </body>
    </html>
  );
}
