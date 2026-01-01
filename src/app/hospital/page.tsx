"use client";

import { useState } from "react";
import { Box, Flex, Text, Heading, Separator } from "@radix-ui/themes";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  Ambulance,
  CheckCircle2,
  Award,
  HeartHandshake,
  Users,
  ShieldCheck,
  CheckCheck,
} from "lucide-react";
import Image from "next/image";
import flowerImg from "@/shared/assets/img/flowers.png";
import { SharedDialog } from "@/shared/ui";
import * as styles from "./styles.css";
import { hospitalData } from "@/data/hospital-data";
import { motion } from "framer-motion";
import { DefaultForm } from "@/components";
import { BASE_PATH } from "@/shared/constants";

const contentHeaders = [
  {
    icon: <HeartPulse size={36} color="#43ae43" style={{ width: "36px" }} />,
    title: "Показання до госпіталізації",
    items: hospitalData.indications,
    note: hospitalData.emergencyNote,
  },
  {
    icon: (
      <Stethoscope size={36} color="#43ae43" style={{ minWidth: "36px" }} />
    ),
    title:
      "У центрі дорослі та діти можуть отримати повний спектр медичних послуг:",
    items: hospitalData.services,
  },
  {
    icon: <Activity size={36} color="#43ae43" style={{ width: "36px" }} />,
    title: "Комплексне лікування в стаціонарі",
    items: hospitalData.comprehensiveTreatment,
  },
];

export default function HospitalPage() {
  const [open, setOpen] = useState(false);

  return (
    <Box className={styles.container} p={{ initial: "3", md: "5" }}>
      <Box className={styles.card}>
        {/* Hero секция */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Flex
            p={{ initial: "4", md: "6" }}
            gap={{ initial: "4", md: "8" }}
            className={styles.headWrap}
            direction={{ initial: "column", md: "row" }}
            align={{ initial: "center", md: "end" }}
            position="relative"
            style={{ overflow: "hidden" }}
          >
            {/* Фото */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                flexShrink="0"
                width={{ initial: "100%", md: "520px" }}
                height={{ initial: "420px", md: "520px" }}
                style={{
                  borderRadius: "28px",
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                }}
              >
                <Image
                  src={`${BASE_PATH}/images/hospitals/hospital-2.jpg`}
                  alt="Головний вхід Prevention Hospital з дружньою командою лікарів"
                  width={800}
                  height={600}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  priority
                />
              </Box>
            </motion.div>

            {/* Текст */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              <Flex className={styles.heroSection} flexGrow="1">
                <Heading as="h1" className={styles.heroTitle}>
                  Стаціонар Prevention Hospital
                </Heading>
                {hospitalData.intro.split("\n").map((line, i) => {
                  const formattedLine = line.replace(
                    /Prevention Hospital/g,
                    "<strong>Prevention Hospital</strong>"
                  );

                  return (
                    <Text
                      key={i}
                      my="2"
                      className={styles.heroSubtitle}
                      dangerouslySetInnerHTML={{ __html: formattedLine }}
                    />
                  );
                })}
              </Flex>
              <Flex
                className={styles.overlayButton}
                onClick={() => setOpen(true)}
              >
                Отримати консультацію
              </Flex>
            </motion.div>

            <Image
              src={flowerImg}
              alt="Декоративні квіти"
              className={styles.flowerImg}
              loading="lazy"
            />
          </Flex>
        </motion.div>

        <Image
          src={flowerImg}
          alt="Декоративні квіти"
          className={styles.flowerImg}
          loading="lazy"
        />

        <Separator size="4" />

        <Flex direction="column" gap="8" p={{ initial: "4", md: "6" }} pt="6">
          {contentHeaders.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Flex direction="column" gap="4">
                <Flex align="center" gap="3">
                  {section.icon}
                  <Text className={styles.sectionTitle}>{section.title}</Text>
                </Flex>

                <ul className={styles.listWithBullets}>
                  {section.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Flex align="center" gap="2">
                        <CheckCheck
                          size="18"
                          color="#43ae43"
                          style={{ minWidth: "21px" }}
                        />
                        <Text className={styles.directionItem}>{item}</Text>
                      </Flex>
                    </motion.li>
                  ))}
                </ul>

                {section.note && (
                  <Text size={{ initial: "1", md: "2" }} color="red" mt="3">
                    {section.note}
                  </Text>
                )}
              </Flex>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.1 }}
          >
            <Text className={styles.sectionTitle} style={{ fontSize: "2rem" }}>
              Переваги лікування в Prevention Hospital
            </Text>

            <div className={styles.advantagesGrid}>
              {hospitalData.advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  className={styles.advantageCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                >
                  <Flex direction="column" gap="2" align="start">
                    <Flex align="center" gap="2">
                      {i === 0 && (
                        <CheckCircle2
                          size={40}
                          color="#43ae43"
                          strokeWidth={2}
                        />
                      )}
                      {i === 1 && (
                        <Award size={40} color="#43ae43" strokeWidth={2} />
                      )}
                      {i === 2 && (
                        <HeartHandshake
                          size={40}
                          color="#43ae43"
                          strokeWidth={2}
                        />
                      )}
                      {i === 3 && (
                        <Users size={40} color="#43ae43" strokeWidth={2} />
                      )}
                      {i === 4 && (
                        <ShieldCheck
                          size={40}
                          color="#43ae43"
                          strokeWidth={2}
                        />
                      )}

                      <Text className={styles.advantageTitle}>{adv.title}</Text>
                    </Flex>

                    <Text color="gray" size="3" style={{ lineHeight: "21px" }}>
                      {adv.description}
                    </Text>
                  </Flex>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Санітарне перевезення */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Flex direction="column" gap="4">
              <Flex align="center" gap="3">
                <Ambulance size={36} color="#43ae43" />
                <Text className={styles.sectionTitle}>
                  Санітарне перевезення
                </Text>
              </Flex>
              <Text>{hospitalData.additionalServices}</Text>
            </Flex>
          </motion.div>

          {/* Заключение */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          >
            <Text size="4" weight="medium" align="center" color="green" mt="8">
              {hospitalData.closing.split("\n").map((line, i) => (
                <Text key={i} my="2">
                  {line}
                </Text>
              ))}
            </Text>
          </motion.div>
        </Flex>
      </Box>

      <SharedDialog open={open} onOpenChange={setOpen}>
        <DefaultForm onSuccess={() => setOpen(false)} />
      </SharedDialog>
    </Box>
  );
}
