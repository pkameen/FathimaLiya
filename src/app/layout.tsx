import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liya Portfolio",
  description: "Premium graphic designer & digital marketer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}