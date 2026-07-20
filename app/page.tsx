import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Journey from "@/components/Journey";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Hobbies from "@/components/Hobbies";
import Skills from "@/components/Skills";
import WalletTrackerPromo from "@/components/WalletTrackerPromo";
import WalletTrackerFab from "@/components/WalletTrackerFab";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Journey />
        <About />
        <Projects />
        <Experience />
        <Gallery />
        <Hobbies />
        <Skills />
        <WalletTrackerPromo />
        <Contact />
      </main>
      <Footer />
      <WalletTrackerFab />
    </>
  );
}
