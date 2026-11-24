import type { Metadata } from "next";
import Link from "next/link";
import { obtenerPosts } from "@/lib/db";

export const metadata: Metadata = {
  title: "Blog de SEO y Rendimiento en Next.js",
  description:
    "Artículos sobre SEO, optimización de imágenes, metadatos dinámicos y sitemaps en aplicaciones Next.js.",
  openGraph: {
    title: "Blog de SEO y Rendimiento en Next.js",
    description: "Aprende a mejorar la velocidad y el posicionamiento de tu web.",
    images: ["/images/seo-image.png"],
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await obtenerPosts();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      {posts.map((post) => (
        <article key={post.slug} className="tarjeta">
          <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
          <p>{post.resumen}</p>
        </article>
      ))}
    </main>
  );
}
