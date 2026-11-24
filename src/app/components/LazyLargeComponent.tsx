'use client'; // Necesario porque ssr: false solo se permite en componentes de cliente

import dynamic from "next/dynamic";

// Lazy load sin SSR y con fallback (mejor UX)
const DynamicComponent = dynamic(() => import("./LargeComponent"), {
  ssr: false,
  loading: () => <p>Cargando componente...</p>, // opcional pero recomendado
});

export default function LazyLargeComponent() {
  return <DynamicComponent />;
}
