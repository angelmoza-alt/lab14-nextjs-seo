import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { obtenerProducto, obtenerProductos } from "@/lib/db";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const productos = await obtenerProductos();
  return productos.map((p) => ({ id: p.id.toString() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const producto = await obtenerProducto(Number(id));
  if (!producto) return { title: "Producto no encontrado" };

  return {
    title: `${producto.nombre} - S/ ${producto.precio}`,
    description: producto.descripcion,
    openGraph: {
      title: producto.nombre,
      description: producto.descripcion,
      images: ["/images/seo-image.png"],
    },
  };
}

export default async function ProductoPage({ params }: Props) {
  const { id } = await params;
  const producto = await obtenerProducto(Number(id));
  if (!producto) notFound();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p className="font-bold">S/ {producto.precio}</p>
    </main>
  );
}
