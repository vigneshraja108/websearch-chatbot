To create the app:

    npx create-next-app@latest chatbot-current-info --typescript

Installation :

    npm install ai @ai-sdk/openai zod

In the environment file:

OPENAI_API_KEY=sk-...
SERPAPI_API_KEY=your-serpapi-key

Code structure:

   page.tsx  - Frontend UI

   searchWeb.ts - SerpAPI Integration

   ai.ts - streamText setup with tools

   route.ts - API handler using streamText

How It need to work

1. User types the current information if the LLM not have the answer then we do the web search and give back the result.

Problem Facing:

We are getting response from web search api but in ui the result not displaying


To run the application :

      npm run dev
