import "./ProductCard.css";

type Props = {
  title: string;
  category: string;
  size: string;
  image: string;
};

export default function ProductCard({
  title,
  category,
  size,
  image,
}: Props) {
  return (
    <article className="catalog-card">
      <div className="catalog-card__image">
        <img src={image} alt={title} />
      </div>

      <div className="catalog-card__content">
        <span>{category}</span>

        <div className="catalog-card__info">
          <div>
            <h3>{title}</h3>

            <p>{size}</p>
          </div>

          <a
            href={`https://wa.me/5490000000000?text=Hola! Quiero consultar por ${title}`}
            target="_blank"
            rel="noreferrer"
          >
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}