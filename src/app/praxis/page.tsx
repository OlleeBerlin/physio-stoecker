import Navigation, { Footer } from "@/components/Navigation";

export default function Praxis() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Unsere Praxis
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Lernen Sie uns kennen - Ihr Team für Gesundheit und Wohlbefinden
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-900 text-center mb-12">Unser Team</h2>
          
          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Annegret Stöcker */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Annegret Stöcker</h3>
              <p className="text-gray-600 font-medium mb-3">Praxisinhaberin</p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Über 25 Jahre Erfahrung</strong><br/>
                Spezialisierung: KG-ZNS, Manuelle Therapie
              </p>
              <div className="text-xs text-gray-600">
                <p>• Staatlich anerkannte Physiotherapeutin</p>
                <p>• KG-ZNS Zertifizierung</p>
                <p>• Manuelle Therapie</p>
              </div>
            </div>

            {/* Therapeutin 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Therapeutin</h3>
              <p className="text-gray-600 font-medium mb-3">Physiotherapeutin</p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Über 20 Jahre Erfahrung</strong><br/>
                Spezialisierung: Lymphdrainage, Massage
              </p>
              <div className="text-xs text-gray-600">
                <p>• Staatlich anerkannte Physiotherapeutin</p>
                <p>• Lymphdrainage Zertifizierung</p>
                <p>• Triggerpunkt-Therapie</p>
              </div>
            </div>

            {/* Therapeutin 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Therapeutin</h3>
              <p className="text-gray-600 font-medium mb-3">Physiotherapeutin</p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Über 20 Jahre Erfahrung</strong><br/>
                Spezialisierung: Faszientechnik, CMD
              </p>
              <div className="text-xs text-gray-600">
                <p>• Staatlich anerkannte Physiotherapeutin</p>
                <p>• Kiefergelenk-Behandlung</p>
                <p>• Medizinisches Taping</p>
              </div>
            </div>
          </div>

          {/* Philosophie und Auszeichnungen */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">🎯 Unsere Philosophie</h3>
              <p className="text-gray-700">
                &ldquo;Jeder Patient ist einzigartig. Deshalb nehmen wir uns die Zeit, die richtige 
                Behandlung für Ihre individuellen Bedürfnisse zu finden. Unser Ziel ist es, 
                Ihnen zu helfen, Ihre Lebensqualität zurückzugewinnen.&rdquo;
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">⭐ Was uns auszeichnet</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Drei erfahrene Therapeutinnen (20+ Jahre)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Persönliche, individuelle Betreuung
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Moderne Behandlungsmethoden
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Spezialisierung auf neurologische Erkrankungen
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Zentrale Lage mit guter Erreichbarkeit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Kontaktdaten */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-red-900 mb-6">📍 Praxis Physiotherapie Stöcker</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">Adresse</h3>
                  <p className="text-gray-700">Weimarische Str. 9</p>
                  <p className="text-gray-700">10715 Berlin</p>
                </div>

                <div>
                  <h3 className="font-semibold text-red-900 mb-2">Telefon</h3>
                  <a href="tel:030853587" className="text-orange-400 font-semibold text-xl hover:text-orange-500 transition-colors">
                    030 853 58 71
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-red-900 mb-2">E-Mail</h3>
                  <a href="mailto:post@physio-stoecker.de" className="text-gray-700 hover:text-red-900 transition-colors">
                    post@physio-stoecker.de
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-red-900 mb-2">🕒 Öffnungszeiten</h3>
                  <div className="space-y-1 text-gray-700">
                    <p><span className="font-medium">Montag - Donnerstag:</span> 08:30 - 19:00 Uhr</p>
                    <p><span className="font-medium">Freitag:</span> 08:30 - 16:00 Uhr</p>
                    <p className="text-sm text-gray-500 mt-2">Termine nach Vereinbarung</p>
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href="tel:030853587" 
                    className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
                  >
                    📞 Jetzt Termin vereinbaren
                  </a>
                </div>
              </div>
            </div>

            {/* Anfahrt */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-red-900 mb-6">🚇 Anfahrt</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-red-900 mb-3">Öffentliche Verkehrsmittel</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">S-Bahn</span>
                      <div>
                        <p className="font-medium">S41, S42, S46</p>
                        <p className="text-gray-600 text-sm">Haltestelle Bundesplatz</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">U-Bahn</span>
                      <div>
                        <p className="font-medium">U9</p>
                        <p className="text-gray-600 text-sm">Haltestelle Bundesplatz</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Bus</span>
                      <div>
                        <p className="font-medium">Bus 187, 248</p>
                        <p className="text-gray-600 text-sm">Verschiedene Haltestellen in der Nähe</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-red-900 mb-3">Mit dem Auto</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-medium">A100:</span> Ausfahrt Innsbrucker Platz</p>
                    <p className="text-sm text-gray-500">Bitte planen Sie ausreichend Zeit für die Parkplatzsuche ein</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-red-900 mb-3">Zu Fuß vom Bundesplatz</h3>
                  <div className="text-gray-700">
                    <p>📍 Nur 3 Minuten Fußweg</p>
                    <p className="text-sm">Richtung Weimarische Straße, Hausnummer 9</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">💡 Tipp</h4>
                  <p className="text-blue-800 text-sm">
                    Die Praxis ist barrierefrei zugänglich und gut mit öffentlichen 
                    Verkehrsmitteln erreichbar. Bei Fragen zur Anfahrt rufen Sie uns gerne an!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zusätzliche Infos */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-900 text-center mb-12">Wichtige Informationen</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-bold text-red-900 mb-3">Alle Kassen</h3>
              <p className="text-gray-600">
                Gesetzliche und private Krankenkassen. Bringen Sie einfach Ihr Rezept mit.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="font-bold text-red-900 mb-3">Flexible Termine</h3>
              <p className="text-gray-600">
                Termine nach Vereinbarung. Auch kurzfristige Termine sind oft möglich.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-bold text-red-900 mb-3">25+ Jahre Erfahrung</h3>
              <p className="text-gray-600">
                Professionelle Behandlung mit langjähriger Erfahrung und modernen Methoden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
