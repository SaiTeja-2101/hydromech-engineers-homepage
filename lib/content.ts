/**
 * Single source of truth for all homepage copy and data.
 *
 * Everything here is grounded in the official Hydro Mech Engineers brochure and
 * the company website screenshots — no invented claims, certifications or awards.
 * Keeping content in one typed file makes every section data-driven and easy to
 * maintain (and easy to walk through in the Loom video).
 */

export const site = {
  name: "Hydro Mech Engineers",
  shortName: "Hydro Mech",
  tagline: "Reliable Machines, Built for Industrial Demands",
  eyebrow: "Your Trusted Sheet Metal Partner",
  intro:
    "At Hydro Mech Engineers, we design and manufacture durable and efficient sheet metal machines — built for reliability, precision and long-term value.",
  phone: "+91 973 837 1651",
  phoneHref: "tel:+919738371651",
  whatsappHref: "https://wa.me/919738371651",
  email: "hydromechengineer@gmail.com",
  emailHref: "mailto:hydromechengineer@gmail.com",
  website: "www.hydromech.co.in",
  address:
    "#10, 1st Main, 1st Cross, Doddanekundi Industrial Area, Opp to NGEF Ancillary, Mahadevapura Post, Bangalore - 560 048",
  addressShort: "Doddanekundi Industrial Area, Bangalore",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Doddanekundi+Industrial+Area+Mahadevapura+Bangalore+560048",
} as const;

/** Primary navigation — anchors to on-page sections. */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * Hero slides — full-bleed real industrial photography (Pexels, free licence).
 * Each slide has its own headline + subtext that rotate with the background.
 * Photo credits are logged in the README.
 */
export const heroSlides = [
  {
    src: "/hero/slide-1.jpg",
    eyebrow: "Sheet Metal Machinery",
    headline: "Machines That Keep Your Line Running",
    sub: "We build sheet metal machines that work hard, last for years, and need very little maintenance.",
    alt: "A clean factory floor lined with industrial press machines",
  },
  {
    src: "/hero/slide-2.jpg",
    eyebrow: "Bus Bar Processing",
    headline: "Punch, Bend and Cut Bus Bars in One Machine",
    sub: "Handle copper and aluminium with quick setup changes and steady, repeatable accuracy.",
    alt: "Industrial machine cutting a steel sheet",
  },
  {
    src: "/hero/slide-3.jpg",
    eyebrow: "Precision Engineering",
    headline: "Clean Cuts and Accurate Bends, Every Shift",
    sub: "Strong steel and tested parts give you the same result, run after run.",
    alt: "Close-up of a CNC machine cutting metal with precision",
  },
  {
    src: "/hero/slide-4.jpg",
    eyebrow: "Custom Built",
    headline: "Machines Built Around the Job You Run",
    sub: "Tell us your material and output, and we shape the machine to fit your floor.",
    alt: "An engineer in safety gear inspecting heavy industrial machinery",
  },
  {
    src: "/hero/slide-5.jpg",
    eyebrow: "After Sales Support",
    headline: "We Stay With You After the Sale",
    sub: "Quick service and ready spare parts keep your floor working for the long run.",
    alt: "A technician walking through a sheet metal workshop",
  },
] as const;

/** Credibility stats — sourced from the company website. */
export const stats = [
  { value: 200, suffix: "+", label: "Satisfied Clients", accent: false },
  { value: 20, suffix: "+", label: "Industry Verticals", accent: false },
  { value: 6, suffix: "+", label: "Machine Categories", accent: true },
  { value: 15, suffix: "+", label: "Years of Excellence", accent: false },
] as const;

/** About section — paragraphs paraphrased directly from the brochure. */
export const about = {
  paragraphs: [
    "Hydro Mech Engineers is a young sheet metal company built on a strong vision: to deliver reliable and economical sheet metal solutions that meet real industrial demands.",
    "We take pride in the quality of our machines and the service we provide. We use high-quality materials and components so that every machine is dependable and long-lasting.",
    "We are devoted to manufacturing high-quality machines and press brake tools for sheet metal solutions, and we continually improve our products, quality and specifications to give our clients the best.",
    "With excellent after-sales support, we maintain frequent contact with customers to address their requirements and build long-term relationships.",
  ],
  vision:
    "To deliver innovative products with superior quality and unmatched customer support.",
} as const;

