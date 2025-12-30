"use client";

import { directionOfWork } from "@/shared/constants/services";
import { Box, Flex, Text } from "@radix-ui/themes";
import { motion, Variants } from "framer-motion";
import * as styles from "./styles.css";
import { cardVariants, containerVariants, rightVariants } from "@/shared/types";

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
              <motion.div
                key={item.id}
                className={styles.card}
                variants={cardVariants}
              >
                <Box className={styles.iconWrapper}>
                  <Icon size={32} strokeWidth={2} className={styles.icon} />
                </Box>
                <h3 className={styles.title}>{item.title}</h3>
                <Text as="p" className={styles.description}>
                  {item.desc}
                </Text>
              </motion.div>
            );
          })}
        </motion.div>
      </Flex>
    </Flex>
  );
};
