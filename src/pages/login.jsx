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

const image1 ="./img/background/2.webp";

const GlobalStyles = createGlobalStyle`
  .react-parallax-bgimage {
    transform: translate3d(-50%, 0, 0px) !important;
  }
  .h-100{
    height: 100vh !important;
  }
`;

const pageContent = {
  en: {
    title: "Login",
    heading: "Sign in to your account",
    usernameLabel: "Username or email",
    passwordLabel: "Password",
    rememberMeLabel: "Remember me",
    signInButton: "Sign In",
    orLoginWith: "Or sign in with",
  },
  es: {
    title: "Iniciar Sesión",
    heading: "Inicia sesión en tu cuenta",
    usernameLabel: "Nombre de usuario o correo electrónico",
    passwordLabel: "Contraseña",
    rememberMeLabel: "Recordarme",
    signInButton: "Iniciar Sesión",
    orLoginWith: "O inicia sesión con",
  },
};

export default function Login() {
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
                <div className="de-gradient-edge-top"></div>
                <div className="de-gradient-edge-bottom"></div>
        <section className="no-bg h-100">
          <div className="container z-9">
              <div className="row align-items-center">
                <div className="col-lg-4 offset-lg-4">
                    <div className="padding40 rounded-10 shadow-soft bg-dark-1" id="login">
                        <div className="text-center">
                            <h4>{content.heading}</h4>
                        </div>
                        <div className="spacer-10"></div>
                        <form id="form_register" className="form-border">
                            <div className="field-set">
                                <label>{content.usernameLabel}</label>
                                <input type='text' name='name' id='name' className="form-control"/>
                            </div>
                            <div className="field-set">
                                <label>{content.passwordLabel}</label>
                                <input type='text' name='password' id='password' className="form-control"/>
                            </div>
                            <div className="field-set">
                                <input type="checkbox" checked id="html" name="fav_language"/>
                                <label><span className="op-5">&nbsp;{content.rememberMeLabel}</span></label><br/>
                            </div>
                            <div className="spacer-20"></div>
                            <div id="submit">
                                <input type="submit" value={content.signInButton} className="btn-main btn-fullwidth rounded-3" />
                            </div>
                        </form>
                        <div className="title-line">{content.orLoginWith}</div>
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
