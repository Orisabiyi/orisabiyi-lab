import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Orisabiyi David | Software Engineer",
  description:
    "Software engineer with 4+ years of experience building production web applications across e-commerce, logistics, fintech, and AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <CustomCursor />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
