import { ReactNode } from "react";
import { Strong } from "@radix-ui/themes";

/**
 * Форматирует текст с простой разметкой:
 * - **текст** → <Strong>текст</Strong>
 * - \n       → <br /> (перенос строки)
 * - \n\n     → <br /><br /> (отступ между абзацами — пустая строка)
 */
export function formatText(text: string): ReactNode {
  if (!text) return null;

  const paragraphs = text.split("\n\n");

  return (
    <>
      {paragraphs.map((paragraph, pIndex) => {
        const lines = paragraph.split("\n");

        return (
          <span key={pIndex}>
            {lines.map((line, lIndex) => {
              const parts = line.split("**");

              const formattedLine = parts.map((part, index) =>
                index % 2 === 1 ? (
                  <Strong key={`${pIndex}-${lIndex}-${index}`}>{part}</Strong>
                ) : (
                  part
                )
              );

              return (
                <span key={`${pIndex}-${lIndex}`}>
                  {formattedLine}
                  {lIndex < lines.length - 1 && <br />}
                </span>
              );
            })}

            {/* Добавляем <br /><br /> между абзацами, кроме последнего */}
            {pIndex < paragraphs.length - 1 && (
              <>
                <br />
                <br />
              </>
            )}
          </span>
        );
      })}
    </>
  );
}
