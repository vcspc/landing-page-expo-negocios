"use client";

export default function FloatingContact() {
  const handleClick = () => {
    // Open standard support trigger or scroll to location/concierge
    const locationSection = document.getElementById("location");
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8 animate-bounce-slow">
      <button
        onClick={handleClick}
        className="w-14 h-14 md:w-16 md:h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group cursor-pointer"
        aria-label="Chat Suporte"
      >
        <span className="material-symbols-outlined text-[28px] md:text-[32px] group-hover:rotate-12 transition-transform">
          chat_bubble
        </span>
      </button>
    </div>
  );
}
