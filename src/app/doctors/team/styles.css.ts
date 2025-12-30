import { style } from "@vanilla-extract/css";

export const card = style({
  background: "white",
  borderRadius: "24px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
  transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
  overflow: "hidden",
  height: "480px",
  display: "flex",
  flexDirection: "column",
  border: "2px solid transparent",

  ":hover": {
    boxShadow: "0 24px 48px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-12px)",
    borderColor: "#43ae43",
  },
});

export const chiefCard = style({
  background: "linear-gradient(135deg, #f8fff8 0%, #ffffff 100%)",
  borderRadius: "28px",
  boxShadow: "0 16px 48px rgba(67, 174, 67, 0.15)",
  border: "2px solid #43ae43",
  overflow: "hidden",

  "@media": {
    "screen and (max-width: 768px)": {
      textAlign: "center",
    },
  },
});

// Img
export const imgLogo = style({
  position: "absolute",
  top: "0",
  right: "0",
  width: "150px",
  height: "auto",
});

// Avatars
export const chiefImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center top",
  zIndex: "1",
});

export const chiefImgWrap = style({
  width: "280px",
  height: "380px",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
  flexShrink: 0,
});

export const doctorImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center top",
});

export const doctorImgWrap = style({
  width: "100%",
  height: "340px",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
  border: "4px solid white",
});

// Texts
export const moreDetails = style({
  marginTop: "auto",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
});
