"use client";

import { chiefDoctor, doctors } from "@/data/doctors-list";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import flowersImg from "@/shared/assets/img/flowers.png";
import Link from "next/link";
import * as styles from "./styles.css";
import Image from "next/image";
import { cardVariants, rightVariants } from "@/shared/types";
import { BASE_PATH } from "@/shared/constants";

const DEFAULT_IMG = "/images/doctors/doctor_default.webp";

export const TeamList = () => {
  return (
    <Box
      py="6"
      style={{
        borderTop: "1px solid var(--gray-6)",
      }}
    >
      <Flex
        direction="column"
        align="center"
        maxWidth="1440px"
        mx="auto"
        px={{ initial: "4", md: "6" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={rightVariants}
        >
          <Text size={{ initial: "6", md: "8" }} weight="bold">
            НАШІ ЛІКАРІ
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Link
            href={`/doctor/${chiefDoctor.id}?${encodeURIComponent(
              chiefDoctor.name
            )}`}
            passHref
          >
            <Flex
              mt={{ initial: "6", md: "8" }}
              className={styles.chiefCard}
              direction={{ initial: "column", md: "row" }}
              gap={{ initial: "6", md: "8" }}
              align="center"
              p={"6"}
              maxWidth="1000px"
              width="100%"
              position={"relative"}
              style={{ overflow: "hidden" }}
            >
              <Image
                src={flowersImg}
                alt="logo-flowers"
                className={styles.imgLogo}
                loading="lazy"
              />
              <div className={styles.chiefImgWrap}>
                <img
                  src={`${BASE_PATH}${chiefDoctor.avatar}`}
                  alt={chiefDoctor.name}
                  className={styles.chiefImg}
                />
              </div>

              <Flex
                direction="column"
                gap="4"
                align={{ initial: "center", md: "start" }}
              >
                <Text size="5" color="gray">
                  Головний лікар клініки
                </Text>

                <Text
                  size={{ initial: "5", md: "8" }}
                  weight="bold"
                  style={{ lineHeight: 1.2 }}
                >
                  Петров Віктор Олександрович
                </Text>

                <Text
                  size={{ initial: "4", md: "5" }}
                  weight="medium"
                  color="green"
                >
                  Головний лікар, лікар-інфекціоніст, сімейний лікар
                </Text>

                <Flex
                  direction="column"
                  gap="2"
                  align={{ initial: "center", md: "start" }}
                >
                  <Text size="3">
                    <strong>Стаж роботи:</strong> понад 13 років
                  </Text>
                  <Text size="3" style={{ maxWidth: "600px" }}>
                    Спеціалізується на сімейній медицині, діагностиці, лікуванні
                    та реабілітації пацієнтів.
                  </Text>
                </Flex>
                <Text
                  size="2"
                  weight="medium"
                  color="green"
                  className={styles.moreDetails}
                >
                  Детальніше →
                </Text>
              </Flex>
            </Flex>
          </Link>
        </motion.div>

        <Grid
          columns={{ initial: "1", xs: "2", sm: "3", md: "4" }}
          gap={{ initial: "5", md: "6" }}
          width="100%"
          mt="8"
          asChild
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                custom={index}
                variants={cardVariants}
              >
                <Link
                  href={`/doctor/${doctor.id}?${encodeURIComponent(
                    doctor.name
                  )}`}
                  passHref
                >
                  <Flex
                    className={styles.card}
                    direction="column"
                    justify="between"
                    p="4"
                  >
                    <div className={styles.doctorImgWrap}>
                      <img
                        src={`${BASE_PATH}${doctor.avatar || DEFAULT_IMG}`}
                        alt={doctor.name}
                        className={styles.doctorImg}
                        loading="lazy"
                      />
                    </div>

                    <Flex
                      direction="column"
                      align="center"
                      gap="2"
                      px="4"
                      pb="4"
                      mt="2"
                    >
                      <Text
                        weight="bold"
                        size={{ initial: "3", md: "4" }}
                        align="center"
                        style={{ lineHeight: 1.3 }}
                      >
                        {doctor.name}
                      </Text>

                      {doctor.specialty && (
                        <Text
                          size={{ initial: "1", md: "2" }}
                          color="gray"
                          align="center"
                        >
                          {doctor.specialty}
                        </Text>
                      )}

                      <Text
                        size="2"
                        weight="medium"
                        color="green"
                        className={styles.moreDetails}
                      >
                        Детальніше →
                      </Text>
                    </Flex>
                  </Flex>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Grid>
      </Flex>
    </Box>
  );
};
