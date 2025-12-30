"use client";

import { useState } from "react";
import { Flex, Text } from "@radix-ui/themes";
import { PhoneInput, TextInput } from "@/shared/ui";
import * as styles from "./form.css";
import { toast } from "sonner";

export const Form = ({ onSuccess }: { onSuccess: VoidFunction }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Заявка на запис:", { name, phone });

    setName("");
    setPhone("");

    toast.success("Заявка успішно надіслана! 🎉", {
      description: "Ми зв'яжемося з вами найближчим часом для підтвердження.",
      position: "top-center",
      duration: 4000,
    });

    // Close modal
    onSuccess();
  };

  return (
    <Flex direction="column" gap="6" align="center" width="100%">
      <Text size="6" weight="bold" align="center" color="mint">
        Запис на консультацію
      </Text>

      <Text
        size="3"
        color="gray"
        align="center"
        style={{ maxWidth: "420px", lineHeight: "21px" }}
      >
        Залиште ваші контактні дані, і наш адміністратор зв'яжеться з вами
        найближчим часом, щоб узгодити зручний час візиту.
      </Text>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Flex
          direction="column"
          gap="4"
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

      <Text size="1" color="gray" align="center" style={{ maxWidth: "420px" }}>
        Ваші персональні дані захищені та використовуються виключно для
        організації запису на прийом. Ми не передаємо їх третім особам.
      </Text>
    </Flex>
  );
};
