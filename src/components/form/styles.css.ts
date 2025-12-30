import { style } from "@vanilla-extract/css";

export const btnForm = style({
  padding: "var(--space-4)",
  borderRadius: "var(--radius-4)",
  cursor: "pointer",
  transition: "0.25s ease",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "var(--mint-a11)",

  ":hover": {
    backgroundColor: "var(--mint-12)",
  },
});

export const wrapperCard = style({
  border: "1px solid var(--gray-a6)",
  borderRadius: "var(--radius-5)",
  padding: "var(--space-5)",
  width: "420px",
  backgroundColor: "white",
});
