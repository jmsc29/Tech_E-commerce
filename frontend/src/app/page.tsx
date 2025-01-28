"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Tipamos un Producto básico
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageURL: string;
}

// Componente para la página de productos
export default function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch de productos desde el backend usando la API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:8080/products");  // URL absoluta para el backend
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setProducts(data);
        } else {
          console.error("Error al cargar productos");
        }
      } catch (error) {
        console.error("Error de conexión:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <Image
              src={product.imageURL}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
              width={200}  // Puedes especificar el tamaño de la imagen
              height={200}
            />
            <h2 className="font-semibold text-xl">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-green-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
