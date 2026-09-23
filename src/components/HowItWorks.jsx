import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Você chama no WhatsApp",
      description: "Conta um pouco do que te incomoda e agende sua avaliação no Capital Corporate Offices, Morumbi."
    },
    {
      number: "2",
      title: "Avaliação presencial",
      description: "A Dra. Paula analisa sua anatomia e ouve o que você espera, sem compromisso de procedimento."
    },
    {
      number: "3",
      title: "Plano sob medida",
      description: "Se fizer sentido pra você, ela propõe um protocolo individual, com previsibilidade de investimento."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bolder text-primary-text mb-4">
            Como funciona
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif font-bolder text-accent-gold">
            Da conversa à avaliação
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-cta-green text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-serif font-bolder mx-auto mb-6 shadow-md">
                {step.number}
              </div>
              <h4 className="text-xl font-serif font-bolder text-primary-text mb-4">{step.title}</h4>
              <p className="font-sans text-primary-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
