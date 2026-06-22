import { motion } from "motion/react";
import { Home, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F7FA] to-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <div className="mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-[#D62828] leading-none">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="bg-[#D62828] hover:bg-[#B61F1F] text-white px-8">
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white px-8">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
