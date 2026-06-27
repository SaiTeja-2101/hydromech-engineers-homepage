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

/** Primary navigation — root-relative so anchors work from any route. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Products", href: "/#products" },
  { label: "Why Us", href: "/why-us" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
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

/** About section — paraphrased from the brochure, in plain language. */
export const about = {
  headline: "Built on Reliable, Economical Engineering",
  paragraphs: [
    "Hydro Mech Engineers is a sheet metal company with one clear goal: to deliver reliable and economical machines that meet real industrial demands.",
    "We use high-quality materials and tested components, so every machine is dependable and built to last. We keep improving our products, and we stand behind them long after delivery.",
  ],
  values: [
    {
      title: "Quality Materials",
      desc: "High-grade materials and tested components in every build.",
    },
    {
      title: "Custom-Built",
      desc: "Machines shaped around your material and output.",
    },
    {
      title: "After-Sales Support",
      desc: "Fast service and spare parts that keep you running.",
    },
  ],
  vision:
    "To deliver innovative products with superior quality and unmatched customer support.",
} as const;

/**
 * About Us page — richer, standalone content for the dedicated /about-us route.
 * All copy is grounded in the company brochure and website. Kept separate from
 * the home `about` object so the landing section stays unchanged.
 */
export const aboutPage = {
  hero: {
    eyebrow: "About Hydro Mech Engineers",
    // Each line is an array of segments; one segment is highlighted in the UI.
    headline: [
      [{ text: "We build the machines" }],
      [{ text: "that " }, { text: "shape", highlight: true }, { text: " sheet metal." }],
    ],
    sub: "A young sheet metal company from Bangalore with a strong vision, to deliver reliable and economical machines that meet real industrial demands.",
    image: "/about/hero-banner.jpg",
    imageAlt: "Sparks fly from an industrial metal cutting machine on the shop floor",
    meta: "Bangalore, India",
    primaryCta: { label: "Talk to our team", href: "/#contact" },
    secondaryCta: { label: "Explore machines", href: "/#products" },
  },
  story: {
    eyebrow: "Our Story",
    lead: "We take pride in the quality of our machines and the service we provide.",
    paragraphs: [
      "Hydro Mech Engineers is a young sheet metal company with a strong vision, to deliver reliable and economical sheet metal solutions for real industrial demands.",
      "We use high quality materials and tested components, so every machine is dependable and built to last. We are devoted to manufacturing high quality machines and press brake tools, and we keep improving their quality and specifications so our clients always get the best.",
      "Our work does not end at delivery. We stay in frequent contact with customers to understand their needs, keep spare parts ready, and build long term relationships that keep their floors running.",
    ],
    image: "/about/fabrication.jpg",
    imageAlt: "Sparks fly during metal fabrication in the workshop",
    stats: [
      { value: "15+", label: "Years of excellence" },
      { value: "200+", label: "Clients served" },
      { value: "20+", label: "Industries" },
    ],
  },
  factsIntro: {
    eyebrow: "By the Numbers",
    title: "Trusted across Indian industry",
  },
  values: {
    eyebrow: "What We Stand For",
    title: "The values behind every machine",
    items: [
      { title: "Reliability", desc: "Tested components and high grade materials in every build." },
      { title: "Economical engineering", desc: "Dependable machines that respect your budget." },
      { title: "Precision", desc: "Accurate, repeatable results, run after run." },
      { title: "Custom built", desc: "Machines shaped around your material and output." },
      { title: "Continuous improvement", desc: "We keep refining quality and specifications." },
      { title: "After sales support", desc: "Fast service and spare parts that keep you running." },
    ],
  },
  capabilities: {
    eyebrow: "What We Make",
    title: "Six machine families, one standard of quality",
    sub: "From bus bar processing to press brake tooling, every machine is built for sheet metal work that has to be right the first time.",
  },
  process: {
    eyebrow: "How We Work",
    title: "From first call to long after delivery",
  },
  vision: {
    eyebrow: "Our Vision",
    quote: "To deliver innovative products with superior quality and unmatched customer support.",
  },
  cta: {
    heading: "Let's build the right machine for your floor.",
    sub: "Tell us your material and output, and our team will help you spec the right machine and share a quote.",
  },
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
    heroImage: "/products/banners/bus-bar-v2.jpg",
    heroAlt: "Hydro Mech hydraulic bus bar processing machine on the factory floor",
    tagline: "Punch, bend and cut copper and aluminium bus bars on one machine.",
    overview:
      "The HMB-303 series gives one effective solution for punching, bending and cutting bus bars. Each station adjusts quickly to shorten setup time and improve production, and it handles both copper and aluminium. The machine is easy to move and maintain.",
    highlights: [
      "Three operations in one",
      "Copper & aluminium",
      "Up to 16T × W200 mm",
      "5 HP motor",
    ],
    specs: [
      { label: "Operations", value: "Punching, Bending, Shearing" },
      { label: "Material", value: "Copper & Aluminium" },
      { label: "Punching capacity", value: "Up to ø20 × 16T" },
      { label: "Bending capacity", value: "Up to 16T × W200 mm" },
      { label: "Shearing capacity", value: "Up to 16T × W200 mm" },
      { label: "Stroke (punch / bend / shear)", value: "60 / 80 / 40 mm" },
      { label: "Motor", value: "5 HP" },
      { label: "Models", value: "HMB-303M (manual), HMB-303NC (NC bending)" },
    ],
    features: [
      "Squaring arm for the shearing and bending stations",
      "Fine manual stroke adjustment on the bending station",
      "Manual gauge stopper on the punching station for faster work",
      "NC option sets the bending angle by digital input",
      "Vertical axis adjusts to the bus bar width (NC)",
      "Easy to move and maintain",
    ],
    gallery: [
      { src: "/products/detail-punching.jpg", caption: "Punching station" },
      { src: "/products/detail-bending.jpg", caption: "Bending station" },
      { src: "/products/detail-shearing.jpg", caption: "Shearing station" },
    ],
  },
  {
    id: "clinching",
    name: "Hydraulic Clinching Machines",
    model: "HM-640",
    blurb:
      "Strong, accurate fastener-insertion machines with a rigid, tensile-tested C-frame structure.",
    points: ["Hydraulic force 53 kN", "Throat depth 450 mm", "Safety protection"],
    image: "/products/clinching.jpg",
    heroImage: "/products/banners/clinching.webp",
    heroAlt: "Hydro Mech hydraulic clinching machine",
    tagline: "Strong, repeatable fastener insertion on a rigid C-frame.",
    overview:
      "The HM-640 inserts fasteners into sheet metal with a hydraulic force of 53 kN and tight force repeatability of ±2%. Its C-frame is built from ultrasonically and tensile-tested IS:2062 grade steel for rigidity and minimal deflection, with a safety protection system and positive stop as standard.",
    highlights: [
      "Hydraulic force 53 kN",
      "Force repeatability ±2%",
      "Throat depth 450 mm",
      "3 HP motor",
    ],
    specs: [
      { label: "Drive", value: "Hydraulic" },
      { label: "Output pressure", value: "0.5–4 T" },
      { label: "Throat depth", value: "450 mm" },
      { label: "Clinching capacity", value: "6 mm nut (below M8)" },
      { label: "Holding time", value: "1–5 s" },
      { label: "Open height", value: "250 mm" },
      { label: "Anti-rotation die", value: "Yes" },
      { label: "Safety protection", value: "Yes" },
      { label: "Motor", value: "3 HP" },
      { label: "Dimensions (L × W × H)", value: "950 × 950 × 2000 mm" },
    ],
    features: [
      "Hydraulic force of 53 kN",
      "Force repeatability within ±2%",
      "Safety protection system",
      "Positive stop function as standard",
      "Ultrasonically and tensile-tested IS:2062 steel C-frame",
      "Fastener insertion capacity below M8 of steel",
    ],
    gallery: [
      { src: "/products/detail-clinching.jpg", caption: "Clinching station" },
    ],
  },
  {
    id: "section-bending",
    name: "Hydraulic Section Bending Machines",
    model: "HM-SB Series",
    blurb:
      "Precision bending of profiles and sections for versatile fabrication applications.",
    points: ["Accurate profile bends", "Robust construction", "Versatile use"],
    image: "/products/section-bending.jpg",
    heroImage: "/products/banners/section-bending.jpg",
    heroAlt: "Hydro Mech hydraulic section bending machine in the workshop",
    tagline: "Three-roll bending for pipes, angles, flats and profiles.",
    overview:
      "A hydraulic three-roll section bending machine for round pipe, square and rectangular pipe, angle and flat bar. The HV series works in both horizontal and vertical orientation, with hardened rolls, quick roll change and a welded steel frame that a semi-skilled operator can run.",
    highlights: [
      "Round, square & rectangular pipe",
      "Angle & flat bar",
      "Horizontal & vertical operation",
      "Hardened rolls",
    ],
    specs: [
      { label: "Round pipe", value: "ø50 × 3 mm · ø75 × 5 mm" },
      { label: "Square pipe", value: "50 × 50 × 3 mm · 75 × 75 × 5 mm" },
      { label: "Rectangular pipe", value: "60 × 40 × 3 mm · 80 × 60 × 5 mm" },
      { label: "Angle", value: "50 × 5 mm · 50 × 6 mm" },
      { label: "Flat bar", value: "50 × 10 mm · 60 × 10 mm" },
      { label: "Operation", value: "Horizontal & vertical (HV series)" },
      { label: "Motor", value: "3 HP · 5 HP" },
      { label: "Models", value: "HM-SB50, HM-SB75" },
    ],
    features: [
      "Horizontal and vertical operation (HV series)",
      "Manual adjustment of the upper roll",
      "Foot-switch control with reverse and forward",
      "Hardened rolls for standard profiles",
      "Easy and quick roll change",
      "Hardened and ground shafts running in roller bearings",
      "Welded steel frame, runs with a semi-skilled operator",
    ],
    gallery: [],
  },
  {
    id: "sheet-rolling",
    name: "Hydro-Mechanical Sheet Rolling Machines",
    model: "HM-SR312",
    blurb:
      "Asymmetrical 3-roll bending with high-strength steel rolls for easy, accurate thin-sheet work.",
    points: ["3-roll design", "Hardened steel rolls", "Motor-driven bending"],
    image: "/products/plate-rolling.jpg",
    heroImage: "/products/banners/sheet-rolling.jpg",
    heroAlt: "Hydro Mech hydro-mechanical sheet rolling machine",
    tagline: "Asymmetrical three-roll slip rolling for thin steel sheet.",
    overview:
      "An asymmetrical three-roll slip rolling machine for bending thin steel sheet. Motor driven with high-strength steel rolls, a fixed top roller and adjustable lower and rear rollers, plus a quick-release top roller to free the finished workpiece.",
    highlights: [
      "Asymmetrical 3-roll design",
      "Up to 3 mm × 1500 mm",
      "High-strength steel rolls",
      "Quick-release top roller",
    ],
    specs: [
      { label: "Max rolling thickness", value: "2 / 3 / 3 mm" },
      { label: "Max rolling width", value: "1200 / 1200 / 1500 mm" },
      { label: "Roll diameter", value: "90 / 100 / 115 mm" },
      { label: "Min rolling diameter", value: "110 / 120 / 145 mm" },
      { label: "Motor", value: "2 / 3 / 3 HP" },
      { label: "Models", value: "HM-SR212, HM-SR312, HM-SR315" },
    ],
    features: [
      "Easy to operate for thin steel sheet bending",
      "Motor driven for bending",
      "Top roller raises and lowers to discharge the workpiece",
      "Fixed top roller with adjustable lower and rear rollers",
      "Worm gear and motor for pre-bending",
      "Quick-release top roller",
    ],
    gallery: [],
  },
  {
    id: "c-h-frame",
    name: "Hydraulic C-Frame & H-Frame Machines",
    model: "HM-BM / PM20",
    blurb:
      "High-strength press frames engineered for rigidity and dependable industrial pressing.",
    points: ["Rigid frame", "Repeatable force", "Industrial duty"],
    image: "/products/busbar-punching.jpg",
    heroImage: "/products/banners/c-h-frame-v2.jpg",
    heroAlt: "Hydro Mech hydraulic C-frame press machines",
    tagline: "Compact, rigid presses for fast single-station work.",
    overview:
      "Compact, portable C-frame presses for quick, accurate single-station bending and punching, plus larger H-frame presses built to your needs. Light and easy to move, with inexpensive tooling and low maintenance, built on rigid tensile-tested steel frames.",
    highlights: [
      "Single-station bending & punching",
      "Copper & aluminium",
      "Compact & portable",
      "Low maintenance",
    ],
    specs: [
      { label: "Bending (HM-BM20)", value: "Copper 10T × W200 · Aluminium 14T × W200 mm" },
      { label: "Bending stroke / motor", value: "80 mm · 2 HP" },
      { label: "Punching (HM-PM20)", value: "Copper ø14 × 12T · Aluminium ø16 × 14T" },
      { label: "Punching stroke / motor", value: "60 mm · 2 HP" },
      { label: "Frame", value: "Rigid tensile-tested steel (C & H frame)" },
      { label: "Build", value: "Single-station; H-frame to spec" },
    ],
    features: [
      "Speedy and accurate bends and punches",
      "Stroke control for a pre-set degree of bend",
      "Manual gauge bar stoppers for positioning",
      "Inexpensive tooling",
      "Compact and light, easy to move and maintain",
      "Low maintenance requirement",
    ],
    gallery: [
      { src: "/products/busbar-bending.jpg", caption: "Bending press" },
      { src: "/products/busbar-punching.jpg", caption: "Punching press" },
    ],
  },
  {
    id: "press-brake-tools",
    name: "CNC Press Brake Tools",
    model: "Tooling",
    blurb:
      "Precision-ground press brake tooling for accurate, consistent bending results.",
    points: ["Precision ground", "Consistent bends", "Made to spec"],
    image: "/products/detail-shearing.jpg",
    heroImage: "/products/banners/press-brake-tools.jpg",
    heroAlt: "CNC press brake tooling, punches and dies",
    tagline: "Precision-ground tooling for accurate, repeatable bends.",
    overview:
      "Precision-ground press brake tooling, punches and dies, made for CNC and conventional press brakes. We manufacture standard and custom profiles to your bending requirements so you get accurate, consistent results, bend after bend.",
    highlights: [
      "Precision ground",
      "Standard & custom profiles",
      "CNC & conventional brakes",
      "Consistent results",
    ],
    specs: [
      { label: "Tooling", value: "Punches & dies" },
      { label: "Manufacture", value: "Precision ground" },
      { label: "Material", value: "Hardened tool steel" },
      { label: "Compatibility", value: "CNC & conventional press brakes" },
      { label: "Profiles", value: "Standard & custom" },
      { label: "Made to", value: "Your bending requirements" },
    ],
    features: [
      "Precision-ground for accuracy",
      "Standard and custom profiles",
      "Hardened tool steel for long life",
      "Consistent, repeatable bends",
      "Made to your press brake and bending specs",
    ],
    gallery: [],
  },
] as const;

