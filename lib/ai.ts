import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { searchWeb } from './tools/searchWeb';

export async function runAssistant(messages: any) {
  const result = await streamText({
    model: openai('gpt-4o'),  // pass the model instance here
    messages,
    tools: { searchWeb },
  });

  return result;
}
