export default function CTA() {
  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-primary text-on-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-secondary rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-primary-fixed-dim rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10 animate-fade-in">
        <h2 className="font-display-lg text-[32px] md:text-display-lg mb-8 leading-tight">
          Pronto para expandir seus horizontes?
        </h2>
        <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-primary/80 mb-10 md:mb-12 leading-relaxed">
          Participe do evento de negócios mais aguardado do ano e conecte-se com grandes marcas e líderes da região.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <button className="bg-on-primary text-primary px-10 py-4 md:px-12 md:py-5 font-manrope font-extrabold text-title-md rounded-xl hover:bg-primary-fixed transition-all w-full sm:w-auto shadow-lg cursor-pointer">
            Quero ser Expositor
          </button>
        </div>
      </div>
    </section>
  );
}
