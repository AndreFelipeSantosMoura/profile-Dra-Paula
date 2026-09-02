import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Location from './components/Location';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Location />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
