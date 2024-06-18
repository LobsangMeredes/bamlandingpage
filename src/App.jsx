import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/About'; 
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Services from './components/Services';
import Subscription from './components/Subscription';
import ImageGallery from './components/ImageGallery';
import Ods from './components/Ods';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Ods />
      <Features />
     
      <Services />
      <Subscription />
      <ImageGallery />
      <Newsletter />
      <Footer />
     
    </div>
  );
}

export default App;
