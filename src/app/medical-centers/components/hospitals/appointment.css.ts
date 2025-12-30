import { style } from "@vanilla-extract/css";

export const hospitalInfoCard = style({
  background: "linear-gradient(135deg, #f8fff8 0%, #ffffff 100%)",
  borderRadius: "20px",
  border: "2px solid #43ae43",
  boxShadow: "0 8px 24px rgba(67, 174, 67, 0.1)",
  width: "100%",
  maxWidth: "330px",
});

export const submitButton = style({
  background: "#43ae43",
  color: "white",
  padding: "18px 24px",
  borderRadius: "16px",
  border: "none",
  cursor: "pointer",
  width: "100%",
  marginTop: "8px",
  transition: "all 0.3s ease",
  boxShadow: "0 6px 16px rgba(67, 174, 67, 0.25)",

  ":hover": {
    backgroundColor: "var(--mint-12)",
  },

  ":active": {
    transform: "translateY(0)",
  },

  "@media": {
    "screen and (max-width: 800px)": {
      padding: "var(--space-4)",
    },
  },
});
