import React from 'react';
import consultorioImage from '../img/consultorio.jpg';

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-bg">
      <div className="max-w-7xl mx-auto">
        {/* Estatísticas em linha horizontal com faixa colorida */}
        <div className="stats-container mb-20">
          <div className="stat-item">
            <div className="stat-number">CRO-SP 143129</div>
            <div className="stat-label">REGISTRO ATIVO</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">6 anos</div>
            <div className="stat-label">DE PRÁTICA CLÍNICA</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3000+</div>
            <div className="stat-label">PACIENTES ATENDIDOS</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5.0</div>
            <div className="stat-label">AVALIAÇÃO NO GOOGLE</div>
          </div>
        </div>

        {/* Imagem e texto lado a lado */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={consultorioImage}
              alt="Ambiente da clínica da Dra. Paula Tavares"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bolder text-primary-text mb-6">
              Cada rosto carrega uma história única.
            </h3>
            <p className="text-lg font-sans text-primary-text leading-relaxed mb-4">
              É por isso que não existe protocolo padrão. Antes de qualquer procedimento, a Dra. Paula faz uma 
              avaliação individual, entende sua anatomia, sua rotina e o que te incomoda de verdade, pra propor um 
              plano que respeita sua identidade.
            </p>
            <p className="text-lg font-sans text-primary-text leading-relaxed">
              O objetivo nunca é mudar seu rosto. É devolver firmeza, contorno e luminosidade, do jeito mais natural possível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
