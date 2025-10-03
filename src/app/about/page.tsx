import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-dvh grid place-items-center p-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6">Über uns</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Willkommen auf unserer About-Seite! Hier erfahren Sie mehr über unser 
          Projekt und unsere Mission. Diese Seite wurde mit Next.js und Tailwind CSS 
          erstellt und zeigt die Grundlagen einer modernen Webanwendung.
        </p>
        <Link 
          href="/" 
          className="inline-block rounded-lg border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
