
import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToContactForm = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-md py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center z-50">
            <span className="font-poppins font-bold text-2xl text-eventblue">Team<span className="text-eventteal">Up</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/o-nas" 
              className="font-medium text-gray-700 hover:text-eventblue transition-colors"
            >
              O nas
            </Link>
            <Link 
              to="/nasze-realizacje" 
              className="font-medium text-gray-700 hover:text-eventblue transition-colors"
            >
              Nasze realizacje
            </Link>
            <Button 
              onClick={scrollToContactForm}
              className="bg-eventblue hover:bg-eventblue-dark text-white transition-colors"
            >
              Zorganizuj event
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col pt-20">
            <nav className="flex flex-col items-center gap-8 p-8">
              <Link 
                to="/o-nas" 
                className="font-medium text-xl text-gray-700 hover:text-eventblue transition-colors"
              >
                O nas
              </Link>
              <Link 
                to="/nasze-realizacje" 
                className="font-medium text-xl text-gray-700 hover:text-eventblue transition-colors"
              >
                Nasze realizacje
              </Link>
              <Button 
                onClick={scrollToContactForm}
                className="bg-eventblue hover:bg-eventblue-dark text-white transition-colors w-full"
              >
                Zorganizuj event
              </Button>
            </nav>
          </div>
        )}
      </header>
      
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
