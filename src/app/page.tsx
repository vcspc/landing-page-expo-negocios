import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Bingo from "@/components/Bingo";
import ExhibitorsSection from "@/components/ExhibitorsSection";
import LocationSection from "@/components/LocationSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EventDetails />
        <Bingo />
        <ExhibitorsSection />
        <LocationSection />
        <CTA />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
