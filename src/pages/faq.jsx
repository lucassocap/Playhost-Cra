import React, { useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Parallax } from "react-parallax";
import Navbar from '../layout/Navbar';
import Preloader from '../layout/preloader';
import FaqList from '../section-pages/FaqList'; // Import FaqList
import Footer from '../section-pages/footer';
import ScrollToTopBtn from '../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';
import { LanguageContext } from "../LanguageContext"; // Import LanguageContext

const image1 ="../../img/background/subheader-faq.webp";

const GlobalStyles = createGlobalStyle`

`;

const pageContent = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Do you have"
  },
  es: {
    title: "Preguntas Frecuentes",
    subtitle: "Tienes"
  },
};

export default function Faq() {
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

      {/* section */}
      <Parallax className="" bgImage={image1} strength={5}>  
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
        <FaqList language={language} /> {/* Pass language prop */}
      </section>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  );
}
