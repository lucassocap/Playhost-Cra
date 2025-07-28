import React, { useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Navbar from '../layout/Navbar';
import Preloader from '../layout/preloader';
import Footer from '../section-pages/footer';
import ScrollToTopBtn from '../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';
import { LanguageContext } from "../LanguageContext"; // Import LanguageContext

const image1 ="./img/background/5.webp";

const GlobalStyles = createGlobalStyle`
  .react-parallax-bgimage {
    transform: translate3d(-50%, 0, 0px) !important;
  }
`;

const pageContent = {
  en: {
    title: "Register",
    heading: "Don't have an account? Register now.",
    introText: "Welcome to Repuestos LATAM. We're excited to have you on board. By creating an account with us, you'll gain access to features that will enhance your experience with car parts distribution.", // Updated intro text
    nameLabel: "Name:",
    emailLabel: "Email Address:",
    usernameLabel: "Choose a Username:",
    phoneLabel: "Phone:",
    passwordLabel: "Password:",
    reenterPasswordLabel: "Re-enter Password:",
    registerButton: "Register Now",
    orSignUpWith: "Or sign up with",
  },
  es: {
    title: "Registrarse",
    heading: "¿No tienes una cuenta? Regístrate ahora.",
    introText: "Bienvenido a Repuestos LATAM. Estamos emocionados de tenerte a bordo. Al crear una cuenta con nosotros, obtendrás acceso a funciones que mejorarán tu experiencia con la distribución de piezas de automóviles.", // Updated intro text
    nameLabel: "Nombre:",
    emailLabel: "Dirección de Correo Electrónico:",
    usernameLabel: "Elige un Nombre de Usuario:",
    phoneLabel: "Teléfono:",
    passwordLabel: "Contraseña:",
    reenterPasswordLabel: "Reingresar Contraseña:",
    registerButton: "Registrarse Ahora",
    orSignUpWith: "O regístrate con",
  },
};

export default function Register() {
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
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <section className="no-bg">
          <div className="container z-9">
            <div className="row align-items-center">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="p-5 rounded-10 shadow-soft bg-dark-1" id="login">
                                    <form name="contactForm" id='contact_form' className="form-border">
                                        <h4>{content.heading}</h4>
                                        <p>{content.introText}</p>
                                        <div className="row">

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>{content.nameLabel}</label>
                                                    <input type='text' name='name' id='name' className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>{content.emailLabel}</label>
                                                    <input type='text' name='email' id='email' className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>{content.usernameLabel}</label>
                                                    <input type='text' name='username' id='username' className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>{content.phoneLabel}</label>
                                                    <input type='text' name='phone' id='phone' className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>{content.passwordLabel}</label>
                                                    <input type='text' name='password' id='password' className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>{content.reenterPasswordLabel}</label>
                                                    <input type='text' name='re-password' id='re-password' className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 offset-lg-3 text-center my-3">
                                                <div id='submit'>
                                                    <input type='submit' value={content.registerButton} className="btn-main color-2"/>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 offset-lg-3">
                                                <div className="title-line">{content.orSignUpWith}</div>
                                                <div className="row g-2">
                                                    <div className="col-lg-6">
                                                        <Link className="btn-sc btn-fullwidth mb10" to="/"><img src="./img/svg/google_icon.svg" alt=""/>Google</Link>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <Link className="btn-sc btn-fullwidth mb10" to="/"><img src="./img/svg/facebook_icon.svg" alt=""/>Facebook</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
          </div>
        </section>
      </Parallax>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  );
}
