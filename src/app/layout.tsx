import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation, { Footer } from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Physiotherapie Stöcker",
  description: "Professionelle Physiotherapie in Berlin - Weimarische Str. 9, 10715 Berlin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans antialiased bg-white text-black`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
