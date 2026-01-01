"use client";

import { DropdownMenu, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import logo from "@/shared/assets/img/logo.png";
import { useRef, useState } from "react";
import { mainServices } from "../../shared/constants/services";
import { MobileHeader } from "./mobile-header";
import { Contacts } from "./contacts";
import { usePathname } from "next/navigation";
import * as styles from "./styles.css";
import { BASE_PATH } from "@/shared/constants";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Hooks
  const pathname = usePathname();

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

  return (
    <Flex className={styles.stickyNav}>
      <Flex
        gap="2"
        width="100%"
        px={{ initial: "3", lg: "6" }}
        justify="between"
        align="center"
        height={"60px"}
        style={{ borderBottom: "2px solid #000 " }}
      >
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo-icon"
            loading="lazy"
            className={styles.logoImg}
          />
        </Link>
        <Flex align="center" gap="4" className={styles.desktopNav}>
          <Contacts />
          {mainServices.map((item) => {
            const isActive = pathname.startsWith(`${BASE_PATH}${item.link}`);
            const isOpen = openItem === item.title;

            if (!item.additional) {
              return (
                <Link
                  key={item.title}
                  href={item.link}
                  className={styles.navItem}
                >
                  <Text
                    size="3"
                    className={`${styles.navLink} ${
                      isActive ? styles.navItemActive : ""
                    }`}
                    wrap="nowrap"
                  >
                    {item.title}
                  </Text>
                  <span
                    className={`${styles.underline} ${
                      (isOpen || isActive) && styles.navItemActive
                    }`}
                  />
                </Link>
              );
            }

            return (
              <DropdownMenu.Root key={item.title} open={isOpen} modal={false}>
                <div
                  onMouseEnter={() => openMenu(item.title)}
                  onMouseLeave={closeMenu}
                  style={{ position: "relative" }}
                >
                  <DropdownMenu.Trigger>
                    <Link
                      key={item.title}
                      href={item.link}
                      className={styles.navItem}
                    >
                      <Text
                        size="3"
                        className={`${styles.navLink} ${
                          (isOpen || isActive) && styles.navItemActive
                        }`}
                        wrap="nowrap"
                      >
                        {item.title}
                      </Text>
                      <span
                        className={`${styles.underline} ${
                          (isOpen || isActive) && styles.navItemActive
                        }`}
                      />
                    </Link>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Content
                    sideOffset={19}
                    align="center"
                    onCloseAutoFocus={(e) => e.preventDefault()}
                  >
                    <Grid
                      columns={item.additional.length > 3 ? "3" : "1"}
                      gapX="4"
                      className={
                        item.additional.length > 3 ? styles.dropdownGrid : ""
                      }
                    >
                      {item.additional.map((service) => {
                        const Icon = service.icon;

                        return (
                          <Link
                            href={`/service${service.link}`}
                            key={service.ua}
                          >
                            <DropdownMenu.Item
                              key={service.ua}
                              className={styles.dropdownItem}
                            >
                              {Icon && <Icon size={14} />}
                              <Text size="2" weight="medium">
                                {service.ua}
                              </Text>
                            </DropdownMenu.Item>
                          </Link>
                        );
                      })}
                    </Grid>
                  </DropdownMenu.Content>
                </div>
              </DropdownMenu.Root>
            );
          })}
        </Flex>

        {/* Мобільна частина */}
        <Flex className={styles.mobileNav} align="center" gap="4">
          <Flex display={{ initial: "none", xs: "flex", md: "flex" }}>
            <Contacts />
          </Flex>
          <MobileHeader
            isOpen={mobileMenuOpen}
            onToggle={() => setMobileMenuOpen((prev) => !prev)}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
