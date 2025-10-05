import Link from "next/link";
export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-red-900 mb-8">Impressum</h1>
          
          <div className="space-y-8">
            {/* Angaben gemäß § 5 TMG */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="text-gray-700 space-y-2">
                <p className="font-semibold">Physiotherapie Stöcker</p>
                <p>Annegret Stöcker</p>
                <p>Weimarische Str. 9</p>
                <p>10715 Berlin</p>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">Kontakt</h2>
              <div className="text-gray-700 space-y-2">
                <p><span className="font-medium">Telefon:</span> 030 853 58 71</p>
                <p><span className="font-medium">E-Mail:</span> post@physio-stoecker.de</p>
              </div>
            </section>

            {/* Berufsbezeichnung */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <div className="text-gray-700 space-y-2">
                <p><span className="font-medium">Berufsbezeichnung:</span> Physiotherapeutin</p>
                <p><span className="font-medium">Zuständige Kammer:</span> Gesundheitsamt Charlottenburg-Wilmersdorf</p>
                <p><span className="font-medium">Verliehen durch:</span> Bundesrepublik Deutschland</p>
                <p><span className="font-medium">Es gelten folgende berufsrechtliche Regelungen:</span></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Masseur- und Physiotherapeutengesetz (MPhG)</li>
                  <li>Ausbildungs- und Prüfungsverordnung für Physiotherapeuten (PhysTh-APrV)</li>
                </ul>
              </div>
            </section>

            {/* Umsatzsteuer */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">Umsatzsteuer-ID</h2>
              <div className="text-gray-700">
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p className="font-medium">DE [Nummer wird ergänzt]</p>
              </div>
            </section>

            {/* Aufsichtsbehörde */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">Aufsichtsbehörde</h2>
              <div className="text-gray-700 space-y-2">
                <p>Gesundheitsamt Charlottenburg-Wilmersdorf</p>
                <p>Hohenzollerndamm 174-177</p>
                <p>10713 Berlin</p>
              </div>
            </section>

            {/* Berufshaftpflichtversicherung */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">Berufshaftpflichtversicherung</h2>
              <div className="text-gray-700 space-y-2">
                <p><span className="font-medium">Name und Sitz des Versicherers:</span></p>
                <p>Debeka Allgemeine Versicherung AG</p>
                <p>Ferdinand-Sauerbruch-Straße 18</p>
                <p>56073 Koblenz</p>
                <p><span className="font-medium">Geltungsraum der Versicherung:</span> Deutschland</p>
              </div>
            </section>

            {/* Streitschlichtung */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">Streitschlichtung</h2>
              <div className="text-gray-700 space-y-2">
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                   <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline ml-1">
                     https://ec.europa.eu/consumers/odr/
                   </a>
                </p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                   Verbraucherschlichtungsstelle teilzunehmen.</p>
              </div>
            </section>

            {/* Haftung für Inhalte */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">Haftung für Inhalte</h2>
              <div className="text-gray-700 space-y-3">
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                   allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                   unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                   Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                   Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
                   Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen 
                   werden wir diese Inhalte umgehend entfernen.</p>
              </div>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">Haftung für Links</h2>
              <div className="text-gray-700 space-y-3">
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                   Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                   Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
                   wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren 
                   zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
                   Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links 
                   umgehend entfernen.</p>
              </div>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">Urheberrecht</h2>
              <div className="text-gray-700 space-y-3">
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                   Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                   Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                   Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
                   beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
                   Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden 
                   von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/" 
                className="bg-red-900 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Zur Startseite
              </Link>
              <Link 
                href="/datenschutz" 
                className="border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
