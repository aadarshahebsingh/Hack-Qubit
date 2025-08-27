import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Venue from "@/components/Venue";
import Prizes from "@/components/Prizes";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { SponsorsSection } from "@/components/SponsorsSection";
import PastEvents from "@/components/PastEvents";
import SpeedParticles from "@/components/SpeedParticles";
import HackathonTracks from "@/components/HackthonTracks";
import ScrollToTopButton from "@/components/Scroll";
import { VerticalBanner } from "@/components/VerticalBanner";
import GreenScreenVideo from "@/components/GreenScreen";
import { FAQSection } from "@/components/FAQSections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <SpeedParticles />
      <Navigation />
      <main className="relative z-10">
        <section id="hero">
          {/* <GreenScreenVideo/> */}
          <Hero />
        </section>
        <About />
        <Venue />

        <Prizes />
        <Timeline />
        <HackathonTracks/>
        <PastEvents/>
        <SponsorsSection/>
        <FAQ />
        {/* <FAQSection/> */}
        
      
        <ScrollToTopButton/>
      </main>
      <Footer />
      <VerticalBanner/>
      
      
    </div>
  );
};

export default Index;