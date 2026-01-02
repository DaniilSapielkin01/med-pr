"use client";

import { DefaultForm } from "@/components";
import { Flex } from "@radix-ui/themes";

export const ApprForm = () => {
  return (
    <Flex
      mt={{ initial: "5", md: "8" }}
      mx="auto"
      style={{
        border: "1px solid var(--mint-a11)",
        borderRadius: "var(--radius-5)",
        maxWidth: "420px",
        padding: "var(--space-6) var(--space-5)",
        width: "100%",
        backgroundColor: "white",
        boxShadow: "0 16px 48px rgba(67, 174, 67, 0.25)",
      }}
    >
      <DefaultForm onSuccess={() => {}} headerColor="brown" />
    </Flex>
  );
};
