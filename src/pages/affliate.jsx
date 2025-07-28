import React, { useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Preloader from '../layout/preloader';
import Footer from '../section-pages/footer';
import ScrollToTopBtn from '../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';
import { LanguageContext } from "../LanguageContext"; // Import LanguageContext

const image1 ="./img/background/subheader-affliate.webp";

const GlobalStyles = createGlobalStyle`
  .react-parallax-bgimage {
    transform: translate3d(-50%, -12%, 0px) !important;
  }
`;

const pageContent = {
  en: {
    subtitle: "Affiliate Program",
    title: "Partner with Us and Grow",
    heading: "Join our affiliate program and earn with Repuestos LATAM", // Updated heading
    steps: [
      { number: 1, title: "Sign Up for Our Affiliate Program", description: "Join our program easily through our online platform.", },
      { number: 2, title: "Promote Repuestos LATAM", description: "Use your unique affiliate link to promote our car parts and services to your audience.", },
      { number: 3, title: "Earn Commission", description: "Receive a commission for every successful referral that results in a sale.", },
    ],
    buttonText: "Join Today",
    buttonLink: "/register", // Assuming affiliate sign-up is part of registration or a separate page
  },
  es: {
    subtitle: "Programa de Afiliados",
    title: "Asóciate con Nosotros y Crece",
    heading: "Únete a nuestro programa de afiliados y gana con Repuestos LATAM", // Updated heading
    steps: [
      { number: 1, title: "Regístrate en Nuestro Programa de Afiliados", description: "Únete a nuestro programa fácilmente a través de nuestra plataforma en línea.", },
      { number: 2, title: "Promociona Repuestos LATAM", description: "Utiliza tu enlace de afiliado único para promocionar nuestras piezas y servicios de automóviles a tu audiencia.", },
      { number: 3, title: "Gana Comisión", description: "Recibe una comisión por cada referencia exitosa que resulte en una venta.", },
    ],
    buttonText: "Únete Hoy",
    buttonLink: "/register", // Assuming affiliate sign-up is part of registration or a separate page
  },
};

export default function Affliate() {
  const { language } = useContext(LanguageContext); // Use LanguageContext
  const content = pageContent[language] || pageContent.en; // Default to English

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
    <>}
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
      <Parallax className="" bgImage={image1} strength={5}>  
        <section className="no-bg">
          <div className="container z-9">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="subtitle wow fadeInUp mb-3">{content.subtitle}</div>
                  </div>
                  <div className="col-lg-6">
                      <h2>{content.heading}</h2>
                  </div>                 
              </div>
          </div>
        </section>
      </Parallax>

      {/* section */}
      <section>
        <div className="container">
              <div className="row row-flex">
                  {content.steps.map((step, index) => (
                    <div key={index} className="col-lg-4 mb30">
                        <div className="de-step-s1">
                            <div className="d-number">{step.number}</div>
                            <h4>{step.title}</h4>
                            <p className="">{step.description}</p>
                        </div>
                    </div>
                  ))}
              </div>

              <div className="col-lg-12 text-center">
                  <Link className="btn-main btn-lg" to={content.buttonLink}>{content.buttonText}</Link>
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
