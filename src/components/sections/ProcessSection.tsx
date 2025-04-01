
import { Phone, CalendarCheck, UsersRound, CheckCircle } from "lucide-react";
import SectionHeading from "../ui/section-heading";

const steps = [
  {
    icon: <Phone className="h-10 w-10 text-white" />,
    title: "Konsultacja",
    description: "Przeprowadzamy szczegółowy wywiad o Twoich potrzebach, budżecie i celach wyjazdu integracyjnego."
  },
  {
    icon: <CalendarCheck className="h-10 w-10 text-white" />,
    title: "Propozycje i planowanie",
    description: "Przygotowujemy 2-3 dopasowane propozycje. Po wyborze zajmujemy się wszystkimi detalami organizacyjnymi."
  },
  {
    icon: <UsersRound className="h-10 w-10 text-white" />,
    title: "Realizacja",
    description: "Nasz koordynator dba o przebieg wydarzenia, reagując na bieżąco na wszystkie potrzeby uczestników."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-white" />,
    title: "Podsumowanie",
    description: "Po evencie omawiamy rezultaty i zbieramy opinie uczestników, by mieć pewność, że cele zostały osiągnięte."
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Jak to działa?" 
          subtitle="Prosta ścieżka do udanego eventu integracyjnego"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-br from-eventblue to-eventteal rounded-full p-5 mb-5 shadow-lg">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute translate-x-32 mt-10">
                  <svg width="70" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M0 10 L60 10 L50 5 M60 10 L50 15" 
                      fill="none" 
                      stroke="#CCCCCC" 
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-5 text-center">Czy to dla mnie?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-eventblue">Nasze usługi są idealne dla:</h4>
              <ul className="space-y-2">
                {[
                  "Firm zatrudniających od 10 do 150 osób",
                  "Zespołów potrzebujących realnej integracji",
                  "Firm, które cenią sobie czas i profesjonalizm",
                  "Managerów bez czasu na samodzielną organizację",
                  "Firm poszukujących niestandardowych rozwiązań"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-eventteal flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-700">Obsługujemy wszystkie rodzaje wydarzeń:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Wyjazdy górskie",
                  "Wypady nad morze",
                  "City breaki",
                  "Team building",
                  "Szkolenia integracyjne",
                  "Pikniki firmowe",
                  "Zimowe wyjazdy",
                  "Eventy tematyczne"
                ].map((type, i) => (
                  <div key={i} className="bg-white py-2 px-4 rounded-lg shadow-sm text-center">
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
