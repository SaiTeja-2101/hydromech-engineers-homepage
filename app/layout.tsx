import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

// Display font for headings — geometric, confident, distinctive (not a default).
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// Body / UI font — clean and highly readable.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hydro Mech Engineers — Reliable Sheet Metal Machines",
  description:
    "Hydro Mech Engineers designs and manufactures durable, efficient sheet metal machinery — bus bar processing, clinching, section bending, sheet rolling and CNC press brake tools.",
  keywords: [
    "sheet metal machinery",
    "bus bar processing machine",
    "hydraulic clinching machine",
    "section bending machine",
    "CNC press brake tools",
    "Hydro Mech Engineers",
    "Bangalore",
  ],
  openGraph: {
    title:
      "Hydro Mech Engineers — Reliable Machines, Built for Industrial Demands",
    description:
      "Durable and efficient sheet metal solutions, customised for industrial demands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-navy-900">
        {children}
      </body>
    </html>
  );
}
