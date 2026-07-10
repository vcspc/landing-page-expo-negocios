"use client";

import React from "react";

export default function LocationSection() {
  return (
    <section
      className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-background"
      id="location"
    >
      <div className="max-w-container-max mx-auto">
        {/* Map Card */}
        <div className="bg-surface-container rounded-3xl overflow-hidden relative min-h-[400px] md:min-h-[500px] group w-full">
          <a
            href="https://maps.app.goo.gl/1phQvwAefRtm96bx8"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-0 block cursor-pointer"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfNN9_Xc7JOUkYebYdXrLRs3QQg6n2PSFKdGEvOITYzB27phLUjmSPkuNf564mSdmoAYEdqIyuO-1LA8sEJKV4-MUL9bEFkQrZAjL1w1S5D2LjVwF-gwVbZbp15FiKjaZwQDno0NoyLFRhbuGWIxSZm7HGivW6ZpBmiMSwTQqNf-o-awG9TPGGftEhK_YjuZRDKWwBOpG2UA5tZTHBrKTWZrGQDYGTc2Q-SuYAUdRKlHYcP2g1ndcL"
              alt="Localização do Evento no Mapa"
            />
          </a>
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 z-10 bg-surface-container-lowest/95 backdrop-blur-md p-6 rounded-2xl border border-outline-variant/10 shadow-lg animate-fade-in pointer-events-auto">
            <h3 className="font-manrope font-bold text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
              Local do Evento
            </h3>
            <p className="font-body-md text-on-surface-variant mb-4">
              Complexo Turístico Lago do Onça - Concórdia do Pará, PA
            </p>
            <a
              className="text-primary font-manrope font-bold flex items-center gap-2 hover:gap-3 transition-all w-fit"
              href="https://maps.app.goo.gl/1phQvwAefRtm96bx8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Google Maps
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

