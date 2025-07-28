import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext"; // Import LanguageContext

const servicesData = {
  en: [
    { title: "Sourcing", description: "We find the car parts you need from reliable suppliers worldwide, ensuring quality and compatibility." },
    { title: "Shipping", description: "Efficient and secure international shipping solutions to deliver your parts safely and on time across Latin America." },
    { title: "Delivery Coordination", description: "We coordinate the entire delivery process, from warehouse to your location, for a smooth and hassle-free experience." },
    { title: "Provider Comparison", description: "We compare options and prices from various suppliers to get you the best value for your required parts." },
  ],
  es: [
    { title: "Abastecimiento", description: "Encontramos las piezas de automóviles que necesita de proveedores confiables en todo el mundo, garantizando calidad y compatibilidad." },
    { title: "Envío", description: "Soluciones de envío internacional eficientes y seguras para entregar sus piezas de manera segura y a tiempo en toda América Latina." },
    { title: "Coordinación de Entrega", description: "Coordinamos todo el proceso de entrega, desde el almacén hasta su ubicación, para una experiencia fluida y sin complicaciones." },
    { title: "Comparación de Proveedores", description: "Comparamos opciones y precios de varios proveedores para ofrecerle el mejor valor por las piezas que necesita." },
  ],
};

const ServicesPricingTable = () => {
  const { language } = useContext(LanguageContext); // Use LanguageContext
  const content = servicesData[language] || servicesData.en; // Default to English

  const buttonText = {
    en: "Get a Quote",
    es: "Solicitar Cotización",
  };

  return (
    <>
      <div className="de-gradient-edge-top"></div>
      <div className="de-gradient-edge-bottom"></div>
      <div className="container z-9">
        <div className="row">
          {/* Removed switch-set and related elements */}
          <div className="clearfix"></div>
          {content.map((service, index) => (
            <div key={index} className="col-xl-3 col-md-6 mb-sm-30 fadeInRight">
              <div className="de_pricing-table type-2">
                {/* Removed d-recommend */}
                <div className="d-head">
                  <h3>{service.title}</h3>
                </div>
                {/* Removed d-price */}
                {/* Removed d-location */}
                {/* Removed spacer-5 */}
                <div className="d-group">
                  <p>{service.description}</p>
                </div>
                <div className="d-action">
                  <Link to="/make-request" className="btn-main w-100">{buttonText[language] || buttonText.en}</Link> {/* Link to Make a Request page */}
                  {/* Removed extra button and text */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPricingTable;
