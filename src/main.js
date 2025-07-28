import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './LanguageContext'; // Import LanguageProvider

import Home1 from '../src/pages/home1'; // Home
import Pricing from '../src/pages/pricing'; // Services (using pricing layout)
import Location from '../src/pages/location'; // Locations (will render DistributionCenters)
import Knowledgebase from '../src/pages/knowledgebase'; // Knowledge Base
import Faq from '../src/pages/faq'; // FAQ (will render FaqList)
import Contact from '../src/pages/contact'; // Contact (will render Contactus)
import News from '../src/pages/news'; // News (will render NewsList)
import About from '../src/pages/about'; // About Us
import Affliate from '../src/pages/affliate'; // Affiliates / Partners
import Login from '../src/pages/login'; // Login
import Register from '../src/pages/register'; // Register
import MakeRequest from '../src/pages/make-request'; // Make a Request

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const routes = [
  { path: '/', element: <Home1 /> }, // Home
  { path: '/services', element: <Pricing /> }, // Services
  { path: '/location', element: <Location /> }, // Locations
  { path: '/knowledgebase', element: <Knowledgebase /> }, // Knowledge Base
  { path: '/faq', element: <Faq /> }, // FAQ
  { path: '/contact', element: <Contact /> }, // Contact
  { path: '/news', element: <News /> }, // News
  { path: '/about', element: <About /> }, // About Us
  { path: '/affliate', element: <Affliate /> }, // Affiliates / Partners
  { path: '/login', element: <Login /> }, // Login
  { path: '/register', element: <Register /> }, // Register
  { path: '/make-request', element: <MakeRequest /> }, // Make a Request
];

const Navigation = () => (
  <Routes>
    {routes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider> {/* Wrap with LanguageProvider */}
        <div>
          <BrowserRouter>
            <ScrollToTop />
            <Navigation />
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
