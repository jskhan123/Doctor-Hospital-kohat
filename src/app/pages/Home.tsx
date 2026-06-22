import { motion } from "motion/react";
import { 
  Heart, 
  Stethoscope, 
  Building2, 
  Users, 
  Clock, 
  Award,
  Shield,
  Activity,
  Baby,
  UserRound,
  Pill,
  Brain,
  Bone,
  Eye,
  Ear,
  Microscope,
  Siren,
  ChevronRight,
  Check,
  Star,
  Phone
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router";
import { useState, useEffect } from "react";

const hospitalImage = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzgyMTI3NDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const doctorConsultation = "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwY29uc3VsdGF0aW9uJTIwcGF0aWVudHxlbnwxfHx8fDE3ODIxMjc0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const operationTheater = "https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHN1cmdlcnklMjBvcGVyYXRpb24lMjB0aGVhdGVyfGVufDF8fHx8MTc4MjEyNzQ0MXww&ixlib=rb-4.1.0&q=80&w=1080";
const medicalTech = "https://images.unsplash.com/photo-1504439468489-c8920d796a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3ODIxMjc0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const maternityImage = "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRlcm5pdHklMjBwcmVnbmFuY3klMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc4MjEyNzQ0MXww&ixlib=rb-4.1.0&q=80&w=1080";
const pediatricImage = "https://images.unsplash.com/photo-1632053002928-1919605ee6f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBjaGlsZHJlbiUyMGhvc3BpdGFsJTIwY2FyZXxlbnwxfHx8fDE3ODIxMjc0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const cardiologyImage = "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW9sb2d5JTIwaGVhcnQlMjBtZWRpY2FsfGVufDF8fHx8MTc4MjEyNzQzOXww&ixlib=rb-4.1.0&q=80&w=1080";

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#F5F7FA] via-white to-[#FFE5E5]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D62828' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-[#D62828] text-white mb-4 px-4 py-2">
                Trusted Healthcare Since 2000
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                Doctors Hospital <span className="text-[#D62828]">Kohat</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                Complete Healthcare Under One Roof
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Advanced Medical Care • Expert Specialists • Modern Surgeries • Maternity Services • Emergency Care
              </p>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Doctors Hospital Kohat is a trusted multi-specialty healthcare institution providing complete medical treatment, 
                advanced diagnostics, specialist consultations, emergency care, surgeries, maternity services, and patient-centered 
                healthcare with highly qualified MBBS, FCPS, and experienced medical professionals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/appointment">
                  <Button size="lg" className="bg-[#D62828] hover:bg-[#B61F1F] text-white px-8">
                    Book Appointment
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+923338877155">
                  <Button size="lg" variant="outline" className="border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white px-8">
                    <Phone className="mr-2 w-5 h-5" />
                    Emergency Contact
                  </Button>
                </a>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: 22, label: "Expert Doctors", suffix: "+" },
                  { value: 5, label: "Operation Theaters", suffix: "" },
                  { value: 24, label: "Emergency Services", suffix: "/7" },
                  { value: 1000, label: "Successful Procedures", suffix: "+" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#D62828] mb-2">
                      <CountUp end={stat.value} />
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img src={hospitalImage} alt="Hospital Building" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-white font-semibold">Modern Facility</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-2xl mt-8"
                >
                  <img src={doctorConsultation} alt="Doctor Consultation" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-white font-semibold">Expert Care</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img src={operationTheater} alt="Operation Theater" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-white font-semibold">Advanced Surgery</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-2xl mt-8"
                >
                  <img src={medicalTech} alt="Medical Technology" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-white font-semibold">Latest Technology</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#D62828] text-white mb-4 px-4 py-2">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Excellence in Healthcare
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Committed to providing world-class medical services with compassion and expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Highly Qualified MBBS & FCPS Doctors", color: "bg-blue-50 text-blue-600" },
              { icon: Users, title: "Experienced Specialists", color: "bg-purple-50 text-purple-600" },
              { icon: Building2, title: "Advanced Surgical Facilities", color: "bg-red-50 text-red-600" },
              { icon: Microscope, title: "Modern Diagnostic Equipment", color: "bg-green-50 text-green-600" },
              { icon: UserRound, title: "Female Doctors Available", color: "bg-pink-50 text-pink-600" },
              { icon: Baby, title: "Maternity & Delivery Services", color: "bg-orange-50 text-orange-600" },
              { icon: Siren, title: "24/7 Emergency Care", color: "bg-red-50 text-red-600" },
              { icon: Heart, title: "Patient-Centered Treatment", color: "bg-rose-50 text-rose-600" },
              { icon: Shield, title: "Affordable Healthcare", color: "bg-teal-50 text-teal-600" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="p-6 h-full border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-xl backdrop-blur-sm bg-white/80">
                  <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#D62828] flex-shrink-0 mt-1" />
                    {item.title}
                  </h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src={doctorConsultation} 
                  alt="Hospital" 
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#D62828] text-white p-8 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold">25+</div>
                  <div className="text-sm">Years of Trust</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-[#D62828] text-white mb-4 px-4 py-2">About Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                Your Trusted Healthcare Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Doctors Hospital Kohat is committed to delivering exceptional healthcare services through highly experienced 
                medical professionals, advanced technologies, and compassionate patient care.
              </p>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                The hospital provides complete medical treatment, specialist consultations, surgical procedures, emergency services, 
                maternity care, and preventive healthcare under one roof.
              </p>
              <Link to="/about">
                <Button size="lg" className="bg-[#D62828] hover:bg-[#B61F1F] text-white">
                  Read More
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#D62828] text-white mb-4 px-4 py-2">Our Specialties</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Comprehensive Medical Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert care across multiple specialties under one roof
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {[
              { icon: Heart, title: "Cardiology", image: cardiologyImage },
              { icon: Stethoscope, title: "General Medicine", image: doctorConsultation },
              { icon: Activity, title: "General Surgery", image: operationTheater },
              { icon: Bone, title: "Orthopedics", image: medicalTech },
              { icon: Baby, title: "Pediatrics", image: pediatricImage },
              { icon: UserRound, title: "Gynecology", image: maternityImage },
              { icon: Ear, title: "ENT", image: medicalTech },
              { icon: Eye, title: "Dermatology", image: doctorConsultation },
              { icon: Brain, title: "Neurology", image: medicalTech },
              { icon: Pill, title: "Urology", image: hospitalImage },
              { icon: Activity, title: "Gastroenterology", image: doctorConsultation },
              { icon: Siren, title: "Emergency", image: operationTheater },
              { icon: Building2, title: "ICU", image: medicalTech },
              { icon: Microscope, title: "Diagnostics", image: doctorConsultation },
            ].map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 text-center h-full border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-xl group cursor-pointer bg-gradient-to-br from-white to-[#F5F7FA]">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#D62828] to-[#B61F1F] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <specialty.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{specialty.title}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maternity & Women Care Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-[#D62828] text-white mb-4 px-4 py-2">Maternity Services</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                Comprehensive Women's Healthcare
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our dedicated maternity and women's health department provides compassionate care with experienced female doctors 
                and modern facilities for every stage of your journey.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Experienced Female Doctors",
                  "Normal Delivery",
                  "C-Section Surgery",
                  "Pregnancy Monitoring",
                  "Women's Health Services",
                  "Mother & Child Care",
                  "Modern Labor Rooms",
                  "24/7 Support",
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-[#D62828] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/appointment">
                <Button size="lg" className="bg-[#D62828] hover:bg-[#B61F1F] text-white">
                  Schedule Consultation
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={maternityImage} 
                alt="Maternity Care" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Surgical Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <img 
                src={operationTheater} 
                alt="Operation Theater" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border-2 border-[#D62828]">
                <div className="text-5xl font-bold text-[#D62828]">5</div>
                <div className="text-sm text-gray-600 font-semibold">Modern Operation Theaters</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <Badge className="bg-[#D62828] text-white mb-4 px-4 py-2">Surgical Excellence</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                Advanced Surgical Facilities
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Doctors Hospital Kohat has five modern operation theaters equipped with advanced surgical technology, 
                supporting routine and complex procedures across multiple specialties. Our surgical teams maintain the highest 
                standards of patient safety, infection control, and clinical excellence.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "General Surgery",
                  "Cardiac Procedures",
                  "Orthopedic Surgery",
                  "Gynecological Surgery",
                  "ENT Surgery",
                  "Urology Procedures",
                  "Emergency Surgeries",
                  "Laparoscopic Surgery",
                ].map((surgery, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-[#F5F7FA] rounded-lg hover:bg-[#D62828] hover:text-white transition-all group"
                  >
                    <Activity className="w-5 h-5 text-[#D62828] group-hover:text-white" />
                    <span className="font-medium">{surgery}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#D62828] text-white mb-4 px-4 py-2">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real experiences from families we've had the privilege to serve
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Khan",
                service: "Cardiac Surgery",
                rating: 5,
                text: "The cardiac team at Doctors Hospital saved my life. The care and attention I received was exceptional. Highly recommend their services.",
              },
              {
                name: "Ayesha Bibi",
                service: "Maternity Care",
                rating: 5,
                text: "I had my baby delivered here and the female doctors were so caring and professional. The facilities are modern and clean. Thank you!",
              },
              {
                name: "Muhammad Iqbal",
                service: "Orthopedic Surgery",
                rating: 5,
                text: "After my accident, the orthopedic team performed an excellent surgery. I'm walking again thanks to their expertise and care.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 h-full backdrop-blur-md bg-white/80 border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-xl">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-[#1A1A1A]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#D62828] to-[#B61F1F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Appointment Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get expert medical care from our experienced team of specialists
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a href="tel:+923338877155" className="flex items-center gap-3 text-2xl font-bold hover:scale-105 transition-transform">
                <Phone className="w-8 h-8" />
                +92 333 8877155
              </a>
              <span className="hidden sm:block text-2xl text-white/50">|</span>
              <a href="tel:0922510700" className="flex items-center gap-3 text-2xl font-bold hover:scale-105 transition-transform">
                <Phone className="w-8 h-8" />
                (0922) 510700
              </a>
            </div>

            <Link to="/appointment">
              <Button size="lg" className="bg-white text-[#D62828] hover:bg-gray-100 px-12">
                Book Appointment Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
