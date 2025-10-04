import Link from "next/link";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/logo.svg" 
              alt="Physiotherapie Stöcker Logo" 
              className="h-16 w-auto"
            />
          </Link>
          <a 
            href="tel:030853587" 
            className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            030 853 58 71
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-red-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="space-y-8">
            {/* Einleitung */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">1. Datenschutz auf einen Blick</h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold">Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                   passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                   persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
                   Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
              </div>
            </section>

            {/* Datenerfassung */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">2. Datenerfassung auf dieser Website</h2>
              <div className="text-gray-700 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                  <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                     können Sie dem Impressum dieser Website entnehmen.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Wie erfassen wir Ihre Daten?</h3>
                  <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                     z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder bei der Terminvereinbarung 
                     per Telefon übermitteln.</p>
                  <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                     IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem 
                     oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese 
                     Website betreten.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Wofür nutzen wir Ihre Daten?</h3>
                  <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                     Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Patientendaten werden 
                     ausschließlich zur Behandlung und Abrechnung verwendet.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
                  <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                     gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                     oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
                     haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das 
                     Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
                     zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                </div>
              </div>
            </section>

            {/* Hosting */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">3. Hosting</h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold">Externes Hosting</h3>
                <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, 
                   die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann 
                   es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
                   Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
                <p>Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und 
                   bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und 
                   effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</p>
              </div>
            </section>

            {/* Allgemeine Hinweise */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">4. Allgemeine Hinweise und Pflichtinformationen</h2>
              <div className="text-gray-700 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Datenschutz</h3>
                  <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                     Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen 
                     sowie dieser Datenschutzerklärung.</p>
                  <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene 
                     Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende 
                     Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert 
                     auch, wie und zu welchem Zweck das geschieht.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Hinweis zur verantwortlichen Stelle</h3>
                  <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <div className="bg-gray-100 p-4 rounded mt-2">
                    <p className="font-medium">Physiotherapie Stöcker</p>
                    <p>Annegret Stöcker</p>
                    <p>Weimarische Str. 9</p>
                    <p>10715 Berlin</p>
                    <p>Telefon: 030 853 58 71</p>
                    <p>E-Mail: post@physio-stoecker.de</p>
                  </div>
                  <p className="mt-2">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder 
                     gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten 
                     (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Speicherdauer</h3>
                  <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                     verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. 
                     Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung 
                     widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für 
                     die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche 
                     Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
                </div>
              </div>
            </section>

            {/* Patientendaten */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">5. Patientendaten und Behandlungsdokumentation</h2>
              <div className="text-gray-700 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Erhebung und Verarbeitung von Patientendaten</h3>
                  <p>Zur ordnungsgemäßen Durchführung der physiotherapeutischen Behandlung erheben und verarbeiten wir 
                     folgende Patientendaten:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Persönliche Daten (Name, Adresse, Geburtsdatum, Kontaktdaten)</li>
                    <li>Versicherungsdaten (Krankenkasse, Versichertennummer)</li>
                    <li>Medizinische Daten (Diagnose, Behandlungsverlauf, Therapieziele)</li>
                    <li>Abrechnungsdaten</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Rechtsgrundlage</h3>
                  <p>Die Verarbeitung erfolgt auf Grundlage von Art. 9 Abs. 2 lit. h DSGVO (Gesundheitsvorsorge) 
                     in Verbindung mit § 630f BGB (Dokumentationspflicht) und den berufsrechtlichen Bestimmungen.</p>
                </div>

                <div>
                  <h3 className="font-semibel mb-2">Aufbewahrungsfristen</h3>
                  <p>Patientendaten werden entsprechend den gesetzlichen Bestimmungen 10 Jahre nach Abschluss der 
                     Behandlung aufbewahrt und anschließend sicher vernichtet.</p>
                </div>
              </div>
            </section>

            {/* Ihre Rechte */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">6. Ihre Rechte</h2>
              <div className="text-gray-700 space-y-4">
                <p>Sie haben folgende Rechte:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)</li>
                  <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
                  <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
                  <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                  <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                  <li><strong>Recht auf Widerspruch</strong> (Art. 21 DSGVO)</li>
                  <li><strong>Recht auf Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO)</li>
                </ul>
                <p className="mt-4">Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die im Impressum genannten Kontaktdaten.</p>
              </div>
            </section>

            {/* Beschwerderecht */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">7. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <div className="text-gray-700 space-y-3">
                <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                   Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres 
                   Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht 
                   unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
                <div className="bg-gray-100 p-4 rounded">
                  <p className="font-medium">Zuständige Aufsichtsbehörde für Berlin:</p>
                  <p>Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
                  <p>Friedrichstr. 219</p>
                  <p>10969 Berlin</p>
                  <p>Telefon: 030 13889-0</p>
                  <p>E-Mail: mailbox@datenschutz-berlin.de</p>
                </div>
              </div>
            </section>

            {/* SSL-Verschlüsselung */}
            <section>
              <h2 className="text-xl font-semibold text-red-900 mb-4">8. SSL- bzw. TLS-Verschlüsselung</h2>
              <div className="text-gray-700 space-y-3">
                <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
                   wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine 
                   SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die 
                   Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in 
                   Ihrer Browserzeile.</p>
                <p>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns 
                   übermitteln, nicht von Dritten mitgelesen werden.</p>
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
                href="/impressum" 
                className="border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
