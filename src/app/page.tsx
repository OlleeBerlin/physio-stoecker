
export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Stykka Style */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
             style={{
               backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0wIDQwMEgxMjAwTTYwMCAwVjgwME0zMDAgMjAwSDkwME0yMDAgNjAwSDEwMDAiIHN0cm9rZT0iI0U1RTdFQiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjMiLz4KPGNpcmNsZSBjeD0iMzAwIiBjeT0iMjAwIiByPSI0IiBmaWxsPSIjRjNGNEY2IiBvcGFjaXR5PSIwLjUiLz4KPGNpcmNsZSBjeD0iOTAwIiBjeT0iNjAwIiByPSI2IiBmaWxsPSIjRjNGNEY2IiBvcGFjaXR5PSIwLjMiLz4KPGNpcmNsZSBjeD0iNjAwIiBjeT0iNDAwIiByPSI4IiBmaWxsPSIjRjNGNEY2IiBvcGFjaXR5PSIwLjIiLz4KPC9zdmc+')"
             }}>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Subtitle */}
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              PROFESSIONELLE PHYSIOTHERAPIE
            </p>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-black leading-none mb-8">
            Seit über 25 Jahren
            <br />
            <span className="font-medium">kümmern wir uns</span>
            <br />
            um Ihr Wohlbefinden.
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Dabei machen wir keinen Unterschied, bei welcher Krankenkasse Sie sind, 
            sie Massagen buchen wollen oder wir Sie vor Ort physiotherapeutisch 
            behandeln dürfen. Wir nehmen uns Zeit für Sie!
          </p>
          
          {/* CTA Button */}
          <div className="mb-16">
            <a 
              href="tel:030853587" 
              className="inline-flex items-center px-8 py-4 bg-orange-400 hover:bg-orange-500 text-white text-lg font-medium transition-all duration-300 ease-in-out rounded-full hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Termin vereinbaren
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-4">↓</span>
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              Mehr erfahren
            </span>
          </div>
        </div>
      </section>

      {/* What is Physio Stöcker - Stykka Style */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-black mb-8">
              Was ist Physio Stöcker
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Über 25 Jahre Erfahrung in der Physiotherapie mit modernsten Methoden und persönlicher Betreuung.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Superior Quality */}
            <div className="text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-medium text-black mb-4">Superior Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professionelle Behandlung mit langjähriger Erfahrung. Moderne Geräte, 
                  bewährte Methoden und individuelle Betreuung für optimale Ergebnisse.
                </p>
              </div>
            </div>
            
            {/* Natural Approach */}
            <div className="text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-medium text-black mb-4">Natural Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ganzheitliche Therapieansätze mit natürlichen Methoden. 
                  Von manueller Therapie bis hin zu modernen Behandlungsverfahren.
                </p>
              </div>
            </div>
            
            {/* Fully Modular */}
            <div className="text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-medium text-black mb-4">Fully Modular</h3>
                <p className="text-gray-600 leading-relaxed">
                  Flexible Behandlungspläne, die sich an Ihre Bedürfnisse anpassen. 
                  Von Einzeltherapie bis hin zu Gruppentraining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in touch today - Stykka Style */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-light text-black mb-8">
            Get in touch today
          </h2>
          
          <div className="mb-12">
            <a 
              href="tel:030853587" 
              className="inline-flex items-center px-8 py-4 bg-orange-400 hover:bg-orange-500 text-white text-lg font-medium transition-all duration-300 ease-in-out rounded-full hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Contact Physio Stöcker
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-medium text-black mb-4">📍 Praxis</h3>
              <p className="text-gray-600 mb-2">Weimarische Str. 9</p>
              <p className="text-gray-600 mb-6">10715 Berlin</p>
              
              <h4 className="text-xl font-medium text-black mb-4">🕒 Öffnungszeiten</h4>
              <p className="text-gray-600 mb-1">Mo-Do: 08:30 - 19:00 Uhr</p>
              <p className="text-gray-600">Fr: 08:30 - 16:00 Uhr</p>
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-medium text-black mb-4">📞 Kontakt</h3>
              <a href="tel:030853587" className="text-orange-400 font-semibold text-xl block mb-4">
                030 853 58 71
              </a>
              <a href="mailto:post@physio-stoecker.de" className="text-gray-600 block mb-6">
                post@physio-stoecker.de
              </a>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Designed and manufactured in Berlin
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}