import "./WhyChooseUs.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import i1 from "../../assets/envio.png";
import i2 from "../../assets/calidad.png";
import i3 from "../../assets/cliente.png";
import i4 from "../../assets/safe.png";

const benefits = [
  {
    icon: i1,
    title: "Envíos a todo el país",
    description: "con seguimiento online",
  },
  {
    icon: i2,
    title: "Calidad premium",
    description: "materiales seleccionados",
  },
  {
    icon: i3,
    title: "Diseños exclusivos",
    description: "obras únicas y modernas",
  },
  {
    icon: i4,
    title: "Atención personalizada",
    description: "te ayudamos a elegir",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={800}
        slidesPerView={1}
      >
        {benefits.map((benefit) => (
          <SwiperSlide key={benefit.title}>
            <article className="why-card">
              <div className="why-card__icon">
                <img src={benefit.icon} alt={benefit.title} />
              </div>

              <div className="why-card__content">
                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}