"use client";

import dynamic from "next/dynamic";
import type { LucideProps } from "lucide-react";

type Props = {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export default function ServiceIcon({
  name,
  size = 56,
  color = "#43ae43",
  strokeWidth = 1.8,
}: Props) {
  const Icon = dynamic<LucideProps>(
    () =>
      import("lucide-react").then((mod) => (mod as any)[name] || mod.Activity),
    {
      ssr: false,
      loading: () => (
        <div
          style={{
            width: size,
            height: size,
            background: "#f8fff8",
            borderRadius: "12px",
          }}
        />
      ),
    }
  );

  return <Icon size={size} color={color} strokeWidth={strokeWidth} />;
}
