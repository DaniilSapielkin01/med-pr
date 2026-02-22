import { Header, Footer } from "@/components";
import { BgCircleMain, ChatBox } from "@/shared/ui";
import { Flex, Theme } from "@radix-ui/themes";
import { Toaster } from "sonner";
import ScrollToTop from "./utils/scroll-to-top";

export const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <Theme>
      <Header />

      <Flex position={"relative"} height={"100%"} direction={"column"}>
        <BgCircleMain />

        <Flex direction="column" flexGrow="1">
          <main>{children}</main>
          <Footer />
        </Flex>
      </Flex>

      <Toaster
        richColors
        closeButton
        position="top-right"
        duration={3000}
        gap={10}
        visibleToasts={3}
        className="toast-click-layer"
        toastOptions={{
          classNames: {
            success: "toaster-success",
            warning: "toaster-warning",
            info: "toaster-info",
            error: "toaster-error",
          },
        }}
      />
      <ScrollToTop />
      <ChatBox />
    </Theme>
  );
};
