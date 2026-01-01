"use client";

import { directionOfWork } from "@/shared/constants/services";
import { Box, Flex, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import * as styles from "./styles.css";
import { cardVariants, containerVariants, rightVariants } from "@/shared/types";
import Link from "next/link";

export const OurServices = () => {
  return (
    <Flex direction="column" align="center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={rightVariants}
      >
        <Text size={{ initial: "6", md: "8" }} weight="bold">
          НАПРЯМКИ РОБОТИ
        </Text>
      </motion.div>

      <Flex width="100%" justify="center">
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {directionOfWork.map((item) => {
            const Icon = item.icon;

            return (
              <Link href={item.link} key={item.title}>
                <motion.div
                  key={item.id}
                  className={styles.card}
                  variants={cardVariants}
                >
                  <Flex align={"center"} gap="2">
                    <Box className={styles.iconWrapper}>
                      <Icon size={24} strokeWidth={2} className={styles.icon} />
                    </Box>
                    <h3 className={styles.title}>{item.title}</h3>
                  </Flex>
                  <Text as="p" className={styles.description}>
                    {item.desc}
                  </Text>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </Flex>
    </Flex>
  );
};
