"use client";

import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import logoImg from "@/shared/assets/img/logo.png";
import Image from "next/image";
import * as styles from "./styles.css";
import { PhoneCall, Mail, Instagram, Facebook } from "lucide-react";
import { CONSTANTS } from "@/shared/constants";
import { toast } from "sonner";
import { mainServices } from "@/shared/constants/services";

export const Footer = () => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONSTANTS.PHONE_NUMBER);
    toast.success("Номер скопійовано!");
  };
  const cleanPhone = CONSTANTS.PHONE_NUMBER.replace(/[^\d+]/g, "");

  return (
    <Flex direction="column" width="100%" asChild>
      <footer className={styles.footerWrapper}>
        <Flex
          direction={{ initial: "column", md: "row" }}
          justify="between"
          align={{ initial: "center", md: "start" }}
          gap={{ initial: "1", md: "7" }}
          py={{ initial: "4", md: "6" }}
          px={{ initial: "3", md: "5" }}
          maxWidth="1440px"
          m="auto"
        >
          <Flex
            direction="column"
            gap="6"
            align={{ initial: "center", md: "start" }}
            maxWidth="360px"
          >
            <Image
              src={logoImg}
              alt="Логотип Med-Site"
              width={240}
              height={64}
              style={{ objectFit: "contain" }}
            />
            <Text
              size="3"
              color="gray"
              align={{ initial: "center", md: "left" }}
            >
              Надійна медична допомога з турботою про ваше здоров'я та комфорт
            </Text>

            <Flex
              gap="4"
              align="center"
              justify={{ initial: "center", md: "start" }}
            >
              <a
                href={CONSTANTS.SOCIAL_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <div className={styles.socialCircle}>
                  <Instagram size={20} className={styles.socialIcon} />
                </div>
              </a>
              <a
                href={CONSTANTS.SOCIAL_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <div className={styles.socialCircle}>
                  <Facebook size={20} className={styles.socialIcon} />
                </div>
              </a>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            gap="4"
            align={{ initial: "center", md: "start" }}
          >
            <Text size="5" weight="bold" className={styles.sectionTitle}>
              Наші послуги
            </Text>
            <Flex
              direction="column"
              gap="3"
              align={{ initial: "center", md: "start" }}
            >
              {mainServices.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className={styles.navItem}
                >
                  <Text size="3" className={styles.navLink}>
                    {item.title}
                  </Text>
                  <span className={styles.underline} />
                </Link>
              ))}
            </Flex>
          </Flex>

          <Flex
            direction="column"
            gap="5"
            align={{ initial: "center", md: "start" }}
          >
            <Text size="5" weight="bold" className={styles.sectionTitle}>
              Контакти
            </Text>

            <Flex
              direction="column"
              gap="4"
              align={{ initial: "center", md: "start" }}
            >
              <a
                href={`tel:${cleanPhone}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className={styles.contactItem} onClick={handleCopy}>
                  <PhoneCall size={21} className={styles.contactIcon} />
                  <Text size="3" weight="bold">
                    {CONSTANTS.PHONE_NUMBER}
                  </Text>
                </div>
              </a>

              {/* <a href="mailto:info@med-site.ua" className={styles.contactItem}>
                <Mail size={21} className={styles.contactIcon} />
                <Text size="3">info@med-site.ua</Text>
              </a> */}
            </Flex>
          </Flex>
        </Flex>

        <Flex
          className={styles.lowerSection}
          direction={{ initial: "column", sm: "row" }}
          gap="6"
        >
          <Text size="2" color="gray">
            © 2025 Prevention. Всі права захищено.
          </Text>

          <Link href="/privacy-policy" className={styles.navItem}>
            <Text size="2" className={styles.navLink}>
              Політика конфіденційності
            </Text>
            <span className={styles.underline} />
          </Link>

          <Text size="2" color="gray">
            Ліцензія МОЗ України N3498/21/M від 12.08.2021
          </Text>
        </Flex>
      </footer>
    </Flex>
  );
};
