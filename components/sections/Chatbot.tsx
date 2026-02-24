"use client";

import { useState, useRef, useEffect } from "react";
import Section from "@/components/layout/Section";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// future enhancement area: replace with actual RAG backend integration
async function getAIResponse(userMessage: string): Promise<string> {
  const responses: Record<string, string> = {
    default:
      "I'm a placeholder AI assistant. Connect me to a RAG backend to answer questions about the portfolio owner. Try asking about skills, projects, or experience.",
    skills:
      "The portfolio owner is skilled in Python, TypeScript, PyTorch, React, and various AI/ML frameworks. They specialize in building production ML systems.",
    projects:
      "Notable projects include a RAG Knowledge Engine, Real-Time Object Detector, and an AI Code Reviewer. Each demonstrates expertise in different areas of AI engineering.",
    experience:
      "The portfolio owner has experience as an AI Research Intern and Full Stack Developer, working on LLM systems, production web apps, and computer vision pipelines.",
  };

  await new Promise((r) => setTimeout(r, 800 + Math.random() * 700));

  const lower = userMessage.toLowerCase();
  if (lower.includes("skill") || lower.includes("tech")) return responses.skills;
  if (lower.includes("project") || lower.includes("work")) return responses.projects;
  if (lower.includes("experience") || lower.includes("job")) return responses.experience;
  return responses.default;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello. I'm an AI assistant for this portfolio. Ask me anything about the owner's work, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    try {
      const response = await getAIResponse(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: Could not process your request." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <Section id="chatbot">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted uppercase">
          AI Assistant
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Ask Me Anything
        </h2>
        <p className="mb-12 text-muted">
          Chat with an AI that knows about my work, skills, and experience.
        </p>

        <div className="border border-divider bg-[#0a0a0a]">
          {/* Terminal header */}
          <div className="flex items-center gap-2 border-b border-divider px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-muted/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted/40" />
            <span className="ml-2 font-mono text-[10px] tracking-wider text-muted/60">
              portfolio-ai — bash
            </span>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4">
            <div className="flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-muted/60">
                    {msg.role === "user" ? "you ›" : "ai  ›"}
                  </span>
                  <p
                    className={`text-sm leading-relaxed ${
                      msg.role === "user" ? "text-text" : "text-muted"
                    }`}
                  >
                    {msg.content}
                  </p>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-muted/60">
                    ai &nbsp;›
                  </span>
                  <span className="text-sm text-muted/60 animate-pulse">
                    thinking...
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex border-t border-divider">
            <span className="flex items-center px-4 font-mono text-xs text-muted/60">
              ›
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 bg-transparent py-3 pr-4 font-mono text-sm text-text outline-none placeholder:text-muted/40"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="px-4 font-mono text-xs text-muted transition-colors hover:text-text disabled:opacity-30"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
