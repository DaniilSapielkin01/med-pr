"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Flex, Text, Button } from "@radix-ui/themes";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Loader2,
  Minimize2,
} from "lucide-react";
import * as styles from "./styles.css";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  apiEndpoint?: string;
  initialMessage?: string;
  placeholder?: string;
  onMessageSend?: (message: string) => Promise<string>;
}

export const ChatBot = ({
  apiEndpoint = "/api/chat",
  initialMessage = "Привіт! Я ваш помічник. Чим можу допомогти?",
  placeholder = "Напишіть ваше питання...",
  onMessageSend,
}: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: initialMessage,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        120
      )}px`;
    }
  }, [inputValue]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      let response: string;

      if (onMessageSend) {
        response = await onMessageSend(userMessage.content);
      } else {
        const res = await fetch(apiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage.content,
          }),
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.error || "Failed to fetch response");
        }

        const data = await res.json();
        response = data.answer || "Вибачте, сталася помилка.";
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Вибачте, сталася помилка при обробці вашого запиту. Спробуйте ще раз.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className={styles.chatButton}
            aria-label="Відкрити чат"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <MessageCircle size={24} />
            </motion.div>
            <motion.span
              className={styles.chatButtonPulse}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={styles.chatWindow}
            style={{
              height: isMinimized ? "60px" : "600px",
            }}
          >
            {/* Header */}
            <motion.div className={styles.chatHeader}>
              <Flex align="center" gap="3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={styles.botIcon}
                >
                  <Bot size={20} />
                </motion.div>
                <Flex direction="column" gap="2px">
                  <Text size="4" weight="bold">
                    Персональний помічник
                  </Text>
                  <Text size="1" color="gray">
                    Завжди готовий допомогти
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="2">
                <Button
                  variant="ghost"
                  size="1"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className={styles.headerButton}
                >
                  <Minimize2 size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="1"
                  onClick={() => setIsOpen(false)}
                  className={styles.headerButton}
                >
                  <X size={16} />
                </Button>
              </Flex>
            </motion.div>

            {/* Messages */}
            {!isMinimized && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.messagesContainer}
              >
                <Box className={styles.messagesList}>
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      className={
                        message.role === "user"
                          ? styles.userMessage
                          : styles.assistantMessage
                      }
                    >
                      <Flex gap="1" align="start">
                        {message.role === "assistant" && (
                          <motion.div
                            className={`${styles.messageIcon} ${styles.assistantIcon}`}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Bot size={18} />
                          </motion.div>
                        )}
                        <Flex direction="column" gap="1" flexGrow="1">
                          <Box
                            className={
                              message.role === "user"
                                ? styles.userMessageBubble
                                : styles.assistantMessageBubble
                            }
                          >
                            <Text size="3" style={{ whiteSpace: "pre-wrap" }}>
                              {message.content}
                            </Text>
                          </Box>
                          <Text
                            size="1"
                            color="gray"
                            className={styles.timestamp}
                          >
                            {formatTime(message.timestamp)}
                          </Text>
                        </Flex>
                        {message.role === "user" && (
                          <motion.div
                            className={`${styles.messageIcon} ${styles.userIcon}`}
                            whileHover={{ scale: 1.1 }}
                          >
                            <User size={18} />
                          </motion.div>
                        )}
                      </Flex>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={styles.assistantMessage}
                    >
                      <Flex gap="3" align="start">
                        <div
                          className={`${styles.messageIcon} ${styles.assistantIcon}`}
                        >
                          <Bot size={18} />
                        </div>
                        <Box className={styles.assistantMessageBubble}>
                          <Flex gap="2" align="center">
                            <Loader2
                              size={16}
                              className={styles.loadingSpinner}
                            />
                            <Text size="2" color="gray">
                              Думаю...
                            </Text>
                          </Flex>
                        </Box>
                      </Flex>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </Box>
              </motion.div>
            )}

            {/* Input */}
            {!isMinimized && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.inputContainer}
              >
                <Flex gap="2" align="end">
                  <textarea
                    ref={textareaRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder={placeholder}
                    className={styles.input}
                    rows={1}
                    style={{
                      resize: "none",
                      minHeight: "44px",
                      maxHeight: "120px",
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      className={styles.sendButton}
                      size="3"
                    >
                      {isLoading ? (
                        <Loader2 size={18} className={styles.loadingSpinner} />
                      ) : (
                        <Send size={18} />
                      )}
                    </Button>
                  </motion.div>
                </Flex>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
