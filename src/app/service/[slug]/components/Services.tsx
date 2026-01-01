"use client";

import { Box, Flex, Heading, Text, Grid, Card } from "@radix-ui/themes";
import * as styles from "../styles.css";
import { formatText } from "@/shared/utils/format-text";
import { motion } from "framer-motion";
import { ServiceGroup } from "@/shared/types";
import { formatPrice } from "@/shared/utils/format-price";

export const Services = ({ services }: { services?: ServiceGroup[] }) => {
  if (!services?.length) return null;

  return services?.map((serviceGroup, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, delay: idx * 0.01 }}
    >
      <Box key={idx}>
        <Heading size="7" mb={{ initial: "4", md: "6" }}>
          {serviceGroup.title}
        </Heading>

        <Grid
          columns={{
            initial: "1",
            md: serviceGroup.list?.length > 4 ? "2" : "1",
          }}
          maxWidth={
            serviceGroup.list?.length > 4
              ? "100%"
              : { initial: "100%", md: "50%" }
          }
          gap="2"
        >
          {serviceGroup.list.map((item, i) => (
            <Card key={i} className={styles.priceCard}>
              <Flex direction="column">
                <Text size="4" weight="medium">
                  {item.title}
                </Text>
                <Text size="3" weight={"bold"} style={{ color: "#43ae43" }}>
                  {formatPrice(item.price)}
                </Text>
                <Text size="2" weight={"bold"}>
                  {formatText(item.note || "")}
                </Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Box>
    </motion.div>
  ));
};
