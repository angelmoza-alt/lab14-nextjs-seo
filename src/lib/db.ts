// Simulación de una base de datos (podría reemplazarse por MySQL, MongoDB o un CMS)

export interface Post {
  slug: string;
  titulo: string;
  resumen: string;
  contenido: string;
  actualizado: string;
}

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  actualizado: string;
}

const posts: Post[] = [
  {
    slug: "que-es-el-seo",
    titulo: "¿Qué es el SEO y por qué importa?",
    resumen: "Conceptos básicos del posicionamiento en buscadores para aplicaciones web.",
    contenido:
      "El SEO es el conjunto de técnicas que ayudan a que una página aparezca en los primeros resultados de Google.",
    actualizado: "2026-11-20",
  },
  {
    slug: "optimizar-imagenes-nextjs",
    titulo: "Cómo optimizar imágenes en Next.js",
    resumen: "Uso del componente Image para mejorar la velocidad de carga.",
    contenido:
      "El componente Image convierte las imágenes a formatos modernos, las redimensiona y aplica lazy loading.",
    actualizado: "2026-11-22",
  },
  {
    slug: "sitemap-dinamico",
    titulo: "Sitemap dinámico con Next.js",
    resumen: "Genera un sitemap.xml que se actualiza solo con cada nueva página.",
    contenido:
      "Un sitemap dinámico se construye a partir de los datos y permite que Google indexe todas las rutas.",
    actualizado: "2026-11-24",
  },
];

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Laptop Lenovo IdeaPad 5",
    descripcion: "Laptop de 15.6 pulgadas con Ryzen 7 y 16 GB de RAM.",
    precio: 2999,
    actualizado: "2026-11-18",
  },
  {
    id: 2,
    nombre: "Mouse Logitech G305",
    descripcion: "Mouse inalámbrico para gaming con sensor HERO.",
    precio: 159,
    actualizado: "2026-11-21",
  },
  {
    id: 3,
    nombre: "Monitor Gigabyte 27 pulgadas",
    descripcion: "Monitor de 27 pulgadas a 165 Hz ideal para juegos.",
    precio: 1199,
    actualizado: "2026-11-23",
  },
];

export async function obtenerPosts(): Promise<Post[]> {
  return posts;
}

export async function obtenerPost(slug: string): Promise<Post | undefined> {
  return posts.find((p) => p.slug === slug);
}

export async function obtenerProductos(): Promise<Producto[]> {
  return productos;
}

export async function obtenerProducto(id: number): Promise<Producto | undefined> {
  return productos.find((p) => p.id === id);
}
