import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
const display = Cormorant_Garamond({ variable: "--display", subsets: ["latin"], weight: ["400","500","600"] });
const sans = Manrope({ variable: "--sans", subsets: ["latin"] });
export const metadata: Metadata = { title: "Aurora Stays — Sleep Under Another Sky", description: "Secluded Arctic cabins in Norway." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>; }
