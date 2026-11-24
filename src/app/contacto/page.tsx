import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - Escríbenos",
  description:
    "Ponte en contacto con nosotros para consultas sobre desarrollo web, SEO y optimización con Next.js.",
  openGraph: {
    title: "Contacto - Mi Sitio Optimizado",
    description: "Envíanos tus dudas o propuestas y te responderemos pronto.",
    images: ["/images/seo-image.png"],
    type: "website",
  },
};

export default function ContactoPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <textarea rows={4} placeholder="Mensaje" />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
