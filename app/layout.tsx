import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
// import { sora, manrope } from "./fonts";
// import { sora ,manrope } from "./fonts";

// import Navbar from "@/components/layout/Navbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});


export const metadata: Metadata = {
  title: "afreecycle",
  description: "Transformation, assainissement (eau et air) Tri et traitement des déchets organiques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr" className={`${sora.variable} ${manrope.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    // <html lang="en">
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //   >
    //     {children}
    //   </body>
    // </html>
  );
}
