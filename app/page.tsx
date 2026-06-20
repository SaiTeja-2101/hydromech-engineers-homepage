import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";

// Sections are filled in one phase at a time; remaining ones are placeholders.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />

        {[
          ["about", "About"],
          ["products", "Products"],
          ["why-us", "Why Us"],
          ["process", "Process"],
          ["contact", "Contact"],
        ].map(([id, label], i) => (
          <section
            key={id}
            id={id}
            className={`flex min-h-[60vh] items-center justify-center ${
              i % 2 === 0 ? "bg-white" : "bg-mist"
            }`}
          >
            <p className="font-display text-2xl font-bold text-navy-900/40">
              {label} section — placeholder
            </p>
          </section>
        ))}
      </main>
    </>
  );
}
