import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfitFont = Outfit({
  display: "swap",
  subsets: ["latin"],
  weights: ["400", "700"],
});

export const metadata = {
  title: "Shortify - URL shortener",
  description: "A mininmalistic URL shortener application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-yellow-50 ${geistSans.variable} ${geistMono.variable} ${outfitFont.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}