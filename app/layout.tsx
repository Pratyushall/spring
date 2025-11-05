import type React from "react";
import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "SpringMonsoon — Small, beautiful web experiences",
  description: "Luxury minimal web developer portfolio",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <Header />
        <div className="pb-20">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
