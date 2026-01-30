# ⚠️ ВАЖНО: Исправление расположения API route

## Проблема

Файл API находится в неправильном месте: `src/api/chat/chat.ts`

В Next.js App Router API routes должны находиться в `app/api/` директории.

## Решение

### Шаг 1: Создайте правильную структуру

```bash
mkdir -p app/api/chat
```

### Шаг 2: Переместите файл

```bash
mv src/api/chat/chat.ts app/api/chat/route.ts
```

### Шаг 3: Обновите экспорт (если нужно)

Файл `app/api/chat/route.ts` должен экспортировать функцию `POST`:

```typescript
import { NextRequest, NextResponse } from "next/server";
// ... остальной код

export async function POST(req: NextRequest) {
  // ... существующий код
}
```

### Шаг 4: Удалите старую директорию

```bash
rm -rf src/api
```

## Проверка

После перемещения файла:

1. Перезапустите dev server: `npm run dev`
2. Проверьте, что endpoint доступен: `http://localhost:3000/api/chat`
3. Протестируйте отправку сообщения в чат-боте

## Почему это важно?

Next.js App Router использует файловую систему для маршрутизации:
- `app/api/chat/route.ts` → `/api/chat`
- `src/api/chat/chat.ts` → **НЕ РАБОТАЕТ**

Это основная причина ошибки при первом отправке сообщения!
