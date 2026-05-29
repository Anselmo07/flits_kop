import "./WhyChooseUs.css";

const benefits = [
  {
    icon: "🚚",
    title: "Envíos a todo el país",
    description:
      "Recibí tus cuadros cuidadosamente protegidos y listos para decorar.",
  },
  {
    icon: "✨",
    title: "Calidad premium",
    description:
      "Trabajamos con materiales duraderos y terminaciones de alta calidad.",
  },
  {
    icon: "🎨",
    title: "Diseños exclusivos",
    description:
      "Colecciones modernas y elegantes para transformar cualquier espacio.",
  },
  {
    icon: "💬",
    title: "Atención personalizada",
    description:
      "Te ayudamos a encontrar el cuadro ideal para tu hogar.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us__header">
        <span>Flits_Kop</span>

        <h2>Decoración pensada para cada rincón de tu hogar</h2>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.title}>
            <div className="benefit-card__icon">{benefit.icon}</div>

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}