import "./FloatingWhatsApp.css";

import wsp from '../../assets/whatsappIcon.png'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5490000000000"
      className="floating-whatsapp"
      target="_blank"
      rel="noreferrer"
    >
      <img src={wsp} alt="whatsapp" />
    </a>
  );
}