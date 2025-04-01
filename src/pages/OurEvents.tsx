
import { useState } from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

// Event categories
const categories = [
  { id: "all", name: "Wszystkie" },
  { id: "mountains", name: "Góry" },
  { id: "sea", name: "Morze" },
  { id: "city", name: "Miasto" },
  { id: "teambuilding", name: "Team building" },
];

// Events data
const events = [
  {
    id: 1,
    title: "Integracja w Zakopanem",
    description: "3-dniowy wyjazd w góry z aktywnościami outdoor i warsztatami team building.",
    image: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Zakopane, Polska",
    participants: 42,
    category: "mountains",
    date: "Kwiecień 2023",
  },
  {
    id: 2,
    title: "Weekend w Sopocie",
    description: "Nadmorski retreat z warsztatami komunikacji i sesją strategiczną.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Sopot, Polska",
    participants: 28,
    category: "sea",
    date: "Maj 2023",
  },
  {
    id: 3,
    title: "Warszawa - miasto możliwości",
    description: "Urban game w centrum stolicy połączony z warsztatami kreatywnymi.",
    image: "https://images.unsplash.com/photo-1519747396051-26f6bffece2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Warszawa, Polska",
    participants: 65,
    category: "city",
    date: "Czerwiec 2023",
  },
  {
    id: 4,
    title: "Park linowy challenge",
    description: "Jednodniowy intensywny trening budowania zaufania w zespole.",
    image: "https://images.unsplash.com/photo-1528705610405-08ac059aded7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Okolice Krakowa",
    participants: 22,
    category: "teambuilding",
    date: "Lipiec 2023",
  },
  {
    id: 5,
    title: "Szkolenie w Bieszczadach",
    description: "Połączenie szkoleń produktowych z aktywnościami w górach.",
    image: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Bieszczady, Polska",
    participants: 16,
    category: "mountains",
    date: "Sierpień 2023",
  },
  {
    id: 6,
    title: "Gdańsk na weekend",
    description: "Zwiedzanie miasta połączone z warsztatami z komunikacji.",
    image: "https://images.unsplash.com/photo-1609935793251-86abc5a4a288?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Gdańsk, Polska",
    participants: 34,
    category: "city",
    date: "Wrzesień 2023",
  },
  {
    id: 7,
    title: "Spływ kajakowy",
    description: "Integracja na wodzie i warsztaty z zarządzania zmianą.",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Krutynia, Mazury",
    participants: 28,
    category: "teambuilding",
    date: "Czerwiec 2023",
  },
  {
    id: 8,
    title: "Kołobrzeg Active",
    description: "Weekend nad morzem z aktywnościami sportowymi i warsztatami.",
    image: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Kołobrzeg, Polska",
    participants: 42,
    category: "sea",
    date: "Lipiec 2023",
  },
];

const OurEvents = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEvents = activeCategory === "all"
    ? events
    : events.filter(event => event.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-eventblue to-eventteal py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nasze realizacje</h1>
            <p className="text-xl mb-8">
              Zobacz, jakie eventy organizowaliśmy dla naszych klientów i zainspiruj się do własnego wyjazdu integracyjnego.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? "bg-eventblue text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="flex flex-col space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-eventblue" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-eventblue" />
                      <span>{event.participants} uczestników</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-eventblue" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-eventblue to-eventteal rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Chcesz podobny event dla swojego zespołu?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Skontaktuj się z nami i opowiedz o swoich potrzebach. Przygotujemy dla Ciebie idealną propozycję.
            </p>
            <Button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="bg-white text-eventblue hover:bg-gray-100 hover:text-eventblue-dark text-lg px-8 py-6"
              size="lg"
            >
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurEvents;
