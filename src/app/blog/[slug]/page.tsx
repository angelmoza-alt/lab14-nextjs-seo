import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { obtenerPost, obtenerPosts } from "@/lib/db";

interface Props {
  params: Promise<{ slug: string }>;
}

// Rutas que se generan de forma estática
export async function generateStaticParams() {
  const posts = await obtenerPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Meta tags dinámicos según el artículo
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await obtenerPost(slug);
  if (!post) return { title: "Artículo no encontrado" };

  return {
    title: post.titulo,
    description: post.resumen,
    openGraph: {
      title: post.titulo,
      description: post.resumen,
      images: ["/images/seo-image.png"],
      type: "article",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await obtenerPost(slug);
  if (!post) notFound();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">{post.titulo}</h1>
      <p>{post.contenido}</p>
      <small>Actualizado: {post.actualizado}</small>
    </main>
  );
}
