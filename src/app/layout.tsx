import Profil from "@/components/Header/Profil";
import ScrollToTopButton from "@/components/ScrollToTop/ScrollToTopButton";
import { lato } from "@/config/fonts";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Sofiane Rahmani - Développeur Web",
  description: "Curriculum vitae de Sofiane Rahmani, développeur web."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${lato.variable} overflow-x-hidden font-lato`}
      suppressHydrationWarning
    >
      <head />
      <body className="font-sans min-h-screen bg-background antialiased ">
        <Providers>
          <div className="relative flex min-h-screen flex-col bg-white">
            <Profil />
            <ScrollToTopButton />
            <main className="container mx-auto max-w-7xl flex-grow px-6 pt-16 ">{children}</main>
            <footer className="flex w-full items-center justify-center py-3">
              <Link
                className="flex items-center gap-1 text-current"
                href="https://github.com/SofRahmani"
                title="Sofiane Rahmani - Github"
              >
                <span className="text-default-600">Créé par</span>
                <p className="text-primary">Sofiane Rahmani</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
