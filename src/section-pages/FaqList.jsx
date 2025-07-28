import React from 'react';

const faqContent = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions",
    faqs: [
      { question: "How can I request a car part?", answer: "You can request a car part by using our 'Make a Request' form and providing the vehicle details and part information." },
      { question: "What information do I need to provide for a part request?", answer: "Please provide the vehicle brand, model, year, and the name or code of the part you need. Your email address is required for us to contact you." },
      { question: "How long does it take to process a request?", answer: "We aim to process requests as quickly as possible. You will be notified by email regarding the status of your request." },
      { question: "Do you ship to my country in Latin America?", answer: "We offer efficient shipping solutions across various countries in Latin America. Please provide your location in the request form for specific details." },
      { question: "Can you help me find parts for classic or rare cars?", answer: "Yes, our sourcing service can help you find parts for a wide range of vehicles, including classic and rare models." },
    ],
  },
  es: {
    title: "Preguntas Frecuentes",
    subtitle: "Encuentre respuestas a preguntas comunes",
    faqs: [
      { question: "¿Cómo puedo solicitar una pieza de automóvil?", answer: "Puede solicitar una pieza de automóvil utilizando nuestro formulario 'Realizar una Solicitud' y proporcionando los detalles del vehículo y la información de la pieza." },
      { question: "¿Qué información necesito proporcionar para una solicitud de pieza?", answer: "Por favor, proporcione la marca, el modelo, el año del vehículo y el nombre o código de la pieza que necesita. Se requiere su dirección de correo electrónico para que podamos contactarlo." },
      { question: "¿Cuánto tiempo se tarda en procesar una solicitud?", answer: "Nuestro objetivo es procesar las solicitudes lo más rápido posible. Se le notificará por correo electrónico sobre el estado de su solicitud." },
      { question: "¿Realizan envíos a mi país en América Latina?", answer: "Ofrecemos soluciones de envío eficientes a varios países de América Latina. Por favor, proporcione su ubicación en el formulario de solicitud para obtener detalles específicos." },
      { question: "¿Pueden ayudarme a encontrar piezas para coches clásicos o raros?", answer: "Sí, nuestro servicio de abastecimiento puede ayudarlo a encontrar piezas para una amplia gama de vehículos, incluyendo modelos clásicos y raros." },
    ],
  },
};

const FaqList = ({ language }) => {
  const content = faqContent[language] || faqContent.en; // Default to English

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="subtitle fadeInUp mb-3">{content.subtitle}</div>
          <h2 className="fadeInUp mb20">{content.title}</h2>
        </div>

        <div className="clearfix"></div>

        <div className="col-lg-8 offset-lg-2">
          <div className="accordion accordion-flush" id="faqAccordion">
            {content.faqs.map((faq, index) => (
              <div key={index} className="accordion-item">
                <h3 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h3>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqList;
