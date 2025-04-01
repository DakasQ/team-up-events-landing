
import { Check, Users, Calendar, Lightbulb } from "lucide-react";
import SectionHeading from "../ui/section-heading";

const features = [
  {
    icon: <Users className="h-8 w-8 text-eventteal" />,
    title: "Elastyczność",
    description: "Każdy event dopasowujemy do potrzeb i specyfiki Twojego zespołu. Nie realizujemy szablonowych rozwiązań."
  },
  {
    icon: <Calendar className="h-8 w-8 text-eventblue" />,
    title: "Kompleksowa organizacja",
    description: "Zajmujemy się wszystkim - od transportu, przez zakwaterowanie, po atrakcje. Ty tylko potwierdzasz wybory."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-eventteal" />,
    title: "Realna integracja",
    description: "Tworzymy wydarzenia, które faktycznie zbliżają ludzi, a nie tylko zapewniają im rozrywkę."
  },
  {
    icon: <Check className="h-8 w-8 text-eventblue" />,
    title: "Doświadczenie",
    description: "Zorganizowaliśmy ponad 200 eventów dla firm z różnych branż. Wiemy, co działa najlepiej."
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Dlaczego warto nam zaufać?"
          subtitle="Tworzymy wyjątkowe doświadczenia integracyjne, które umacniają zespoły i budują relacje na długie lata."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="bg-eventteal/10 p-6 md:p-8 rounded-xl max-w-3xl">
            <h3 className="text-2xl font-semibold mb-4 text-center">Nasze podejście</h3>
            <p className="text-gray-700 text-center mb-4">
              Wierzymy, że każdy zespół jest inny i potrzebuje indywidualnego podejścia. Dlatego przed przygotowaniem propozycji, zawsze poznajemy Twój zespół, jego dynamikę i cele, które chcesz osiągnąć poprzez event.
            </p>
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="font-medium text-lg">
                "Nie robimy eventów. Tworzymy doświadczenia, które budują zespoły."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
