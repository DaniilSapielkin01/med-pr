/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChatBot } from "../chat-bot";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    button: ({ children, ...props }: any) => (
      <button {...props}>{children}</button>
    ),
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock lucide-react icons
jest.mock("lucide-react", () => ({
  MessageCircle: () => <div data-testid="message-circle">MessageCircle</div>,
  X: () => <div data-testid="x-icon">X</div>,
  Send: () => <div data-testid="send-icon">Send</div>,
  Bot: () => <div data-testid="bot-icon">Bot</div>,
  User: () => <div data-testid="user-icon">User</div>,
  Loader2: () => <div data-testid="loader-icon">Loader2</div>,
  Minimize2: () => <div data-testid="minimize-icon">Minimize2</div>,
}));

// Mock @radix-ui/themes
jest.mock("@radix-ui/themes", () => ({
  Box: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Flex: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Text: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  Button: ({ children, onClick, disabled, ...props }: any) => (
    <button onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  ),
}));

// Mock styles
jest.mock("../styles.css", () => ({
  chatButton: "chatButton",
  chatWindow: "chatWindow",
  chatHeader: "chatHeader",
  messagesContainer: "messagesContainer",
  messagesList: "messagesList",
  userMessage: "userMessage",
  assistantMessage: "assistantMessage",
  messageIcon: "messageIcon",
  assistantIcon: "assistantIcon",
  userIcon: "userIcon",
  userMessageBubble: "userMessageBubble",
  assistantMessageBubble: "assistantMessageBubble",
  timestamp: "timestamp",
  inputContainer: "inputContainer",
  input: "input",
  sendButton: "sendButton",
  loadingSpinner: "loadingSpinner",
  botIcon: "botIcon",
  headerButton: "headerButton",
  chatButtonPulse: "chatButtonPulse",
}));

// Mock fetch globally
global.fetch = jest.fn();

