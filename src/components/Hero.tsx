import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cuidando da saúde das mulheres com excelência
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8">
            Nossa equipe de especialistas está pronta para oferecer o melhor tratamento em mastologia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#equipe" 
              className="bg-white hover:bg-gray-100 text-blue-700 font-semibold px-8 py-3 rounded-full transition-colors text-lg"
            >
              Conheça nossa equipe
            </a>
            <a 
              href="#agendar" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-colors text-lg"
            >
              Agende sua consulta
            </a>
          </div>
        </div>
      </div>

      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
          <path fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;