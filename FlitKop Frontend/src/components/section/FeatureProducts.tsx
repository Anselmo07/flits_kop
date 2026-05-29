import "./FeaturedProducts.css";

import img1 from "../../assets/feature1.jpeg";
import img2 from "../../assets/feature2.jpeg";
import img3 from "../../assets/feature3.jpeg";
import img4 from "../../assets/feature4.jpeg";

const products = [
  {
    id: 1,
    title: "Cuadro Serenity",
    price: "$45.000",
    image:
      img1,
  },
  {
    id: 2,
    title: "Minimal Line",
    price: "$38.000",
    image:
      img2,
  },
  {
    id: 3,
    title: "Nature Beige",
    price: "$52.000",
    image:
      img3,
  },
  {
    id: 4,
    title: "Soft Abstract",
    price: "$41.000",
    image:
      img4,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="featured-products" id="destacados">
      <div className="featured-products__header">
        <span>Destacados</span>

        <h2>Los favoritos de nuestros clientes</h2>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-card__image">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="product-card__content">
              <h3>{product.title}</h3>

              <div className="product-card__footer">
                <span>{product.price}</span>

                <button>Consultar</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}