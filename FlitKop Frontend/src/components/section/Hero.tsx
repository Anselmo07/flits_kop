import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* Left */}
        <div className="hero__content">
          <span>Decoración moderna</span>

          <h1>
            Cuadros decorativos para transformar tu hogar
          </h1>

          <p>
            Diseños modernos, minimalistas y elegantes pensados para darle
            personalidad a cada espacio.
          </p>

          <div className="hero__actions">
            <a href="/">Ver colección</a>

            <a
              href="https://wa.me/5490000000000"
              target="_blank"
              rel="noreferrer"
              className="secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hero__image">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
            alt="Decoración moderna"
          />
        </div>
      </div>
    </section>
  );
}