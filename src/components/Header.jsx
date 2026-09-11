import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary-bg shadow-md fixed w-full top-0 z-50 border-b border-accent-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-serif font-bolder text-primary-text">
              Dra. Paula Tavares
            </h1>
            <span className="ml-2 text-sm font-sans text-primary-secondary">Especialista em Harmonização Facial</span>
          </div>
          <div className="flex items-center">
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
