import { motion } from "motion/react";
import { 
  Heart, 
  Stethoscope, 
  Activity, 
  Bone, 
  Baby, 
  UserRound, 
  Ear,
  Eye,
  Brain,
  Pill,
  Microscope,
  Siren,
  Building2,
  Zap,
  HeartPulse,
  Scan,
  TestTube,
  Waves,
  Check
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Comprehensive primary healthcare services for common illnesses, chronic disease management, and preventive care.",
    features: ["Routine Check-ups", "Health Screenings", "Disease Management", "Health Counseling"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Expert cardiac care including diagnosis, treatment, and management of heart conditions with advanced technology.",
    features: ["ECG & Echo", "Cardiac Monitoring", "Heart Disease Treatment", "Preventive Cardiology"],
    color: "from-red-500 to-red-600",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Specialized care for bone, joint, and musculoskeletal conditions including surgery and rehabilitation.",
    features: ["Fracture Treatment", "Joint Replacement", "Sports Injuries", "Spine Care"],
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Comprehensive healthcare for infants, children, and adolescents with experienced pediatricians.",
    features: ["Well-Child Visits", "Vaccinations", "Growth Monitoring", "Childhood Illnesses"],
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: UserRound,
    title: "Gynecology & Obstetrics",
    description: "Complete women's healthcare including pregnancy care, delivery services, and gynecological treatments.",
    features: ["Pregnancy Care", "Normal & C-Section Delivery", "Women's Health", "Family Planning"],
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Activity,
    title: "General Surgery",
    description: "Advanced surgical procedures performed by experienced surgeons in modern operation theaters.",
    features: ["Laparoscopic Surgery", "Emergency Surgery", "Minimally Invasive", "Post-Op Care"],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Ear,
    title: "ENT (Ear, Nose & Throat)",
    description: "Specialized treatment for ear, nose, throat, and related head and neck conditions.",
    features: ["Hearing Tests", "Sinus Treatment", "Throat Disorders", "ENT Surgery"],
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Eye,
    title: "Dermatology",
    description: "Expert care for skin, hair, and nail conditions with modern diagnostic and treatment facilities.",
    features: ["Skin Disorders", "Cosmetic Dermatology", "Hair Treatment", "Acne Care"],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Diagnosis and treatment of nervous system disorders including brain, spinal cord, and nerve conditions.",
    features: ["Neurological Exams", "Stroke Care", "Headache Treatment", "Seizure Management"],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Pill,
    title: "Urology",
    description: "Specialized care for urinary tract and male reproductive system conditions.",
    features: ["Kidney Stones", "Prostate Care", "Urological Surgery", "Incontinence Treatment"],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: HeartPulse,
    title: "Gastroenterology",
    description: "Expert care for digestive system disorders including stomach, liver, and intestinal conditions.",
    features: ["Endoscopy", "Liver Disease", "Digestive Disorders", "Colonoscopy"],
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Siren,
    title: "Emergency Medicine",
    description: "24/7 emergency services with experienced medical team and life-saving equipment.",
    features: ["Trauma Care", "Cardiac Emergencies", "Accident Care", "Critical Stabilization"],
    color: "from-red-600 to-red-700",
  },
  {
    icon: Building2,
    title: "Intensive Care Unit (ICU)",
    description: "Advanced critical care with round-the-clock monitoring and life support systems.",
    features: ["Ventilator Support", "24/7 Monitoring", "Critical Care", "Post-Surgery Care"],
    color: "from-gray-600 to-gray-700",
  },
  {
    icon: Microscope,
    title: "Laboratory Services",
    description: "State-of-the-art diagnostic laboratory with comprehensive testing facilities.",
    features: ["Blood Tests", "Pathology", "Microbiology", "Clinical Chemistry"],
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Scan,
    title: "Diagnostic Imaging",
    description: "Advanced imaging services including X-Ray, ultrasound, and other diagnostic tools.",
    features: ["X-Ray", "Ultrasound", "ECG", "Doppler Studies"],
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: TestTube,
    title: "Preventive Healthcare",
    description: "Comprehensive health check-ups and screening programs for early disease detection.",
    features: ["Health Packages", "Annual Check-ups", "Cancer Screening", "Diabetes Screening"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Waves,
    title: "Family Medicine",
    description: "Holistic healthcare for the entire family across all ages and health conditions.",
    features: ["Family Care", "Chronic Disease", "Lifestyle Management", "Health Education"],
    color: "from-sky-500 to-sky-600",
  },
  {
    icon: Zap,
    title: "Chronic Disease Management",
    description: "Comprehensive care for long-term conditions including diabetes, hypertension, and more.",
    features: ["Diabetes Care", "Hypertension", "Asthma Management", "Regular Monitoring"],
    color: "from-amber-500 to-amber-600",
  },
];

export function Services() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#D62828] to-[#B61F1F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-white text-[#D62828] mb-4 px-4 py-2">Our Services</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Healthcare Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Complete medical care across all specialties under one roof
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="p-6 h-full border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-2xl bg-white group">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#D62828] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Need Medical Assistance?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our expert medical team is ready to provide you with the best care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment">
                <Button size="lg" className="bg-[#D62828] hover:bg-[#B61F1F] text-white px-8">
                  Book an Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
