import Link from "next/link";

export default function Behandlungen() {
  const behandlungen = [
    {
      title: "Krankengymnastik",
      icon: "🏃‍♂️",
      description: "Gezielte Übungen zur Wiederherstellung Ihrer Beweglichkeit",
      details: "Mit speziellen Bewegungsübungen helfen wir Ihnen dabei, Schmerzen zu lindern und Ihre Beweglichkeit zurückzugewinnen. Ideal bei Rückenproblemen, nach Verletzungen oder Operationen.",
      indikationen: ["Rückenschmerzen", "Nach Operationen", "Gelenkprobleme", "Muskelverspannungen"]
    },
    {
      title: "KG-ZNS (Neurologische Behandlung)",
      icon: "🧠",
      description: "Spezielle Therapie bei neurologischen Erkrankungen",
      details: "Krankengymnastik am Zentralnervensystem - eine hochspezialisierte Behandlung für Patienten mit neurologischen Erkrankungen. Wir helfen dabei, verloren gegangene Bewegungsfähigkeiten wiederzuerlangen.",
      indikationen: ["Nach Schlaganfall", "Multiple Sklerose", "Parkinson", "Schädel-Hirn-Trauma"]
    },
    {
      title: "Manuelle Therapie",
      icon: "👐",
      description: "Sanfte Mobilisation von Gelenken und Wirbelsäule",
      details: "Mit gezielten Handgriffen lösen wir Blockaden und verbessern die Beweglichkeit Ihrer Gelenke. Eine schonende Methode ohne ruckartige Bewegungen.",
      indikationen: ["Gelenkblockaden", "Wirbelsäulenprobleme", "Bewegungseinschränkungen", "Kopfschmerzen"]
    },
    {
      title: "Lymphdrainage",
      icon: "💧",
      description: "Entstauungstherapie bei Schwellungen",
      details: "Sanfte Massagetechnik zur Anregung des Lymphflusses. Hilft bei Schwellungen und unterstützt das Immunsystem. Besonders wohltuend und entspannend.",
      indikationen: ["Schwellungen nach OP", "Lymphödem", "Wassereinlagerungen", "Zur Entspannung"]
    },
    {
      title: "Massage",
      icon: "💆‍♀️",
      description: "Entspannung für Körper und Geist",
      details: "Klassische und therapeutische Massagen zur Lockerung verspannter Muskeln. Fördert die Durchblutung und hilft beim Stressabbau.",
      indikationen: ["Verspannungen", "Stress", "Durchblutungsstörungen", "Zur Entspannung"]
    },
    {
      title: "Naturmoor-Therapie",
      icon: "🌿",
      description: "Heilende Wärme aus der Natur",
      details: "Warme Moorpackungen entspannen die Muskulatur und fördern die Durchblutung. Eine bewährte Naturheilmethode mit tiefenwirksamer Wärme.",
      indikationen: ["Rheuma", "Arthrose", "Muskelverspannungen", "Gelenkschmerzen"]
    },
    {
      title: "Faszientechnik",
      icon: "🔄",
      description: "Behandlung des Bindegewebes",
      details: "Spezielle Techniken zur Lösung von Verklebungen im Bindegewebe (Faszien). Verbessert die Beweglichkeit und kann Schmerzen deutlich reduzieren.",
      indikationen: ["Bewegungseinschränkungen", "Chronische Schmerzen", "Nach Verletzungen", "Sportverletzungen"]
    },
    {
      title: "Triggerpunkt-Behandlung",
      icon: "🎯",
      description: "Gezielte Lösung von Muskelknoten",
      details: "Behandlung schmerzhafter Verhärtungen in der Muskulatur. Durch gezielten Druck werden diese 'Knoten' gelöst und die Schmerzen gelindert.",
      indikationen: ["Muskelknoten", "Ausstrahlende Schmerzen", "Kopfschmerzen", "Nackenverspannungen"]
    },
    {
      title: "Kiefergelenk-Behandlung (CMD)",
      icon: "😮",
      description: "Hilfe bei Kieferproblemen",
      details: "Spezielle Behandlung bei Kiefergelenksproblemen. Hilft bei Schmerzen beim Kauen, Knacken im Kiefer oder einseitigen Kopfschmerzen.",
      indikationen: ["Kieferschmerzen", "Zähneknirschen", "Kopfschmerzen", "Kieferknacken"]
    },
    {
      title: "Medizinisches Taping",
      icon: "🩹",
      description: "Unterstützung durch elastische Bänder",
      details: "Spezielle Klebebänder unterstützen Muskeln und Gelenke bei der Heilung. Ermöglicht Bewegung und fördert gleichzeitig den Heilungsprozess.",
      indikationen: ["Sportverletzungen", "Gelenkinstabilität", "Muskelverletzungen", "Unterstützung bei Heilung"]
    },
    {
      title: "Fußreflexzonen-Therapie",
      icon: "🦶",
      description: "Ganzheitliche Behandlung über die Füße",
      details: "Durch gezielte Massage bestimmter Punkte an den Füßen werden Heilungsprozesse im ganzen Körper angeregt. Eine entspannende, ganzheitliche Therapie.",
      indikationen: ["Stress", "Durchblutungsstörungen", "Verdauungsprobleme", "Zur Entspannung"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Unsere Behandlungen
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professionelle Physiotherapie in Berlin - verständlich erklärt
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mit über 25 Jahren Erfahrung bieten wir Ihnen ein breites Spektrum an 
            physiotherapeutischen Behandlungen. Alle Therapien werden von erfahrenen 
            Therapeuten durchgeführt und sind für alle Krankenkassen verfügbar.
          </p>
        </div>
      </section>

      {/* Behandlungen Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {behandlungen.map((behandlung, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{behandlung.icon}</div>
                <h3 className="text-xl font-bold text-red-900 mb-3 text-center">
                  {behandlung.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center font-medium">
                  {behandlung.description}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {behandlung.details}
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-red-900 mb-2">Hilft bei:</h4>
                  <ul className="space-y-1">
                    {behandlung.indikationen.map((indikation, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {indikation}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Haben Sie Fragen zu unseren Behandlungen?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Rufen Sie uns an - wir beraten Sie gerne und finden die richtige Therapie für Sie!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:030853587" 
              className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors"
            >
              📞 Jetzt anrufen: 030 853 58 71
            </a>
            <Link 
              href="/" 
              className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold text-center transition-colors"
            >
              Zur Startseite
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-red-900 mb-6">Wichtige Informationen</h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-red-900 mb-3">💳 Kostenübernahme</h4>
              <p className="text-gray-600">
                Alle Behandlungen werden von den gesetzlichen und privaten Krankenkassen übernommen. 
                Bringen Sie einfach Ihr Rezept mit.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-red-900 mb-3">⏰ Termine</h4>
              <p className="text-gray-600">
                Termine nach Vereinbarung. Rufen Sie uns an oder kommen Sie vorbei. 
                Auch kurzfristige Termine sind oft möglich.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-red-900 mb-3">📍 Standort</h4>
              <p className="text-gray-600">
                Zentral in Berlin gelegen mit guter Verkehrsanbindung. 
                Parkplätze in der Nähe verfügbar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
