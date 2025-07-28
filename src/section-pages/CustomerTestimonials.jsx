import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useContext } from 'react'; // Import useContext
import { LanguageContext } from "../LanguageContext"; // Import LanguageContext

const testimonialsContent = {
  en: {
    title: "Customer Testimonials",
    averageRating: "4.85 out of 5",
    reviews: [
      { text: "Repuestos LATAM has been a game-changer for our repair shop. The parts are always high-quality, and the delivery is incredibly fast.", author: "Michael S." },
      { text: "Finding the right part in Latin America used to be a headache. Repuestos LATAM's sourcing service made it so easy and efficient.", author: "Robert L." },
      { text: "I was impressed with the range of parts available and the excellent customer support when I had a question about a specific part.", author: "Jake M." },
      { text: "As a car enthusiast, I appreciate the quality of the parts from Repuestos LATAM. They are reliable and exactly as described.", author: "Alex P." },
      { text: "The 'Make a Request' form is a brilliant idea! It saved me so much time and effort in finding a rare part for my car.", author: "Carlos R." },
      { text: "Repuestos LATAM's shipping is top-notch. My order arrived securely and on time, even to a remote location.", author: "Edward B." },
      { text: "The team at Repuestos LATAM is knowledgeable and helpful. They guided me through the process of finding the correct part for my vehicle.", author: "Daniel H." },
      { text: "I highly recommend Repuestos LATAM for anyone in Latin America needing quality car parts and reliable service.", author: "Bryan G." },
    ],
  },
  es: {
    title: "Testimonios de Clientes",
    averageRating: "4.85 de 5",
    reviews: [
      { text: "Repuestos LATAM ha cambiado las reglas del juego para nuestro taller de reparación. Las piezas son siempre de alta calidad y la entrega es increíblemente rápida.", author: "Michael S." },
      { text: "Encontrar la pieza correcta en América Latina solía ser un dolor de cabeza. El servicio de abastecimiento de Repuestos LATAM lo hizo muy fácil y eficiente.", author: "Robert L." },
      { text: "Me impresionó la gama de piezas disponibles y el excelente servicio al cliente cuando tuve una pregunta sobre una pieza específica.", author: "Jake M." },
      { text: "Como entusiasta de los automóviles, aprecio la calidad de las piezas de Repuestos LATAM. Son confiables y exactamente como se describen.", author: "Alex P." },
      { text: "¡El formulario 'Realizar una Solicitud' es una idea brillante! Me ahorró mucho tiempo y esfuerzo al encontrar una pieza rara para mi automóvil.", author: "Carlos R." },
      { text: "El envío de Repuestos LATAM es de primera categoría. Mi pedido llegó de forma segura y a tiempo, incluso a una ubicación remota.", author: "Edward B." },
      { text: "El equipo de Repuestos LATAM es experto y servicial. Me guiaron a través del proceso de encontrar la pieza correcta para mi vehículo.", author: "Daniel H." },
      { text: "Recomiendo ampliamente Repuestos LATAM a cualquiera en América Latina que necesite piezas de automóviles de calidad y un servicio confiable.", author: "Bryan G." },
    ],
  },
};

const CustomerTestimonials = ({ language }) => {
  const content = testimonialsContent[language] || testimonialsContent.en; // Default to English

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="subtitle mb20">{content.title}</div>
            <h2 className="wow fadeInUp">{content.averageRating}</h2>
            <div className="spacer-20"></div>
          </div>
        </div>
      </div>
      <Swiper className="smallslider"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        centeredSlides
        loop
        slideToClickedSlide
      >
        {content.reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-inner">
              <div className="de_testi type-2">
                <blockquote>
                  <div className="de-rating-ext">
                    <span className="d-stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  <p>&quot;{review.text}&quot;</p>
                  <div className="de_testi_by">
                    <img alt="" src={`./img/people/${index + 1}.jpg`} /> <span>{review.author}</span>
                  </div>
                </blockquote>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomerTestimonials;
