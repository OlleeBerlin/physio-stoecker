import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh grid place-items-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Hallo 👋</h1>
        <p className="mt-2 text-gray-500">Next.js + Tailwind läuft.</p>
        <Link href="/about" className="mt-6 inline-block rounded-lg border px-4 py-2">
          Zur „About“-Seite
        </Link>
      </div>
    </main>
  );
}