import React from 'react';

const Location = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-serif font-bolder text-accent-gold">
            Instituto Paula Tavares
          </h3>
          <p className="text-lg font-sans text-primary-text mt-4 max-w-2xl mx-auto">
            Veja nossa localização, avaliações e fotos diretamente no Google Meu Negócio.
          </p>
        </div>

        {/* Mapa e Avaliações do Google */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mapa do Google */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Av.+Dr.+Chucri+Zaidan,+1550+-+Vila+Cordeiro,+São+Paulo+-+SP,+04711-130&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização HERA ESTETICA"
            ></iframe>
          </div>

          {/* Card de Avaliações do Google */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-accent-gold flex flex-col justify-center">
            {/* Estrelas */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Título */}
            <h3 className="text-2xl font-serif font-bolder text-primary-text mb-4">
              Avaliações reais no Google
            </h3>

            {/* Descrição */}
            <p className="text-lg font-sans text-primary-text mb-6">
              Veja as experiências e fotos de nossos pacientes no perfil do Google.
            </p>

            {/* Endereço com ícone */}
            <div className="flex items-start gap-3 mb-6">
              <svg className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <p className="text-base font-sans text-primary-text">
                Av. Dr. Chucri Zaidan, 1550 - Vila Cordeiro<br />
                São Paulo - SP, 04711-130
              </p>
            </div>

            {/* Botão */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Dr.+Chucri+Zaidan,+1550+-+São+Paulo+-+SP,+04711-130"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-sans font-bold transition-colors duration-300 text-center"
            >
              VER NO GOOGLE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
