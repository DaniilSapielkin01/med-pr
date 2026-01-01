import { Flex, Text } from "@radix-ui/themes";

import * as styles from "./contacts.css";
import { Facebook, Instagram, PhoneCall } from "lucide-react";
import { CONSTANTS } from "@/shared/constants";

export const Contacts = () => {
  const cleanPhone = CONSTANTS.PHONE_NUMBER.replace(/[^\d+]/g, "");

  return (
    <Flex
      width="100%"
      py="10px"
      justify="end"
      align="center"
      gap={{ initial: "2", md: "3" }}
    >
      {/* Телефон з можливістю копіювання */}
      <a
        href={`tel:${cleanPhone}`}
        className={styles.topbarPhone}
        style={{ textDecoration: "none", color: "inherit" }} // зберігаємо стиль
      >
        <div className={styles.topbarPhone} style={{ cursor: "pointer" }}>
          <PhoneCall size={16} className={styles.topbarIcon} />
          <Text size="3" weight="bold" wrap="nowrap">
            {CONSTANTS.PHONE_NUMBER}
          </Text>
        </div>
      </a>

      {/* Соцмережі */}
      <Flex gap="3">
        <a
          href={CONSTANTS.SOCIAL_INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.topbarSocialLink}
        >
          <div className={styles.socialCircle}>
            <Instagram size={16} className={styles.socialIcon} />
          </div>
        </a>
        <a
          href={CONSTANTS.SOCIAL_FACEBOOK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.topbarSocialLink}
        >
          <div className={styles.socialCircle}>
            <Facebook size={16} className={styles.socialIcon} />
          </div>
        </a>
      </Flex>
    </Flex>
  );
};
