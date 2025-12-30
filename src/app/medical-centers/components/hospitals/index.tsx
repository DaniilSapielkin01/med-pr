"use client";

import { hospitals } from "@/data/hospital-list";
import { cardVariants, IHospitals } from "@/shared/types";
import { Flex, Grid, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import * as styles from "./styles.css";
import { useState } from "react";
import { SharedDialog } from "@/shared/ui";
import { AppointmentForm } from "./AppointmentForm";

export const Hospitals = () => {
  const [open, setOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<IHospitals | null>(
    null
  );

  const handleOpen = (hospital: IHospitals) => {
    setSelectedHospital(hospital);
    setOpen(true);
  };

  return (
    <Flex
      py="6"
      direction="column"
      align="center"
      gap="8"
      mx="auto"
      px={{ initial: "4", md: "6" }}
      style={{ borderTop: "1px solid var(--gray-6)" }}
      position="relative"
      width={"100%"}
      justify={"center"}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <Text size={{ initial: "6", md: "8" }} weight="bold">
          НАШІ ВІДДІЛЕННЯ
        </Text>
      </motion.div>
      <Grid
        columns={{ initial: "1", sm: "2", md: "3" }}
        gap={{ initial: "4", md: "6" }}
        width="100%"
        maxWidth="1100px"
        asChild
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {hospitals.map((hospital, index) => (
            <motion.div
              key={hospital.id}
              custom={index}
              variants={cardVariants}
            >
              <Flex
                className={styles.hospitalCard}
                direction="column"
                height="100%"
                position="relative"
                overflow="hidden"
                p="4"
              >
                <div className={styles.hospitalImgWrap}>
                  <img
                    src={hospital.image || "/images/hospitals/placeholder.webp"}
                    alt={hospital.street}
                    className={styles.hospitalImg}
                    loading="lazy"
                  />
                </div>

                <Flex direction="column" gap="3" pt="3">
                  <Flex direction="column" gap="1" align="center">
                    <Text
                      size={{ initial: "4", md: "5" }}
                      weight="bold"
                      align="center"
                    >
                      {hospital.street}
                    </Text>
                    <Text
                      size={{ initial: "3", md: "4" }}
                      color="gray"
                      align="center"
                    >
                      {hospital.city}
                    </Text>
                  </Flex>

                  <Text
                    size={{ initial: "2", md: "3" }}
                    color="gray"
                    style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}
                  >
                    <strong>Графік роботи:</strong>
                    {`\n${hospital.workSchedule}`}
                  </Text>
                </Flex>

                <div className={styles.hospitalFullOverlay}>
                  <Flex
                    direction="column"
                    gap="5"
                    align="center"
                    justify="center"
                    height="100%"
                    px="6"
                  >
                    <Text size={"4"} weight="bold" color="sky" align="center">
                      ЗАПИСАТИСЯ НА ПРИЙОМ?
                    </Text>
                    <button
                      className={styles.overlayButton}
                      onClick={() => handleOpen(hospital)}
                    >
                      ТАК
                    </button>
                  </Flex>
                </div>
              </Flex>
            </motion.div>
          ))}
        </motion.div>
      </Grid>

      <SharedDialog open={open} onOpenChange={setOpen}>
        <AppointmentForm
          hospital={selectedHospital}
          onSuccess={() => setOpen(false)}
        />
      </SharedDialog>
    </Flex>
  );
};
