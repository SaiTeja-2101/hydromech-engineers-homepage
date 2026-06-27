import type { Metadata } from "next";
import FaqHero from "@/components/faq/FaqHero";
import FaqAccordion from "@/components/faq/FaqAccordion";
import FaqContact from "@/components/faq/FaqContact";

export const metadata: Metadata = {
  description:
    "Answers to common questions about Ethics Metal Forming Machineries: our sheet metal machines, custom builds, installation and training, after sales support, lead times and warranty.",
};

export default function FaqPage() {
  return (
    <main>
      <FaqHero />
      <FaqAccordion />
      <FaqContact />
    </main>
  );
}
