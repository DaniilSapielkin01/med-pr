import { Box } from "@radix-ui/themes";

export const BgCircleMain = () => (
  <Box
    display={{ initial: "none", xs: "block" }}
    style={{
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      width: "120vh",
      height: "120vh",
      borderRadius: "50%",
      background: "rgba(67, 174, 67, 0.15)",
      filter: "blur(100px)",
      zIndex: -2,
    }}
  />
);
