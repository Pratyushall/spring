import type React from "react";
import type { Metadata } from "next";
import { Outfit, Crimson_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SpringMonsoonBackground } from "@/components/spring-monsoon-background";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "SpringMonsoon | Aesthetic Web Design & Branding for Creative Studios",
  description:
    "A studio creating aesthetic websites, logos, and branding for cafés, architects, interior designers, and boutique studios in India.",
  keywords:
    "web design, branding, logo design, café websites, architect websites, interior designer websites, Hyderabad, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${crimsonText.variable}`}>
      <body className="font-sans antialiased">
        <SpringMonsoonBackground />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
