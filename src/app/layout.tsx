import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Build & Grow AI Hackathon 2.0",
  description: "Build and Grow AI Hackathon by GDG Cloud Mumbai and GDG Cloud Pune",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="overflow-x-hidden max-w-[100vw] bg-[#0e0e0e]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
