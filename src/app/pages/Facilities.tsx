import { motion } from "motion/react";
import { 
  Building2, 
  Microscope, 
  Siren, 
  Baby,
  Bed,
  Home,
  Building,
  Pill,
  Ambulance,
  Zap,
  Shield,
  HeartPulse,
  Stethoscope,
  Activity,
  Check,
  Sparkles
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const facilities = [
  {
    icon: Building2,
    title: "5 Modern Operation Theaters",
    description: "State-of-the-art surgical facilities equipped with advanced medical technology for routine and complex procedures.",
    features: [
      "Advanced Surgical Equipment",
      "Laminar Air Flow Systems",
      "Latest Anesthesia Technology",
      "Infection Control Protocols",
      "Multi-Specialty Support",
      "Post-Op Recovery Areas"
    ],
    color: "from-blue-500 to-blue-600",
    highlight: true,
    number: "5"
  },
  {
    icon: Microscope,
    title: "Advanced Diagnostic Laboratory",
    description: "Comprehensive laboratory services with modern equipment for accurate and timely test results.",
    features: [
      "Clinical Pathology",
      "Hematology",
      "Blood Bank",
      "Microbiology",
      "Clinical Chemistry",
      "Serology Testing"
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Siren,
    title: "24/7 Emergency Department",
    description: "Round-the-clock emergency services with experienced medical staff and life-saving equipment.",
    features: [
      "Trauma Care Unit",
      "Resuscitation Area",
      "Cardiac Emergency Care",
      "Ambulance Services",
      "Emergency Surgery",
      "Critical Care Support"
    ],
    color: "from-red-500 to-red-600",
  },
  {
    icon: Baby,
    title: "Modern Labor Rooms",
    description: "Comfortable and well-equipped labor and delivery rooms with experienced staff for safe childbirth.",
    features: [
      "Private Labor Rooms",
      "Normal Delivery Support",
      "C-Section Facilities",
      "Fetal Monitoring",
      "Neonatal Care",
      "Female Medical Staff"
    ],
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Bed,
    title: "Patient Wards",
    description: "Clean, comfortable patient wards with round-the-clock nursing care and medical supervision.",
    features: [
      "General Wards",
      "Semi-Private Rooms",
      "24/7 Nursing Care",
      "Patient Monitoring",
      "Visitor Facilities",
      "Clean Environment"
    ],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Home,
    title: "Private Rooms",
    description: "Comfortable private rooms for patients requiring privacy and personalized care.",
    features: [
      "En-Suite Facilities",
      "Air Conditioning",
      "TV & Entertainment",
      "Attendant Accommodation",
      "Nutritious Meals",
      "Privacy & Comfort"
    ],
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: HeartPulse,
    title: "Intensive Care Unit (ICU)",
    description: "Advanced ICU with state-of-the-art monitoring and life support systems for critical patients.",
    features: [
      "Ventilator Support",
      "Cardiac Monitoring",
      "24/7 Specialist Coverage",
      "Advanced Life Support",
      "Central Monitoring",
      "Isolation Facilities"
    ],
    color: "from-red-600 to-red-700",
  },
  {
    icon: Pill,
    title: "Hospital Pharmacy",
    description: "Well-stocked pharmacy providing quality medications and pharmaceutical care.",
    features: [
      "Wide Range of Medicines",
      "Quality Assurance",
      "Prescription Services",
      "Patient Counseling",
      "Emergency Medications",
      "24/7 Availability"
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Ambulance,
    title: "Ambulance Services",
    description: "Fully-equipped ambulances with trained paramedics for emergency medical transportation.",
    features: [
      "Advanced Life Support",
      "Trained Paramedics",
      "24/7 Availability",
      "Oxygen Support",
      "Cardiac Monitor",
      "Emergency Equipment"
    ],
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Activity,
    title: "Medical Equipment",
    description: "Latest medical technology and equipment for accurate diagnosis and effective treatment.",
    features: [
      "Digital X-Ray",
      "Ultrasound Machines",
      "ECG Equipment",
      "Monitoring Systems",
      "Surgical Instruments",
      "Laboratory Analyzers"
    ],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Stethoscope,
    title: "OPD Facilities",
    description: "Modern outpatient department with consultation rooms for various specialties.",
    features: [
      "Specialist Consultations",
      "Appointment System",
      "Comfortable Waiting Area",
      "Medical Records",
      "Follow-up Care",
      "Health Counseling"
    ],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "Infection Control",
    description: "Strict infection control protocols to ensure patient and staff safety.",
    features: [
      "Sterilization Units",
      "Hygiene Protocols",
      "Waste Management",
      "Biosafety Measures",
      "Regular Audits",
      "Staff Training"
    ],
    color: "from-emerald-500 to-emerald-600",
  },
];

export function Facilities() {
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
            <Badge className="bg-white text-[#D62828] mb-4 px-4 py-2">Our Facilities</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              World-Class Medical Facilities
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Modern infrastructure and advanced equipment for exceptional healthcare delivery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={facility.highlight ? "lg:col-span-3" : ""}
              >
                <Card className={`p-8 h-full border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-2xl bg-white group relative overflow-hidden ${
                  facility.highlight ? "bg-gradient-to-br from-white to-blue-50" : ""
                }`}>
                  {facility.highlight && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#D62828] text-white">
                        <Sparkles className="w-4 h-4 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}

                  <div className={facility.highlight ? "grid lg:grid-cols-2 gap-8 items-center" : ""}>
                    <div>
                      {/* Icon & Number */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <facility.icon className="w-8 h-8 text-white" />
                        </div>
                        {facility.number && (
                          <div className="text-6xl font-bold text-[#D62828]/10">
                            {facility.number}
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                        {facility.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {facility.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className={`grid ${facility.highlight ? "sm:grid-cols-2" : ""} gap-3`}>
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 bg-[#F5F7FA] rounded-lg hover:bg-[#D62828] hover:text-white transition-all group/feature">
                          <Check className="w-4 h-4 text-[#D62828] group-hover/feature:text-white flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#D62828] text-white mb-4 px-4 py-2">By The Numbers</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Our Infrastructure
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5", label: "Operation Theaters" },
              { value: "50+", label: "Patient Beds" },
              { value: "24/7", label: "Emergency Services" },
              { value: "100%", label: "Sterilization" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 text-center border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-[#F5F7FA] to-white">
                  <div className="text-5xl font-bold text-[#D62828] mb-3">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
