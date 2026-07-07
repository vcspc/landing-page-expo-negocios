export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-gutter">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-manrope font-bold text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
            Expo Negócios
          </span>
          <p className="font-body-md text-on-surface-variant max-w-xs text-center md:text-left">
            &copy; 2024 Expo Negócios. Amazonian Business Excellence.
            <br />
            <a
              className="text-primary hover:underline"
              href="https://viranegocios.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              viranegocios.com
            </a>
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
            Privacidade
          </a>
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
            Termos
          </a>
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
            Suporte
          </a>
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
            Mapa
          </a>
        </nav>
        <div className="flex gap-6">
          <a className="text-primary hover:scale-110 transition-transform" href="#" aria-label="Compartilhar">
            <span className="material-symbols-outlined text-[24px]">share</span>
          </a>
          <a className="text-primary hover:scale-110 transition-transform" href="#" aria-label="Instagram/Camera">
            <span className="material-symbols-outlined text-[24px]">linked_camera</span>
          </a>
          <a className="text-primary hover:scale-110 transition-transform" href="#" aria-label="E-mail">
            <span className="material-symbols-outlined text-[24px]">alternate_email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