describe("ChatBot Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockClear();
  });

  describe("Рендеринг", () => {
    test("должен отображать кнопку чата по умолчанию", () => {
      render(<ChatBot />);
      const chatButton = screen.getByLabelText("Відкрити чат");
      expect(chatButton).toBeInTheDocument();
    });

    test("должен открывать окно чата при клике на кнопку", async () => {
      const user = userEvent.setup();
      render(<ChatBot />);

      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Медичний помічник")).toBeInTheDocument();
      });
    });

    test("должен отображать начальное сообщение", async () => {
      const user = userEvent.setup();
      render(<ChatBot initialMessage="Тестовое сообщение" />);

      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Тестовое сообщение")).toBeInTheDocument();
      });
    });
  });

  describe("Отправка сообщений", () => {
    test("должен отправлять сообщение через API endpoint", async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ answer: "Тестовый ответ" }),
      });

      render(<ChatBot apiEndpoint="/api/chat" />);

      // Открываем чат
      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Медичний помічник")).toBeInTheDocument();
      });

      // Вводим сообщение
      const input = screen.getByPlaceholderText("Напишіть ваше питання...");
      await user.type(input, "Тестовый вопрос");

      // Отправляем
      const sendButton = screen.getByRole("button", { name: /send/i });
      await user.click(sendButton);

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: "Тестовый вопрос",
          }),
        });
      });

      await waitFor(() => {
        expect(screen.getByText("Тестовый ответ")).toBeInTheDocument();
      });
    });

    test("должен использовать onMessageSend если передан", async () => {
      const user = userEvent.setup();
      const mockOnMessageSend = jest.fn().mockResolvedValue("Кастомный ответ");

      render(<ChatBot onMessageSend={mockOnMessageSend} />);

      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Медичний помічник")).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText("Напишіть ваше питання...");
      await user.type(input, "Вопрос");

      const sendButton = screen.getByRole("button", { name: /send/i });
      await user.click(sendButton);

      await waitFor(() => {
        expect(mockOnMessageSend).toHaveBeenCalledWith("Вопрос");
        expect(screen.getByText("Кастомный ответ")).toBeInTheDocument();
      });

      expect(global.fetch).not.toHaveBeenCalled();
    });

    test("должен обрабатывать ошибку API", async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockRejectedValueOnce(
        new Error("Network error")
      );

      render(<ChatBot />);

      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Медичний помічник")).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText("Напишіть ваше питання...");
      await user.type(input, "Вопрос");

      const sendButton = screen.getByRole("button", { name: /send/i });
      await user.click(sendButton);

      await waitFor(() => {
        expect(
          screen.getByText(
            "Вибачте, сталася помилка при обробці вашого запиту. Спробуйте ще раз."
          )
        ).toBeInTheDocument();
      });
    });

    test("должен обрабатывать ошибку 500 от API", async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: async () => ({ error: "Помилка сервера" }),
      });

      render(<ChatBot />);

      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Медичний помічник")).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText("Напишіть ваше питання...");
      await user.type(input, "Вопрос");

      const sendButton = screen.getByRole("button", { name: /send/i });
      await user.click(sendButton);

      await waitFor(() => {
        expect(
          screen.getByText(
            "Вибачте, сталася помилка при обробці вашого запиту. Спробуйте ще раз."
          )
        ).toBeInTheDocument();
      });
    });

    test("должен обрабатывать ответ без поля answer", async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: "Старый формат" }),
      });

      render(<ChatBot />);

      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Медичний помічник")).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText("Напишіть ваше питання...");
      await user.type(input, "Вопрос");

      const sendButton = screen.getByRole("button", { name: /send/i });
      await user.click(sendButton);

      await waitFor(() => {
        expect(
          screen.getByText("Вибачте, сталася помилка.")
        ).toBeInTheDocument();
      });
    });
  });

  describe("Валидация ввода", () => {
    test("не должен отправлять пустое сообщение", async () => {
      const user = userEvent.setup();
      render(<ChatBot />);

      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Медичний помічник")).toBeInTheDocument();
      });

      const sendButton = screen.getByRole("button", { name: /send/i });
      expect(sendButton).toBeDisabled();
    });

    test("не должен отправлять сообщение только с пробелами", async () => {
      const user = userEvent.setup();
      render(<ChatBot />);

      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Медичний помічник")).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText("Напишіть ваше питання...");
      await user.type(input, "   ");

      const sendButton = screen.getByRole("button", { name: /send/i });
      expect(sendButton).toBeDisabled();
    });
  });

  describe("Клавиатурные события", () => {
    test("должен отправлять сообщение по Enter", async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ answer: "Ответ" }),
      });

      render(<ChatBot />);

      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Медичний помічник")).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText("Напишіть ваше питання...");
      await user.type(input, "Вопрос{Enter}");

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalled();
      });
    });

    test("не должен отправлять сообщение по Shift+Enter", async () => {
      const user = userEvent.setup();
      render(<ChatBot />);

      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Медичний помічник")).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText("Напишіть ваше питання...");
      await user.type(input, "Вопрос");

      fireEvent.keyDown(input, { key: "Enter", shiftKey: true });

      expect(global.fetch).not.toHaveBeenCalled();
    });
  });

  describe("UI взаимодействия", () => {
    test("должен закрывать чат при клике на X", async () => {
      const user = userEvent.setup();
      render(<ChatBot />);

      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Медичний помічник")).toBeInTheDocument();
      });

      const closeButtons = screen.getAllByRole("button");
      const closeButton = closeButtons.find((btn) =>
        btn.querySelector('[data-testid="x-icon"]')
      );

      if (closeButton) {
        await user.click(closeButton);

        await waitFor(() => {
          expect(
            screen.queryByText("Медичний помічник")
          ).not.toBeInTheDocument();
        });
      }
    });

    test("должен минимизировать окно", async () => {
      const user = userEvent.setup();
      render(<ChatBot />);

      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Медичний помічник")).toBeInTheDocument();
      });

      const minimizeButtons = screen.getAllByRole("button");
      const minimizeButton = minimizeButtons.find((btn) =>
        btn.querySelector('[data-testid="minimize-icon"]')
      );

      if (minimizeButton) {
        await user.click(minimizeButton);
        // После минимизации контент должен скрыться, но окно остаться
        await waitFor(() => {
          const input = screen.queryByPlaceholderText(
            "Напишіть ваше питання..."
          );
          expect(input).not.toBeInTheDocument();
        });
      }
    });
  });

  describe("Состояние загрузки", () => {
    test("должен показывать индикатор загрузки при отправке", async () => {
      const user = userEvent.setup();
      let resolvePromise: (value: any) => void;
      const promise = new Promise((resolve) => {
        resolvePromise = resolve;
      });

      (global.fetch as jest.Mock).mockReturnValueOnce(promise);

      render(<ChatBot />);

      const chatButton = screen.getByLabelText("Відкрити чат");
      await user.click(chatButton);

      await waitFor(() => {
        expect(screen.getByText("Медичний помічник")).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText("Напишіть ваше питання...");
      await user.type(input, "Вопрос");

      const sendButton = screen.getByRole("button", { name: /send/i });
      await user.click(sendButton);

      await waitFor(() => {
        expect(screen.getByText("Думаю...")).toBeInTheDocument();
      });

      resolvePromise!({
        ok: true,
        json: async () => ({ answer: "Ответ" }),
      });

      await waitFor(() => {
        expect(screen.queryByText("Думаю...")).not.toBeInTheDocument();
      });
    });
  });
});
