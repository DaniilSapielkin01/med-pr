"use client";

import { Flex, Heading, Text, Card, Grid } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import flowerImg from "@/shared/assets/img/flowers.png";
import { services } from "@/shared/constants/services";
import * as styles from "./styles.css";
import { motion } from "framer-motion";
import { rightVariants } from "@/shared/types";

const ServicesPage = () => {
  return (
    <Flex className={styles.container}>
      <Image
        src={flowerImg}
        alt="Декоративні квіти"
        className={styles.flowerImg}
        loading="lazy"
      />
      <Flex
        gap="4"
        direction="column"
        align="center"
        className={styles.headerSection}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={rightVariants}
        >
          <Heading size={{ initial: "6", md: "8" }} weight="bold">
            НАШІ ПОСЛУГИ
          </Heading>
          <Text
            size={{ initial: "3", md: "5" }}
            color="gray"
            align="center"
            className={styles.pageDescription}
          >
            Сучасна діагностика та лікування з використанням новітнього
            обладнання та досвідчених фахівців
          </Text>
        </motion.div>
      </Flex>

      {/* Список послуг */}
      <Grid
        columns={{ initial: "1", md: "2" }}
        gap="3"
        className={styles.cardsList}
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.01 }}
            >
              <Link
                href={`/service${service.link}`}
                key={service.ua}
                className={styles.cardLink}
              >
                <Card className={styles.serviceCard}>
                  <Flex direction="row" gap="5" align="start">
                    {/* Текстова частина */}
                    <Flex direction="column" gap="2" flexGrow="1">
                      <Flex gap="3" align="center">
                        {Icon && (
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                          >
                            <Flex className={styles.iconWrapper}>
                              <Icon size={21} />
                            </Flex>
                          </motion.div>
                        )}
                        <Heading
                          size={{ initial: "3", md: "5" }}
                          weight="bold"
                          className={styles.cardTitle}
                        >
                          {service.seo.ua.title}
                        </Heading>
                      </Flex>
                      <Text
                        size={{ initial: "2", md: "3" }}
                        color="gray"
                        className={styles.cardDescription}
                      >
                        {service.seo.ua.description}
                      </Text>
                    </Flex>
                  </Flex>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default ServicesPage;
