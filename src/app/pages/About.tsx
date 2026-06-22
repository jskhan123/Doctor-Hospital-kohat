import { motion } from "motion/react";
import { Award, Heart, Eye, Target, Users, Building2, CheckCircle } from "lucide-react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import mdImage from "../../imports/MD_Doctor_Hospital_Zia_Muskan.jpg";
import headImage from "../../imports/head_of_doctor_hospital_Dr.Hafeez_Orakzai.jpg";

export function About() {
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
            <Badge className="bg-white text-[#D62828] mb-4 px-4 py-2">About Us</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Trusted Healthcare Partner
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Delivering excellence in healthcare through innovation, compassion, and medical expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-[#D62828] text-white mb-4 px-4 py-2">Who We Are</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                Leading Multi-Specialty Healthcare Institution
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Doctors Hospital Kohat is a leading multi-specialty healthcare institution dedicated to providing safe, 
                affordable, and high-quality medical care to the people of Kohat and surrounding regions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through advanced facilities, experienced doctors, and compassionate healthcare professionals, we strive to 
                improve lives and deliver excellence in healthcare. Our commitment extends beyond treatment to prevention, 
                education, and community health.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Users, value: "22+", label: "Expert Doctors" },
                { icon: Building2, value: "5", label: "Operation Theaters" },
                { icon: Heart, value: "24/7", label: "Emergency Care" },
                { icon: Award, value: "25+", label: "Years of Service" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-6 text-center border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-[#F5F7FA] to-white">
                    <div className="w-16 h-16 mx-auto bg-[#D62828] rounded-2xl flex items-center justify-center mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#D62828] mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-10 h-full border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-xl bg-white">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D62828] to-[#B61F1F] rounded-3xl flex items-center justify-center mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide accessible, high-quality, ethical, and patient-focused healthcare services through innovation, 
                  medical excellence, and compassionate treatment. We are committed to improving the health and well-being of 
                  our community through comprehensive care and continuous advancement.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-10 h-full border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-xl bg-white">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D62828] to-[#B61F1F] rounded-3xl flex items-center justify-center mb-6">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the most trusted healthcare institution in the region by setting new standards in medical care, 
                  surgical excellence, and patient satisfaction. We envision a healthier community where quality healthcare is 
                  accessible to all, delivered with dignity, respect, and clinical expertise.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#D62828] text-white mb-4 px-4 py-2">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We maintain the highest standards in medical care, continuously advancing our knowledge and skills.",
              },
              {
                title: "Compassion",
                description: "Every patient is treated with dignity, respect, and genuine care by our dedicated team.",
              },
              {
                title: "Innovation",
                description: "We embrace modern technology and advanced techniques to provide the best possible outcomes.",
              },
              {
                title: "Integrity",
                description: "We uphold ethical practices and transparency in all our interactions and treatments.",
              },
              {
                title: "Teamwork",
                description: "Our multidisciplinary approach ensures comprehensive care through collaborative expertise.",
              },
              {
                title: "Accessibility",
                description: "We strive to make quality healthcare affordable and available to everyone in our community.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 h-full border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-[#F5F7FA]">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-[#D62828]" />
                    <h3 className="text-xl font-bold text-[#1A1A1A]">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MD Profile */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="bg-[#D62828] text-white mb-4 px-4 py-2">Leadership</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Message from Managing Director
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-2xl bg-white">
              <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2 p-8 bg-gradient-to-br from-[#D62828] to-[#B61F1F] text-white flex flex-col items-center justify-center">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      <img 
                        src={mdImage} 
                        alt="Md Zia Muskan Orakzai" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center">Md Zia Muskan Orakzai</h3>
                  <p className="text-lg text-white/90 text-center">Managing Director</p>
                  <p className="text-sm text-white/80 text-center mt-2">Doctors Hospital Kohat</p>
                </div>
                
                <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Md Zia Muskan Orakzai leads Doctors Hospital Kohat with a vision of excellence, innovation, and 
                    patient-centered healthcare. His commitment to quality medical services, modern healthcare infrastructure, 
                    and continuous improvement has played a vital role in establishing the hospital as a trusted healthcare 
                    provider in the region.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Under his leadership, the hospital has expanded its services, upgraded facilities, and maintained the 
                    highest standards of medical care. His dedication to making quality healthcare accessible and affordable 
                    has positively impacted thousands of lives in Kohat and surrounding areas.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    "Our mission is to provide world-class healthcare that is compassionate, comprehensive, and centered on 
                    the needs of our patients and their families."
                  </p>
                  <p className="text-base text-gray-500 italic mt-4">- Md Zia Muskan Orakzai</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Head of Hospital Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Head of Hospital
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-2xl bg-white">
              <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2 p-8 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white flex flex-col items-center justify-center">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      <img 
                        src={headImage} 
                        alt="Dr. Hafeez Orakzai" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center">Dr. Hafeez Orakzai</h3>
                  <p className="text-lg text-white/90 text-center mb-4">Head of Hospital & Cardiologist</p>
                  
                  <div className="w-full space-y-2 text-sm">
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <p className="text-white/70 text-xs">Contact</p>
                      <p className="font-semibold">0336-4787803</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-[#D62828] mb-4">Qualifications</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "MBBS (Khyber Medical College)",
                        "MCPS (Medicine)",
                        "FCPS (Cardiology HMC Peshawar)",
                        "CHPE (KMU)",
                        "X HO (LRH Peshawar)",
                      ].map((qual, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-[#D62828] flex-shrink-0" />
                          <span className="text-gray-700">{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-[#D62828] mb-4">Professional Experience</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Ex KMCite Peshawar",
                        "Ex KPSIAN Lahore",
                        "Ex President YDA HMC",
                        "Spokesperson YDA KP",
                        "EDMO Cardiologist KTH Peshawar",
                      ].map((exp, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#D62828] flex-shrink-0" />
                          <span className="text-gray-700">{exp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    Dr. Hafeez Orakzai brings extensive experience in cardiology and hospital administration. His clinical 
                    expertise, combined with strong leadership, ensures the delivery of exceptional cardiac care and overall 
                    medical excellence at Doctors Hospital Kohat.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
