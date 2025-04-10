import type { Metadata } from "next";
import { Geist } from "next/font/google"; 
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const geist = Geist({
  variable: "--font-geist", 
  subsets: ["latin"],       
});


export const metadata: Metadata = {
  title: "Your Portfolio",
  description:
    "A personal portfolio built with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased font-geist`}>
        <Navbar /> 
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <Footer /> 
      </body>
    </html>
  );
}