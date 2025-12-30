import { style } from "@vanilla-extract/css";

export const container = style({
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #f8fff8, #ffffff)",
  display: "flex",
  justifyContent: "center",
});

export const card = style({
  maxWidth: "980px",
  width: "100%",
  background: "#fff",
  borderRadius: "32px",
  boxShadow: "0 20px 60px rgba(67, 174, 67, 0.12)",
  border: "1px solid #e0f0e0",
  overflow: "hidden",
});

export const avatarWrap = style({
  flexShrink: 0,
  width: "320px",
  height: "440px",
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 16px 40px rgba(0,0,0,0.18)",

  "@media": {
    "screen and (max-width: 768px)": {
      width: "260px",
      height: "360px",
      margin: "0 auto",
    },
  },
});

export const avatar = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center top",
});

export const heroInfo = style({
  paddingTop: "var(--space-6)",

  "@media": {
    "screen and (max-width: 768px)": {
      paddingTop: 0,
    },
  },
});

export const headWrap = style({
  zIndex: "2",
  position: "relative",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const nameHeading = style({
  fontSize: "2.8rem",
  fontWeight: 700,
  color: "#1a4f1a",
  lineHeight: 1.15,
  marginBottom: "var(--space-3)",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.8rem",
    },
  },
});

export const specialty = style({
  color: "#43ae43",
  fontWeight: 600,
  marginBottom: "var(--space-3)",
});

export const experience = style({
  fontSize: "1.125rem",
  color: "#2d6a2d",
  background: "#e8f5e8",
  display: "inline-block",
  padding: "0.65rem 1.4rem",
  borderRadius: "999px",

  "@media": {
    "screen and (max-width: 440px)": {
      fontSize: "1rem",
    },
  },
});

export const flowerImg = style({
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: "-1",
  height: "auto",
  width: "200px",
  "@media": {
    "screen and (max-width: 440px)": {
      width: "100px",
    },
  },
});

export const sectionTitle = style({
  fontSize: "1.6rem",
  fontWeight: 600,
  color: "#1a4f1a",
});

export const directionsList = style({
  display: "grid",
  gap: "var(--space-4)",
  listStyle: "none",
  padding: 0,

  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const directionItem = style({
  position: "relative",
  paddingLeft: "var(--space-4)",
  color: "#333",

  ":before": {
    content: '"•"',
    position: "absolute",
    left: 0,
    color: "#43ae43",
    fontSize: "1.6rem",
    lineHeight: 1,
    top: "-2px",
  },
});

export const overlayButton = style({
  marginTop: "var(--space-5)",
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

  "@media": {
    "screen and (max-width: 440px)": {
      fontSize: "16px",
    },
  },

  ":hover": {
    background: "#389538",
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
  },

  ":active": {
    transform: "translateY(0)",
  },
});
