"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OrisabiyiAI() {
  const router = useRouter();

  function handleShowChat() {
    router.push('/orisabiyi-ai');
  }

  return (
    <div className="fixed bottom-8 right-20">
      <button onClick={handleShowChat}>
        <figure className="w-20 h-20 flex items-center justify-center rounded-full bg-primary p-3 hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer">
          <Image
            src="/images/orisabiyi-ai.svg"
            alt="AI Bot"
            width={80}
            height={80}
            className="w-full h-full block"
          />
        </figure>
      </button>
    </div>
  );
}
