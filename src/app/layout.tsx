import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-brutalist",
});

export const metadata: Metadata = {
  title: "FitLand | DOMINATE YOUR POTENTIAL",
  description: "Premier gym in Tbilisi. Est. 2020. Elevate your fitness with elite coaching and premium equipment.",
  keywords: ["Gym", "Tbilisi", "Fitness", "Training", "Coaching", "FitLand"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans bg-zinc-950 text-white selection:bg-brand-primary selection:text-black min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
