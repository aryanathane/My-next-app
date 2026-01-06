import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Contact Manager",
  description: "Simple contact manager application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-50 bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8"></main>
          {children}
        </div>
      </body>
    </html>
  );
}
