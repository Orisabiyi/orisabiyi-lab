"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";
import { UIMessage, useChat } from "@ai-sdk/react";
import { FaStop } from "react-icons/fa";

export default function Page() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<UIMessage[]>([]);
  const { messages, sendMessage } = useChat();

  const lastMsg = messages[messages.length - 1];
  const isLoading = lastMsg?.role === "user";

  useEffect(() => {
    console.log("Messages updated:", messages);
    setChat(messages);
  }, [messages]);

  useEffect(() => {
    console.log("Chat state updated:", chat);
  }, [chat]);

  function handleMessageChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInput(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as React.FormEvent);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    sendMessage({ text: input });
    setInput("");
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
        {chat.length > 0 && (
          <>
            {messages.map((msg, index) => (
              <div key={index} className="self-end">
                <p>{msg.role === "user" && 'text' in msg.parts[0] && msg.parts[0]?.text}</p>
              </div>
            ))}
          </>
        )}
        {(
          <>
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
                Hey, I&apos;m Orisa, your product co-creator. Ready to shape
                your next big idea?
              </h1>
            </div>

            <form className="relative w-2/3" onSubmit={handleSubmit}>
              <textarea
                value={input}
                onChange={handleMessageChange}
                onKeyDown={handleKeyDown}
                placeholder="Type your message here..."
                rows={1}
                className="w-full border-2 border-primary rounded-full placeholder:align-middle placeholder:text-primary placeholder:font-light py-5 pl-5 pr-12 block outline-none resize-none overflow-x-hidden scrollbar-hide"
              />
              {!isLoading && (
                <button
                  type="submit"
                  className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer">
                  <TbSend size={25} className="text-primary" />
                </button>
              )}
              {isLoading && (
                <button
                  type="button"
                  className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer">
                  <FaStop size={25} className="text-primary" />
                </button>
              )}
            </form>
          </>
        )}
      </div>
    </section>
  );
}
