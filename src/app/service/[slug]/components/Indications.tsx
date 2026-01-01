"use client";

import { Box, Flex, Heading, Text, Grid } from "@radix-ui/themes";
import { CheckCheck } from "lucide-react";
import { formatText } from "@/shared/utils/format-text";
import { motion } from "framer-motion";
import { Indication } from "@/shared/types";

export const Indications = ({
  indications,
}: {
  indications?: Indication[];
}) => {
  if (!indications?.length) return null;

  return indications?.map((ind, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, delay: idx * 0.01 }}
    >
      <Box key={idx} mb={{ initial: "6", md: "9" }}>
        {ind.header && (
          <Heading
            size={{ initial: "4", md: "6" }}
            mb="3"
            style={{ color: "#43ae43" }}
          >
            {formatText(ind.header)}
          </Heading>
        )}
        <Heading size="7" mb="5">
          {formatText(ind.title)}
        </Heading>

        {ind.items && (
          <Grid columns={"1"} gap="3" mb="6">
            {ind.items.map((item, i) => (
              <Flex key={i} align="center" gap="3">
                <CheckCheck
                  size={24}
                  color="#43ae43"
                  style={{ minWidth: "24px" }}
                />
                <Text size="4">{item}</Text>
              </Flex>
            ))}
          </Grid>
        )}

        {ind.note && (
          <Text size="4" style={{ fontStyle: "italic", color: "#555" }}>
            {formatText(ind.note)}
          </Text>
        )}
      </Box>
    </motion.div>
  ));
};
