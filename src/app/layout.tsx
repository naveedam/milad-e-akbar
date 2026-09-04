import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const nastaliq = localFont({
  src: "../../public/fonts/NotoNastaliqUrdu-Regular.ttf",
  variable: "--font-urdu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milad-e-Akbar",
  description: "Digital Reader & Recitor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${nastaliq.variable}`}>
        {children}
      </body>
    </html>
  );
}