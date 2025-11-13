'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";

export default function Page() {
  const [message, setMessage] = useState('')

  function handleMessageChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  return (
    <section className="font-sora h-screen flex items-stretch">
      <div className="w-1/6 py-5 px-10 h-full bg-primary border-r border-gray-300 flex flex-col gap-10">
        <figure className="w-16 h-16 self-center">
          <Image
            src="/images/orisabiyi-ai.svg"
            alt="AI Bot"
            width={100}
            height={100}
            className="w-full h-full block"
          />
        </figure>

        <ul>
          <li className="text-white">
            <Link href="" className="flex items-center gap-2">
              <FaRegPenToSquare size={24} className="font-light" />
              <span className="text-base">Experiments</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="p-10 h-full flex-1 text-black flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-4">
          <figure className="w-16 h-16 bg-primary flex items-center justify-center p-2 rounded-full">
            <Image
              src="/images/orisabiyi-ai.svg"
              alt="AI Bot"
              width={100}
              height={100}
              className="w-full h-full block"
            />
          </figure>
          <h1 className="text-xl font-medium">
            Hey, I&apos;m Orisa, your product co-creator. Ready to shape your next
            big idea?
          </h1>
        </div>

        <div className="relative w-2/3">
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message here..."
            className="w-full border-2 border-primary rounded-full placeholder:text-primary placeholder:font-light p-3 block outline-none"
          />
          <button className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer">
            <TbSend size={25} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
