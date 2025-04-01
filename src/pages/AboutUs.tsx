
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { Award, Coffee, Heart, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Anna Nowak",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Marek Kowalski",
    role: "Event Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Karolina Wiśniewska",
    role: "Client Relations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Tomasz Jankowski",
    role: "Logistics Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  },
];

const values = [
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "Pasja",
    description: "Kochamy to, co robimy. Każdy event to dla nas nowe wyzwanie i możliwość stworzenia czegoś wyjątkowego.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Relacje",
    description: "Wierzymy, że prawdziwe relacje budują się przez wspólne doświadczenia i autentyczne interakcje.",
  },
  {
    icon: <Coffee className="h-8 w-8 text-amber-700" />,
    title: "Jakość",
    description: "Nie idziemy na kompromisy. Każdy element wydarzenia musi spełniać nasze wysokie standardy.",
  },
  {
    icon: <Award className="h-8 w-8 text-yellow-500" />,
    title: "Profesjonalizm",
    description: "Zawsze dotrzymujemy obietnic i dbamy o każdy szczegół, by zapewnić bezproblemowy przebieg eventu.",
  },
];

const AboutUs = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-eventblue/10 to-eventteal/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Poznaj TeamUp Events
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Jesteśmy zespołem pasjonatów, którzy wierzą, że dobre relacje w firmie są fundamentem sukcesu. Od 2015 roku organizujemy eventy integracyjne, które faktycznie zbliżają ludzi i budują silniejsze zespoły.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Nasze podejście jest proste – każdy team jest inny i potrzebuje indywidualnego podejścia. Dlatego nie mamy gotowych szablonów. Tworzymy unikalne doświadczenia dostosowane do specyfiki Twojego zespołu.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Zespół TeamUp Events"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white py-3 px-6 rounded-lg shadow-md">
                <p className="font-bold text-lg">Ponad 200 zorganizowanych eventów</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Nasze wartości"
            subtitle="Co jest dla nas najważniejsze w organizacji eventów"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Nasz zespół"
            subtitle="Poznaj ludzi, którzy stoją za sukcesem TeamUp Events"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-eventteal/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Dołącz do grona zadowolonych klientów
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Pozwól nam zorganizować event, który zapadnie w pamięć Twojemu zespołowi na długie lata.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => {
                  window.location.href = "/nasze-realizacje";
                }}
                variant="outline"
                className="bg-white border-eventblue text-eventblue hover:bg-eventblue/10"
              >
                Zobacz nasze realizacje
              </Button>
              <Button
                onClick={() => {
                  window.location.href = "/#contact";
                }}
                className="bg-eventblue hover:bg-eventblue-dark"
              >
                Porozmawiajmy
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
