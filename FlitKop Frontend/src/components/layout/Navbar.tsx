import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <a href="/" className="navbar__logo">
          FLITS_KOP
        </a>

        <nav className={`navbar__menu ${menuOpen ? "active" : ""}`}>
          <a href="/">Inicio</a>
          <a href="/">Colecciones</a>
          <a href="/">Destacados</a>
          <a href="/">Contacto</a>

          <a
            href="https://wa.me/5490000000000"
            className="navbar__cta mobile"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </nav>

        <a
          href="https://wa.me/5490000000000"
          className="navbar__cta desktop"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}