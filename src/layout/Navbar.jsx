import React, { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";
import { LanguageContext } from "../LanguageContext"; // Import LanguageContext

const NavLink = (props) => {
  return <Link {...props} />;
};

const Navbar = () => {
  const { language, changeLanguage } = useContext(LanguageContext); // Use LanguageContext

  const useDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const closeDropdown = () => {
      setIsOpen(false);
    };

    const ref = useRef(null);
    useOnclickOutside(() => {
      closeDropdown();
    }, ref);

    return {
      isOpen,
      toggleDropdown,
      closeDropdown,
      ref,
    };
  };

  const { isOpen: openMenu, toggleDropdown: handleBtnClick, closeDropdown: closeMenu, ref } = useDropdown();
  const { isOpen: openMenu1, toggleDropdown: handleBtnClick1, closeDropdown: closeMenu1, ref: ref1 } = useDropdown();
  const { isOpen: openMenu2, toggleDropdown: handleBtnClick2, closeDropdown: closeMenu2, ref: ref2 } = useDropdown();
  const { isOpen: openMenu3, toggleDropdown: handleBtnClick3, closeDropdown: closeMenu3, ref: ref3 } = useDropdown();
  const { isOpen: openMenu4, toggleDropdown: handleBtnClick4, closeDropdown: closeMenu4, ref: ref4 } = useDropdown();

  const [showmenu, setBtnIcon] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header-wrap");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;

    const scrollCallBack = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
    };

    window.addEventListener("scroll", scrollCallBack);

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const menuItems = {
    en: {
      home: "Home",
      services: "Services",
      locations: "Locations",
      support: "Support",
      contact: "Contact",
      knowledgebase: "Knowledge Base",
      faq: "FAQ",
      news: "News",
      company: "Company",
      aboutUs: "About Us",
      affiliates: "Affiliates / Partners",
      morePages: "More Pages",
      login: "Login",
      register: "Register",
      makeRequest: "Make a Request",
    },
    es: {
      home: "Casa",
      services: "Servicios",
      locations: "Ubicaciones",
      support: "Soporte",
      contact: "Contacto",
      knowledgebase: "Base de Conocimiento",
      faq: "Preguntas Frecuentes",
      news: "Noticias",
      company: "Empresa",
      aboutUs: "Sobre Nosotros",
      affiliates: "Afiliados / Socios",
      morePages: "Más Páginas",
      login: "Iniciar Sesión",
      register: "Registrarse",
      makeRequest: "Consulta tu Pedido",
    },
  };

  const content = menuItems[language] || menuItems.en; // Default to English

  return (
    <nav className="navbar transition">
      <div className="container">
        {/********* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img src="./img/logo.png" className="img-fluid d-md-block d-none imginit" alt="logo" />
          <img src="./img/logo-mobile.png" className="img-fluid d-md-none d-sms-none imginit" alt="logo" />
        </NavLink>
        {/********* Logo */}

        {/********* Mobile Menu */}
        <div className="mobile">
          {showmenu && (
            <div className='menu'>
              <div className='navbar-item counter'>
                <NavLink to="/" onClick={() => setBtnIcon(!showmenu)}>{content.home}</NavLink>
              </div>

              <div className='navbar-item counter'>
                <NavLink to="/services" onClick={() => setBtnIcon(!showmenu)}>{content.services}</NavLink>
              </div>

              <div className='navbar-item counter'>
                <NavLink to="/location" onClick={() => setBtnIcon(!showmenu)}>{content.locations}</NavLink>
              </div>

              <div className='navbar-item counter'>
                <div ref={ref2}>
                  <div className="dropdown-custom dropdown-toggle btn"
                    onClick={() => {
                      handleBtnClick2();
                      closeMenu1();
                      closeMenu();
                      closeMenu3();
                      closeMenu4();
                    }}>
                    {content.support}
                  </div>
                  {openMenu2 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu2}>
                        <NavLink to="/contact" onClick={() => setBtnIcon(!showmenu)}>{content.contact}</NavLink>
                        <NavLink to="/knowledgebase" onClick={() => setBtnIcon(!showmenu)}>{content.knowledgebase}</NavLink>
                        <NavLink to="/faq" onClick={() => setBtnIcon(!showmenu)}>{content.faq}</NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className='navbar-item counter'>
                <NavLink to="/news" onClick={() => setBtnIcon(!showmenu)}>{content.news}</NavLink>
              </div>

              <div className='navbar-item counter'>
                <div ref={ref3}>
                  <div className="dropdown-custom dropdown-toggle btn"
                    onClick={() => {
                      handleBtnClick3();
                      closeMenu1();
                      closeMenu2();
                      closeMenu();
                      closeMenu4();
                    }}>
                    {content.company}
                  </div>
                  {openMenu3 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu3}>
                        <NavLink to="/about" onClick={() => setBtnIcon(!showmenu)}>{content.aboutUs}</NavLink>
                        <NavLink to="/affliate" onClick={() => setBtnIcon(!showmenu)}>{content.affiliates}</NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className='navbar-item counter'>
                <div ref={ref4}>
                  <div className="dropdown-custom dropdown-toggle btn"
                    onClick={() => {
                      handleBtnClick4();
                      closeMenu1();
                      closeMenu2();
                      closeMenu3();
                      closeMenu();
                    }}>
                    {content.morePages}
                  </div>
                  {openMenu4 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu4}>
                        <NavLink to="/login" onClick={() => setBtnIcon(!showmenu)}>{content.login}</NavLink>
                        <NavLink to="/register" onClick={() => setBtnIcon(!showmenu)}>{content.register}</NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className='navbar-item counter'>
                <NavLink to="/make-request" onClick={() => setBtnIcon(!showmenu)}>{content.makeRequest}</NavLink>
              </div>

            </div>
          )}
        </div>
        {/********* Mobile Menu */}

        {/********* Dekstop Menu */}
        <div className="dekstop">
          <div className='menu'>
            <div className='navbar-item counter'>
              <NavLink to="/">{content.home}</NavLink>
            </div>

            <div className='navbar-item counter'>
              <NavLink to="/services">{content.services}</NavLink>
            </div>

            <div className='navbar-item counter'>
              <NavLink to="/location">{content.locations}</NavLink>
            </div>

            <div className='navbar-item counter'>
              <div ref={ref2}>
                <div className="dropdown-custom dropdown-toggle btn"
                  onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                  {content.support}
                  {openMenu2 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu2}>
                        <NavLink to="/contact">{content.contact}</NavLink>
                        <NavLink to="/knowledgebase">{content.knowledgebase}</NavLink>
                        <NavLink to="/faq">{content.faq}</NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='navbar-item counter'>
              <NavLink to="/news">{content.news}</NavLink>
            </div>

            <div className='navbar-item counter'>
              <div ref={ref3}>
                <div className="dropdown-custom dropdown-toggle btn"
                  onMouseEnter={handleBtnClick3} onMouseLeave={closeMenu3}>
                  {content.company}
                  {openMenu3 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu3}>
                        <NavLink to="/about">{content.aboutUs}</NavLink>
                        <NavLink to="/affliate">{content.affiliates}</NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='navbar-item counter'>
              <div ref={ref4}>
                <div className="dropdown-custom dropdown-toggle btn"
                  onMouseEnter={handleBtnClick4} onMouseLeave={closeMenu4}>
                  {content.morePages}
                  {openMenu4 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu4}>
                        <NavLink to="/login">{content.login}</NavLink>
                        <NavLink to="/register">{content.register}</NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
        {/********* Dekstop Menu */}

        {/********* Side Button */}
        <div className="menu_side_area">
          <NavLink to="/make-request" className="btn-line" id="btn-line">{content.makeRequest}</NavLink>
          {/********* Burger Button */}
          <button className="burgermenu" type="button"
            onClick={() => {
              setBtnIcon(!showmenu);
              closeMenu1();
              closeMenu2();
              closeMenu3();
              closeMenu4();
            }}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          {/********* Burger Button */}
        </div>
        {/********* Side Button */}

        {/* Language Switcher */}
        <div className="language-switcher">
          <button className={`btn-line language-button ${language === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>EN</button>
          <button className={`btn-line language-button ${language === 'es' ? 'active' : ''}`} onClick={() => changeLanguage('es')}>ES</button>
        </div>
        {/* Language Switcher */}

      </div>
    </nav>
  );
};

export default Navbar;
