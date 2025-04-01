
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container-custom text-center py-16">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-16 max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-eventblue/10 p-4 rounded-full">
              <MapPin className="h-16 w-16 text-eventblue" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Strona nie została znaleziona
          </h2>
          
          <p className="text-gray-600 mb-8 text-lg">
            Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              variant="default"
              className="bg-eventblue hover:bg-eventblue-dark"
            >
              <Link to="/">Strona główna</Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="border-eventblue text-eventblue hover:bg-eventblue/10"
            >
              <Link to="/#contact">Skontaktuj się z nami</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
