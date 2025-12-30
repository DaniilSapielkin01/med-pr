"use client";

import { IMaskInput } from "react-imask";
import * as styles from "./styles.css";

type PhoneInputProps = {
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
};

export const PhoneInput = ({ value, onChange, required }: PhoneInputProps) => {
  return (
    <div className={styles.wrapper}>
      <IMaskInput
        mask="+380 (00) 00 00 000"
        value={value ? `0${value.replace(/^0/, "")}` : ""}
        placeholder="+380 (XX) XX XX XXXX"
        lazy={true}
        unmask={true}
        className={styles.input}
        inputMode="tel"
        type="tel"
        onAccept={(val: string) => {
          let digits = val.replace(/\D/g, "").replace(/^380/, "");

          if (digits.length && digits[0] !== "0") {
            digits = "0" + digits;
          }

          onChange(digits);
        }}
        required={required}
      />
    </div>
  );
};
