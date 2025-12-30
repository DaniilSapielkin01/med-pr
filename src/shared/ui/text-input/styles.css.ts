// phone-input.css.ts
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "100%",
});

export const input = style({
  width: "100%",
  height: 48,

  padding: "0 16px",
  fontSize: 15,

  borderRadius: 12,
  border: "1px solid var(--gray-a10)",
  backgroundColor: "var(--color-panel)",

  transition: "border-color .15s ease, box-shadow .15s ease",

  selectors: {
    "&::placeholder": {
      color: "var(--gray-a11)",
    },

    "&:focus": {
      outline: "none",
      borderColor: "green",
      boxShadow: "0 6px 16px rgba(67, 174, 67, 0.2)",
    },
  },
  color: "black",
});
