"use client";

import { useState } from "react";
import { EXHIBITORS, Exhibitor } from "../data/exhibitors";

type CategoryType =
  | "Todas"
  | "Alimentação"
  | "Moda e Confecção"
  | "Saúde e Bem-estar"
  | "Agricultura Familiar"
  | "Artesanato e Cultura"
  | "Serviços e Tecnologia"
  | "Recreação Infantil"
  | "Hotelaria e Turismo"
  | "Construção, Pneus e Motos";

const CATEGORIES: CategoryType[] = [
  "Todas",
  "Alimentação",
  "Moda e Confecção",
  "Saúde e Bem-estar",
  "Agricultura Familiar",
  "Artesanato e Cultura",
  "Serviços e Tecnologia",
  "Recreação Infantil",
  "Hotelaria e Turismo",
  "Construção, Pneus e Motos",
];

// Helper to get category colors for styling cards
const getCategoryStyle = (categoryKey: string) => {
  switch (categoryKey) {
    case "alimentacao":
      return { 
        border: "border-l-cat-alimentacao", 
        badge: "bg-cat-alimentacao text-white",
        logoRing: "ring-4 ring-cat-alimentacao/10 border-cat-alimentacao/30"
      };
    case "moda_confeccao":
      return { 
        border: "border-l-cat-moda-confeccao", 
        badge: "bg-cat-moda-confeccao text-white",
        logoRing: "ring-4 ring-cat-moda-confeccao/10 border-cat-moda-confeccao/30"
      };
    case "saude_bem_estar":
      return { 
        border: "border-l-cat-saude-bem-estar", 
        badge: "bg-cat-saude-bem-estar text-white",
        logoRing: "ring-4 ring-cat-saude-bem-estar/10 border-cat-saude-bem-estar/30"
      };
    case "agricultura":
      return {
        border: "border-l-cat-agricultura-mixed",
        badge: "bg-gradient-agri text-white",
        logoRing: "ring-4 ring-emerald-500/10 border-emerald-500/30"
      };
    case "artesanato_cultura":
      return { 
        border: "border-l-cat-artesanato-cultura", 
        badge: "bg-cat-artesanato-cultura text-white",
        logoRing: "ring-4 ring-cat-artesanato-cultura/10 border-cat-artesanato-cultura/30"
      };
    case "servicos_tecnologia":
      return { 
        border: "border-l-cat-servicos-tecnologia", 
        badge: "bg-cat-servicos-tecnologia text-white",
        logoRing: "ring-4 ring-cat-servicos-tecnologia/10 border-cat-servicos-tecnologia/30"
      };
    case "recreacao_infantil":
      return { 
        border: "border-l-cat-recreacao-infantil", 
        badge: "bg-cat-recreacao-infantil text-white",
        logoRing: "ring-4 ring-cat-recreacao-infantil/10 border-cat-recreacao-infantil/30"
      };
    case "hotelaria_turismo":
      return { 
        border: "border-l-cat-hotelaria-turismo", 
        badge: "bg-cat-hotelaria-turismo text-white",
        logoRing: "ring-4 ring-cat-hotelaria-turismo/10 border-cat-hotelaria-turismo/30"
      };
    case "construcao_pneus_motos":
      return { 
        border: "border-l-cat-construcao-pneus-motos", 
        badge: "bg-cat-construcao-pneus-motos text-white",
        logoRing: "ring-4 ring-cat-construcao-pneus-motos/10 border-cat-construcao-pneus-motos/30"
      };
    default:
      return { 
        border: "border-l-primary", 
        badge: "bg-primary text-white",
        logoRing: "ring-4 ring-primary/10 border-primary/30"
      };
  }
};

