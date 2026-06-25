import type { Metadata } from "next";
import { about } from "@/lib/content";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Us | Hydro Mech Engineers",
  description: about.paragraphs[0],
};

export default function AboutPage() {
  return (
    <main>
      <About showMoreLink={false} />
    </main>
  );
}
