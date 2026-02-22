"use client";

import { useState, useRef, useEffect, useMemo } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE = `Вітаю! Я асистент клініки **Prevention** 👋

Я можу допомогти вам з:
- Інформацією про наші **послуги** (МРТ, КТ, УЗД, аналізи тощо)
- Записом на прийом
- Інформацією про **наших лікарів**
- Адресами та графіком роботи **відділень**

Що вас цікавить?`;

const PHONE_RE =
  /0800[\s]?\d{3}[\s]?\d{3}|\+?380[\s-]?\d{2}[\s-]?\d{3}[\s-]?\d{4}/;
const BOLD_RE = /\*\*[^*]+\*\*/;
const LINK_RE = /\[[^\]]+\]\([^)]+\)/;
const TOKEN_RE = new RegExp(
  `(${BOLD_RE.source}|${LINK_RE.source}|${PHONE_RE.source})`,
  "g"
);

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      if (messages.length === 0) {
        setMessages([{ role: "assistant", content: WELCOME_MESSAGE }]);
      }
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Вибачте, сталася помилка. Будь ласка, зателефонуйте нам: **0800 216 115** (безкоштовно).",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const renderContent = useMemo(
    () =>
      (text: string): React.ReactNode =>
        text.split("\n").map((line, lineIdx, arr) => (
          <span key={lineIdx}>
            {PHONE_RE.test(line) && lineIdx !== 0 && <br />}
            {line.split(TOKEN_RE).map((token, i) => {
              if (token.startsWith("**"))
                return <strong key={i}>{token.slice(2, -2)}</strong>;

              const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
              if (link)
                return (
                  <a
                    key={i}
                    href={link[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#16a34a",
                      textDecoration: "underline",
                      fontWeight: 600,
                    }}
                  >
                    {link[1]}
                  </a>
                );

              if (PHONE_RE.test(token))
                return (
                  <a
                    key={i}
                    href={`tel:${token.replace(/[\s-]/g, "")}`}
                    style={{
                      color: "#16a34a",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    {token}
                  </a>
                );

              return token;
            })}
            {lineIdx < arr.length - 1 && <br />}
          </span>
        )),
    []
  );

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Відкрити чат"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: isOpen
            ? "#1a6b4a"
            : "linear-gradient(135deg, #22c55e, #16a34a)",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(34,197,94,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          transition: "all 0.3s ease",
          transform: isOpen ? "scale(0.95)" : "scale(1)",
        }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              fill="white"
            />
          </svg>
        )}
        {hasUnread && !isOpen && (
          <span
            style={{
              position: "absolute",
              top: "4px",
              right: "4px",
              width: "14px",
              height: "14px",
              background: "#ef4444",
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "96px",
            right: "24px",
            width: "360px",
            maxWidth: "calc(100vw - 48px)",
            height: "520px",
            maxHeight: "calc(100vh - 120px)",
            background: "#ffffff",
            borderRadius: "20px",
            boxShadow:
              "0 20px 60px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 9998,
            animation: "chatSlideIn 0.3s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                flexShrink: 0,
              }}
            >
              🏥
            </div>
            <div>
              <div
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "15px",
                  lineHeight: 1.2,
                }}
              >
                Prevention
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#86efac",
                    display: "inline-block",
                  }}
                />
                Онлайн-асистент
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              background: "#f8fafb",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.role === "user" ? "flex-end" : "flex-start",
                  alignItems: "flex-end",
                  gap: "8px",
                }}
              >
                {msg.role === "assistant" && (
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #22c55e, #16a34a)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      flexShrink: 0,
                    }}
                  >
                    🤖
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius:
                      msg.role === "user"
                        ? "18px 18px 4px 18px"
                        : "18px 18px 18px 4px",
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, #22c55e, #16a34a)"
                        : "white",
                    color: msg.role === "user" ? "white" : "#1f2937",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    boxShadow:
                      msg.role === "user"
                        ? "0 2px 8px rgba(34,197,94,0.3)"
                        : "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  {renderContent(msg.content)}
                </div>
              </div>
            ))}

            {isLoading && (
              <div
                style={{ display: "flex", alignItems: "flex-end", gap: "8px" }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #22c55e, #16a34a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  🤖
                </div>
                <div
                  style={{
                    padding: "12px 16px",
                    background: "white",
                    borderRadius: "18px 18px 18px 4px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "#22c55e",
                        animation: `bounce 1.2s ease-in-out ${
                          i * 0.2
                        }s infinite`,
                        display: "inline-block",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Phone hint */}
          <div
            style={{
              padding: "8px 16px",
              background: "#f0fdf4",
              borderTop: "1px solid #dcfce7",
              fontSize: "11px",
              color: "#16a34a",
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            📞 Безкоштовна лінія:{" "}
            <a
              href="tel:0800216115"
              style={{
                color: "#16a34a",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              0800 216 115
            </a>
          </div>

          {/* Input */}
          <div
            style={{
              padding: "12px 16px",
              background: "white",
              borderTop: "1px solid #e5e7eb",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Напишіть питання..."
              disabled={isLoading}
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: "24px",
                border: "1.5px solid #e5e7eb",
                outline: "none",
                fontSize: "14px",
                color: "#1f2937",
                background: "#f9fafb",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#22c55e")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background:
                  input.trim() && !isLoading
                    ? "linear-gradient(135deg, #22c55e, #16a34a)"
                    : "#e5e7eb",
                border: "none",
                cursor: input.trim() && !isLoading ? "pointer" : "not-allowed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={input.trim() && !isLoading ? "white" : "#9ca3af"}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatSlideIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}
