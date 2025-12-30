"use client";

import { DropdownMenu, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import logo from "@/shared/assets/img/logo.png";
import { useRef, useState } from "react";
import { PhoneCall } from "lucide-react";
import { mainServices } from "../../shared/constants/services";
import { toast } from "sonner";
import { CONSTANTS } from "@/shared/constants";
import * as styles from "./styles.css";

export const Header = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const openMenu = (title: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenItem(title);
  };

  const closeMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenItem(null);
    }, 120);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONSTANTS.PHONE_NUMBER);
    toast.success("Успішно скопійовано");
  };

  return (
    <Flex className={styles.stickyNav}>
      <Flex
        gap="2"
        width="100%"
        px="6"
        justify="between"
        align="center"
        height={"60px"}
        style={{ borderBottom: "2px solid #000 " }}
      >
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo-icon"
            style={{ maxWidth: "300px", height: "auto" }}
            loading="lazy"
          />
        </Link>
        <Flex align="center" gap="4">
          <Flex
            align="center"
            gap="1"
            style={{ cursor: "pointer" }}
            onClick={handleCopy}
          >
            <PhoneCall
              height={18}
              style={{ color: "var(--mint-a11)" }}
              fontVariant={"bold"}
            />
            <Text weight="bold" size="4" style={{ color: "var(--mint-a11" }}>
              {CONSTANTS.PHONE_NUMBER}
            </Text>
          </Flex>
          {mainServices.map((item) => {
            if (!item.additional) {
              return (
                <Link key={item.title} href={item.link}>
                  <Flex px="3" className={styles.navItem}>
                    <Text size={{ initial: "2", md: "3" }} weight="medium">
                      {item.title}
                    </Text>
                    <span
                      className={`${styles.spanBg} ${styles.navItemHover}`}
                    />
                  </Flex>
                </Link>
              );
            }

            const isOpen = openItem === item.title;

            return (
              <DropdownMenu.Root key={item.title} open={isOpen} modal={false}>
                <div
                  onMouseEnter={() => openMenu(item.title)}
                  onMouseLeave={closeMenu}
                  style={{ position: "relative" }}
                >
                  <DropdownMenu.Trigger>
                    <Link href={item.link}>
                      <Flex px="3" className={styles.navItem}>
                        <Text size={{ initial: "2", md: "3" }} weight="medium">
                          {item.title}
                        </Text>
                        <span
                          className={`${styles.spanBg} ${styles.navItemHover} ${
                            isOpen && styles.navItemActive
                          }`}
                        />
                      </Flex>
                    </Link>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Content
                    sideOffset={20}
                    align={"center"}
                    onCloseAutoFocus={(e) => e.preventDefault()}
                  >
                    <Grid
                      columns={item.additional.length > 3 ? "3" : "1"}
                      gapX="4"
                      className={
                        item.additional.length > 3 ? styles.dropdownGrid : ""
                      }
                    >
                      {item.additional.map((service) => (
                        <DropdownMenu.Item
                          key={service.ua}
                          className={styles.dropdownItem}
                        >
                          <Link href={service.link}>
                            <Text size="2" weight="medium">
                              {service.ua}
                            </Text>
                          </Link>
                        </DropdownMenu.Item>
                      ))}
                    </Grid>
                  </DropdownMenu.Content>
                </div>
              </DropdownMenu.Root>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
