import { globalStyle, style } from "@vanilla-extract/css";

export const topbarPhone = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  transition: "color 0.3s ease",
});

export const topbarIcon = style({
  color: "#43ae43",
  flexShrink: 0,
});

export const topbarSocialLink = style({
  display: "block",
});

export const socialCircle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  transition: "all 0.35s ease",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
});

export const socialIcon = style({
  color: "#666666",
  transition: "all 0.35s ease",
});

/* Ховер-ефекти */
globalStyle(`${topbarPhone}:hover`, {
  color: "#43ae43",
});

globalStyle(`${topbarSocialLink}:hover ${socialCircle}`, {
  backgroundColor: "#43ae43",
  borderColor: "#43ae43",
  transform: "translateY(-3px)",
  boxShadow: "0 8px 20px rgba(67,174,67,0.2)",
});

globalStyle(`${topbarSocialLink}:hover ${socialIcon}`, {
  color: "#ffffff",
  transform: "scale(1.2)",
});
