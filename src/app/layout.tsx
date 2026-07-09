import type { Metadata } from "next";
import { Manrope, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
  title: "Expo Negócios | Conectando Ideias e Oportunidades",
  description: "A Expo Negócios é uma vitrine pulsante de inovação e empreendedorismo local. Fortalecendo a economia regional, gerando networking e novas oportunidades.",
  keywords: ["Expo Negócios", "Empreendedorismo", "Inovação", "Networking", "Negócios Locais", "Pará"],
  authors: [{ name: "Expo Negócios" }],
  icons: {
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuArBRtvG9f7kJI4HJV3zPbh1ZsbfgihAKGqn0vhzcMMspxqTIQHjqPxGVdZdD1n-OKQYSl0GroH0T2xO7AWfLVgqsR2Fw8_-dzVaZ8ifgvFjuBxp2N2XQ7UVRazqcvz_GplherSaDZd1idtG-T7ZuOu4WyVT3tEU3RegfnilSJDOVVhWJX8fcPMP4k9_AUNZvwd9dJP6ttR0KgotCKz2eixKS9-9TduwRwHi13JrCi5WB97yvST8VZRiuoPGBGwlygMZw",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`scroll-smooth ${manrope.variable} ${hankenGrotesk.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="https://lh3.googleusercontent.com/aida-public/AB6AXuArBRtvG9f7kJI4HJV3zPbh1ZsbfgihAKGqn0vhzcMMspxqTIQHjqPxGVdZdD1n-OKQYSl0GroH0T2xO7AWfLVgqsR2Fw8_-dzVaZ8ifgvFjuBxp2N2XQ7UVRazqcvz_GplherSaDZd1idtG-T7ZuOu4WyVT3tEU3RegfnilSJDOVVhWJX8fcPMP4k9_AUNZvwd9dJP6ttR0KgotCKz2eixKS9-9TduwRwHi13JrCi5WB97yvST8VZRiuoPGBGwlygMZw"
        />
      </head>
      <body className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed antialiased">
        {children}
      </body>
    </html>
  );
}
