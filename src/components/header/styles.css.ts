import { globalStyle, style } from "@vanilla-extract/css";

export const navItem = style({
  position: "relative",
  display: "inline-block",
  textDecoration: "none",
});

export const navLink = style({
  color: "#333333",
  fontWeight: 500,
  transition: "color 0.3s ease",
});

export const stickyNav = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  position: "fixed",
  top: 0,
  zIndex: 1000,

  // blur
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(5px)",
  backgroundColor: "rgba(255, 255, 255, 0.75)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
});

export const logoImg = style({
  maxWidth: "300px",
  height: "auto",

  "@media": {
    "screen and (max-width: 1248px)": {
      maxWidth: "200px",
    },
  },
});

export const underline = style({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: "-6px",
  height: "2px",
  backgroundColor: "#43ae43",
  transform: "scaleX(0)",
  transformOrigin: "left",
  transition: "transform 0.35s ease",
  pointerEvents: "none",
});

globalStyle(`${navItem}:hover ${navLink}`, {
  color: "#43ae43",
});

globalStyle(`${navItem}:hover ${underline}`, {
  transform: "scaleX(1)",
});

export const navItemActive = style({
  color: "#43ae43",
  selectors: {
    [`${navItem} &`]: {
      transform: "scaleX(1)",
    },
  },
});

export const dropdownItem = style({
  cursor: "pointer",
  ":hover": {
    backgroundColor: "var(--mint-a11)",
  },
});

export const dropdownGrid = style({
  backgroundImage: `
    linear-gradient(
      to right,
      transparent 33.33%,
      rgba(0,0,0,0.12) 33.33%,
      rgba(0,0,0,0.12) calc(33.33% + 1px),
      transparent calc(33.33% + 1px),
      transparent 66.66%,
      rgba(0,0,0,0.12) 66.66%,
      rgba(0,0,0,0.12) calc(66.66% + 1px),
      transparent calc(66.66% + 1px)
    )
  `,
});

/* Десктопна навігація + контакти — видно тільки з 1100px і вище */
export const desktopNav = style({
  display: "none",

  "@media": {
    "screen and (min-width: 1100px)": {
      display: "flex",
    },
  },
});

/* Мобільна частина (бургер + опціонально телефон) — видно до 1099px */
export const mobileNav = style({
  display: "flex",

  "@media": {
    "screen and (min-width: 1100px)": {
      display: "none",
    },
  },
});

export const tabletOnly = style({
  display: "none",

  "@media": {
    "screen and (min-width: 768px) and (max-width: 1099px)": {
      display: "flex",
    },
  },
});
