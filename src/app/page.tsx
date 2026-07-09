import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Bingo from "@/components/Bingo";
import ExhibitorsSection from "@/components/ExhibitorsSection";
import LocationSection from "@/components/LocationSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <LocationSection />
        {/* <EventDetails /> */}
        <Bingo />
        <ExhibitorsSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
