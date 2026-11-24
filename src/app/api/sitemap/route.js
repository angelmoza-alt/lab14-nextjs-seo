import { obtenerPosts, obtenerProductos } from "@/lib/db";

const BASE_URL = "https://mi-sitio.com";

export async function GET() {
  // Rutas fijas de la aplicación
  const rutasEstaticas = ["/", "/blog", "/productos", "/contacto"].map((url) => ({
    url,
    lastmod: "2026-11-24",
  }));

  // Rutas dinámicas que salen de la base de datos
  const posts = await obtenerPosts();
  const productos = await obtenerProductos();

  const rutasPosts = posts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastmod: post.actualizado,
  }));

  const rutasProductos = productos.map((p) => ({
    url: `/productos/${p.id}`,
    lastmod: p.actualizado,
  }));

  const urls = [...rutasEstaticas, ...rutasPosts, ...rutasProductos];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      ({ url, lastmod }) =>
        `<url><loc>${BASE_URL}${url}</loc><lastmod>${lastmod}</lastmod></url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
