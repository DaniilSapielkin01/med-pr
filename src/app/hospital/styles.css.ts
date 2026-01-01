import { style } from "@vanilla-extract/css";

export const container = style({
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #f8fff8, #ffffff)",
  display: "flex",
  justifyContent: "center",
});

export const card = style({
  maxWidth: "1440px",
  width: "100%",
  background: "#fff",
  borderRadius: "32px",
  boxShadow: "0 20px 60px rgba(67, 174, 67, 0.12)",
  border: "1px solid #e0f0e0",
  overflow: "hidden",
  position: "relative",
  zIndex: "2",
});

export const headWrap = style({
  position: "relative",
  alignItems: "center",
  zIndex: 2,

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      textAlign: "center",
    },
  },
});

export const heroSection = style({
  flexGrow: 1,
  zIndex: "2",
  flexDirection: "column",
});

export const heroTitle = style({
  fontSize: "2.5rem",
  fontWeight: 800,
  color: "#1a4f1a",
  lineHeight: 1.15,
  marginBottom: "var(--space-4)",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "2rem",
    },
  },
});

export const heroSubtitle = style({
  fontSize: "1.25rem",
  color: "#2d6a2d",
  lineHeight: 1.6,

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.1rem",
    },
  },
});

export const flowerImg = style({
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: -1,
  height: "auto",
  width: "220px",

  "@media": {
    "screen and (max-width: 768px)": {
      width: "140px",
    },
  },
});

export const overlayButton = style({
  marginTop: "var(--space-6)",
  background: "#43ae43",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.25rem",
  padding: "16px 44px",
  borderRadius: "16px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  maxWidth: "340px",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.1rem",
      padding: "14px 36px",
      maxWidth: "100%",
    },
  },

  ":hover": {
    background: "#389538",
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
  },

  ":active": {
    transform: "translateY(0)",
  },
});

export const sectionTitle = style({
  fontSize: "1.8rem",
  fontWeight: 700,
  color: "#1a4f1a",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1rem",
    },
  },
});

export const listWithBullets = style({
  listStyle: "none",
  padding: 0,
  display: "grid",
  gap: "var(--space-2)",
  alignItems: "center",
});

export const directionItem = style({
  position: "relative",
  color: "#333",
  fontSize: "1.1rem",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.8rem",
    },
  },
});

export const advantagesGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "var(--space-6)",
  marginTop: "var(--space-6)",

  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "var(--space-5)",
    },
  },
});

export const advantageCard = style({
  background: "#f8fff8",
  border: "1px solid #e0f0e0",
  borderRadius: "20px",
  padding: "var(--space-6)",
  boxShadow: "0 8px 24px rgba(67, 174, 67, 0.08)",
  transition: "transform 0.3s ease",

  ":hover": {
    transform: "translateY(-8px)",
  },
});

export const advantageTitle = style({
  fontSize: "1.2rem",
  fontWeight: 700,
  color: "#1a4f1a",
});

// Если нужно точнее контролировать
export const heroImage = style({
  borderRadius: "28px",
  overflow: "hidden",
  boxShadow: "0 20px 50px rgba(0,0,0,0.2)",

  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "var(--space-6)",
    },
  },
});
