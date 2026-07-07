export default function EventDetails() {
  return (
    <section
      className="py-16 bg-surface-container-low px-margin-mobile md:px-margin-desktop border-y border-outline-variant/10"
      id="details"
    >
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-headline-lg text-primary mb-6">Horários de Funcionamento</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary p-3 bg-primary-fixed rounded-xl">
                  calendar_today
                </span>
                <div>
                  <h4 className="font-title-md text-on-surface font-bold">Datas</h4>
                  <p className="text-on-surface-variant">11 e 12 de julho de 2024</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary p-3 bg-primary-fixed rounded-xl">
                  schedule
                </span>
                <div>
                  <h4 className="font-title-md text-on-surface font-bold">Horário</h4>
                  <p className="text-on-surface-variant">Das 09h às 22h</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary p-8 rounded-3xl text-on-primary shadow-xl">
            <h3 className="font-manrope font-bold text-headline-lg-mobile mb-4">
              Ingresso Gratuito
            </h3>
            <p className="mb-6 opacity-90">
              Participe do maior encontro de negócios da região sem custos de entrada. Aproveite o
              networking e as oportunidades!
            </p>
            <button className="w-full py-4 bg-secondary-container text-on-secondary-container font-manrope font-bold rounded-xl hover:scale-[1.02] transition-transform cursor-pointer">
              Garantir minha vaga
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
