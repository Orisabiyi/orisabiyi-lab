import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Orisabiyi Lab",
  description:
    "I'm Orisabiyi, a designer, software engineer and product thinker. Orisabiyi Lab is my space where I build things that matter, explore ideas that excite me and share the journey as it unfolds."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased bg-white`}>{children}</body>
    </html>
  );
}
