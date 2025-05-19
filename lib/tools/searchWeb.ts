import { z } from "zod";
import { tool } from "ai";

export const searchWeb = tool({
  description: "Search the web using SerpAPI for current news or facts.",
  parameters: z.object({
    query: z.string().describe("The search query for news or facts."),
  }),
  execute: async ({ query }: { query: string }) => {
    const response = await fetch(
      `https://serpapi.com/search.json?q=${encodeURIComponent(query)}&api_key=${process.env.SERPAPI_API_KEY}`
    );
    const data = await response.json();

    if (!data.organic_results || data.organic_results.length === 0) {
      return "No recent results found.";
    }

    const results = data.organic_results.slice(0, 3).map((r: any) => `- ${r.title}\n  ${r.link}`);
    return results.join("\n\n");
  },
});
