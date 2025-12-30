"use client";

import { Flex, Text } from "@radix-ui/themes";
import { AppointmentForm } from "../../../medical-centers/components/hospitals/AppointmentForm";
import flowersImg from "@/shared/assets/img/flowers.png";
import Image from "next/image";
import * as styles from "./styles.css";
import { GoogleMap } from "./map";

export const DepartmentsMap = () => {
  return (
    <Flex
      position={"relative"}
      direction="column"
      align="center"
      gap="8"
      py="9"
      style={{
        background: "linear-gradient(135deg, #f8fff8 0%, #ffffff 100%)",
        borderTop: "1px solid var(--gray-a6)",
      }}
    >
      <Image
        src={flowersImg}
        alt="logo-flowers"
        className={styles.imgLogo}
        loading="lazy"
      />
      <Text size={{ initial: "6", md: "8" }} weight="bold">
        НАШІ ВІДДІЛЕННЯ НА КАРТІ
      </Text>

      <Flex
        direction={{ initial: "column", md: "row" }}
        gap={{ initial: "7", md: "9" }}
        align="center"
        justify="center"
        maxWidth="1440px"
        width="100%"
        px={{ initial: "4", md: "6" }}
      >
        <Flex
          direction="column"
          gap={{ initial: "2", md: "5" }}
          align="center"
          maxWidth="520px"
          width="100%"
        >
          <AppointmentForm hospital={null} onSuccess={() => {}} />
        </Flex>
        <Flex
          width="100%"
          minWidth="0"
          height={{ initial: "400px", md: "600px" }}
          overflow="hidden"
          style={{
            flex: "1",
            boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
            borderRadius: "24px",
          }}
        >
          <GoogleMap />
        </Flex>
      </Flex>
    </Flex>
  );
};
