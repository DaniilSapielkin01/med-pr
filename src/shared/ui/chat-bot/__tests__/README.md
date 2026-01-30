# Тесты для ChatBot компонента

## Установка зависимостей

Для запуска тестов необходимо установить следующие пакеты:

```bash
npm install --save-dev \
  jest \
  jest-environment-jsdom \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  identity-obj-proxy
```

Или добавьте в `package.json`:

```json
{
  "devDependencies": {
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.1.0",
    "@testing-library/user-event": "^14.5.0",
    "identity-obj-proxy": "^3.0.0"
  },
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

## Запуск тестов

```bash
# Запустить все тесты
npm test

# Запустить в watch режиме
npm run test:watch

# Запустить с покрытием
npm run test:coverage

# Запустить конкретный тест
npm test chat-bot.test.tsx
```

## Структура тестов

- `chat-bot.test.tsx` - Основные unit тесты компонента
- `test-scenarios.md` - Список всех тестовых сценариев
- `troubleshooting.md` - Решение проблем и отладка

## Покрытие тестами

Тесты покрывают:
- ✅ Рендеринг компонента
- ✅ Открытие/закрытие чата
- ✅ Отправка сообщений
- ✅ Обработка ошибок API
- ✅ Валидация ввода
- ✅ Клавиатурные события
- ✅ UI взаимодействия
- ✅ Состояние загрузки

## Известные проблемы

### Проблема с API route

**Важно**: Файл `src/api/chat/chat.ts` должен быть перемещен в `app/api/chat/route.ts` для работы в Next.js App Router.

Текущее расположение не будет работать, так как Next.js ищет API routes в `app/api/` директории.

### Mock компонентов

Тесты используют моки для:
- `framer-motion` - для упрощения тестирования анимаций
- `lucide-react` - для иконок
- `@radix-ui/themes` - для UI компонентов
- CSS модулей через `identity-obj-proxy`

## Добавление новых тестов

При добавлении новых тестов следуйте структуре:

```typescript
describe("Новая функциональность", () => {
  test("должен делать что-то", async () => {
    // Arrange
    // Act
    // Assert
  });
});
```

## Интеграционные тесты

Для интеграционных тестов с реальным API используйте:

```typescript
// В тесте
const response = await fetch("/api/chat", {
  method: "POST",
  body: JSON.stringify({ message: "тест" }),
});
```

Но рекомендуется использовать моки для unit тестов.
