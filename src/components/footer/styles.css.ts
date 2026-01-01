import { style, globalStyle } from "@vanilla-extract/css";

export const footerWrapper = style({
  backgroundColor: "#f8fff8",
  borderTop: "2px solid #43ae43",
  boxShadow: "0 -12px 40px rgba(0,0,0,0.06)",
});

export const lowerSection = style({
  backgroundColor: "#eef8ee",
  width: "100%",
  alignItems: "center",
  padding: "var(--space-5)",
  justifyContent: "center",
});

export const sectionTitle = style({
  color: "#43ae43",
});

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

export const contactIcon = style({
  color: "#43ae43",
  flexShrink: 0,
});

export const contactItem = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  cursor: "pointer",
  transition: "color 0.3s ease",
});

globalStyle(`${contactItem}:hover`, {
  color: "#43ae43",
});

globalStyle(`${contactItem}:hover ${contactIcon}`, {
  color: "#43ae43",
  transform: "scale(1.1)",
});

export const socialIcon = style({
  color: "#666666",
  transition: "all 0.3s ease",
});

export const socialLink = style({});

globalStyle(`${socialLink}:hover ${socialIcon}`, {
  color: "#43ae43",
  transform: "translateY(-3px) scale(1.1)",
});

export const socialCircle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  backgroundColor: "#ffffff",
  border: "2px solid #e0e0e0",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
});

globalStyle(`${socialLink}:hover ${socialCircle}`, {
  backgroundColor: "#43ae43",
  borderColor: "#43ae43",
  transform: "translateY(-4px)",
  boxShadow: "0 8px 20px rgba(67,174,67,0.2)",
});

globalStyle(`${socialLink}:hover ${socialIcon}`, {
  color: "#ffffff",
  transform: "scale(1.25)",
});
