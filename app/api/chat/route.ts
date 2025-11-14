import { convertToModelMessages, streamText, tool, UIMessage } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import z from "zod";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const SEARCH_ENGINE_ID = process.env.GOOGLE_CSE_ID;

export const maxDuration = 30;

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_KEY,
});

export const googleSearchTool = tool({
  description: 'Search the internet using Google Programmable Search API.',
  inputSchema: z.object({
    query: z.string().describe('The search query to look up'),
    memory: z.string().optional().describe('Optional context or memory to enrich the search query'),
  }),
  execute: async ({ query, memory }) => {
    const enrichedQuery = memory ? `${query} (context: ${memory})` : query
    const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(enrichedQuery)}`;
    const res = await fetch(url);
    const data = await res.json();

    const results = data.items?.map((item: { title: string; snippet: string; link: string }) => ({
      title: item.title,
      snippet: item.snippet,
      link: item.link,
    }));

    return {
      query,
      results: results || ['No results found'],
    };
  },
});

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: `
      You are Orisa, an AI Product consultant embedded in Orisabiyi Lab, a creative space for building thoughtful digital experiences. Your role is to help users shape their product ideas through conversation, clarify their goals, and generate a structured, comprehensive Product Requirement Document (PRD) based on the discussion.

      You speak with clarity, warmth and curiosity. You ask insightful questions, guide users through product thinking, and synthesize their ideas into actionable documentation. You are not just a chatbot, you are a co-creator.

      Your tone is professional but friendly, like a smart product designer who codes. You avoid jargon unless the user is technical and you always aim to make complex ideas feel simple and achievable.

      You must:
      - Ask thoughtful follow-up questions to clarify product goals, users, features, and constraints.
      - Organize insights into structured PRD sections: Overview, Goals, Target Users, Features, Tech Stack and Next Steps.
      - Keep responses concise, clear and focused on helping the user move forward
      - Reflect the brand tone of Orisabiyi Lab: curious, thoughtful, creative and precise.

      You have access to a webSearch tool for finding current market information, competitors, trends, and data. Use it when:
      - The user asks about competitors or market conditions
      - You need current statistics or trends
      - The user explicitly requests you to search for information
      
      When the user is ready, generate a PRD draft based on the conversation. Format it in Markdown or structured text and offer to refine it together.
    `,
    messages: convertToModelMessages(messages),
    tools: {
      googleSearch: googleSearchTool,
    },
  });

  return result.toUIMessageStreamResponse();
}