const getCategoryPillStyle = (category: CategoryType, isActive: boolean) => {
  if (!isActive) {
    return "bg-surface-container-lowest text-on-surface-variant border-outline-variant/15 hover:bg-surface-container-low hover:border-outline-variant/30 hover:scale-[1.03] active:scale-[0.97]";
  }

  switch (category) {
    case "Todas":
      return "bg-primary text-on-primary border-primary shadow-md shadow-primary/10 hover:scale-[1.03] active:scale-[0.97]";
    case "Alimentação":
      return "bg-cat-alimentacao text-white border-cat-alimentacao shadow-md shadow-red-500/20 hover:scale-[1.03] active:scale-[0.97]";
    case "Moda e Confecção":
      return "bg-cat-moda-confeccao text-white border-cat-moda-confeccao shadow-md shadow-pink-500/20 hover:scale-[1.03] active:scale-[0.97]";
    case "Saúde e Bem-estar":
      return "bg-cat-saude-bem-estar text-white border-cat-saude-bem-estar shadow-md shadow-green-500/20 hover:scale-[1.03] active:scale-[0.97]";
    case "Agricultura Familiar":
      return "bg-gradient-agri text-white border-cat-agricultura-mixed shadow-md shadow-emerald-500/20 hover:scale-[1.03] active:scale-[0.97]";
    case "Artesanato e Cultura":
      return "bg-cat-artesanato-cultura text-white border-cat-artesanato-cultura shadow-md shadow-yellow-500/20 hover:scale-[1.03] active:scale-[0.97]";
    case "Serviços e Tecnologia":
      return "bg-cat-servicos-tecnologia text-white border-cat-servicos-tecnologia shadow-md shadow-blue-500/20 hover:scale-[1.03] active:scale-[0.97]";
    case "Recreação Infantil":
      return "bg-cat-recreacao-infantil text-white border-cat-recreacao-infantil shadow-md shadow-orange-500/20 hover:scale-[1.03] active:scale-[0.97]";
    case "Hotelaria e Turismo":
      return "bg-cat-hotelaria-turismo text-white border-cat-hotelaria-turismo shadow-md shadow-purple-500/20 hover:scale-[1.03] active:scale-[0.97]";
    case "Construção, Pneus e Motos":
      return "bg-cat-construcao-pneus-motos text-white border-cat-construcao-pneus-motos shadow-md shadow-gray-500/20 hover:scale-[1.03] active:scale-[0.97]";
    default:
      return "bg-primary text-on-primary border-primary shadow-md hover:scale-[1.03] active:scale-[0.97]";
  }
};

const renderCategoryDot = (category: CategoryType, isActive: boolean) => {
  if (category === "Todas") return null;

  if (category === "Agricultura Familiar") {
    return (
      <div className="flex gap-0.5 items-center mr-1">
        <span className={`w-2.5 h-2.5 rounded-full border ${isActive ? "bg-white border-white/20" : "bg-cat-agricultura-brown border-black/10"}`}></span>
        <span className={`w-2.5 h-2.5 rounded-full border ${isActive ? "bg-white border-white/20" : "bg-cat-agricultura-green border-black/10"}`}></span>
      </div>
    );
  }

  const dotColorClass = (() => {
    switch (category) {
      case "Alimentação":
        return "bg-cat-alimentacao";
      case "Moda e Confecção":
        return "bg-cat-moda-confeccao";
      case "Saúde e Bem-estar":
        return "bg-cat-saude-bem-estar";
      case "Artesanato e Cultura":
        return "bg-cat-artesanato-cultura";
      case "Serviços e Tecnologia":
        return "bg-cat-servicos-tecnologia";
      case "Recreação Infantil":
        return "bg-cat-recreacao-infantil";
      case "Hotelaria e Turismo":
        return "bg-cat-hotelaria-turismo";
      case "Construção, Pneus e Motos":
        return "bg-cat-construcao-pneus-motos";
      default:
        return "";
    }
  })();

  return <span className={`w-2.5 h-2.5 rounded-full border ${isActive ? "bg-white border-white/20" : `${dotColorClass} border-black/10`} mr-1`}></span>;
};

