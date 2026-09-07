import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import LenisScroll from "./components/lenis";

import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
import EducationSection from "./sections/education-section";
import ServicesSection from "./sections/services";
import HeroSection from "./sections/hero";
import ProjectsSection from "./sections/projects";
import SkillsSection from "./sections/skills";

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
      <ServicesSection />
      <SkillsSection />
      <EducationSection />
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
