export default function LocationSection() {
  return (
    <section
      className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-background"
      id="details"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-12 gap-6 md:gap-gutter">
        {/* Map Card */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container rounded-3xl overflow-hidden relative min-h-[300px] md:min-h-[400px]">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfNN9_Xc7JOUkYebYdXrLRs3QQg6n2PSFKdGEvOITYzB27phLUjmSPkuNf564mSdmoAYEdqIyuO-1LA8sEJKV4-MUL9bEFkQrZAjL1w1S5D2LjVwF-gwVbZbp15FiKjaZwQDno0NoyLFRhbuGWIxSZm7HGivW6ZpBmiMSwTQqNf-o-awG9TPGGftEhK_YjuZRDKWwBOpG2UA5tZTHBrKTWZrGQDYGTc2Q-SuYAUdRKlHYcP2g1ndcL"
              alt="Localização do Evento no Mapa"
            />
          </div>
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 z-10 bg-surface-container-lowest/95 backdrop-blur-md p-6 rounded-2xl border border-outline-variant/10 shadow-lg animate-fade-in">
            <h3 className="font-manrope font-bold text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
              Local do Evento
            </h3>
            <p className="font-body-md text-on-surface-variant mb-4">
              Centro de Convenções - Concórdia do Pará, PA
            </p>
            <a
              className="text-primary font-manrope font-bold flex items-center gap-2 hover:gap-3 transition-all"
              href="https://maps.google.com"
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
            <a
              className="mt-8 font-manrope font-extrabold text-title-md flex items-center gap-2 text-on-primary hover:translate-x-1 transition-transform"
              href="#"
            >
              Adicionar ao Calendário
              <span className="material-symbols-outlined">calendar_today</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
