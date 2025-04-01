
import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import GallerySection from "@/components/sections/GallerySection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  // Animate elements on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <HeroSection />
      <WhyUsSection />
      <GallerySection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
};

export default Index;
