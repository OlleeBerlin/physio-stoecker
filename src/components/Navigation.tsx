"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Startseite" },
    { href: "/behandlungen", label: "Behandlungen" },
    { href: "/praxis", label: "Praxis" },
  ];

  const footerItems = [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/logo_schriftzug_300.svg" 
              alt="Physiotherapie Stöcker Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-red-700 ${
                  pathname === item.href
                    ? "text-red-900 border-b-2 border-red-900 pb-1"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Phone Button */}
            <a 
              href="tel:030853587" 
              className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-colors text-sm md:text-base"
            >
              <span className="hidden sm:inline">030 853 58 71</span>
              <span className="sm:hidden">📞</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menü öffnen"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors hover:text-red-700 px-2 py-1 ${
                    pathname === item.href
                      ? "text-red-900 bg-red-50 rounded"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Footer Links in Mobile Menu */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="text-sm text-gray-500 mb-2">Rechtliches:</div>
                {footerItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm text-gray-600 hover:text-red-700 transition-colors px-2 py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Footer Component
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Praxis Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Physiotherapie Stöcker</h3>
            <div className="space-y-2 text-gray-300">
              <p>Weimarische Str. 9</p>
              <p>10715 Berlin</p>
              <p className="mt-4">
                <a href="tel:030853587" className="text-orange-400 hover:text-orange-300 font-semibold">
                  030 853 58 71
                </a>
              </p>
              <p>
                <a href="mailto:post@physio-stoecker.de" className="text-gray-300 hover:text-white">
                  post@physio-stoecker.de
                </a>
              </p>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 text-gray-300">
              <p>Montag - Donnerstag</p>
              <p className="font-medium">08:30 - 19:00 Uhr</p>
              <p className="mt-3">Freitag</p>
              <p className="font-medium">08:30 - 16:00 Uhr</p>
              <p className="mt-3 text-sm">Termine nach Vereinbarung</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <div className="space-y-2">
              <Link href="/behandlungen" className="block text-gray-300 hover:text-white transition-colors">
                Unsere Behandlungen
              </Link>
              <a href="tel:030853587" className="block text-orange-400 hover:text-orange-300 transition-colors">
                Termin vereinbaren
              </a>
              <div className="pt-4 space-y-2">
                <Link href="/impressum" className="block text-sm text-gray-400 hover:text-gray-300 transition-colors">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="block text-sm text-gray-400 hover:text-gray-300 transition-colors">
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Physiotherapie Stöcker. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
