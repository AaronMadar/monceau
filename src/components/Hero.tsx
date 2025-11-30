import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-serif font-semibold leading-tight mb-8">
            Monceau David & Co
          </h1>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-12 border border-white border-opacity-20">
            <blockquote className="text-xl lg:text-2xl font-serif italic leading-relaxed text-center">
              "Je te montrerai la voie que tu dois suivre."
            </blockquote>
            <cite className="block text-lg text-center mt-4 opacity-90">
              Psaume 32:8
            </cite>
          </div>

          <p className="text-xl lg:text-2xl font-sans font-light leading-relaxed mb-12">
            Cabinet de conseil en assurance, gestion d'actifs et développement durable. 
            <br />
            <span className="font-medium">Une expertise traditionnelle au service de votre réussite.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-900 px-8 py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Découvrir nos services
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-sm font-sans font-medium hover:bg-white hover:text-primary-900 transition-all duration-300"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <div className="w-64 h-64 bg-gradient-to-l from-white to-transparent rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;