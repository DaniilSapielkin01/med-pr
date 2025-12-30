"use client";

import { mainServices } from "@/shared/constants/services";
import { Flex, Grid, Text } from "@radix-ui/themes";
import Link from "next/link";
import logoImg from "@/shared/assets/img/logo.png";
import Image from "next/image";
import * as styles from "./styles.css";
import { PhoneCall } from "lucide-react";
import { CONSTANTS } from "@/shared/constants";
import { toast } from "sonner";

export const Footer = () => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONSTANTS.PHONE_NUMBER);
    toast.success("Успішно скопійовано");
  };

  return (
    <Flex
      align="center"
      justify="center"
      width="100%"
      className={styles.footerWrapper}
      position={"relative"}
      direction={"column"}
    >
      <Flex
        width={"100%"}
        justify={"between"}
        align={"center"}
        maxWidth={"1440px"}
        py="6"
        px="3"
        m="auto"
        wrap="wrap"
        gap="4"
      >
        <Grid columns={"1"} gapY="3">
          {mainServices.map((item) => (
            <Link key={item.title} href={item.link}>
              <Flex px="3" className={styles.navItem} maxWidth={"fit-content"}>
                <Text size={"3"} weight="medium">
                  {item.title}
                </Text>
                <span className={`${styles.spanBg} ${styles.navItemHover}`} />
              </Flex>
            </Link>
          ))}
        </Grid>

        <Image
          src={logoImg}
          alt="logo"
          style={{ maxWidth: "300px", height: "auto", maxHeight: "50px" }}
          loading="lazy"
        />

        <Flex direction={"column"} gap="4">
          <Flex>Social - 1</Flex>
          <Flex>Social - 1</Flex>
          <Flex
            align="center"
            gap="1"
            style={{ cursor: "pointer" }}
            onClick={handleCopy}
          >
            <PhoneCall
              height={18}
              style={{ color: "var(--mint-a11)" }}
              fontVariant={"bold"}
            />
            <Text weight="bold" size="4" style={{ color: "var(--mint-a11" }}>
              {CONSTANTS.PHONE_NUMBER}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        width="100%"
        align="center"
        justify={"center"}
        wrap="wrap"
        gap="2"
        p="4"
        style={{ backgroundColor: "var(--sky-a4)" }}
      >
        <Text weight={"medium"} size={"2"}>
          Ліцензія МОЗ України N3498/21/M від 12.08.2021
        </Text>

        <Link href={"/"} style={{ lineHeight: "18px" }}>
          <Text
            weight={"medium"}
            size={"2"}
            color="blue"
            style={{ textDecoration: "underline" }}
          >
            Політика конфіденційності
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};
