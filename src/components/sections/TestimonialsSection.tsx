
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "../ui/section-heading";

const testimonials = [
  {
    id: 1,
    text: "Dzięki TeamUp nasi pracownicy faktycznie się zintegrowali. Zwykle wyjazdy ograniczają się do imprezy, ale tym razem powstały relacje, które trwają do dziś.",
    author: "Marta Kowalska",
    role: "HR Manager",
    company: "Technova Sp. z o.o.",
  },
  {
    id: 2,
    text: "Byliśmy pod wrażeniem profesjonalizmu i elastyczności TeamUp. Kiedy pogoda pokrzyżowała plany, błyskawicznie przygotowali alternatywny program, który okazał się strzałem w dziesiątkę.",
    author: "Paweł Nowicki",
    role: "CEO",
    company: "StartupFlow",
  },
  {
    id: 3,
    text: "Zaoszczędzili mi tygodnie pracy. Wszystko było dopięte na ostatni guzik, a ja mogłem skupić się na swoich zadaniach, zamiast martwić się o szczegóły logistyczne.",
    author: "Karolina Dąbrowska",
    role: "Office Manager",
    company: "DataViz Poland",
  },
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section className="section-padding bg-gradient-to-br from-eventblue/5 to-eventteal/5">
      <div className="container-custom">
        <SectionHeading 
          title="Co mówią nasi klienci" 
          subtitle="Sprawdź opinie firm, które skorzystały z naszych usług"
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          {/* Desktop Testimonials */}
          <div className="hidden md:block relative">
            <div className="grid grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded-xl shadow-md p-6 transition-all duration-300 ${
                    idx === activeTestimonial
                      ? "scale-105 shadow-lg border-2 border-eventblue"
                      : "opacity-70"
                  }`}
                  onClick={() => setActiveTestimonial(idx)}
                >
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 text-sm line-clamp-4">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <div className="flex justify-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${
                      idx === activeTestimonial ? "bg-eventblue" : "bg-gray-300"
                    }`}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Przejdź do opinii ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Testimonial Carousel */}
          <div className="md:hidden">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div>
                <p className="font-semibold">{testimonials[activeTestimonial].author}</p>
                <p className="text-gray-600 text-sm">
                  {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-white rounded-full shadow hover:bg-gray-50 transition-colors"
                aria-label="Poprzednia opinia"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${
                      idx === activeTestimonial ? "bg-eventblue" : "bg-gray-300"
                    }`}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Przejdź do opinii ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 bg-white rounded-full shadow hover:bg-gray-50 transition-colors"
                aria-label="Następna opinia"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="bg-white p-6 rounded-xl shadow-sm max-w-xl text-center">
            <p className="text-lg font-medium mb-2">
              Ponad 95% naszych klientów wraca do nas po kolejne eventy.
            </p>
            <p className="text-gray-600">
              Skontaktuj się z nami i dołącz do grona zadowolonych firm!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
