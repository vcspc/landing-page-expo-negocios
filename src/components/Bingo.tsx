export default function Bingo() {
  return (
    <section
      className="py-20 px-margin-mobile md:px-margin-desktop relative overflow-hidden"
      id="bingo"
    >
      <div className="bingo-gradient absolute inset-0 -z-10"></div>
      <div className="max-w-container-max mx-auto text-center">
        <span className="inline-block mb-4 px-4 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-manrope font-bold text-label-sm uppercase rounded-full">
          Destaque do Evento
        </span>
        <h2 className="font-display-lg text-on-primary mb-8">Bingo Expo Negócios</h2>
        <p className="text-on-primary/85 max-w-2xl mx-auto mb-12 font-body-lg">
          Não perca a chance de levar prêmios incríveis para casa! O bingo acontecerá no encerramento do evento. Cada compra nas tendas parceiras gera uma cartela!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group">
            <div>
              <div className="h-44 w-full flex items-center justify-center mb-6 p-4 rounded-xl overflow-hidden">
                <img
                  src="/tv.png"
                  alt="4x Televisores 65 polegadas"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <h4 className="text-on-primary font-bold text-title-md text-center mt-2">4x Televisores 65&quot;</h4>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group">
            <div>
              <div className="h-44 w-full flex items-center justify-center mb-6 p-4 rounded-xl overflow-hidden">
                <img
                  src="/moto.png"
                  alt="1x Moto Shineray 125"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <h4 className="text-on-primary font-bold text-title-md text-center mt-2">1x Moto Shineray 125</h4>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group">
            <div>
              <div className="h-44 w-full flex items-center justify-center mb-6 p-4 rounded-xl overflow-hidden">
                <img
                  src="/phone.png"
                  alt="1x Smartphone"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <h4 className="text-on-primary font-bold text-title-md text-center mt-2">1x Smartphone</h4>
          </div>
        </div>
        <div className="inline-flex items-center gap-4 bg-tertiary-container/50 px-8 py-4 rounded-full border border-tertiary-fixed/30">
          <span className="material-symbols-outlined text-tertiary-fixed">timer</span>
          <span className="text-on-primary font-manrope font-bold text-headline-lg-mobile">
            Domingo, 20:30h
          </span>
        </div>
      </div>
    </section>
  );
}
