export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-32 md:pb-48 px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block mb-6 px-4 py-1.5 bg-secondary-container text-on-secondary-container font-manrope font-bold text-label-sm uppercase tracking-widest rounded-full">
            Eco-Corporate Modernism 2024
          </span>
          <h1 className="font-display-lg text-[40px] md:text-display-lg lg:text-[64px] text-primary mb-6 leading-tight">
            Expo Negócios
          </h1>
          <p className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface-variant mb-8 md:mb-10 leading-relaxed">
            A Expo Negócios é uma vitrine pulsante de inovação e empreendedorismo local.
          </p>
          <div className="space-y-6 mb-10 md:mb-12 max-w-2xl">
            <p className="font-body-md md:font-body-lg text-outline">
              Nosso Propósito: Fomentar o crescimento das empresas locais, promovendo um ambiente de networking, troca de conhecimentos e geração de novos negócios.
            </p>
            <p className="font-body-md md:font-body-lg text-outline">
              É um evento que reúne diversos setores da economia, proporcionando visibilidade e oportunidades estratégicas para empreendedores e investidores.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              className="btn-primary bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 font-manrope font-bold text-title-md rounded-xl inline-flex items-center justify-center gap-2 hover:bg-primary-container transition-all"
              href="#exhibitors"
            >
              Ver Expositores
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a
              className="border border-primary text-primary px-8 md:px-10 py-4 md:py-5 font-manrope font-bold text-title-md rounded-xl inline-flex items-center justify-center hover:bg-primary/5 transition-all"
              href="#details"
            >
              Horários e Local
            </a>
          </div>
        </div>
      </div>

      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block -z-0">
        <div
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 30%, #56642b 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9eU93REJUHuGuJW5mca54sOZGWHM2cGXtd6XL3M1XJvt-DhM1NBUf1geBxD403i7W14lf-72_OFoUoC--i1w8Xd7-94X7vdmTg69VR5bRX6M7pJv5iJb1yqbX0hLaR2IQbCZ2TubKGASYpGAeDAP6TJgw8hAfBjMYf6cWaofJoY4LObAnjxESUH6MgHA63xs149nRISUTIz6-zKeaRIG62jKEpv3n0ydQ93Npo-yR8wBpMQJE4VKh')",
          }}
        ></div>
      </div>
    </section>
  );
}
