
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock } from "lucide-react";
import SectionHeading from "../ui/section-heading";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    participants: "",
    time: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Formularz wysłany",
        description: "Dziękujemy za wiadomość. Odpowiemy w ciągu 24 godzin.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        participants: "",
        time: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <SectionHeading 
          title="Sprawdź dostępność terminu" 
          subtitle="Zostaw nam swoje dane, a odezwiemy się w ciągu 24 godzin z propozycją współpracy."
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block font-medium" htmlFor="name">
                  Imię i nazwisko*
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jan Kowalski"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block font-medium" htmlFor="email">
                  E-mail*
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jan@firma.pl"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block font-medium" htmlFor="company">
                  Firma (opcjonalnie)
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nazwa firmy"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block font-medium" htmlFor="participants">
                  Liczba uczestników*
                </label>
                <Select 
                  value={formData.participants} 
                  onValueChange={(value) => handleSelectChange(value, "participants")}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Wybierz liczbę osób" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10-20">10-20 osób</SelectItem>
                    <SelectItem value="21-50">21-50 osób</SelectItem>
                    <SelectItem value="51-100">51-100 osób</SelectItem>
                    <SelectItem value="101+">Ponad 100 osób</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="block font-medium" htmlFor="time">
                  Preferowany termin
                </label>
                <Select 
                  value={formData.time} 
                  onValueChange={(value) => handleSelectChange(value, "time")}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Wybierz preferowany termin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="najbliższy miesiąc">W najbliższym miesiącu</SelectItem>
                    <SelectItem value="2-3 miesiące">Za 2-3 miesiące</SelectItem>
                    <SelectItem value="pół roku">W ciągu pół roku</SelectItem>
                    <SelectItem value="elastyczny">Termin elastyczny</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label className="block font-medium" htmlFor="message">
                  Komentarz / oczekiwania
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Napisz nam o swoich oczekiwaniach dotyczących wyjazdu..."
                  className="w-full min-h-[120px]"
                />
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                type="submit" 
                className="w-full py-6 text-lg bg-eventblue hover:bg-eventblue-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wysyłanie..." : "Zacznijmy planować"}
              </Button>
              
              <div className="flex items-center justify-center mt-4 text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <p>Odpowiadamy w ciągu 24h</p>
              </div>
            </div>
          </form>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-2 text-eventblue">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Najbliższe wolne terminy:</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className="bg-white px-3 py-1 rounded-full border border-gray-200 text-sm">
                19-21 czerwca
              </div>
              <div className="bg-white px-3 py-1 rounded-full border border-gray-200 text-sm">
                5-7 lipca
              </div>
              <div className="bg-white px-3 py-1 rounded-full border border-gray-200 text-sm">
                12-15 sierpnia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
