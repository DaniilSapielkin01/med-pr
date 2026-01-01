"use client";

import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import * as styles from "../styles.css";
import ServiceIcon from "@/shared/service-icon/ServiceIcon";
import { leftVariantsTitle, rightVariants, ServicesData } from "@/shared/types";
import { formatText } from "@/shared/utils/format-text";
import { motion } from "framer-motion";

export const Header = ({ data }: { data: ServicesData }) => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={rightVariants}
      >
        <Flex align="center" gap="4" mb={{ initial: "5", md: "8" }}>
          <ServiceIcon name={data.icon} size={56} />
          <Heading
            size={{ initial: "6", md: "8" }}
            weight="bold"
            style={{ color: "#43ae43" }}
          >
            {data.title}
          </Heading>
        </Flex>
      </motion.div>
      {data.desc && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={leftVariantsTitle}
        >
          <Text
            size={{ initial: "3", md: "5" }}
            mb="9"
            className={styles.descText}
          >
            {formatText(data.desc)}
          </Text>
        </motion.div>
      )}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={rightVariants}
      >
        <Separator
          size="4"
          mb={{ initial: "5", md: "7" }}
          mt="2"
          style={{ backgroundColor: "#43ae43" }}
        />
      </motion.div>
    </>
  );
};
