import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Vou ficar com aparência artificial?",
      answer: "Esse é o maior cuidado da avaliação. Cada protocolo é pensado dentro da sua própria anatomia. O objetivo declarado é naturalidade, não transformação."
    },
    {
      question: "Tenho medo de ficar exagerada(o)",
      answer: "É um receio comum e legítimo. Por isso não existe procedimento antes da avaliação. O plano é construído aos poucos, sempre com você acompanhando o resultado."
    },
    {
      question: "Preciso me comprometer com gastos contínuos?",
      answer: "Não. Cada indicação é discutida na avaliação, com previsibilidade de investimento. Você decide o que faz sentido pra sua rotina, sem pacote fechado."
    },
    {
      question: "Atende as duas unidades com a mesma equipe?",
      answer: "Sim, a Dra. Paula atende pessoalmente na HERA ESTETICA em Vila Leopoldina, São Paulo, sempre com hora marcada."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bolder text-primary-text mb-4">
            Dúvidas comuns
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif font-bolder text-accent-gold">
            Perguntas antes de agendar
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-accent-gold rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-primary-bg hover:bg-gray-100 transition-colors flex justify-between items-center"
              >
                <span className="text-lg font-serif font-bolder text-primary-text">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-accent-gold transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="font-sans text-primary-text">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
