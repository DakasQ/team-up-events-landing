
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const companies = [
  "ABCorp", "TechFlow", "Innovate", "Nexus", "DataPro"
];

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Eventy integracyjne, które naprawdę łączą zespół – i nie kosztują Cię tygodni planowania.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Dla firm 10–150 osób. Organizacja A-Z. W 7 dni możesz mieć gotowy plan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <Button 
                onClick={scrollToContact}
                className="bg-eventblue hover:bg-eventblue-dark text-white text-lg py-6 px-8"
              >
                Zapytaj o dostępny termin
              </Button>
              
              <Button 
                variant="outline" 
                className="border-eventblue text-eventblue hover:bg-eventblue/10"
                onClick={() => {
                  const whyUsSection = document.getElementById("why-us");
                  if (whyUsSection) {
                    whyUsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Dowiedz się więcej <ArrowDownCircle size={16} className="ml-2" />
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="animate-fade-in" style={{animationDelay: "0.6s"}}>
              <p className="text-sm text-gray-500 mb-3">Zaufali nam:</p>
              <div className="flex flex-wrap gap-6 items-center">
                {companies.map((company, index) => (
                  <span 
                    key={index} 
                    className="text-gray-400 font-semibold text-lg"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Zespół na evencie integracyjnym"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <svg 
                        key={i}
                        className="w-4 h-4 text-yellow-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-bold">4.9/5</span>
                </div>
                <p className="text-xs text-gray-600">Na podstawie 48 ocen klientów</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
