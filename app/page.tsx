'use client';

import { useChat } from 'ai/react';

export default function ChatPage() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
  } = useChat({ api: '/api/chat' });

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <>{console.log("meeeesss",messages)}</>
      <h1 className="text-2xl font-bold mb-4">🌐 AI Web Assistant</h1>

      <div className="space-y-3 mb-4">
        {messages
  .filter((m) => m.role !== 'assistant' || m.content || m.parts?.length)
  .map((m, idx) => {
    const isUser = m.role === 'user';
    const content =
      m.content || m.parts?.map((p: any) => p.text || '').join('') || '';

    return (
      <div key={idx} className="p-2 rounded bg-gray-100 whitespace-pre-wrap">
        <strong>{isUser ? 'You' : 'AI'}:</strong> {content}
      </div>
    );
  })}


      </div>

      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask something like: 'What happened today?'"
          className="flex-1 border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Send'}
        </button>
      </form>

      {error && <div className="text-red-500 mt-2">{error.message}</div>}
    </div>
  );
}
