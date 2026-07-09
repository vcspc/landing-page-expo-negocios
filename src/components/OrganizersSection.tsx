"use client";

export default function OrganizersSection() {
  return (
    <section
      className="py-20 md:py-28 bg-background px-margin-mobile md:px-margin-desktop border-t border-outline-variant/15 scroll-mt-20"
      id="parceiros"
    >
      <div className="max-w-container-max mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          {/* <span className="text-label-sm font-manrope font-bold text-primary/80 uppercase tracking-widest bg-primary-fixed text-primary px-4 py-1.5 rounded-full inline-block mb-4">
            Parcerias Estratégicas
          </span> */}
          <h2 className="font-display-lg text-[32px] md:text-display-lg text-primary mb-4 leading-tight">
            Realização e Apoio
          </h2>
          <p className="font-body-md md:font-body-lg text-on-surface-variant leading-relaxed">
            As instituições e parceiros que unem esforços para viabilizar e apoiar a Expo Negócios de Concórdia do Pará, promovendo inovação e conexões comerciais.
          </p>
        </div>

        {/* 12-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Realização Card (Col Span 3) */}
          <div className="lg:col-span-3 bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:scale-[1.02] group">
            <div>
              <div className="text-label-sm font-manrope font-extrabold text-outline uppercase tracking-wider border-b border-outline-variant/10 pb-3 mb-8 text-center">
                Realização
              </div>
              <div className="h-32 w-full flex items-center justify-center mb-6 p-4 bg-white rounded-2xl border border-outline-variant/5">
                <img
                  src="/ascconpa.png"
                  alt="ASCCONPA Logo"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="font-manrope font-bold text-title-md text-primary mb-1">
                ASCCONPA
              </h3>
              <p className="font-body-md text-[13px] text-on-surface-variant leading-tight">
                Associação Comercial de Concórdia do Pará
              </p>
            </div>
          </div>

          {/* Co-realização Card (Col Span 6) */}
          <div className="lg:col-span-6 bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:scale-[1.02] group">
            <div>
              <div className="text-label-sm font-manrope font-extrabold text-outline uppercase tracking-wider border-b border-outline-variant/10 pb-3 mb-8 text-center">
                Co-realização
              </div>
              <div className="grid grid-cols-2 gap-6 items-center justify-items-center">

                {/* Prefeitura */}
                <div className="h-24 w-full flex flex-col items-center justify-center p-3 bg-white rounded-2xl border border-outline-variant/5 hover:scale-[1.05] transition-transform duration-300 group/item">
                  <img
                    src="/prefeitura.png"
                    alt="Prefeitura de Concórdia do Pará Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Cidade Empreendedora */}
                <div className="h-24 w-full flex flex-col items-center justify-center p-3 bg-white rounded-2xl border border-outline-variant/5 hover:scale-[1.05] transition-transform duration-300 group/item">
                  <img
                    src="/cidade_empreendedora.png"
                    alt="Cidade Empreendedora Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Sala do Empreendedor */}
                <div className="h-24 w-full flex flex-col items-center justify-center p-3 bg-white rounded-2xl border border-outline-variant/5 hover:scale-[1.05] transition-transform duration-300 group/item">
                  <img
                    src="/sala_do_empreendedor.png"
                    alt="Sala do Empreendedor Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Câmara Empreendedora */}
                <div className="h-24 w-full flex flex-col items-center justify-center p-3 bg-white rounded-2xl border border-outline-variant/5 hover:scale-[1.05] transition-transform duration-300 group/item">
                  <img
                    src="/camara_empreendedora.png"
                    alt="Câmara Empreendedora Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

              </div>
            </div>
            {/* <div className="text-center mt-8">
              <p className="font-body-md text-[13px] text-on-surface-variant max-w-md mx-auto">
                União do setor público e iniciativas estratégicas para fomento e desenvolvimento de micro e pequenas empresas locais.
              </p>
            </div> */}
          </div>

          {/* Apoio Card (Col Span 3) */}
          <div className="lg:col-span-3 bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:scale-[1.02] group">
            <div>
              <div className="text-label-sm font-manrope font-extrabold text-outline uppercase tracking-wider border-b border-outline-variant/10 pb-3 mb-8 text-center">
                Apoio
              </div>
              <div className="h-32 w-full flex items-center justify-center mb-6 p-4 bg-white rounded-2xl border border-outline-variant/5">
                <img
                  src="/sebrae.png"
                  alt="SEBRAE Logo"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="font-manrope font-bold text-title-md text-primary mb-1">
                SEBRAE
              </h3>
              <p className="font-body-md text-[13px] text-on-surface-variant leading-tight">
                Serviço de Apoio às Micro e Pequenas Empresas
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
