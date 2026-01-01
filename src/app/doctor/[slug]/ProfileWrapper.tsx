"use client";

import { useState } from "react";
import { Flex, Text, Heading, Box, Separator } from "@radix-ui/themes";
import * as styles from "./styles.css";
import Image from "next/image";
import flowerImg from "@/shared/assets/img/flowers.png";
import { Activity, GraduationCap, Instagram, Stethoscope } from "lucide-react";
import { SharedDialog } from "@/shared/ui";
import { motion } from "framer-motion";
import { DefaultForm } from "@/components";
import { IDoctors } from "@/shared/types";
import { BASE_PATH } from "@/shared/constants";

export function ProfileWrapper({ doctor }: { doctor?: IDoctors }) {
  const [open, setOpen] = useState(false);

  if (!doctor) {
    return (
      <Flex height="100vh" align="center" justify="center">
        <Text size="9" weight="medium" color="gray">
          Доктор не знайдений
        </Text>
      </Flex>
    );
  }

  return (
    <Box className={styles.container} p={{ initial: "3", md: "5" }}>
      <Box className={styles.card}>
        {/* Hero секция */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <Flex
            p={{ initial: "4", md: "7" }}
            gap={{ initial: "5", md: "9" }}
            className={styles.headWrap}
          >
            {/* Фото доктора */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box className={styles.avatarWrap}>
                <img
                  src={`${BASE_PATH}${doctor.avatar}`}
                  alt={doctor.name}
                  className={styles.avatar}
                />
              </Box>
            </motion.div>

            {/* Текстовая информация */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              <Flex
                direction="column"
                justify="center"
                className={styles.heroInfo}
              >
                <Heading as="h1" className={styles.nameHeading}>
                  {doctor.name}
                </Heading>
                <Text
                  className={styles.specialty}
                  size={{ initial: "3", md: "6" }}
                >
                  {doctor.specialty}
                </Text>
                <Text className={styles.experience}>{doctor.experience}</Text>

                {doctor.instagram && (
                  <a
                    href={doctor.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <Flex my="2" align={"center"} gap="2">
                      <div className={styles.socialCircle}>
                        <Instagram size={21} className={styles.socialIcon} />
                      </div>
                      <Text
                        size="3"
                        weight={"bold"}
                        className={styles.nameInstagram}
                      >
                        Dr. Victor Petrov
                      </Text>
                    </Flex>
                  </a>
                )}

                <Flex
                  className={styles.overlayButton}
                  onClick={() => setOpen(true)}
                >
                  Запис на консультацію
                </Flex>
              </Flex>
            </motion.div>

            <Image
              src={flowerImg}
              alt="flower-img"
              className={styles.flowerImg}
              loading="lazy"
            />
          </Flex>
        </motion.div>

        <Separator size="4" />

        {/* Нижняя часть — секции */}
        <Flex
          gap="5"
          direction="column"
          p={{ initial: "4", md: "7" }}
          pt={{ initial: "2", md: "5" }}
        >
          {/* Освіта */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Flex direction="column">
              <Flex align="center" gap="2">
                <GraduationCap size={32} color="#43ae43" />
                <Text className={styles.sectionTitle}>Освіта</Text>
              </Flex>
              <Flex direction="column">
                {doctor.education?.split(". ").map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Text className={styles.directionItem}>
                      {item.trim()}
                      {doctor.education &&
                        index < doctor.education.split(". ").length - 1 &&
                        "\n"}
                    </Text>
                  </motion.div>
                ))}
              </Flex>
            </Flex>
          </motion.div>

          {/* Спеціалізація */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Flex direction="column" gap="2">
              <Flex align="center" gap="2">
                <Stethoscope size={32} strokeWidth={2} color="#43ae43" />
                <Text className={styles.sectionTitle}>Спеціалізація</Text>
              </Flex>
              <Flex direction="column">
                {doctor.specialization?.split(". ").map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Text className={styles.directionItem}>
                      {item.trim()}
                      {doctor.specialization &&
                        index < doctor.specialization.split(". ").length - 1 &&
                        "\n"}
                    </Text>
                  </motion.div>
                ))}
              </Flex>
            </Flex>
          </motion.div>

          {/* Напрями діяльності */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box>
              <Flex align="center" gap="2">
                <Activity size={32} strokeWidth={2} color="#43ae43" />
                <Text className={styles.sectionTitle}>Напрями діяльності</Text>
              </Flex>
              <ul className={styles.directionsList}>
                {doctor.directions?.map((dir, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Text size="4" className={styles.directionItem}>
                      {dir}
                    </Text>
                  </motion.li>
                ))}
              </ul>
            </Box>
          </motion.div>
        </Flex>
      </Box>

      <SharedDialog open={open} onOpenChange={setOpen}>
        <DefaultForm onSuccess={() => setOpen(false)} />
      </SharedDialog>
    </Box>
  );
}
