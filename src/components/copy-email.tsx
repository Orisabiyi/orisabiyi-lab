"use client";

import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";
import { SITE } from "@/data/constants";

interface CopyEmailProps {
  className?: string;
}

export function CopyEmail({ className }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2.5 text-[15px] font-normal text-foreground cursor-pointer hover:opacity-60 transition-opacity ${className || ""}`}
    >
      {copied ? "Copied!" : SITE.email}
      {copied ? (
        <Check className="w-4 h-4 opacity-50" />
      ) : (
        <Copy className="w-4 h-4 opacity-35" />
      )}
    </button>
  );
}
