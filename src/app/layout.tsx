import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { CustomCursor } from "@/components/custom-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orisabiyi David",
  description:
    "Software engineer with 4+ years of experience building production web applications across e-commerce, logistics, fintech, and AI.",
  metadataBase: new URL("https://orisabiyi-lab.vercel.app"),
  other: { "theme-color": "#FF4133" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-paper text-ink">
        <CustomCursor />
        <Nav />
        <main className="max-w-6xl mx-auto p-4 md:p-8">{children}</main>
      </body>
    </html>
  );
}