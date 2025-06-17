import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientNavbar from "@/components/layout/ClientNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GNTREK - Randonnées Guidées Premium",
  description: "Découvrez les plus belles randonnées guidées en montagne avec GNTREK. Expériences uniques et sécurisées pour tous les niveaux.",
  keywords: ["randonnée", "montagne", "guide", "alpes", "trekking", "aventure"],
  authors: [{ name: "GNTREK Team" }],
  creator: "GNTREK",
  publisher: "GNTREK",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientNavbar />
        {children}
      </body>
    </html>
  );
}