/** Why Choose Us — reasons (icon-free; each carries a real photo). */
export const features = [
  {
    title: "High-Quality Engineering",
    desc: "Machines built with superior-grade materials and components.",
    image: "/why/1.jpg",
  },
  {
    title: "Innovative Designs",
    desc: "Constant improvement in technology and specifications.",
    image: "/why/2.jpg",
  },
  {
    title: "Custom Solutions",
    desc: "Machines tailored to meet unique client requirements.",
    image: "/why/3.jpg",
  },
  {
    title: "Reliable Performance",
    desc: "Machines tested for durability and accuracy.",
    image: "/why/4.jpg",
  },
  {
    title: "After-Sales Service",
    desc: "Continuous support and quick problem-solving.",
    image: "/why/5.jpg",
  },
  {
    title: "Affordable Solutions",
    desc: "Cost-effective machinery without compromising on quality.",
    image: "/why/6.jpg",
  },
] as const;

/**
 * Why Us page — standalone content for /why-us. Reuses the `features` reasons
 * for the bento grid; all copy grounded in the brochure.
 */
export const whyPage = {
  hero: {
    eyebrow: "Why Hydro Mech Engineers",
    headline: "Trusted where it matters, on your floor.",
    sub: "Precision, reliability and support, built into every machine we deliver.",
    image: "/why-us/hero-1.jpg",
    imageAlt: "Automated sheet metal production line on the factory floor",
    primaryCta: { label: "Talk to our team", href: "/#contact" },
    secondaryCta: { label: "Explore machines", href: "/#products" },
  },
  promise: {
    eyebrow: "Our Promise",
    lead: "We take pride in the quality of our machines and the service we provide.",
    body: "We use high quality materials and tested components, so every machine is reliable and built to last, and we stand behind it long after delivery.",
  },
  reasons: {
    eyebrow: "Why Choose Us",
    title: "Six reasons the floor trusts us",
  },
  commitment: {
    eyebrow: "Built on Relationships",
    quote: "We maintain frequent contact with customers to address their requirements and build long term relationships.",
  },
  cta: {
    heading: "Let's build the right machine for your floor.",
    sub: "Tell us your material and output, and our team will help you spec the right machine and share a quote.",
  },
} as const;

/** Process — the end-to-end journey. */
export const processSteps = [
  {
    title: "Consultation",
    desc: "Understanding your industrial needs and challenges.",
  },
  {
    title: "Design & Customization",
    desc: "Developing machines tailored to your specifications.",
  },
  {
    title: "Manufacturing",
    desc: "Precision engineering with high-quality materials.",
  },
  {
    title: "Delivery & Support",
    desc: "On-time delivery with reliable after-sales service.",
  },
] as const;

export type Product = (typeof products)[number];
export type Feature = (typeof features)[number];
export type Stat = (typeof stats)[number];
