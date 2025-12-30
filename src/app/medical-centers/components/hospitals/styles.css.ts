import { style } from "@vanilla-extract/css";

// Texts
export const moreDetails = style({
  marginTop: "auto",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
});

export const hospitalImgPlaceholder = style({
  width: "100%",
  maxWidth: "250px",
  height: "100%",
  background: "var(--gray-3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const hospitalCard = style({
  background: "white",
  borderRadius: "20px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
  transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
  border: "2px solid transparent",
  overflow: "hidden",
  height: "100%",
  cursor: "pointer",

  ":hover": {
    transform: "translateY(-12px)",
    boxShadow: "0 24px 48px rgba(0, 0, 0, 0.15)",
    borderColor: "#43ae43",
  },
});

export const hospitalImgWrap = style({
  width: "100%",
  height: "260px",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
  border: "4px solid white",
});

export const hospitalImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  transition: "transform 0.7s ease",

  selectors: {
    [`${hospitalCard}:hover &`]: {
      transform: "scale(1.12)",
    },
  },
});

export const hospitalFullOverlay = style({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.78) 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.45s ease",

  selectors: {
    [`${hospitalCard}:hover &`]: {
      opacity: 1,
    },
  },
});

export const overlayButton = style({
  background: "#43ae43",
  color: "white",
  fontWeight: "bold",
  fontSize: "20px",
  padding: "16px 44px",
  borderRadius: "16px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",

  ":hover": {
    background: "#389538",
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
  },

  ":active": {
    transform: "translateY(0)",
  },
});
