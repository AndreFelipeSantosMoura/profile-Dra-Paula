import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Preenchimento facial",
      description: "Lábios, olheiras, bigode chinês, mento, mandíbula e têmporas, com ácido hialurônico, buscando proporção e naturalidade."
    },
    {
      title: "Rinomodelação",
      description: "Ajuste do contorno nasal sem cirurgia. Correção de pequenas assimetrias, resultado imediato e sem afastamento."
    },
    {
      title: "Bioestimulador de colágeno",
      description: "Estímulo gradual da produção de colágeno pra firmeza, viço e densidade da pele. Resultado evolutivo e duradouro."
    },
    {
      title: "Fios de sustentação",
      description: "Reposicionam tecidos e redefinem o contorno mandibular, estimulando colágeno de forma progressiva."
    },
    {
      title: "Ultrassom microfocado",
      description: "Atua nas camadas profundas do rosto pra efeito lifting. Indicado pra flacidez do terço inferior e pescoço."
    },
    {
      title: "Lifting facial não cirúrgico",
      description: "Combinação estratégica de técnicas pra reposicionar e sustentar o rosto, sem procedimento cirúrgico."
    },
    {
      title: "Bioestimulação celular (PDRN)",
      description: "Protocolo de última geração que acelera a regeneração, melhora textura e luminosidade da pele."
    },
    {
      title: "Exossomos",
      description: "Indicados pra peles sensibilizadas, pós-procedimento e rejuvenescimento avançado."
    },
    {
      title: "PRF facial e capilar",
      description: "Derivado do próprio sangue da paciente. Estimula regeneração da pele e atua também na queda capilar."
    },
    {
      title: "Microagulhamento",
      description: "Estímulo controlado da pele pra melhorar textura, cicatrizes e manchas."
    },
    {
      title: "Contorno facial não cirúrgico",
      description: "Protocolos combinados pra redução de gordura localizada no rosto (incluindo papada) e definição do contorno."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#EAE3D9' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bolder text-primary-text mb-4">
            O que tratamos na avaliação
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif font-bolder text-accent-gold mb-4">
            Protocolos de harmonização facial
          </h3>
          <p className="text-lg font-sans text-primary-text max-w-3xl mx-auto">
            Cada um é indicado depois da avaliação. Nenhum procedimento é vendido antes de entender o seu caso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-accent-gold">
              <h4 className="text-xl font-serif font-bolder text-primary-text mb-3">{service.title}</h4>
              <p className="font-sans text-primary-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
