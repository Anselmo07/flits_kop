import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import logo from "../../assets/logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar--scrolled" : ""
      }`}
    >
      <div className="navbar__container">
        {/* LOGO */}
        <Link to="/" className="navbar__logo">
          <img
            src={logo}
            alt="Marianela FK"
          />
        </Link>

        {/* MENU */}
        <nav
          className={`navbar__menu ${
            menuOpen ? "active" : ""
          }`}
        >
          <Link to="/">Inicio</Link>

          <Link to="/catalogo">
            Colecciones
          </Link>

          <Link to="/#destacados">
            Destacados
          </Link>

          <Link to="/">
            Contacto
          </Link>

          <a
            href="https://wa.me/5490000000000"
            className="navbar__cta mobile"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </nav>

        {/* CTA DESKTOP */}
        <a
          href="https://wa.me/5490000000000"
          className="navbar__cta desktop"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

        {/* TOGGLE */}
        <button
          className={`navbar__toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}