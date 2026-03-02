import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TWÓJSERWIS - Profesjonalne rozwiązania grzewcze",
  description: "Firma TWÓJSERWIS zajmuje się kompleksowymi usługami związanymi z ogrzewaniem. Montaż kotłów, serwis, modernizacja instalacji, pompy ciepła.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
