import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "./prompt";

type Message = { role: string; content: string };

// ─── Model cascade: smart selection + fallback ───────────────────────────────

const isShortMessage = (messages: Message[]): boolean => {
  const last = messages.findLast((m) => m.role === "user");
  return last ? last.content.trim().split(/\s+/).length <= 2 : false;
};

const groq = async (model: string, messages: Message[]): Promise<string> => {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 400,
      temperature: 0.5,
    }),
  });

  if (!res.ok) throw new Error(`groq:${model} ${res.status}`);
  const data = await res.json();
  return data.choices[0].message.content as string;
};

const FAST_MODEL = "llama-3.1-8b-instant"; // short messages + fallback
const SMART_MODEL = "llama-3.3-70b-versatile"; // long/complex messages

const getReply = async (messages: Message[]): Promise<string> => {
  const [primary, fallback] = isShortMessage(messages)
    ? [FAST_MODEL, SMART_MODEL]
    : [SMART_MODEL, FAST_MODEL];

  try {
    const reply = await groq(primary, messages);
    console.info(`[chat] model=${primary}`);
    return reply;
  } catch (err) {
    console.warn(
      `[chat] ${primary} failed (${err}), falling back to ${fallback}`
    );
  }

  const reply = await groq(fallback, messages);
  console.info(`[chat] model=${fallback} (fallback)`);
  return reply;
};

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const conversationMessages: Message[] = messages.filter(
      (m: Message) => m.role !== "system"
    );

    const reply = await getReply(conversationMessages);
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[chat] all providers failed:", err);
    return NextResponse.json({
      reply:
        "Вибачте, сервіс тимчасово недоступний. Зателефонуйте: **0800 216 115**",
    });
  }
}
