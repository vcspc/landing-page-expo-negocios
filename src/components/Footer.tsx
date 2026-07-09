export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-gutter">
        <div className="flex flex-col items-center md:items-start">
          <img
            alt="Expo Negócios Logo"
            className="h-10 md:h-12 w-auto mb-4"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArBRtvG9f7kJI4HJV3zPbh1ZsbfgihAKGqn0vhzcMMspxqTIQHjqPxGVdZdD1n-OKQYSl0GroH0T2xO7AWfLVgqsR2Fw8_-dzVaZ8ifgvFjuBxp2N2XQ7UVRazqcvz_GplherSaDZd1idtG-T7ZuOu4WyVT3tEU3RegfnilSJDOVVhWJX8fcPMP4k9_AUNZvwd9dJP6ttR0KgotCKz2eixKS9-9TduwRwHi13JrCi5WB97yvST8VZRiuoPGBGwlygMZw"
          />
          <span className="font-manrope font-bold text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
            Expo Negócios
          </span>
          <p className="font-body-md text-on-surface-variant max-w-xs text-center md:text-left">
            &copy; 2026 Expo Negócios. Amazonian Business Excellence.
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
        {/* <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
            Privacidade
          </a>
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
            Termos
          </a>
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
            Mapa
          </a>
        </nav> */}
        <div className="flex gap-6">
          {/* <a className="text-primary hover:scale-110 transition-transform" href="#" aria-label="Compartilhar">
            <span className="material-symbols-outlined text-[24px]">share</span>
          </a> */}
          <a className="text-primary hover:scale-110 transition-transform" href="https://www.instagram.com/exponegociosconcordia/" aria-label="Instagram">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          {/* <a className="text-primary hover:scale-110 transition-transform" href="#" aria-label="E-mail">
            <span className="material-symbols-outlined text-[24px]">alternate_email</span>
          </a> */}
        </div>
      </div>
    </footer>
  );
}
