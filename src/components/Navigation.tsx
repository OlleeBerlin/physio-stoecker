"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Startseite" },
    { href: "/behandlungen", label: "Behandlungen" },
    { href: "/praxis", label: "Praxis" },
    { href: "/about", label: "Über uns" },
  ];


  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 ease-in-out group ${
                  pathname === item.href
                    ? "text-red-900"
                    : "text-gray-700 hover:text-red-700"
                }`}
              >
                {item.label}
                {/* Hover underline animation */}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-300 ease-in-out group-hover:w-full ${
                  pathname === item.href ? "w-full" : ""
                }`} />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - Left */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 transition-all duration-300 ease-in-out hover:bg-gray-100 rounded-lg"
            aria-label="Menü öffnen"
          >
            <svg
              className="w-6 h-6 text-gray-700 transition-transform duration-300 ease-in-out"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Center Logo */}
          <Link href="/" className="flex items-center absolute left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out hover:scale-105">
            <Image 
              src="/logo_schriftzug_300.svg" 
              alt="Physiotherapie Stöcker Logo" 
              width={300}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Right CTA Button */}
          <div className="flex items-center">
            <a 
              href="tel:030853587" 
              className="inline-flex items-center px-6 py-2 bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium transition-all duration-300 ease-in-out rounded-full hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Termin vereinbaren
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden border-t border-gray-200 bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <nav className="px-6 py-6 space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg font-medium transition-all duration-300 ease-in-out transform ${
                  pathname === item.href
                    ? "text-red-900 bg-red-50 rounded px-2 py-1"
                    : "text-gray-700 hover:text-red-700 hover:translate-x-2"
                } ${isMenuOpen ? "translate-x-0" : "-translate-x-4"}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Contact in Mobile Menu */}
            <div className="pt-6 border-t border-gray-200">
              <a 
                href="tel:030853587" 
                className="inline-flex items-center px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium transition-all duration-300 ease-in-out rounded-full w-full justify-center hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Termin vereinbaren
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

// Footer Component
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Praxis Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Physiotherapie Stöcker</h3>
            <div className="space-y-3 text-gray-300">
              <p>Weimarische Str. 9</p>
              <p>10715 Berlin</p>
              <p className="mt-6">
                <a href="tel:030853587" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                  030 853 58 71
                </a>
              </p>
              <p>
                <a href="mailto:post@physio-stoecker.de" className="text-gray-300 hover:text-white transition-colors">
                  post@physio-stoecker.de
                </a>
              </p>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Öffnungszeiten</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium text-white">Montag - Donnerstag</p>
                <p>08:30 - 19:00 Uhr</p>
              </div>
              <div>
                <p className="font-medium text-white">Freitag</p>
                <p>08:30 - 16:00 Uhr</p>
              </div>
              <p className="text-sm text-gray-400 mt-4">Termine nach Vereinbarung</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Schnellzugriff</h3>
            <div className="space-y-3">
              <Link href="/behandlungen" className="block text-gray-300 hover:text-white transition-colors">
                Behandlungen
              </Link>
              <Link href="/praxis" className="block text-gray-300 hover:text-white transition-colors">
                Praxis
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                Über uns
              </Link>
              <a href="tel:030853587" className="block text-orange-400 hover:text-orange-300 transition-colors">
                Termin vereinbaren
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Physiotherapie Stöcker. Alle Rechte vorbehalten.
            </p>
            
            {/* Legal Links */}
            <div className="flex space-x-6">
              <Link href="/impressum" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
