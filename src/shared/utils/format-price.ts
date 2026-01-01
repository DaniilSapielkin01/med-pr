/**
 * Добавляет "від " перед ценой, если его там нет.
 * Примеры:
 *   "500 грн" → "від 500 грн"
 *   "від 700" → "від 700" (остаётся как есть)
 *   "1000" → "від 1000"
 */
export function formatPrice(price: string): string {
  if (!price) return "";

  const trimmed = price.trim();

  // Если уже начинается с "від" (с учётом регистра и пробелов)
  if (/^від\s+/i.test(trimmed)) {
    return trimmed;
  }

  // Иначе добавляем "від "
  return `від ${trimmed}`;
}
