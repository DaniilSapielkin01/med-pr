import { style } from "@vanilla-extract/css";

export const container = style({
  minHeight: "100vh",
  paddingTop: "var(--space-8)",
  paddingBottom: "var(--space-8)",
  backgroundColor: "#f8fff8",
});

export const content = style({
  maxWidth: "1440px",
  margin: "0 auto",
  paddingLeft: "1rem",
  paddingRight: "1rem",

  "@media": {
    "screen and (min-width: 768px)": {
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
  },
});

export const paragraph = style({
  lineHeight: "1.7",
  color: "#333333",
  marginBottom: "12px",
});
