import HeroSection from "@/components/HeroSection";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Services from "./services/page";
import Projects from "./projects/page";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div id="services">
        <Services />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
