import "./Categories.css";

const categories = [
  {
    title: "Abstractos",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Minimalistas",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Naturaleza",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__header">
        <span>Nuestras colecciones</span>

        <h2>Elegí el estilo perfecto para tu espacio</h2>
      </div>

      <div className="categories__grid">
        {categories.map((category) => (
          <article className="category-card" key={category.title}>
            <img src={category.image} alt={category.title} />

            <div className="category-card__overlay" />

            <div className="category-card__content">
              <h3>{category.title}</h3>

              <button>Ver más</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}