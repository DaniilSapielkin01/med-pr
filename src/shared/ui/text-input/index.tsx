"use client";

import { IMaskInput } from "react-imask";
import * as styles from "./styles.css";

type TextInputProps = {
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
};

export const TextInput = ({ value, onChange, required }: TextInputProps) => {
  return (
    <div className={styles.wrapper}>
      <IMaskInput
        value={value}
        placeholder="Ваше Ім'я"
        className={styles.input}
        inputMode="text"
        lazy={true}
        mask={/^[A-Za-zА-Яа-яЇїІіЄєҐґ' ]*$/}
        unmask={true}
        onAccept={(val: string) => {
          onChange(val);
        }}
        required={required}
      />
    </div>
  );
};
