import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bolder text-primary-text mb-6">
          Vamos conversar sobre o seu rosto?
        </h2>
        <p className="text-lg font-sans text-primary-text mb-8">
          O primeiro passo é uma conversa simples no WhatsApp, sem compromisso, pra entender se faz sentido 
          agendar sua avaliação.
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=5511953443853&text&type=phone_number&app_absent=0&utm_source=ig"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cta-green hover:bg-cta-hover text-white px-8 py-4 rounded-full text-lg font-sans font-bolder transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Agendar minha avaliação
        </a>
      </div>
    </section>
  );
};

export default CTA;
