"use client";

import { FormEvent } from "@/components";
import { Flex, Text } from "@radix-ui/themes";
import logoImg from "@/shared/assets/img/logo.png";
import flowerImg from "@/shared/assets/img/flowers.png";
import Image from "next/image";
import { motion } from "framer-motion";
import * as styles from "./styles.css";
import { leftVariantsTitle, rightVariants } from "@/shared/types";

export const Banner = () => {
  return (
    <Flex width="100%" position="relative" minHeight="600px">
      <Image
        src={flowerImg}
        alt="flower-img"
        className={styles.flowerImg}
        loading="lazy"
      />

      <Flex
        width="100%"
        gap={{ initial: "5", md: "50px" }}
        px={{ initial: "3", md: "5" }}
        pt="6"
        align="center"
        justify="center"
        maxWidth="950px"
        mx="auto"
        wrap="wrap"
        direction={{
          initial: "column",
          md: "row",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={leftVariantsTitle}
        >
          <FormEvent />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={rightVariants}
        >
          <Flex direction={"column"} gap="4" align={"center"}>
            <Text
              size={{ initial: "6", md: "8" }}
              weight="bold"
              align={"center"}
            >
              Не просто ЛІКУЄМО, <br /> а робимо ЗДОРОВИМИ
            </Text>
            <Image
              src={logoImg}
              alt="logo-img"
              style={{ width: "300px", height: "auto" }}
              loading="lazy"
            />
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
};
