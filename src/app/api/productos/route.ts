import { obtenerProductos } from "@/lib/db";

// API que devuelve los productos guardados en la base de datos
export async function GET() {
  const productos = await obtenerProductos();
  return Response.json(productos);
}
