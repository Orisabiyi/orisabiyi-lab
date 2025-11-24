import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orisabiyi-lab.vercel.app"),
  title: {
    default: "Orisabiyi | Orisabiyi David | Orisabiyi Lab | Designer, Software Engineer, Full-Stack Engineer & Product Thinker",
    template: "%s | Orisabiyi Lab",
  },
  description:
    "I'm Orisabiyi, a designer, software engineer and product thinker. Orisabiyi Lab is my space where I build things that matter, explore ideas that excite me and share the journey as it unfolds.",
  verification: {
    google: "RW-SVzKPYwN0phkr-oAz6WaXcuDV542VlcQJWUD9AbI",
    other: {
      "msvalidate.01": "3603F95AD54D3D426F263B58A813250C",
    }
  },
  other: {
    'link:preconnect': [
      'https://orisabiyi-lab.vercel.app',
      'https://fonts.googleapis.com',
      'https://vitals.vercel-insights.com'
    ]
  },
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Development",
    "Portfolio",
    "Frontend Engineer",
    "Backend Developer",
    "Product Thinker",
    "UI/UX Designer",
    "Orisabiyi Lab",
    "Orisabiyi David",
    "Tech Blogger",
    "Open Source Contributor",
    "JavaScript Developer",
    "Node.js Developer",
    "TailwindCSS",
    "NestJS",
    "Web Applications",
    "Digital Experiences",
  ],
  authors: [{ name: "Orisabiyi", url: "https://orisabiyi-lab.vercel.app" }],
  creator: "Orisabiyi",
  publisher: "Orisabiyi",
  openGraph: {
    type: "website",
    url: "https://orisabiyi-lab.vercel.app",
    title: "Orisabiyi | Orisabiyi David | Orisabiyi Lab | Designer, Software Engineer, Full-Stack Engineer & Product Thinker",
    description:
      "I'm Orisabiyi, a designer, software engineer and product thinker. Orisabiyi Lab is my space where I build things that matter, explore ideas that excite me and share the journey as it unfolds.",
    siteName: "Orisabiyi Lab",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Orisabiyi Lab",
      },
    ],
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orisabiyi | Orisabiyi David | Orisabiyi Lab | Designer, Software Engineer, Full-Stack Engineer & Product Thinker",
    description:
      "I'm Orisabiyi, a designer, software engineer and product thinker. Orisabiyi Lab is my space where I build things that matter, explore ideas that excite me and share the journey as it unfolds.",
    images: ["/og-image.png"],
    creator: "@DevOrisabiyi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://orisabiyi-lab.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={`${sora.className} antialiased relative bg-gray-100`}>{children}</body>
    </html>
  );
}
