"use client";

import { useState } from "react";
import { EXHIBITORS, Exhibitor } from "../data/exhibitors";

type CategoryType =
  | "Todas"
  | "Alimentação"
  | "Modas e Acessórios"
  | "Móveis e Eletro"
  | "Tecnologia e Serviços"
  | "Automóveis"
  | "Artesanato e Cultura"
  | "Beleza e Bem-estar"
  | "Agricultura Familiar";

const CATEGORIES: CategoryType[] = [
  "Todas",
  "Alimentação",
  "Modas e Acessórios",
  "Móveis e Eletro",
  "Tecnologia e Serviços",
  "Automóveis",
  "Artesanato e Cultura",
  "Beleza e Bem-estar",
  "Agricultura Familiar",
];

// Helper to get category colors for styling cards
const getCategoryStyle = (categoryKey: string) => {
  switch (categoryKey) {
    case "alimentacao":
      return { border: "border-l-cat-food", badge: "bg-cat-food text-white" };
    case "modas":
      return { border: "border-l-cat-modas", badge: "bg-cat-modas text-white" };
    case "moveis":
      return { border: "border-l-cat-moveis", badge: "bg-cat-moveis text-white" };
    case "tecnologia":
      return { border: "border-l-cat-tech", badge: "bg-cat-tech text-white" };
    case "automoveis":
      return { border: "border-l-cat-auto", badge: "bg-cat-auto text-white" };
    case "artesanato":
      return { border: "border-l-amber-600", badge: "bg-amber-600 text-white" };
    case "beleza":
      return { border: "border-l-rose-500", badge: "bg-rose-500 text-white" };
    case "agricultura":
      return { border: "border-l-emerald-700", badge: "bg-emerald-700 text-white" };
    default:
      return { border: "border-l-primary", badge: "bg-primary text-white" };
  }
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
          <button
            onClick={() => handleCategoryClick("Todas")}
            className={`px-4 py-2 rounded-full font-manrope font-bold text-label-sm border transition-all cursor-pointer ${
              selectedCategory === "Todas"
                ? "bg-primary text-on-primary border-primary"
                : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/15 hover:bg-surface-container-low"
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => handleCategoryClick("Alimentação")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-manrope font-bold text-label-sm border transition-all cursor-pointer ${
              selectedCategory === "Alimentação"
                ? "bg-cat-food text-white border-cat-food"
                : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/15 hover:bg-surface-container-low"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cat-food"></span> Alimentação
          </button>
          <button
            onClick={() => handleCategoryClick("Modas e Acessórios")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-manrope font-bold text-label-sm border transition-all cursor-pointer ${
              selectedCategory === "Modas e Acessórios"
                ? "bg-cat-modas text-white border-cat-modas"
                : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/15 hover:bg-surface-container-low"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cat-modas"></span> Modas
          </button>
          <button
            onClick={() => handleCategoryClick("Móveis e Eletro")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-manrope font-bold text-label-sm border transition-all cursor-pointer ${
              selectedCategory === "Móveis e Eletro"
                ? "bg-cat-moveis text-white border-cat-moveis"
                : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/15 hover:bg-surface-container-low"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cat-moveis"></span> Móveis
          </button>
          <button
            onClick={() => handleCategoryClick("Tecnologia e Serviços")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-manrope font-bold text-label-sm border transition-all cursor-pointer ${
              selectedCategory === "Tecnologia e Serviços"
                ? "bg-cat-tech text-white border-cat-tech"
                : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/15 hover:bg-surface-container-low"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cat-tech"></span> Tecnologia
          </button>
          <button
            onClick={() => handleCategoryClick("Automóveis")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-manrope font-bold text-label-sm border transition-all cursor-pointer ${
              selectedCategory === "Automóveis"
                ? "bg-cat-auto text-white border-cat-auto"
                : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/15 hover:bg-surface-container-low"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cat-auto"></span> Automóveis
          </button>
          <button
            onClick={() => handleCategoryClick("Artesanato e Cultura")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-manrope font-bold text-label-sm border transition-all cursor-pointer ${
              selectedCategory === "Artesanato e Cultura"
                ? "bg-amber-600 text-white border-amber-600"
                : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/15 hover:bg-surface-container-low"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span> Artesanato
          </button>
          <button
            onClick={() => handleCategoryClick("Beleza e Bem-estar")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-manrope font-bold text-label-sm border transition-all cursor-pointer ${
              selectedCategory === "Beleza e Bem-estar"
                ? "bg-rose-500 text-white border-rose-500"
                : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/15 hover:bg-surface-container-low"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Beleza
          </button>
          <button
            onClick={() => handleCategoryClick("Agricultura Familiar")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-manrope font-bold text-label-sm border transition-all cursor-pointer ${
              selectedCategory === "Agricultura Familiar"
                ? "bg-emerald-700 text-white border-emerald-700"
                : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/15 hover:bg-surface-container-low"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-700"></span> Agricultura
          </button>
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
              return (
                <div
                  key={exhibitor.id}
                  className={`exhibitor-card bg-surface-container-lowest rounded-xl border-l-4 ${style.border} border-y border-r border-outline-variant/10 p-6 md:p-8 shadow-sm transition-all duration-300 flex flex-col h-full`}
                >
                  {/* Logo Container */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 md:w-16 md:h-16 rounded-full border border-outline-variant/20 overflow-hidden bg-white flex items-center justify-center p-3 mb-4 shadow-inner">
                      {exhibitor.logoUrl ? (
                        <img
                          className="w-full h-full object-contain"
                          src={exhibitor.logoUrl}
                          alt={`${exhibitor.name} Logo`}
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-primary-fixed text-primary flex items-center justify-center font-manrope font-bold text-title-md">
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
                    <div className="grid grid-cols-2 gap-4">
                      {/* Left actions: Dynamic depending on exhibitor properties */}
                      <div className="flex gap-2 justify-center">
                        <a
                          className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-primary border border-outline-variant/10 hover:bg-primary hover:text-on-primary transition-all"
                          href={exhibitor.links.website || "#"}
                          aria-label="Website"
                        >
                          <span className="material-symbols-outlined">language</span>
                        </a>
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
