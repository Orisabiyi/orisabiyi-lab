import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-primary text-white font-sora">
      <div className="flex items-center justify-center container mx-auto">
        <h2 className="mr-auto text-xl font-semibold">
          <Link href='/'>Orisabiyi Lab</Link>
        </h2>

        <div>
          <h3 className="text-base">@2023 - {currentYear} Orisabiyi Lab</h3>
        </div>
      </div>
    </footer>
  )
}