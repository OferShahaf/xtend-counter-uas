import type { Metadata } from "next";
import { Saira_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-saira",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XTEND Counter-UAS | Combat Proven. Portable. Mission Ready.",
  description:
    "XTEND provides a complete layered Counter-UAS ecosystem — from an individual soldier to the protection of strategic national infrastructure.",
  keywords: ["Counter-UAS", "drone defense", "C-UAS", "XTEND", "anti-drone"],
  openGraph: {
    title: "XTEND Counter-UAS",
    description: "Defeat Modern Drone Threats Anywhere.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${saira.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
