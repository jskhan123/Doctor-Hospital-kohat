import { Link } from "react-router";
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Youtube, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../../imports/doctor_hospital_logo-removebg-preview.png";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Emergency CTA Banner */}
      <div className="bg-[#D62828] py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">24/7 Emergency Services Available</h3>
            <p className="text-white/90">Expert medical care when you need it most</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+923338877155">
              <Button size="lg" variant="outline" className="bg-white text-[#D62828] border-white hover:bg-white/90">
                <PhoneCall className="w-5 h-5 mr-2" />
                +92 333 8877155
              </Button>
            </a>
            <Link to="/appointment">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <img src={logo} alt="Doctors Hospital Kohat" className="h-16 w-auto mb-4 brightness-0 invert" />
            <h3 className="text-xl font-bold mb-3 text-white">Doctors Hospital Kohat</h3>
            <p className="text-gray-300 mb-4">
              Complete Healthcare Under One Roof. Providing advanced medical care with experienced specialists and modern facilities.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D62828] flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D62828] flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D62828] flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D62828] flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#D62828] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#D62828] transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-[#D62828] transition-colors">Our Team</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#D62828] transition-colors">Services</Link></li>
              <li><Link to="/facilities" className="text-gray-300 hover:text-[#D62828] transition-colors">Facilities</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-bold mb-4">Departments</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Cardiology</li>
              <li className="text-gray-300">General Surgery</li>
              <li className="text-gray-300">Gynecology</li>
              <li className="text-gray-300">Pediatrics</li>
              <li className="text-gray-300">Emergency Care</li>
              <li className="text-gray-300">Maternity Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 text-[#D62828] flex-shrink-0" />
                <span className="text-gray-300">Near Police Line, Hangu Road, Kohat, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#D62828]" />
                <a href="tel:+923338877155" className="text-gray-300 hover:text-[#D62828] transition-colors">
                  +92 333 8877155
                </a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-[#D62828]" />
                <a href="tel:0922510700" className="text-gray-300 hover:text-[#D62828] transition-colors">
                  (0922) 510700
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#D62828]" />
                <a href="mailto:info@doctorshospitalkohat.com" className="text-gray-300 hover:text-[#D62828] transition-colors">
                  info@doctorshospitalkohat.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Doctors Hospital Kohat. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#D62828] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#D62828] transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-[#D62828] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
