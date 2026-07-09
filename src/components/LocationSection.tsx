"use client";

import React, { useState } from "react";

export default function LocationSection() {
  const [showOptions, setShowOptions] = useState(false);

  const title = "Expo Negócios 2024";
  const description = "Expo Negócios - Conectando Ideias e Oportunidades. Dois dias de networking intenso e grandes oportunidades comerciais.";
  const location = "Complexo Turístico Lago do Onça - Concórdia do Pará, PA";
  
  // Dates: 11 and 12 July 2024. Hours: 09h to 22h.
  // Timezone: America/Belem (UTC-3).
  // July 11, 2024 09:00 BRT = 12:00 UTC
  // July 12, 2024 22:00 BRT = July 13, 2024 01:00 UTC
  const startDate = "20240711T120000Z";
  const endDate = "20240713T010000Z";

  // Google Calendar URL
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

  // Apple Calendar Data URI (Triggers native iOS calendar integration directly on Safari)
  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Expo Negocios//Landing Page//PT",
    "BEGIN:VEVENT",
    `UID:expo-negocios-2024-${Date.now()}@exponegocios.com.br`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const appleUrl = `data:text/calendar;charset=utf-8,${encodeURIComponent(icsData)}`;

  const handleIcsDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "expo-negocios.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-background"
      id="details"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-12 gap-6 md:gap-gutter">
        {/* Map Card */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container rounded-3xl overflow-hidden relative min-h-[300px] md:min-h-[400px] group">
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

        {/* Date Details */}
        <div className="col-span-12 lg:col-span-4 flex flex-col">
          {/* Calendar Card */}
          <div className="bg-primary-container text-on-primary-container p-8 md:p-10 rounded-3xl flex-grow flex flex-col justify-between shadow-sm">
            <div>
              <span className="material-symbols-outlined text-[40px] md:text-[48px] mb-6 text-on-primary-container">
                event_available
              </span>
              <h3 className="font-display-lg text-[24px] md:text-headline-lg mb-4 text-on-primary leading-tight">
                11 e 12 de Julho, 2024
              </h3>
              <p className="font-body-md md:font-body-lg text-on-primary-container/90 leading-relaxed">
                Portões abertos das 09h às 22h. Dois dias de networking intenso e grandes
                oportunidades comerciais.
              </p>
            </div>
            <div className="relative mt-8">
              <button
                className="font-manrope font-extrabold text-title-md flex items-center gap-2 text-on-primary hover:translate-x-1 transition-transform cursor-pointer w-fit"
                onClick={() => setShowOptions(!showOptions)}
              >
                Adicionar ao Calendário
                <span className="material-symbols-outlined">calendar_today</span>
              </button>

              {showOptions && (
                <>
                  {/* Backdrop Click Handler */}
                  <div
                    className="fixed inset-0 z-10 cursor-default"
                    onClick={() => setShowOptions(false)}
                  />
                  {/* Dropdown Options */}
                  <div className="absolute left-0 bottom-full mb-3 bg-surface-container-highest/95 backdrop-blur-md border border-outline-variant/20 rounded-2xl shadow-xl p-2 min-w-[245px] flex flex-col gap-1 z-20 animate-fade-in text-on-surface">
                    <a
                      href={googleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 rounded-xl transition-colors text-body-md font-semibold text-on-surface hover:text-primary"
                      onClick={() => setShowOptions(false)}
                    >
                      <span className="material-symbols-outlined text-primary text-xl font-icon">google</span>
                      Google Agenda (Android/PC)
                    </a>
                    <a
                      href={appleUrl}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 rounded-xl transition-colors text-body-md font-semibold text-on-surface hover:text-primary"
                      onClick={() => setShowOptions(false)}
                    >
                      <span className="material-symbols-outlined text-primary text-xl font-icon">phone_iphone</span>
                      Apple Calendar (iPhone)
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 rounded-xl transition-colors text-body-md font-semibold text-on-surface hover:text-primary"
                      onClick={(e) => {
                        handleIcsDownload(e);
                        setShowOptions(false);
                      }}
                    >
                      <span className="material-symbols-outlined text-primary text-xl font-icon">download</span>
                      Outlook / Outros (.ics)
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
