"use client";

import { Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { PhoneInput, TextInput } from "@/shared/ui";
import * as styles from "./styles.css";

export const FormEvent = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(phone);
  };

  return (
    <Flex
      justify="center"
      pt="5"
      gap="5"
      direction={"column"}
      className={styles.wrapperCard}
    >
      <Flex justify={"center"}>
        <Text size="6" weight="bold">
          Зв'яжіться з нами
        </Text>
      </Flex>
      <form onSubmit={handleSubmit}>
        <Flex direction={"column"} gap="5" width={"100%"}>
          <TextInput value={name} onChange={setName} required />
          <PhoneInput value={phone} onChange={setPhone} required />

          <Flex className={styles.btnForm}>
            <Text
              size="3"
              weight={"bold"}
              color="sky"
              style={{ textTransform: "uppercase" }}
            >
              Надіслати
            </Text>
          </Flex>
        </Flex>
      </form>
      <Text color="gray" weight={"medium"} size={"2"} m="auto">
        Проконсультуйтесь у найкращих лікарів нашого міста.
      </Text>
    </Flex>
  );
};
