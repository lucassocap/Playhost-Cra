import React, { useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Preloader from '../layout/preloader';
import CustomerTestimonials from '../section-pages/CustomerTestimonials'; // Assuming this component displays reviews
import Footer from '../section-pages/footer';
import ScrollToTopBtn from '../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';
import { LanguageContext } from "../LanguageContext"; // Import LanguageContext

const image1 ="./img/background/subheader-about.webp";

const GlobalStyles = createGlobalStyle`

`;

const pageContent = {
  en: {
    subtitle: "About us",
    title: "Our Story",
    introSubtitle: "We are Repuestos LATAM",
    introTitle: "The Beginning",
    introText: "Repuestos LATAM was founded with the mission to provide reliable and accessible car parts to customers across Latin America. Our journey started by identifying the need for a streamlined distribution network and a trusted source for quality parts...", // Replace with actual story
    yearsExperience: `Years
Experience
Distribution`, // Updated label and fixed syntax
    visionTitle: "Our Vision",
    visionText: "Our vision is to become the leading distributor of car parts in Latin America, recognized for our efficiency, reliability, and commitment to customer satisfaction...", // Replace with actual vision
    missionTitle: "Our Mission",
    missionText: "Our mission is to simplify the process of finding and acquiring car parts for our customers, offering a wide selection, competitive pricing, and exceptional service...", // Replace with actual mission
    teamSubtitle: "Our solid team",
    teamTitle: "Behind the Scene",
    // Team member names and roles would ideally be in a separate data structure or within the Reviews component if they are dynamic
    stats: {
      happyCustomers: `Happy
Customers`, // Updated label and fixed syntax
      partsShipped: `Parts
Shipped`, // Updated label and fixed syntax
      awardsWinning: `Awards
Winning`, // Keep or change as needed and fixed syntax
      yearsExperience: `Years
Experience`, // Keep or change as needed and fixed syntax
    }
  },
  es: {
    subtitle: "Sobre nosotros",
    title: "Nuestra Historia",
    introSubtitle: "Somos Repuestos LATAM",
    introTitle: "El Comienzo",
    introText: "Repuestos LATAM fue fundada con la misión de proporcionar piezas de automóviles confiables y accesibles a clientes en toda América Latina. Nuestro viaje comenzó identificando la necesidad de una red de distribución optimizada y una fuente confiable de piezas de calidad...", // Replace with actual story
    yearsExperience: `Años
Experiencia
Distribución`, // Updated label and fixed syntax
    visionTitle: "Nuestra Visión",
    visionText: "Nuestra visión es convertirnos en el distribuidor líder de piezas de automóviles en América Latina, reconocidos por nuestra eficiencia, confiabilidad y compromiso con la satisfacción del cliente...", // Replace with actual vision
    missionTitle: "Nuestra Misión",
    missionText: "Nuestra misión es simplificar el proceso de encontrar y adquirir piezas de automóviles para nuestros clientes, ofreciendo una amplia selección, precios competitivos y un servicio excepcional...", // Replace with actual mission
    teamSubtitle: "Nuestro sólido equipo",
    teamTitle: "Detrás de Escena",
     // Team member names and roles would ideally be in a separate data structure or within the Reviews component if they are dynamic
     stats: {
      happyCustomers: `Clientes
Satisfechos`, // Updated label and fixed syntax
      partsShipped: `Piezas
Enviadas`, // Updated label and fixed syntax
      awardsWinning: `Premios
Ganados`, // Keep or change as needed and fixed syntax
      yearsExperience: `Años
Experiencia`, // Keep or change as needed and fixed syntax
    }
  },
};

export default function About() {
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
                      <div className="subtitle  mb-3">{content.subtitle}</div>
                  </div>
                  <div className="col-lg-6">
                      <h2 className=" mb20" data-wow-delay=".2s">{content.title}</h2>
                  </div>                 
              </div>
          </div>
        </section>
      </Parallax>

      {/* section */}
      <section>
        <div className="container">
              <div className="row align-items-center gh-5">
                  <div className="col-lg-6 position-relative">
                      <div className="images-deco-1">
                          <img src="./img/misc/building.webp" className="d-img-1" alt=""/>
                          <img src="./img/misc/girl-ai.webp" className="d-img-2" alt=""/>
                          <div className="d-img-3 bg-color"></div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="subtitle mb20">{content.introSubtitle}</div>
                      <h2 >{content.introTitle}</h2>
                      <p >{content.introText}</p>
                      <div className="year-card ">
                          <h1><span className="id-color">{/* Number needs to be updated manually or fetched */}25</span></h1>
                          <div className="atr-desc">{content.yearsExperience}</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* section */}
      <section className="no-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="row gx-5">
                        <div className="col-lg-6 col-md-6">
                            <h4>{content.visionTitle}</h4>
                            <p>{content.visionText}</p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h4>{content.missionTitle}</h4>
                            <p>{content.missionText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* section */}
      <section className="no-top">
        <div className="container">
          <div className="row">
              <div className="col-lg-3">
                  <div className="subtitle mb20">{content.teamSubtitle}</div>
                  <h2 className="mb20 wow fadeInUp">{content.teamTitle}</h2>
              </div>

              {/* Team members - names and roles should be updated and localized */}
              <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                  <div className="f-profile text-center">
                      <div className="fp-wrap f-invert">
                          <div className="fpw-overlay">
                              <div className="fpwo-wrap">
                                  <div className="fpwow-icons">
                                      <Link to="/"><i className="fa-brands fa-facebook fa-lg"></i></Link>
                                      <Link to="/"><i className="fa-brands fa-twitter fa-lg"></i></Link>
                                      <Link to="/"><i className="fa-brands fa-linkedin fa-lg"></i></Link>
                                      <Link to="/"><i className="fa-brands fa-instagram fa-lg"></i></Link>
                                      <Link to="/"><i className="fa-brands fa-tiktok fa-lg"></i></Link>
                                  </div>
                              </div>
                          </div>                                  
                          <div className="fpw-overlay-btm"></div>
                          <img src="./img/team/1.webp" className="fp-image img-fluid" alt=""/>
                      </div>

                      <h4>{/* Team member name */}Robyn Peel</h4>
                      {/* Team member role */"CEO Founder"}
                  </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                  <div className="f-profile text-center">
                      <div className="fp-wrap f-invert">
                          <div className="fpw-overlay">
                              <div className="fpwo-wrap">
                                  <div className="fpwow-icons">
                                      <Link to="/"><i className="fa-brands fa-facebook fa-lg"></i></Link>
                                      <Link to="/"><i className="fa-brands fa-twitter fa-lg"></i></Link>
                                      <Link to="/"><i className="fa-brands fa-linkedin fa-lg"></i></Link>
                                      <Link to="/"><i className="fa-brands fa-instagram fa-lg"></i></Link>
                                      <Link to="/"><i className="fa-brands fa-tiktok fa-lg"></i></Link>
                                  </div>
                              </div>
                          </div>                                  
                          <div className="fpw-overlay-btm"></div>
                          <img src="./img/team/2.webp" className="fp-image img-fluid" alt=""/>
                      </div>

                      <h4>{/* Team member name */}Anna Shepard</h4>
                      {/* Team member role */"Director"}
                  </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                  <div className="f-profile text-center">
                      <div className="fp-wrap f-invert">
                          <div className="fpw-overlay">
                              <div className="fpwo-wrap">
                                  <div className="fpwow-icons">
                                      <Link to="/"><i className="fa-brands fa-facebook fa-lg"></i></Link>
                                      <Link to="/"><i className="fa-brands fa-twitter fa-lg"></i></Link>
                                      <Link to="/"><i className="fa-brands fa-linkedin fa-lg"></i></Link>
                                      <Link to="/"><i className="fa-brands fa-instagram fa-lg"></i></Link>
                                      <Link to="/"><i className="fa-brands fa-tiktok fa-lg"></i></Link>
                                  </div>
                              </div>
                          </div>                                  
                          <div className="fpw-overlay-btm"></div>
                          <img src="./img/team/3.webp" className="fp-image img-fluid" alt=""/>
                      </div>

                      <h4>{/* Team member name */}Fynley Wilkinson</h4>
                      {/* Team member role */"Developer"}
                  </div>
              </div>

          </div>
        </div>
      </section>

      {/* section */}
      <section className="no-top">
       <CustomerTestimonials language={language} /> {/* Pass language prop and corrected component name */}
      </section>

      {/* section */}
      <section className="no-top">
       <div className="container">
            <div className="row text-center">
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer id-color" >{/* Number needs to be updated manually or fetched */}15425</h3>
                        <h4 className="text-uppercase">{content.stats.happyCustomers}</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer text-line">{/* Number needs to be updated manually or fetched */}8745</h3>
                        <h4 className="text-uppercase">{content.stats.partsShipped}</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer id-color">{/* Number needs to be updated manually or fetched */}235</h3>
                        <h4 className="text-uppercase">{content.stats.awardsWinning}</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer text-line">{/* Number needs to be updated manually or fetched */}15</h3>
                        <h4 className="text-uppercase">{content.stats.yearsExperience}</h4>
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
