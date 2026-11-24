import type { Metadata } from "next";
import Image from "next/image";
import LazyLargeComponent from "./components/LazyLargeComponent";

export const metadata: Metadata = {
  title: "Mi Sitio Optimizado - Home",
  description: "Aprende sobre optimización SEO y rendimiento en Next.js.",
  keywords: ["Next.js", "SEO", "optimización web"],
  openGraph: {
    title: "Mi Sitio Optimizado",
    description: "Descubre técnicas avanzadas para mejorar tu web con Next.js.",
    images: ["/images/seo-image.png"],
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bienvenido</h1>
      <Image
        src="/images/seo-image.png"
        width={400}
        height={200}
        alt="Ejemplo de imagen optimizada"
        priority
      />
      <LazyLargeComponent />

      <h2 style={{ fontFamily: "sans-serif", fontSize: "24px", fontWeight: "bold" }}>
        Texto con <code>sans-serif</code> (sin Inter)
      </h2>

      <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
        Texto global con fuente Inter (debería verse distinta)
      </h2>

      <h2 style={{ fontFamily: "serif", fontSize: "24px", fontWeight: "bold" }}>
        Texto con <code>serif</code> (fuente con serifas)
      </h2>
    </main>
  );
}
