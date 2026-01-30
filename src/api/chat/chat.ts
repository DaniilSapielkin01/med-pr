// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Читання файлу один раз при старті сервера
const knowledgePath = path.join(process.cwd(), "public", "sitemap-rag.json");
let KNOWLEDGE: any;
try {
  KNOWLEDGE = JSON.parse(fs.readFileSync(knowledgePath, "utf-8"));
} catch (error) {
  console.error("Не вдалося прочитати sitemap-rag.json");
  KNOWLEDGE = {
    pages: [],
    siteInfo: { baseUrl: process.env.NEXT_PUBLIC_MAIN_PAGE },
  };
}

const SYSTEM_PROMPT =
  `
Ти — помічник медичного центру Prevention Hospital[](${process.env.NEXT_PUBLIC_MAIN_PAGE}).
Відповідай ТІЛЬКИ українською мовою, коротко (максимум 250 символів).
Будь стислим, по суті, без вступів.

Використовуй ТІЛЬКИ інформацію з цього контексту.
Ніколи не галюцинуй.

Обов'язково додавай пряме посилання на сторінку: ${process.env.NEXT_PUBLIC_MAIN_PAGE} + url з контексту.

ТИ НЕ ЛІКАР. Не давай медичних порад, діагнозів чи рекомендацій щодо лікування.
Якщо питання про здоров'я — відповідай: ` +
  `"Я не можу надавати медичні консультації. Зверніться до лікаря або на гарячу лінію клініки."` +
  `

Якщо інформації немає — відповідай: "Для точної відповіді зверніться на гарячу лінію або запишіться через сайт."

Контекст:
${JSON.stringify(KNOWLEDGE)}
`;

const API_KEY = process.env.NEXT_PUBLIC_AI_API_KEY;

export async function POST(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json({ error: "Немає API_KEY" }, { status: 500 });
  }

  const { message } = await req.json();
  if (!message?.trim()) {
    return NextResponse.json(
      { error: "Порожнє повідомлення" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": process.env.NEXT_PUBLIC_MAIN_PAGE || "",
          "X-Title": "Prevention Hospital Assistant",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.1-70b-instruct", // або інша модель з OpenRouter
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: message },
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenRouter API error:", errorData);
      return NextResponse.json(
        { error: "Помилка API" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const answer =
      data.choices?.[0]?.message?.content?.trim() || "Вибачте, помилка.";

    return NextResponse.json({ answer });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
  }
}
