import { chiefDoctor, doctors } from "@/data/doctors-list";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ProfileWrapper } from "./ProfileWrapper";

// Static Params
export async function generateStaticParams() {
  return [...doctors, chiefDoctor].map((doc) => ({
    slug: String(doc.id),
  }));
}

// SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const doctor = [...doctors, chiefDoctor].find((d) => d.id === Number(slug));

  if (!doctor) {
    return { title: "Лікар не знайдений" };
  }

  return {
    title: `${doctor.name} — ${doctor.specialty} | Медичний центр`,
    description: `Запис на прийом до ${doctor.name}. Досвід: ${doctor.experience}. Спеціалізація: ${doctor.specialty}.`,
    openGraph: {
      title: `${doctor.name} — ${doctor.specialty}`,
      description: `Лікар вищої категорії. ${doctor.experience}`,
      images: [doctor.avatar],
    },
  };
}

export default async function Profile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const doctor = [...doctors, chiefDoctor].find((d) => d.id === Number(slug));

  if (!doctor) notFound();

  return <ProfileWrapper doctor={doctor} />;
}
