import { Box } from "@radix-ui/themes";
import { Hospitals } from "./components/hospitals";
import flowerImg from "@/shared/assets/img/flowers.png";
import Image from "next/image";
import * as styles from "./styles.css";
import { DepartmentsMap } from "./components/departments-map";

export default function HospitalsPage() {
  return (
    <Box position={"relative"}>
      <Image src={flowerImg} alt="flower-img" className={styles.flowerImg} />
      <Hospitals />;
      <DepartmentsMap />
    </Box>
  );
}
