import { style, keyframes } from "@vanilla-extract/css";

const overlayShow = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: "translate(-50%, -52%) scale(0.96)",
  },
  to: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
});

export const dialogOverlay = style({
  backgroundColor: "rgba(0, 0, 0, 0.55)",
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards`,
  willChange: "opacity",
  zIndex: "2147483000",
});

export const dialogContent = style({
  background: "#ffffff",
  borderRadius: "28px",
  boxShadow: "0 20px 60px rgba(67, 174, 67, 0.25)",
  border: "2px solid #43ae43",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "440px",
  maxHeight: "90vh",
  padding: "var(--space-6) var(--space-5)",
  overflowY: "auto",
  animation: `${contentShow} 0.25s cubic-bezier(0.25, 0.1, 0.25, 1) forwards`,
  willChange: "transform, opacity",
  ":focus": { outline: "none" },
  zIndex: "2147483001",
});

export const dialogClose = style({
  position: "absolute",
  top: "12px",
  right: "12px",
  background: "transparent",
  border: "none",
  color: "#43ae43",
  cursor: "pointer",
  transition: "all 0.2s ease",
  borderRadius: "12px",
  padding: "8px",

  ":hover": {
    background: "rgba(67, 174, 67, 0.12)",
    transform: "scale(1.15)",
  },
});

export const dialogTitle = style({
  margin: 0,
  color: "#43ae43",
  lineHeight: 1.2,
});

export const dialogDescription = style({
  color: "var(--gray-11)",
  lineHeight: 1.5,
});
