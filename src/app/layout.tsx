import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { CustomCursor } from "@/components/custom-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Orisabiyi David | Software Engineer",
    template: "%s | Orisabiyi David",
  },
  description:
    "Software engineer with 4+ years of experience shipping production web applications across e-commerce, logistics, fintech, and AI. Specializing in Next.js, TypeScript, Node.js, and AI integrations. Open to remote opportunities worldwide.",
  metadataBase: new URL("https://orisabyi.com"),
  applicationName: "Orisabiyi David Portfolio",
  authors: [{ name: "Orisabiyi David", url: "https://orisabyi.com" }],
  creator: "Orisabiyi David",
  keywords: [
    "Orisabiyi David",
    "software engineer",
    "fullstack developer",
    "frontend engineer",
    "Next.js developer",
    "TypeScript",
    "Node.js",
    "React developer",
    "Python developer",
    "AI engineer",
    "RAG pipeline",
    "LangChain",
    "remote developer",
    "hire developer",
    "portfolio",
  ],
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23F3EDE1'/%3E%3Crect x='0' y='82' width='100' height='18' fill='%23FF4133'/%3E%3Ctext x='50' y='66' text-anchor='middle' font-family='Georgia, serif' font-size='52' font-weight='900' fill='%230D0D0D'%3EOD%3C/text%3E%3C/svg%3E",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Orisabiyi David",
    title: "Orisabiyi David | Software Engineer",
    description:
      "I build things that work in production. 4+ years shipping e-commerce platforms, logistics infrastructure, fintech tools, and AI systems. Open to remote opportunities worldwide.",
    url: "https://orisabyi.com",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Orisabiyi David — Engineer · Builder · Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DevOrisabiyi",
    creator: "@DevOrisabiyi",
    title: "Orisabiyi David | Software Engineer",
    description:
      "I build things that work in production. 4+ years shipping e-commerce platforms, logistics infrastructure, fintech tools, and AI systems.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://orisabyi.com",
  },
  other: {
    "theme-color": "#FF4133",
  },
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