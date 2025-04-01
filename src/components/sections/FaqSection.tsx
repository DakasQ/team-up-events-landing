
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "../ui/section-heading";

const faqs = [
  {
    question: "Ile kosztuje organizacja eventu integracyjnego?",
    answer: "Koszt organizacji eventu zależy od wielu czynników, takich jak liczba uczestników, lokalizacja, rodzaj atrakcji, czas trwania oraz standard zakwaterowania. Ceny zaczynają się od około 300 zł netto od osoby za event jednodniowy, do kilku tysięcy za kilkudniowe wyjazdy premium. Po konsultacji przedstawiamy szczegółową wycenę dopasowaną do Twoich potrzeb i budżetu."
  },
  {
    question: "W jakich lokalizacjach działacie?",
    answer: "Organizujemy eventy na terenie całej Polski. Mamy sprawdzonych partnerów w najpopularniejszych miejscach, takich jak Zakopane, Kraków, Trójmiasto, Warszawa, okolice gór i jezior. Realizujemy także wydarzenia za granicą, głównie w Europie Środkowej."
  },
  {
    question: "Czy organizujecie także mniejsze wyjazdy?",
    answer: "Tak, organizujemy eventy nawet dla grup 10-osobowych. Dla mniejszych zespołów możemy przygotować kameralne, ale równie angażujące doświadczenia integracyjne. Nasze najmniejsze grupy to 8-10 osób."
  },
  {
    question: "Czy możemy mieć wpływ na plan wydarzenia?",
    answer: "Oczywiście! Zachęcamy do aktywnego udziału w planowaniu. Nasz proces zawsze zaczyna się od dokładnego poznania Waszych potrzeb i oczekiwań. Przedstawiamy propozycje, ale to Wy macie ostateczny głos w wyborze atrakcji, zakwaterowania czy innych elementów programu."
  },
  {
    question: "Jak szybko możecie zorganizować event?",
    answer: "W standardowych przypadkach potrzebujemy około 2-3 tygodni na przygotowanie kompleksowego eventu. W przypadku większych grup (powyżej 50 osób) lub w sezonie wysokim, rekomendujemy rezerwację z co najmniej miesięcznym wyprzedzeniem. W sytuacjach pilnych potrafimy zorganizować mniejsze wydarzenia nawet w ciągu 7 dni."
  },
  {
    question: "Czy podczas eventu jest obecna obsługa z Waszej firmy?",
    answer: "Tak, każdemu wydarzeniu towarzyszy nasz koordynator, który dba o prawidłowy przebieg eventu, rozwiązuje bieżące problemy i upewnia się, że wszystko idzie zgodnie z planem. W przypadku większych grup zapewniamy dodatkowych opiekunów."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <SectionHeading 
          title="Najczęściej zadawane pytania" 
          centered
        />
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-lg overflow-hidden transition-all ${
                openIndex === index ? "border-eventblue shadow-sm" : "border-gray-200"
              }`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-eventblue" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Nie znalazłeś odpowiedzi na swoje pytanie? 
            <a href="#contact" className="text-eventblue ml-1 hover:underline">
              Skontaktuj się z nami bezpośrednio.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
