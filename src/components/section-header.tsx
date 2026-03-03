import Link from "next/link";

interface SectionHeaderProps {
  label: string;
  href?: string;
  linkText?: string;
}

export function SectionHeader({ label, href, linkText = "Show More" }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between pb-4 mb-8 border-b border-border">
      <span className="text-xs font-semibold tracking-wider lowercase text-muted">
        {label}
      </span>
      {href && (
        <Link
          href={href}
          className="text-xs font-medium text-dim tracking-wide hover:text-foreground transition-colors"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}
