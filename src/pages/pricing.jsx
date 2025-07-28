import React, {useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Parallax } from "react-parallax";
import Navbar from '../layout/Navbar';
import Preloader from '../layout/preloader';
import ServicesPricingTable from '../section-pages/ServicesPricingTable'; // Will create/modify this
import Section1 from '../section-pages/section-1'; // Need to examine this component
import Footer from '../section-pages/footer';
import ScrollToTopBtn from '../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';
import { LanguageContext } from "../LanguageContext"; // Import LanguageContext

const image2 ="../../img/background/subheader-game.webp"; // Keep background or change?

const GlobalStyles = createGlobalStyle`

`;

const pageContent = {
  en: {
    title: "Our Services",
    subtitle: "What we offer",
  },
  es: {
    title: "Nuestros Servicios",
    subtitle: "Lo que ofrecemos",
  },
};

export default function Pricing() { // Renamed from Home to reflect content
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

      <Parallax className="bgcolor" bgImage={image2} strength={300}>  
      <div className="de-gradient-edge-bottom"></div>
      <section className="no-bg">
        <div className="container z-1000">
              <div className="row gx-5 align-items-center">
                  {/* Removed game-specific image */}
                  <div className="col-lg-8 offset-lg-2 text-center"> {/* Centered text */}
                      <div className="subtitle wow fadeInUp mb-3">{content.subtitle}</div>
                      <h2 className="mb-0">{content.title}</h2>
                      {/* Removed rating */}
                  </div>      
              </div>
          </div>
      </section>
      </Parallax>

      {/* section */}
      <section className="no-top">
        <ServicesPricingTable language={language} /> {/* Pass language prop */}
      </section>

      {/* section */}
      {/* <Section1/> */}{/* Will decide whether to keep or remove after examining */}

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  );
}