export default function ExhibitorsSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("Todas");
  const [showAllExhibitors, setShowAllExhibitors] = useState(false);

  const filteredExhibitors = EXHIBITORS.filter((exhibitor) => {
    if (selectedCategory === "Todas") return true;
    return exhibitor.category === selectedCategory;
  });

  // Limit displayed exhibitors initially to make page readable, unless "Ver todos" is clicked
  const displayLimit = showAllExhibitors ? filteredExhibitors.length : 6;
  const visibleExhibitors = filteredExhibitors.slice(0, displayLimit);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  const handleCategoryClick = (category: CategoryType) => {
    setSelectedCategory(category);
    setShowAllExhibitors(false); // Reset display limit on filter change
  };

  return (
    <section
      className="py-16 md:py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop"
      id="exhibitors"
    >
      <div className="max-w-container-max mx-auto">
        {/* Header and Filter Select */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
              Tendas Temáticas e Expositores
            </h2>
            <p className="font-body-md md:font-body-lg text-on-surface-variant max-w-2xl">
              Conecte-se com líderes de diversos setores organizados por categorias estratégicas. Clique nas categorias abaixo ou use o seletor.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-lowest p-2 rounded-xl border border-outline-variant/10 shadow-sm min-w-[240px]">
            <span className="material-symbols-outlined text-outline ml-4">category</span>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryClick(e.target.value as CategoryType)}
              className="bg-transparent border-none focus:ring-0 font-manrope font-semibold text-primary py-2 pr-10 w-full focus:outline-none cursor-pointer"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "Todas" ? "Todas as Categorias" : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Legend & Pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const pillStyle = getCategoryPillStyle(cat, isActive);
            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-manrope font-bold text-label-sm border transition-all duration-300 cursor-pointer ${pillStyle}`}
              >
                {renderCategoryDot(cat, isActive)}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Card Grid */}
        {visibleExhibitors.length === 0 ? (
          <div className="text-center py-20 bg-surface-container-lowest rounded-2xl border border-outline-variant/10">
            <span className="material-symbols-outlined text-[64px] text-outline mb-4">
              search_off
            </span>
            <p className="font-headline-lg-mobile text-on-surface-variant">
              Nenhum expositor nesta categoria ainda.
            </p>
            <button
              onClick={() => handleCategoryClick("Todas")}
              className="mt-4 text-primary font-bold hover:underline"
            >
              Mostrar todas as categorias
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleExhibitors.map((exhibitor) => {
              const style = getCategoryStyle(exhibitor.categoryKey);
              const hasLinks = !!(
                exhibitor.links.website ||
                exhibitor.links.instagram ||
                exhibitor.links.facebook ||
                exhibitor.links.email ||
                (exhibitor.links.extraAction && exhibitor.links.extraAction !== "instagram")
              );

              return (
                <div
                  key={exhibitor.id}
                  className={`exhibitor-card group bg-surface-container-lowest rounded-xl border-l-4 ${style.border} border-y border-r border-outline-variant/10 p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] flex flex-col h-full`}
                >
                  {/* Logo Container */}
                  <div className="flex flex-col items-center mb-6">
                    <div className={`w-24 h-24 rounded-full border-2 ${style.logoRing} overflow-hidden bg-white flex items-center justify-center p-2 mb-4 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}>
                      {exhibitor.logoUrl ? (
                        <img
                          className="w-full h-full object-contain"
                          src={exhibitor.logoUrl}
                          alt={`${exhibitor.name} Logo`}
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-primary-fixed text-primary flex items-center justify-center font-manrope font-bold text-title-md group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                          {getInitials(exhibitor.name)}
                        </div>
                      )}
                    </div>
                    <span
                      className={`px-3 py-1 ${style.badge} font-manrope font-bold text-[10px] md:text-[12px] uppercase rounded-lg tracking-wider`}
                    >
                      {exhibitor.category}
                    </span>
                  </div>

                  {/* Name and Description */}
                  <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4 text-center">
                    {exhibitor.name}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow text-center leading-relaxed">
                    {exhibitor.description}
                  </p>

                  {/* Contact and Links */}
                  <div className="pt-6 border-t border-outline-variant/10 mt-auto">
                    {exhibitor.notes && (
                      <p className="text-[12px] text-outline text-center mb-4 font-semibold italic">
                        * {exhibitor.notes}
                      </p>
                    )}
                    {hasLinks ? (
                      <div className="grid grid-cols-2 gap-4">
                        {/* Left actions: Dynamic depending on exhibitor properties */}
                        <div className="flex gap-2 justify-start">
                          {exhibitor.links.website && (
                            <a
                              className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-primary border border-outline-variant/10 hover:bg-primary hover:text-on-primary transition-all"
                              href={exhibitor.links.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Website"
                            >
                              <span className="material-symbols-outlined">language</span>
                            </a>
                          )}
                          {exhibitor.links.instagram && (
                            <a
                              className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-primary border border-outline-variant/10 hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
                              href={
                                exhibitor.links.instagram.startsWith("http")
                                  ? exhibitor.links.instagram
                                  : `https://instagram.com/${exhibitor.links.instagram.replace("@", "")}`
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Instagram"
                            >
                              <svg
                                className="w-5 h-5 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                              </svg>
                            </a>
                          )}
                          {exhibitor.links.facebook && (
                            <a
                              className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-primary border border-outline-variant/10 hover:bg-primary hover:text-on-primary transition-all"
                              href={exhibitor.links.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Facebook"
                            >
                              <span className="material-symbols-outlined">facebook</span>
                            </a>
                          )}
                          {exhibitor.links.email && (
                            <a
                              className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-primary border border-outline-variant/10 hover:bg-primary hover:text-on-primary transition-all"
                              href={`mailto:${exhibitor.links.email}`}
                              aria-label="Email"
                            >
                              <span className="material-symbols-outlined">mail</span>
                            </a>
                          )}
                          {exhibitor.links.extraAction &&
                            exhibitor.links.extraAction !== "instagram" && (
                              <button
                                className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-primary border border-outline-variant/10 hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
                                aria-label="Action"
                              >
                                <span className="material-symbols-outlined">
                                  {exhibitor.links.extraAction === "shopping_bag"
                                    ? "shopping_bag"
                                    : exhibitor.links.extraAction === "rocket_launch"
                                    ? "rocket_launch"
                                    : exhibitor.links.extraAction === "share"
                                    ? "share"
                                    : "share"}
                                </span>
                              </button>
                            )}
                        </div>

                        {/* Right action: Phone call */}
                        <a
                          className="h-12 flex items-center justify-center gap-2 rounded-xl bg-primary text-on-primary font-manrope font-bold text-label-sm shadow-sm hover:bg-primary-container transition-all"
                          href={`tel:${exhibitor.phone}`}
                        >
                          <span className="material-symbols-outlined text-[18px]">call</span>
                          CONTATO
                        </a>
                      </div>
                    ) : (
                      <a
                        className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-primary text-on-primary font-manrope font-bold text-label-sm shadow-sm hover:bg-primary-container transition-all"
                        href={`tel:${exhibitor.phone}`}
                      >
                        <span className="material-symbols-outlined text-[18px]">call</span>
                        CONTATO
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {filteredExhibitors.length > 6 && (
          <div className="mt-12 md:mt-20 text-center animate-fade-in">
            <button
              onClick={() => setShowAllExhibitors(!showAllExhibitors)}
              className="w-full md:w-auto btn-primary border border-primary text-primary px-12 py-4 font-manrope font-bold text-title-md rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer"
            >
              {showAllExhibitors ? "Ver Menos Expositores" : "Ver todos os Expositores"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
