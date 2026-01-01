import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  paddingTop: "var(--space-7)",
  paddingBottom: "var(--space-8)",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  position: "relative",
  flexDirection: "column",

  "@media": {
    "screen and (min-width: 768px)": {
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingTop: "var(--space-9)",
    },
    "screen and (min-width: 1024px)": {
      paddingLeft: "3rem",
      paddingRight: "3rem",
    },
  },
});

export const headerSection = style({
  marginBottom: "var(--space-9)",
  textAlign: "center",
  maxWidth: "900px",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  alignItems: "center",

  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "var(--space-5)",
    },
  },
});

export const pageDescription = style({
  maxWidth: "800px",
  marginLeft: "auto",
  marginRight: "auto",
});

export const cardsList = style({
  maxWidth: "1440px",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
});

export const cardLink = style({
  textDecoration: "none",
  display: "block",
});

export const serviceCard = style({
  background: "linear-gradient(135deg, #f8fff8 0%, #ffffff 100%)",
  border: "2px solid #43ae43",
  borderRadius: "28px",
  boxShadow: "0 12px 32px rgba(67, 174, 67, 0.15)",
  padding: "18px 16px",
  transition: "all 0.35s ease",

  "@media": {
    "screen and (max-width: 768px)": {
      padding: "16px 12px",
    },
  },

  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 24px 48px rgba(67, 174, 67, 0.25)",
    borderColor: "#388e38",
  },
});

export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  backgroundColor: "#43ae43",
  color: "#ffffff",
});

export const cardTitle = style({
  color: "#333333",
  transition: "color 0.3s ease",
});

export const cardDescription = style({
  lineHeight: "1.1",
});

export const flowerImg = style({
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: -1,
  height: "auto",
  width: "300px",

  "@media": {
    "screen and (max-width: 768px)": {
      width: "160px",
    },
  },
});

globalStyle(`${serviceCard}:hover ${cardTitle}`, {
  color: "#43ae43",
});
