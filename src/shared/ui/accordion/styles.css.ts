import { style, keyframes } from "@vanilla-extract/css";

const open = keyframes({
  from: { height: 0, opacity: 0 },
  to: { height: "var(--radix-accordion-content-height)", opacity: 1 },
});

const close = keyframes({
  from: { height: "var(--radix-accordion-content-height)", opacity: 1 },
  to: { height: 0, opacity: 0 },
});

export const root = style({
  width: "100%",
  maxWidth: 640,
  borderRadius: 12,
  background: "#0f1f17",
  border: "1px solid #1f3d2b",
  overflow: "hidden",
});

export const item = style({
  borderBottom: "1px solid #1f3d2b",
});

export const trigger = style({
  all: "unset",
  width: "100%",
  padding: "16px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  background: "#122a1d",
  transition: "background 0.25s ease",

  ":hover": {
    background: "#163825",
  },

  selectors: {
    '&[data-state="open"]': {
      background: "#1c4d33",
    },
  },
});

export const title = style({
  color: "#c8f5dd",
  fontWeight: 500,
});

export const icon = style({
  color: "#4ade80",
  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

  selectors: {
    [`${trigger}[data-state="open"] &`]: {
      transform: "rotate(180deg)",
    },
  },
});

export const content = style({
  overflow: "hidden",
  background: "#0f1f17",
  color: "#b6e7cc",

  selectors: {
    '&[data-state="open"]': {
      animation: `${open} 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${close} 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
  },
});

export const contentInner = style({
  padding: "14px 20px 18px",
  lineHeight: 1.6,
});
