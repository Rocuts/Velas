import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velaris — Light Your Cosmos",
  description:
    "Hand-poured celestial candles for women who move through the world with intention.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
