import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.svg" 
              alt="Physiotherapie Stöcker Logo" 
              className="h-16 w-auto"
            />
          </div>
          <a 
            href="tel:030853587" 
            className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            030 853 58 71
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 leading-tight mb-6">
              Seit über 25 Jahren kümmern wir uns um Ihr Wohlbefinden.
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Dabei machen wir keinen Unterschied, bei welcher Krankenkasse Sie sind, 
              sie Massagen buchen wollen oder wir Sie vor Ort physiotherapeutisch 
              behandeln dürfen. Wir nehmen uns Zeit für Sie!
            </p>
            <p className="text-red-900 font-semibold mb-8">
              Wir freuen uns auf Ihren Besuch!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:030853587" 
                className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors"
              >
                📞 Termin vereinbaren
              </a>
              <Link 
                href="/behandlungen" 
                className="border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors"
              >
                Unsere Leistungen
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-6xl mb-4 text-center">🏥</div>
              <h3 className="text-red-900 font-bold text-xl mb-4 text-center">Ihre Gesundheit in erfahrenen Händen</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Über 25 Jahre Erfahrung
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Alle Krankenkassen
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  KG-ZNS Spezialisierung
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Zentral in Berlin
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Behandlungen Preview */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-900 text-center mb-12">Behandlungen</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏃‍♂️</div>
              <h3 className="text-red-900 font-semibold text-lg mb-2">Krankengymnastik & KG-ZNS</h3>
              <p className="text-gray-600">Gezielte Bewegungsübungen und neurologische Behandlungen</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">👐</div>
              <h3 className="text-red-900 font-semibold text-lg mb-2">Manuelle Therapie</h3>
              <p className="text-gray-600">Mobilisation von Gelenken und Muskelfunktionen</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💆‍♀️</div>
              <h3 className="text-red-900 font-semibold text-lg mb-2">Massage & Wellness</h3>
              <p className="text-gray-600">Entspannung und therapeutische Massagen</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/behandlungen" 
              className="bg-red-900 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Alle Behandlungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-900 mb-8">Kontakt & Anfahrt</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-red-900 font-semibold text-lg mb-4">📍 Praxis</h3>
              <p className="text-gray-600 mb-2">Weimarische Str. 9</p>
              <p className="text-gray-600 mb-4">10715 Berlin</p>
              
              <h4 className="text-red-900 font-semibold mb-2">🕒 Öffnungszeiten</h4>
              <p className="text-gray-600 text-sm">Mo-Do: 08:30 - 19:00 Uhr</p>
              <p className="text-gray-600 text-sm">Fr: 08:30 - 16:00 Uhr</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-red-900 font-semibold text-lg mb-4">📞 Kontakt</h3>
              <a href="tel:030853587" className="text-orange-400 font-semibold text-lg block mb-2">
                030 853 58 71
              </a>
              <a href="mailto:post@physio-stoecker.de" className="text-gray-600 block mb-4">
                post@physio-stoecker.de
              </a>
              
              <a 
                href="tel:030853587" 
                className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}