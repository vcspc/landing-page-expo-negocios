export default function EventDetails() {
  return (
    <section
      className="py-16 bg-surface-container-low px-margin-mobile md:px-margin-desktop border-y border-outline-variant/10"
      id="details"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-headline-lg text-primary mb-10">Horários de Funcionamento</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          <div className="flex flex-col items-center text-center gap-4 p-6 bg-surface-container rounded-2xl w-full max-w-sm">
            <span className="material-symbols-outlined text-primary p-4 bg-primary-fixed rounded-full text-2xl">
              calendar_today
            </span>
            <div>
              <h4 className="font-title-md text-on-surface font-bold mb-1">Datas</h4>
              <p className="text-on-surface-variant">11 e 12 de julho de 2024</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 p-6 bg-surface-container rounded-2xl w-full max-w-sm">
            <span className="material-symbols-outlined text-primary p-4 bg-primary-fixed rounded-full text-2xl">
              schedule
            </span>
            <div>
              <h4 className="font-title-md text-on-surface font-bold mb-1">Horário</h4>
              <p className="text-on-surface-variant">Das 09h às 22h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
