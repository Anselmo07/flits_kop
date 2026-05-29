import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <h2>FLITS_KOP</h2>

          <p>
            Cuadros decorativos modernos para transformar cada rincón de tu
            hogar.
          </p>
        </div>

        <div className="footer__links">
          <a href="/">Inicio</a>
          <a href="/">Colecciones</a>
          <a href="/">Destacados</a>
          <a href="/">Contacto</a>
        </div>

        <div className="footer__socials">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/5490000000000"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 FLITS_KOP — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}