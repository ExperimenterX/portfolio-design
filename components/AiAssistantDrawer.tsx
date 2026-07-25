'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, User, RefreshCw, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AiAssistantDrawer({ isOpen, onClose }: AiAssistantDrawerProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm Shankar Bhavani's AI Portfolio Assistant. Ask me anything about Shankar's M.S. CS degree at UIC, experience at Bosch & Rexroth, projects like SyncAI & PersonaRAG, or technical stack!"
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const starterPrompts = [
    "Tell me about Shankar's work at Bosch.",
    "What AI & RAG projects has he built?",
    "What are his primary technical skills?",
    "Tell me about his UIC Graduate Assistant role."
  ];

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: query }];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      const data = await res.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I couldn't process that response right now. Please check out the resume sections below!" }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "An error occurred while reaching the AI server. Feel free to contact Shankar directly via email!" }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-lg bg-[#111111] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl relative"
        >
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#161616]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                <Bot className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                  Ask Shankar AI
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Gemini 2.5
                  </span>
                </h3>
                <p className="text-xs text-gray-400">Interactive Resume & Experience Assistant</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] ${
                    m.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-none shadow-lg shadow-indigo-600/20'
                      : 'bg-[#1A1A1A] text-gray-200 border border-white/10 rounded-bl-none shadow-md'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.content}</p>
                </div>

                {m.role === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start items-center text-xs text-indigo-400 font-mono">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <span className="p-3 bg-[#1A1A1A] rounded-2xl border border-white/10 text-gray-400 animate-pulse">
                  Reasoning about Shankar&apos;s background...
                </span>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Starter Prompts */}
          {messages.length < 3 && (
            <div className="p-4 border-t border-white/5 bg-[#161616]/50">
              <p className="text-[11px] font-mono text-gray-500 mb-2 uppercase tracking-wider">
                Suggested Prompts:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {starterPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(prompt)}
                    className="text-left text-xs bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-300 border border-white/10 text-gray-300 px-2.5 py-1.5 rounded-lg transition-all"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Bar */}
          <div className="p-4 border-t border-white/10 bg-[#161616]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about skills, projects, or work experience..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