/**
 * Products — the six machine categories from the brochure.
 * Images use the real white-background product photos where available.
 */
export const products = [
  {
    id: "bus-bar",
    name: "Hydraulic Bus Bar Processing Machines",
    model: "HMB-303",
    blurb:
      "Efficient punching, bending and cutting of copper and aluminium bus bars in a single, easy-to-adjust unit.",
    points: ["Punch, bend & shear", "Copper & aluminium", "Quick station setup"],
    image: "/products/busbar-processing.jpg",
  },
  {
    id: "clinching",
    name: "Hydraulic Clinching Machines",
    model: "HM-640",
    blurb:
      "Strong, accurate fastener-insertion machines with a rigid, tensile-tested C-frame structure.",
    points: ["Hydraulic force 53 kN", "Throat depth 450 mm", "Safety protection"],
    image: "/products/clinching.jpg",
  },
  {
    id: "section-bending",
    name: "Hydraulic Section Bending Machines",
    model: "Section Bender",
    blurb:
      "Precision bending of profiles and sections for versatile fabrication applications.",
    points: ["Accurate profile bends", "Robust construction", "Versatile use"],
    image: "/products/section-bending.jpg",
  },
  {
    id: "sheet-rolling",
    name: "Hydro-Mechanical Sheet Rolling Machines",
    model: "HM-SR312",
    blurb:
      "Asymmetrical 3-roll bending with high-strength steel rolls — easy operation for thin sheet bending.",
    points: ["3-roll design", "Hardened steel rolls", "Motor-driven bending"],
    image: "/products/plate-rolling.jpg",
  },
  {
    id: "c-h-frame",
    name: "Hydraulic C-Frame & H-Frame Machines",
    model: "Press Frames",
    blurb:
      "High-strength press frames engineered for rigidity and dependable industrial pressing.",
    points: ["Rigid frame", "Repeatable force", "Industrial duty"],
    image: "/products/busbar-punching.jpg",
  },
  {
    id: "press-brake-tools",
    name: "CNC Press Brake Tools",
    model: "Tooling",
    blurb:
      "Precision-ground press brake tooling for accurate, consistent bending results.",
    points: ["Precision ground", "Consistent bends", "Made to spec"],
    image: "/products/detail-bending.jpg",
  },
] as const;

/** Why Choose Us — feature cards. `icon` maps to a lucide icon in the component. */
export const features = [
  {
    icon: "ShieldCheck",
    title: "High-Quality Engineering",
    desc: "Machines built with superior-grade materials and components.",
  },
  {
    icon: "Lightbulb",
    title: "Innovative Designs",
    desc: "Constant improvement in technology and specifications.",
  },
  {
    icon: "Settings",
    title: "Custom Solutions",
    desc: "Machines tailored to meet unique client requirements.",
  },
  {
    icon: "Gauge",
    title: "Reliable Performance",
    desc: "Machines tested for durability and accuracy.",
  },
  {
    icon: "Headset",
    title: "After-Sales Service",
    desc: "Continuous support and quick problem-solving.",
  },
  {
    icon: "BadgeIndianRupee",
    title: "Affordable Solutions",
    desc: "Cost-effective machinery without compromising on quality.",
  },
] as const;

/** Process — the end-to-end journey. */
export const processSteps = [
  {
    icon: "MessagesSquare",
    title: "Consultation",
    desc: "Understanding your industrial needs and challenges.",
  },
  {
    icon: "PencilRuler",
    title: "Design & Customization",
    desc: "Developing machines tailored to your specifications.",
  },
  {
    icon: "Factory",
    title: "Manufacturing",
    desc: "Precision engineering with high-quality materials.",
  },
  {
    icon: "Truck",
    title: "Delivery & Support",
    desc: "On-time delivery with reliable after-sales service.",
  },
] as const;

export type Product = (typeof products)[number];
export type Feature = (typeof features)[number];
export type Stat = (typeof stats)[number];
