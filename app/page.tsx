import FreeConsultationCTA from "./components/FreeConsultationCTA";
import HeroSection from "./components/HeroSection";
import ProjectsShowcase from "./components/ProjectsShowcase";
import ServiceArea from "./components/ServiceArea";
import ServicesShowcase from "./components/ServicesShowcase";
import TestimonialsProcess from "./components/TestimonialsProcess";
import WhyChooseUs from "./components/WhyChooseUs";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesShowcase />
      <ProjectsShowcase />
      <WhyChooseUs />
      <TestimonialsProcess />
      <ServiceArea />
      <FreeConsultationCTA />
    </div>
  );
}