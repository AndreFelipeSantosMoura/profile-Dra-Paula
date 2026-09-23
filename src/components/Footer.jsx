import React from 'react';
import { trackWhatsAppClick } from '../utils/analytics';

const Footer = () => {
  return (
    <footer className="bg-primary-text text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bolder mb-4">
            Vamos conversar sobre o seu rosto?
          </h2>
          <p className="text-lg font-sans text-primary-secondary mb-8 max-w-2xl mx-auto">
            O primeiro passo é uma conversa simples no WhatsApp, sem compromisso, pra entender se faz sentido 
            agendar sua avaliação.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5511953443853&text&type=phone_number&app_absent=0&utm_source=ig"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('Footer')}
            className="inline-block bg-cta-green hover:bg-cta-hover text-white px-8 py-4 rounded-full text-lg font-sans font-bolder transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Agendar minha avaliação
          </a>
        </div>

        <div className="border-t border-accent-gold pt-8 mt-12">
          <div className="max-w-4xl mx-auto text-center text-sm font-sans text-primary-secondary">
            <p className="mb-4">
              Dra. Paula Tavares, Especialista em Harmonização Facial, CRO-SP 143129. Atendimento na HERA ESTETICA - Vila Cordeiro, São Paulo (SP).
            </p>
            <p className="mb-4">
              Os procedimentos listados são de natureza estética. Resultados podem variar de pessoa para pessoa e 
              dependem de avaliação individual. Nenhuma informação nesta página substitui a avaliação presencial.
            </p>
            <a
              href="#"
              className="text-accent-gold hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
