"use client";

import { useState } from "react";
import { IHospitals } from "@/shared/types";
import { Flex, Text, Strong } from "@radix-ui/themes";
import { PhoneInput, TextInput } from "@/shared/ui";
import * as styles from "./appointment.css";
import { toast } from "sonner";

interface AppointmentFormProps {
  hospital: IHospitals | null;
  onSuccess: () => void;
}

export const AppointmentForm = ({
  hospital,
  onSuccess,
}: AppointmentFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Запись:", { name, phone, hospital });
    onSuccess();

    setName("");
    setPhone("");

    toast.success("Ваша заявка успішно надіслана! 🎉", {
      description: "Ми зв'яжемося з вами найближчим часом для підтвердження.",
      position: "top-center",
    });
  };

  return (
    <Flex direction="column" gap="5" align="center" width="100%">
      <Text size={"6"} weight="bold" align="center" color="mint">
        Запис на прийом
      </Text>

      {hospital && (
        <Flex
          direction="column"
          gap="1"
          align="center"
          p="2"
          py="4"
          className={styles.hospitalInfoCard}
        >
          <Text size="3" weight="bold" align="center">
            {hospital.street}
          </Text>
          <Text size="3" color="gray" align="center">
            {hospital.city}
          </Text>

          <Flex direction="column" gap="1" mt="3" align="center">
            <Text
              size="3"
              style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}
            >
              <Strong>Графік роботи:</Strong>
              {`\n${hospital.workSchedule}`}
            </Text>
          </Flex>
        </Flex>
      )}

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Flex
          direction="column"
          gap="3"
          maxWidth="400px"
          width="100%"
          mx="auto"
        >
          <TextInput value={name} onChange={setName} required />

          <PhoneInput value={phone} onChange={setPhone} required />

          <button type="submit" className={styles.submitButton}>
            <Text size={{ initial: "3", md: "4" }} weight="bold" color="sky">
              НАДІСЛАТИ ЗАЯВКУ
            </Text>
          </button>
        </Flex>
      </form>

      <Text size="1" color="gray" weight="medium" align="center">
        Проконсультуйтесь у найкращих лікарів нашого міста.
        <br />
        Ми зв'яжемося з вами найближчим часом для підтвердження.
      </Text>
    </Flex>
  );
};
