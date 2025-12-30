import { style } from "@vanilla-extract/css";

export const navItem = style({
  position: "relative",
});

export const stickyNav = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  position: "sticky",
  top: 0,
  zIndex: 100,

  // blur
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
});

export const spanBg = style({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: -4,
  height: 1,
  backgroundColor: "currentColor",
  transform: "scaleX(0)",
  transformOrigin: "center",
  transition: "transform 200ms ease",
  pointerEvents: "none",
});

export const navItemHover = style({
  selectors: {
    [`${navItem}:hover &`]: {
      transform: "scaleX(1)",
    },
  },
});

export const navItemActive = style({
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
