import { style, keyframes } from "@vanilla-extract/css";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const slideUp = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(10px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const chatButton = style({
  position: "fixed",
  bottom: "24px",
  right: "24px",
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  background: "var(--mint-a11)",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  boxShadow: "0 8px 24px rgba(67, 174, 67, 0.3)",
  zIndex: 9998,
  transition: "all 0.3s ease",
  // position: "relative",
  overflow: "visible",

  ":hover": {
    boxShadow: "0 12px 32px rgba(67, 174, 67, 0.4)",
    transform: "translateY(-2px)",
  },

  ":active": {
    transform: "translateY(0)",
  },
});

export const chatButtonPulse = style({
  position: "absolute",
  inset: "-4px",
  borderRadius: "50%",
  background: "var(--mint-a11)",
  opacity: 0.3,
  zIndex: -1,
});

export const chatWindow = style({
  position: "fixed",
  bottom: "24px",
  right: "24px",
  width: "420px",
  maxWidth: "calc(100vw - 48px)",
  background: "white",
  borderRadius: "24px",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
  display: "flex",
  flexDirection: "column",
  zIndex: 9999,
  overflow: "hidden",
  transition: "height 0.3s ease",

  "@media": {
    "(max-width: 480px)": {
      width: "calc(100vw - 24px)",
      right: "12px",
      bottom: "12px",
      borderRadius: "20px",
    },
  },
});

const gradientWave = keyframes({
  "0%": {
    backgroundPosition: "0% 50%",
  },
  "50%": {
    backgroundPosition: "100% 50%",
  },
  "100%": {
    backgroundPosition: "0% 50%",
  },
});

export const chatHeader = style({
  padding: "8px 20px",
  background:
    "linear-gradient(135deg, #1e7e34 0%, var(--mint-a11) 50%, #2d6a2d 100%)",
  backgroundSize: "200% 200%",
  animation: `${gradientWave} 4s ease-in-out infinite`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "white",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
});

export const botIcon = style({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  flexShrink: 0,
});

export const headerButton = style({
  color: "white !important",
  cursor: "pointer",

  ":hover": {
    background: "rgba(255, 255, 255, 0.1) !important",
  },
});

export const messagesContainer = style({
  flex: 1,
  overflowY: "auto",
  overflowX: "hidden",
  background: "#fafafa",
  position: "relative",

  "::-webkit-scrollbar": {
    width: "6px",
  },

  "::-webkit-scrollbar-track": {
    background: "transparent",
  },

  "::-webkit-scrollbar-thumb": {
    background: "#e0e0e0",
    borderRadius: "3px",

    // ":hover": {
    //   background: "#d0d0d0",
    // },
  },
});

export const messagesList = style({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  minHeight: "100%",
});

export const userMessage = style({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
});

export const assistantMessage = style({
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
});

export const messageIcon = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

export const assistantIcon = style({
  background: "rgba(67, 174, 67, 0.1)",
  color: "var(--mint-a11)",
});

export const userIcon = style({
  background: "var(--mint-a11)",
  color: "white",
});

export const userMessageBubble = style({
  background: "var(--mint-a11)",
  color: "white",
  marginTop: "8px",
  padding: "12px 16px",
  borderRadius: "18px 12px 18px 18px",
  maxWidth: "100%",
  wordWrap: "break-word",
  boxShadow: "0 2px 8px rgba(67, 174, 67, 0.2)",
  animation: `${slideUp} 0.3s ease`,
  position: "relative",
});

export const assistantMessageBubble = style({
  background: "white",
  color: "#171717",
  padding: "12px 16px",
  borderRadius: "18px",
  maxWidth: "80%",
  wordWrap: "break-word",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  border: "1px solid #f0f0f0",
  animation: `${slideUp} 0.3s ease`,
});

export const timestamp = style({
  fontSize: "11px",
  marginTop: "4px",
  paddingLeft: "4px",
});

export const inputContainer = style({
  padding: "16px 20px",
  background: "white",
  borderTop: "1px solid #f0f0f0",
});

export const input = style({
  flex: 1,
  padding: "12px 16px",
  borderRadius: "20px",
  border: "2px solid #e0e0e0",
  fontSize: "14px",
  fontFamily: "inherit",
  resize: "none",
  transition: "all 0.2s ease",
  background: "white",
  color: "#171717",
  lineHeight: "1.5",
  overflow: "hidden",

  ":focus": {
    outline: "none",
    borderColor: "var(--mint-a11)",
    boxShadow: "0 0 0 3px rgba(67, 174, 67, 0.1)",
  },

  "::placeholder": {
    color: "#9a94aa",
  },
});

export const sendButton = style({
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  background: "var(--mint-a11) !important",
  color: "white !important",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  transition: "all 0.2s ease",

  // ":hover:not(:disabled)": {
  //   background: "#35db8c !important",
  //   transform: "scale(1.05)",
  // },

  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

export const loadingSpinner = style({
  animation: `${spin} 1s linear infinite`,
});
