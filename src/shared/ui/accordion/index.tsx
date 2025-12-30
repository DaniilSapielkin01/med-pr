"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Text } from "@radix-ui/themes";
import * as styles from "./styles.css";

type Item = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  items: Item[];
};

export const MyAccordion = ({ items }: Props) => {
  return (
    <Accordion.Root type="single" collapsible className={styles.root}>
      {items.map((item) => (
        <Accordion.Item key={item.id} value={item.id} className={styles.item}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.trigger}>
              <Text as="span" className={styles.title}>
                {item.title}
              </Text>

              <ChevronDown className={styles.icon} />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className={styles.content}>
            <div className={styles.contentInner}>
              <Text size="2">{item.content}</Text>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
