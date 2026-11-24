import type { Metadata } from "next";
import Link from "next/link";
import { obtenerProductos } from "@/lib/db";

export const metadata: Metadata = {
  title: "Productos tecnológicos",
  description: "Catálogo de laptops, monitores y accesorios con los mejores precios.",
};

export default async function ProductosPage() {
  const productos = await obtenerProductos();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      {productos.map((p) => (
        <article key={p.id} className="tarjeta">
          <Link href={`/productos/${p.id}`}>{p.nombre}</Link>
          <p>S/ {p.precio}</p>
        </article>
      ))}
    </main>
  );
}
