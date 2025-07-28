import React, { useEffect, useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Parallax } from "react-parallax";
import Navbar from '../layout/Navbar';
import Preloader from '../layout/preloader';
import Footer from '../section-pages/footer';
import ScrollToTopBtn from '../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';
import { LanguageContext } from "../LanguageContext"; // Import LanguageContext

const image1 ="./img/background/subheader-contact.webp"; // Using contact page background for now

const GlobalStyles = createGlobalStyle`
  .react-parallax-bgimage {
    transform: translate3d(-50%, -12%, 0px) !important;
  }
`;

const pageContent = {
  en: {
    subtitle: "Need a Part?",
    title: "Make a Request",
    introText: "Fill out the form below with the details of the car part you need, and we will help you find it.",
    vehicleBrandLabel: "Vehicle Brand:",
    modelLabel: "Model:",
    yearLabel: "Year:",
    partNameLabel: "Part Name or Code:",
    emailLabel: "Email: (required)",
    messageLabel: "Optional Message:",
    submitButton: "Send Request",
    successMessage: "Your request has been sent successfully!",
    failureMessage: "Failed to send request. Please try again later.",
  },
  es: {
    subtitle: "¿Necesitas una pieza?",
    title: "Consulta tu Pedido",
    introText: "Complete el siguiente formulario con los detalles de la pieza de automóvil que necesita y le ayudaremos a encontrarla.",
    vehicleBrandLabel: "Marca del Vehículo:",
    modelLabel: "Modelo:",
    yearLabel: "Año:",
    partNameLabel: "Nombre o Código de la Pieza:",
    emailLabel: "Correo Electrónico: (requerido)",
    messageLabel: "Mensaje Opcional:",
    submitButton: "Solicitar",
    successMessage: "¡Tu solicitud ha sido enviada con éxito!",
    failureMessage: "Error al enviar la solicitud. Inténtalo de nuevo más tarde.",
  },
};

export default function MakeRequest() {
  const { language } = useContext(LanguageContext); // Use LanguageContext
  const content = pageContent[language] || pageContent.en; // Default to English

  const [formData, setFormData] = useState({
    vehicleBrand: '',
    model: '',
    year: '',
    partName: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // To show success or failure message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Here you would typically send the form data to your backend or email service
    // For demonstration purposes, we'll just simulate a successful submission

    try {
      // Replace with actual API call or email sending logic
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      console.log('Form data submitted:', formData);
      setStatus('success');
      setFormData({
        vehicleBrand: '',
        model: '',
        year: '',
        partName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('failure');
    }
  };

  useEffect(() => {
      if (typeof window !== 'undefined') {
          const loader = document.getElementById('mainpreloader');
          if (loader)
          setTimeout(() => {
            loader.classList.add("fadeOut");
            loader.style.display = 'none';
          }, 600)
      }
    }, []);

  return (
    <>
    {/* HEAD */}
    <Helmet>
      <link rel="icon" href="./img/icon.png" />
      <title>{content.title} - Repuestos LATAM</title>
    </Helmet>

    <GlobalStyles/>

    {/* LOADER */}
    <div id='mainpreloader'>
      <Preloader/>
    </div>

    {/* MENU */}
    <div className="home dark-scheme">
      <header id="header-wrap">
         <Navbar />
      </header>

      {/* section */}
      <Parallax className="" bgImage={image1} strength={300}>  
        <section className="no-bg">
          <div className="container z-9">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="subtitle wow fadeInUp mb-3">{content.subtitle}</div>
                  </div>
                  <div className="col-lg-6">
                      <h2>{content.title}</h2>
                  </div>                 
              </div>
          </div>
        </section>
      </Parallax>

      {/* section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <p className="lead text-center">{content.introText}</p>
              <div className="contact_form_wrapper">
                <form id="request_form" className="form-border" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="field-set">
                        <label>{content.vehicleBrandLabel}</label>
                        <input type="text" name="vehicleBrand" id="vehicleBrand" className="form-control" value={formData.vehicleBrand} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="field-set">
                        <label>{content.modelLabel}</label>
                        <input type="text" name="model" id="model" className="form-control" value={formData.model} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="field-set">
                        <label>{content.yearLabel}</label>
                        <input type="text" name="year" id="year" className="form-control" value={formData.year} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="field-set">
                        <label>{content.partNameLabel}</label>
                        <input type="text" name="partName" id="partName" className="form-control" value={formData.partName} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="field-set">
                        <label>{content.emailLabel}</label>
                        <input type="email" name="email" id="email" className="form-control" value={formData.email} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="field-set">
                        <label>{content.messageLabel}</label>
                        <textarea name="message" id="message" className="form-control" value={formData.message} onChange={handleChange}></textarea>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <div id='submit' className="mt30">
                        <button type="submit" className="btn-main">
                          {content.submitButton}
                        </button>
                      </div>
                       {status === 'success' && <div className='text-success mt-3'>{content.successMessage}</div>}
                       {status === 'failure' && <div className='text-danger mt-3'>{content.failureMessage}</div>}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  );
}
