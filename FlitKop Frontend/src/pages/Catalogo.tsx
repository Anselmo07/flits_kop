import "./Catalogo.css";

import ProductCard from "../components/ui/ProductCard";

import { products } from "../data/products";

export default function Catalogo() {
  return (
    <section className="catalog">
      <div className="catalog__hero">
        <span>Colección</span>

        <h1>Cuadros pensados para transformar espacios</h1>
      </div>

      <div className="catalog__filters">
        <button>Todos</button>
        <button>Abstractos</button>
        <button>Minimalistas</button>
        <button>Naturaleza</button>
      </div>

      <div className="catalog__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            category={product.category}
            size={product.size}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}