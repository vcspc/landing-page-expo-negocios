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
              <div className="grid grid-cols-2 gap-6 items-start justify-items-center">

                {/* Prefeitura */}
                <div className="flex flex-col items-center w-full">
                  <div className="h-24 w-full flex items-center justify-center p-3 bg-white rounded-2xl border border-outline-variant/5 hover:scale-[1.05] transition-transform duration-300 cursor-pointer">
                    <img
                      src="/prefeitura.png"
                      alt="Prefeitura de Concórdia do Pará Logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <a
                    href="https://www.instagram.com/prefeitura_de_concordia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-[10px] sm:text-[11px] font-manrope font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center justify-center flex-wrap gap-x-1 gap-y-0.5 hover:underline text-center"
                  >
                    <span className="inline-flex items-center gap-1 shrink-0">
                      <svg
                        className="w-3.5 h-3.5 fill-current shrink-0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      siga em
                    </span>
                    <span className="shrink-0">@prefeitura_de_concordia</span>
                  </a>
                </div>

                {/* Cidade Empreendedora */}
                <div className="flex flex-col items-center w-full">
                  <div className="h-24 w-full flex items-center justify-center p-3 bg-white rounded-2xl border border-outline-variant/5 hover:scale-[1.05] transition-transform duration-300">
                    <img
                      src="/cidade_empreendedora.png"
                      alt="Cidade Empreendedora Logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                {/* Sala do Empreendedor */}
                <div className="flex flex-col items-center w-full">
                  <div className="h-24 w-full flex items-center justify-center p-3 bg-white rounded-2xl border border-outline-variant/5 hover:scale-[1.05] transition-transform duration-300 cursor-pointer">
                    <img
                      src="/sala_do_empreendedor.png"
                      alt="Sala do Empreendedor Logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <a
                    href="https://www.instagram.com/sala.empreendedor.cdp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-[10px] sm:text-[11px] font-manrope font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center justify-center flex-wrap gap-x-1 gap-y-0.5 hover:underline text-center"
                  >
                    <span className="inline-flex items-center gap-1 shrink-0">
                      <svg
                        className="w-3.5 h-3.5 fill-current shrink-0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      siga em
                    </span>
                    <span className="shrink-0">@sala.empreendedor.cdp</span>
                  </a>
                </div>

                {/* Câmara Empreendedora */}
                <div className="flex flex-col items-center w-full">
                  <div className="h-24 w-full flex items-center justify-center p-3 bg-white rounded-2xl border border-outline-variant/5 hover:scale-[1.05] transition-transform duration-300 cursor-pointer">
                    <img
                      src="/camara_empreendedora.png"
                      alt="Câmara Empreendedora Logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <a
                    href="https://www.instagram.com/camaraempreendedoraconcordia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-[10px] sm:text-[11px] font-manrope font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center justify-center flex-wrap gap-x-1 gap-y-0.5 hover:underline text-center"
                  >
                    <span className="inline-flex items-center gap-1 shrink-0">
                      <svg
                        className="w-3.5 h-3.5 fill-current shrink-0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      siga em
                    </span>
                    <span className="shrink-0">@camaraempreendedoraconcordia</span>
                  </a>
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
