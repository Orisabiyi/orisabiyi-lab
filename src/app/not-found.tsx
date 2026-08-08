import Link from "next/link";

export default function NotFound() {
  return (
    <div className="animate-page-in flex flex-col items-center justify-center min-h-[60vh] text-center">
      <span
        className="font-display font-black text-[clamp(80px,20vw,200px)] leading-none mb-4"
        style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'WONK' 1" }}
      >
        404<span className="text-riso-red">.</span>
      </span>
      <p className="text-lg font-semibold opacity-75 mb-8">
        This page doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-neo bg-neo-yellow">
        Go Home &rarr;
      </Link>
    </div>
  );
}