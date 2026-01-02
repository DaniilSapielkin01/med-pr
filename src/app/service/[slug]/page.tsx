import { Box } from "@radix-ui/themes";
import * as styles from "./styles.css";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ServicesData } from "@/shared/types";
import Image from "next/image";
import flowerImg from "@/shared/assets/img/flowers.png";
import { Header } from "./components/Header";
import { Indications } from "./components/Indications";
import { Services } from "./components/Services";
import { services } from "@/shared/constants/services";
import { ApprForm } from "./components/ApprForm";

// Static Params
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.link.replace(/^\//, ""),
  }));
}

// (SEO)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data: ServicesData = await import(
      `../../../data/services/${slug}.json`
    ).then((m) => m.default);

    return {
      title: `${data.title} | Медичний центр`,
      description: data.desc || `Професійна послуга: ${data.title}`,
    };
  } catch {
    return { title: "Послуга не знайдена" };
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let data: ServicesData;

  try {
    data = await import(`../../../data/services/${slug}.json`).then(
      (module) => module.default
    );
  } catch (error) {
    notFound();
  }

  return (
    <Box position={"relative"}>
      <Box
        maxWidth="1440px"
        minHeight={"100vh"}
        mx="auto"
        px="4"
        py={{ initial: "6", md: "9" }}
      >
        <Image
          src={flowerImg}
          alt="flower-img"
          className={styles.flowerImg}
          loading="lazy"
        />
        <Header data={data} />
        <Indications indications={data.indications} />
        <Services services={data.services} />
        <ApprForm />
      </Box>
    </Box>
  );
}
