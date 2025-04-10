import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RealityProvider } from "./components/RealityProvider";
import { RealityFilter } from "./components/RealityFilter";
import { NinjaPresence } from "./components/NinjaPresence";
import { SettingsProvider } from "./components/SettingsContext";
import SettingsPanel from "./components/SettingsPanel";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "UICare - Enhancing User Interfaces with Wellness in Mind",
  description: "A project dedicated to integrating neurodivergent-friendly features into web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <SettingsProvider>
          <RealityProvider>
            {children}
            <RealityFilter />
            <NinjaPresence />
            <SettingsPanel />
          </RealityProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
