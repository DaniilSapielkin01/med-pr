import { style, keyframes } from "@vanilla-extract/css";

const hoverScale = keyframes({
  "0%": { transform: "translateY(0)" },
  "100%": { transform: "translateY(-8px)" },
});

export const grid = style({
  display: "grid",
  gap: "32px",
  gridTemplateColumns: "1fr",
  maxWidth: "1440px",
  width: "100%",
  padding: "16px",

  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "40px",
      padding: "32px",
    },
  },
});

export const card = style({
  background: "white",
  borderRadius: "20px",
  padding: "32px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
  transition: "all 0.35s ease",
  border: "2px solid transparent",

  ":hover": {
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
    transform: "translateY(-12px)",
    borderColor: "#43ae43",
    animation: `${hoverScale} 0.35s ease forwards`,
  },
});

export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "44px",
  height: "44px",
  backgroundColor: "#43ae43",
  borderRadius: "50%",
  marginBottom: "24px",
  flexShrink: 0,
});

export const icon = style({
  color: "white",
});

export const title = style({
  fontSize: "22px",
  fontWeight: "bold",
  color: "#1a1a1a",
  margin: "0 0 21px 0",
});

export const description = style({
  fontSize: "16px",
  color: "#555",
  lineHeight: "1.7",
  margin: 0,
});
