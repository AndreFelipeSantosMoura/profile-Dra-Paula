import React from 'react';
import heroImage from '../img/IMG_6360.jpg';
import { trackWhatsAppClick } from '../utils/analytics';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-primary-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bolder text-primary-text mb-6">
              Harmonização facial personalizada
            </h2>
            <p className="text-xl md:text-2xl font-sans text-primary-text mb-8">
              Rejuvenescimento facial natural, sem perder sua identidade.
            </p>
            <p className="text-lg font-sans text-primary-secondary mb-12">
              Uma avaliação facial individualizada pra entender o que realmente combina com você. 
              Protocolos pensados pra realçar, nunca pra transformar demais.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5511953443853&text&type=phone_number&app_absent=0&utm_source=ig"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Hero')}
              className="inline-block bg-cta-green hover:bg-cta-hover text-white px-8 py-4 rounded-full text-lg font-sans font-bolder transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Agendar minha avaliação
            </a>
            <p className="mt-6 text-sm font-sans text-primary-secondary">
              Atendimento com hora marcada · HERA ESTETICA - Vila Cordeiro, São Paulo
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImage}
              alt="Dra. Paula Tavares - Harmonização Facial"
              className="rounded-lg shadow-2xl max-w-full h-auto object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
