import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Phone, MapPin, Menu, X, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../imports/doctor_hospital_logo-removebg-preview.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Services", path: "/services" },
    { name: "Facilities", path: "/facilities" },
    { name: "Appointment", path: "/appointment" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#D62828] text-white py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+923338877155" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>+92 333 8877155</span>
            </a>
            <a href="tel:0922510700" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <PhoneCall className="w-4 h-4" />
              <span>(0922) 510700</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Near Police Line, Hangu Road, Kohat, Pakistan</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Doctors Hospital Kohat" className="h-16 w-auto" />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-[#D62828]">Doctors Hospital</h1>
                <p className="text-xs text-gray-600">Kohat</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === link.path
                      ? "bg-[#D62828] text-white"
                      : "text-gray-700 hover:bg-[#F5F7FA]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+923338877155">
                <Button variant="outline" className="border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white">
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Emergency
                </Button>
              </a>
              <Link to="/appointment">
                <Button className="bg-[#D62828] hover:bg-[#B61F1F] text-white">
                  Book Appointment
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#F5F7FA] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <nav className="px-4 py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-all duration-200 ${
                      location.pathname === link.path
                        ? "bg-[#D62828] text-white"
                        : "text-gray-700 hover:bg-[#F5F7FA]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <a href="tel:+923338877155" className="w-full">
                    <Button variant="outline" className="w-full border-[#D62828] text-[#D62828]">
                      <PhoneCall className="w-4 h-4 mr-2" />
                      Emergency
                    </Button>
                  </a>
                  <Link to="/appointment" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-[#D62828] hover:bg-[#B61F1F] text-white">
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
