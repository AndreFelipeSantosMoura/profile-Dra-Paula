import React from 'react';

const Location = () => {
  const locations = [
    {
      city: "HERA ESTETICA",
      address: "R. Passo da Pátria, 78 - Vila Leopoldina",
      fullAddress: "São Paulo - SP, 05085-000"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bolder text-primary-text mb-4">
            Onde atendemos
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif font-bolder text-accent-gold">
            Localização
          </h3>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {locations.map((location, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-accent-gold">
              <h4 className="text-2xl font-serif font-bolder text-primary-text mb-4">{location.city}</h4>
              <p className="text-lg font-sans text-primary-text mb-2">{location.address}</p>
              <p className="font-sans text-primary-secondary">{location.fullAddress}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
