import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Energy Dashboard",
  description: "Smart energy management system in academic building",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
