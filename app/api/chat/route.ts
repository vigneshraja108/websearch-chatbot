import { NextRequest } from 'next/server';
import { runAssistant } from '@/lib/ai';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const result = await runAssistant(messages);
  console.log("resssssss",result.toDataStreamResponse())
  const { text } = await result; // ✅ await this
  return result.toDataStreamResponse(); // Correct streaming method
}
