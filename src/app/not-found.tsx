import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="font-black uppercase text-8xl tracking-[-0.04em] text-foreground mb-4">
        404
      </h1>
      <p className="text-dim mb-8">Page not found</p>
      <Link
        href="/"
        className="bg-foreground text-background px-7 py-3 rounded-full text-sm font-semibold hover:opacity-85 transition-opacity"
      >
        Go Home
      </Link>
    </div>
  );
}
