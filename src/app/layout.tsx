import type { Metadata } from "next";
import { ReactNode } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://lab14-nextjs-seo.vercel.app"),
  title: {
    default: "Mi App",
    template: "%s | Mi Sitio Optimizado",
  },
  description: "Aplicación con fuente optimizada",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav className="menu">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
