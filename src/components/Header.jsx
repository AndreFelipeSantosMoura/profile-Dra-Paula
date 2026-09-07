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
          <div className="flex items-center gap-4">
            {/* <a
              href="https://www.instagram.com/dra_paulatavares/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#833ab4' }} />
                    <stop offset="50%" style={{ stopColor: '#fd1d1d' }} />
                    <stop offset="100%" style={{ stopColor: '#fcb045' }} />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#instagram-gradient)" />
                <path d="M16 11.37A4 4 0 1 1 12 7.63a4 4 0 0 1-4 3.74A4 4 0 0 1 8 11.37a4 4 0 0 1 4-3.74A4 4 0 0 1 16 11.37zm-2.5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" fill="white" />
                <circle cx="18" cy="6" r="1.5" fill="white" />
              </svg>
            </a> */}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
