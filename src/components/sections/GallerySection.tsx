
import { useState } from "react";
import { ChevronLeft, ChevronRight, Users, MapPin } from "lucide-react";
import SectionHeading from "../ui/section-heading";

const events = [
  {
    id: 1,
    title: "Integracja w górach",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Zakopane",
    participants: 35,
    type: "Wyjazd 3-dniowy"
  },
  {
    id: 2,
    title: "Team building w parku linowym",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Warszawa",
    participants: 24,
    type: "Dzień integracji"
  },
  {
    id: 3,
    title: "Wyjazd nad morze",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Sopot",
    participants: 48,
    type: "Wyjazd 4-dniowy"
  },
  {
    id: 4,
    title: "Warszaty kulinarne",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aec78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Kraków",
    participants: 18,
    type: "Event jednodniowy"
  }
];

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeading 
          title="Przykładowe realizacje" 
          subtitle="Zobacz, jakie eventy zorganizowaliśmy dla naszych klientów"
          centered
        />
        
        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img 
              src={events[currentSlide].image} 
              alt={events[currentSlide].title} 
              className="w-full h-64 object-cover"
            />
            <div className="bg-white p-4">
              <h3 className="font-semibold text-xl mb-2">{events[currentSlide].title}</h3>
              <div className="flex flex-col gap-1 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{events[currentSlide].location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{events[currentSlide].participants} osób</span>
                </div>
                <p className="mt-1 text-eventblue">{events[currentSlide].type}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Poprzedni slajd"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Następny slajd"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center mt-3">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentSlide ? "bg-eventblue" : "bg-gray-300"
                }`}
                aria-label={`Przejdź do slajdu ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-56">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                <div className="flex flex-col gap-1 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} />
                    <span>{event.participants} osób</span>
                  </div>
                  <p className="mt-1 text-eventblue font-medium">{event.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/nasze-realizacje" 
            className="inline-block py-2 px-4 text-eventblue border border-eventblue rounded-lg hover:bg-eventblue hover:text-white transition-colors"
          >
            Zobacz więcej realizacji
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
