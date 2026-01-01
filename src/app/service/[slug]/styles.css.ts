import { style, globalStyle } from "@vanilla-extract/css";

export const descText = style({
  lineHeight: "1.7",
  color: "#333",
});

export const priceCard = style({
  background: "linear-gradient(135deg, #f8fff8 0%, #ffffff 100%)",
  borderRadius: "24px",
  padding: "var(--space-4) ",
  boxShadow: "0 16px 48px rgba(67, 174, 67, 0.15)",
  border: "2px solid #43ae43",
  transition: "transform 0.25s ease",

  ":hover": {
    transform: "translateY(-4px)",
  },
});

export const flowerImg = style({
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: "-1",
  height: "auto",
  width: "250px",
  "@media": {
    "screen and (max-width: 440px)": {
      width: "150px",
    },
  },
});
