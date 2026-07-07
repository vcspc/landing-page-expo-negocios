"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full top-0 sticky z-50 bg-background/90 backdrop-blur-md border-b border-outline-variant/15 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            alt="Expo Negócios Logo"
            className="h-10 md:h-12 w-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArBRtvG9f7kJI4HJV3zPbh1ZsbfgihAKGqn0vhzcMMspxqTIQHjqPxGVdZdD1n-OKQYSl0GroH0T2xO7AWfLVgqsR2Fw8_-dzVaZ8ifgvFjuBxp2N2XQ7UVRazqcvz_GplherSaDZd1idtG-T7ZuOu4WyVT3tEU3RegfnilSJDOVVhWJX8fcPMP4k9_AUNZvwd9dJP6ttR0KgotCKz2eixKS9-9TduwRwHi13JrCi5WB97yvST8VZRiuoPGBGwlygMZw"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="font-title-md text-title-md text-primary border-b-2 border-primary pb-1 transition-colors duration-200"
            href="#exhibitors"
          >
            Expositores
          </a>
          <a
            className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#details"
          >
            Programação
          </a>
          <a
            className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#bingo"
          >
            Prêmios
          </a>
          <a
            className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#location"
          >
            Localização
          </a>
        </nav>

        {/* Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="#details"
            className="hidden md:block btn-primary bg-primary text-on-primary px-8 py-3 font-manrope font-bold text-body-md rounded-lg hover:bg-primary-container transition-all"
          >
            Participar
          </a>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[32px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-outline-variant/15 py-4 px-margin-mobile flex flex-col gap-4 animate-fade-in">
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-title-md text-title-md text-primary font-bold py-2 border-b border-outline-variant/10"
            href="#exhibitors"
          >
            Expositores
          </a>
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-title-md text-title-md text-on-surface-variant py-2 border-b border-outline-variant/10"
            href="#details"
          >
            Programação
          </a>
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-title-md text-title-md text-on-surface-variant py-2 border-b border-outline-variant/10"
            href="#bingo"
          >
            Prêmios
          </a>
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-title-md text-title-md text-on-surface-variant py-2 border-b border-outline-variant/10"
            href="#location"
          >
            Localização
          </a>
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            href="#details"
            className="btn-primary bg-primary text-on-primary text-center py-4 font-manrope font-bold text-body-md rounded-lg hover:bg-primary-container transition-all mt-2"
          >
            Participar
          </a>
        </div>
      )}
    </header>
  );
}
