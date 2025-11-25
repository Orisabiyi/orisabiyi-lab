"use client";

import Link from "next/link";
import Socials from "./socials";
import { useActionState, useEffect } from "react";
import { sendMail } from "@/app/server/sendMail";
import { toast, Toaster } from "sonner";

interface QueryData {
  get(key: string): FormDataEntryValue | null;
}

async function sendClientMessage(
  prevState: Record<string, string>,
  queryData: QueryData
) {
  const name = queryData.get("clientName")?.toString() || "";
  const email = queryData.get("clientEmail")?.toString() || "";
  const description = queryData.get("clientDescription")?.toString() || "";

  return { name, email, description };
  // return { name, email, description }
}

export default function ContactSection() {
  const [formState, formAction] = useActionState<
    Record<string, string>,
    QueryData
  >(sendClientMessage, {});

  useEffect(() => {
    async function handleSendMail() {
      if (formState?.email) {
        try {
          const data = await sendMail(formState.description, formState.email);
          console.log("Client message sent:", data);
        } catch (error) {
          const errorMsg =
            error instanceof Error ? error.message : "Unknown error";
          toast.error(`Failed to send message: ${errorMsg}`);
        }
      }
    }

    handleSendMail();
  }, [formState]);

  return (
    <section
      id="contact-me"
      className="font-sora bg-primary relative">
      <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-20">
        <div className="md:w-1/2 space-y-2 md:space-y-4 px-10 md:pl-20 text-white py-32">
          <h2 className="flex flex-col text-3xl md:text-4xl font-bold">
            <span>
              Let&apos;s <span className="text-primary-1">talk</span> for
            </span>
            <span>
              Something <span className="text-primary-1">special</span>
            </span>
          </h2>
          <p className="text-sm md:text-base w-4/5">
            I care about creating experiences that feel good to use. Intuitive,
            engaging and memorable. Whether it&apos;s through design, code or
            experimentation, I&apos;m always looking for ways to make digital
            interactions more meaningful and human centered
          </p>

          <div className="space-y-2">
            <h3 className="text-lg md:text-2xl">
              <Link href="mailto:orisabiyidavid@gmail.com">
                orisabiyidavid@gmail.com
              </Link>
            </h3>
            <p className="text-base md:text-xl">
              <Link href="tel:+2349166331550">+234 916 6331 550</Link>
            </p>
            <Socials itemClassName="bg-white p-3" iconClassName="text-primary" />
          </div>
        </div>

        <form
          action={formAction}
          className="md:w-1/2 h-full flex flex-col gap-6 order-1 bg-gray-100 px-20 py-5 md:py-32">
          <input
            type="text"
            name="clientName"
            placeholder="Your Name"
            className="w-full border border-gray-400 px-4 py-2 placeholder:text-gray-300"
          />
          <input
            type="email"
            name="clientEmail"
            placeholder="Email"
            className="w-full border border-gray-400 px-4 py-2 placeholder:text-gray-300"
          />
          <textarea
            name="clientDescription"
            placeholder="Your website (if exists)"
            className="w-full border border-gray-400 px-4 py-2 placeholder:text-gray-300 resize-none h-32"
          />

          <div className="flex flex-col items-stretch gap-2 md:gap-5">
            <button
              type="submit"
              className="w-1/2 bg-black text-white font-semibold p-2 w-full inline-block">
              Get In Touch
            </button>
          </div>
        </form>

        <Toaster position="bottom-right" />
      </div>
    </section>
  );
}
