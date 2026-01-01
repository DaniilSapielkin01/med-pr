/* src/components/header/MobileHeader.css.ts */

import { style, globalStyle } from "@vanilla-extract/css";

export const burgerButton = style({
  background: "none",
  border: "none",
  padding: "8px",
  cursor: "pointer",
  color: "#333333",
  transition: "transform 0.2s ease",

  ":active": {
    transform: "scale(0.92)",
  },
});

export const mobileMenu = style({
  position: "fixed",
  top: "60px",
  left: 0,
  right: 0,
  backgroundColor: "#ffffff",
  boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
  maxHeight: "0",
  overflow: "hidden",
  transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
  zIndex: 999,
});

export const mobileMenuOpen = style({
  maxHeight: "85vh",
  overflowY: "auto",
});

export const submenu = style({
  maxHeight: "0",
  overflow: "hidden",
  transition: "max-height 0.35s ease",
});

export const submenuOpen = style({
  maxHeight: "600px",
});

export const submenuItem = style({
  display: "flex",
  alignItems: "center",
  gap: "var(--space-2)",
  padding: "var(--space-1) 0",
  textDecoration: "none",
});

export const contactsSection = style({
  borderTop: "1px solid #e0e8e0",
  marginTop: "8px",
  backgroundColor: "rgba(67,174,67,0.2)",
});

export const phoneContact = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  cursor: "pointer",
  padding: "8px 0",
});

export const phoneIcon = style({
  color: "#43ae43",
  flexShrink: 0,
});

export const submenuTrigger = style({
  cursor: "pointer",
  position: "relative",
});

export const mobileNavLink = style({
  display: "block",
  flex: "1 1 auto",
  padding: "var(--space-2) 0",
  textDecoration: "none",
  color: "#333333",
});

export const submenuToggleArea = style({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  width: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

export const arrow = style({
  width: "10px",
  height: "10px",
  borderRight: "2px solid #333333",
  borderBottom: "2px solid #333333",
  transform: "rotate(45deg)",
  transition: "transform 0.3s ease",
  flexShrink: 0,
});

export const arrowOpen = style({
  transform: "rotate(-135deg)",
});

globalStyle(`${phoneContact}:hover`, {
  color: "#43ae43",
});

globalStyle(`${phoneContact}:hover ${phoneIcon}`, {
  transform: "scale(1.1)",
});
