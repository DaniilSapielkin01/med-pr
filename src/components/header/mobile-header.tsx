// src/components/header/MobileHeader.tsx
"use client";

import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { mainServices } from "@/shared/constants/services";
import * as styles from "./mobile-header.css";
import { Contacts } from "./contacts";
import { usePathname } from "next/navigation";

interface MobileHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileHeader = ({ isOpen, onToggle }: MobileHeaderProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      onToggle();
    }
  }, [pathname]);

  return (
    <>
      <button
        onClick={onToggle}
        className={styles.burgerButton}
        aria-label="Меню"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`${styles.mobileMenu} ${
          isOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <Flex direction="column" gap="2" px="5" py="3">
          {mainServices.map((item) => {
            const hasSubmenu = !!item.additional;
            const isSubmenuOpen = openSubmenu === item.title;
            const Icon = item.icon;

            return (
              <Flex key={item.title} direction="column">
                <Flex
                  align="center"
                  justify="between"
                  className={hasSubmenu ? styles.submenuTrigger : ""}
                >
                  <Link
                    href={item.link}
                    onClick={() => onToggle()}
                    className={styles.mobileNavLink}
                  >
                    <Flex align="center" gap="2">
                      <Icon size="18" color="var(--mint-a11)" />
                      <Text size="4" weight="medium">
                        {item.title}
                      </Text>
                    </Flex>
                  </Link>

                  {hasSubmenu && (
                    <div
                      className={styles.submenuToggleArea}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleSubmenu(item.title);
                      }}
                    >
                      <div
                        className={`${styles.arrow} ${
                          isSubmenuOpen ? styles.arrowOpen : ""
                        }`}
                      />
                    </div>
                  )}
                </Flex>

                {hasSubmenu && (
                  <div
                    className={`${styles.submenu} ${
                      isSubmenuOpen ? styles.submenuOpen : ""
                    }`}
                  >
                    <Flex direction="column" gap="3" pl="5" pt="3">
                      {item.additional &&
                        item.additional.map((service) => {
                          const Icon = service.icon;

                          return (
                            <Link
                              href={`/service${service.link}`}
                              key={service.ua}
                              onClick={onToggle}
                              className={styles.submenuItem}
                            >
                              {Icon && <Icon size={14} />}
                              <Text size="4" color="gray">
                                {service.ua}
                              </Text>
                            </Link>
                          );
                        })}
                    </Flex>
                  </div>
                )}
              </Flex>
            );
          })}
        </Flex>

        <Flex
          className={styles.contactsSection}
          display={{ initial: "flex", xs: "none" }}
          pr="5"
        >
          <Contacts />
        </Flex>
      </div>
    </>
  );
};
