import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home1'; // Changed to home1
import Home2 from './pages/home2';
import Home3 from './pages/home3';
import Home4 from './pages/home4';
import Home5 from './pages/home5';
import Home6 from './pages/home6';
import About from './pages/about';
import Faq from './pages/faq';
import Games from './pages/games';
import News from './pages/news';
import Contact from './pages/contact';
import Location from './pages/location';
import Pricing from './pages/pricing';
import Pricing2 from './pages/pricing2';
import Pricing3 from './pages/pricing3';
import Register from './pages/register';
import Login from './pages/login';
import Knowledgebase from './pages/knowledgebase';
import Affliate from './pages/affliate';
import MakeRequest from './pages/make-request';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './LanguageContext'; // Import LanguageProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <LanguageProvider> {/* Wrap with LanguageProvider */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home1" element={<Home />} /> {/* Still route /home1 to Home */}
            <Route path="/home2" element={<Home2 />} />
            <Route path="/home3" element={<Home3 />} />
            <Route path="/home4" element={<Home4 />} />
            <Route path="/home5" element={<Home5 />} />
            <Route path="/home6" element={<Home6 />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/games" element={<Games />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pricing2" element={<Pricing2 />} />
            <Route path="/pricing3" element={<Pricing3 />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/knowledgebase" element={<Knowledgebase />} />
            <Route path="/affliate" element={<Affliate />} />
            <Route path="/make-request" element={<MakeRequest />} />
            <Route path="*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
