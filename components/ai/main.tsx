import Image from "next/image";

export default function OrisabiyiAI() {
  return (
    <div className="fixed bottom-8 right-20">
      <figure className="w-20 h-20 flex items-center justify-center rounded-full bg-primary p-3 hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer">
        <Image src="/images/orisabiyi-ai.svg" alt="AI Bot" width={80} height={80} className="w-full h-full block" />
      </figure>
    </div>
  );
}