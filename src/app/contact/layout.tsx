import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for project collaborations, remote opportunities, or just to say hello. Available for full-time remote roles and contract work.",
  openGraph: {
    title: "Contact | Orisabiyi David",
    description:
      "Get in touch for project collaborations, remote opportunities, or just to say hello.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}