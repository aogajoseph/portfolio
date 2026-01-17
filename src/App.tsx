import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import LenisScroll from "./components/lenis";

import AboutSection from "./sections/about-section";
import ContactSection from "./sections/contact-section";
import EducationSection from "./sections/education-section";
import ExperienceSection from "./sections/experience-section";
import HeroSection from "./sections/hero-section";
import ProjectsSection from "./sections/projects-section";
import SkillsSection from "./sections/skills-section";

// Pages
import NeuroCareCaseStudy from "./projects/neurocare";
import ComingSoon from "./projects/coming-soon";

/* --------------------------------------------
   Home Page
--------------------------------------------- */
function Home() {
  return (
    <main className="max-md:px-4">
      <LenisScroll />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

/* --------------------------------------------
   App Router
--------------------------------------------- */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/neurocare" element={<NeuroCareCaseStudy />} />
      <Route path="/projects/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
}
