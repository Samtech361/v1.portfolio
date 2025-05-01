import AboutSection from "../components/AboutSection";
import Stats from "../components/Stats";
import ExperienceSection from "../components/ExperienceSection";

function About() {
  return (
    <div>
      <AboutSection />
      <div className="container mx-auto px-6 py-12">
        <Stats />
      </div>
      <ExperienceSection />
    </div>
  );
}

export default About;
