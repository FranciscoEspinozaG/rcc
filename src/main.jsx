import React from 'react';
import ReactDOM from 'react-dom/client';
import { SliderHome, MenuHeader, FooterSite, MainSection } from './components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/css/custom.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuHeader/>
    <SliderHome/>
    <MainSection/>
    <FooterSite/>
  </React.StrictMode>
)
