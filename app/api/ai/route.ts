import { generateText } from "ai";
import { createGoogleGenerativeAI } from '@ai-sdk/google'

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_KEY,
});

export async function GET() {
  try {
    const { text } = await generateText({
      model: google("gemini-2.5-flash"),
      prompt: "Type of Software Engineering?",
    });

    return Response.json({ text }, { status: 200 });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : "Unknown error";
    return Response.json({ errorMsg }, { status: 500 });
  }
}