import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Phone, Calendar, Clock, User, Search } from "lucide-react";
import { Link } from "react-router";
import headImage from "../../imports/head_of_doctor_hospital_Dr.Hafeez_Orakzai.jpg";

const doctors = [
  {
    id: 1,
    name: "Dr. Hafeez Orakzai",
    qualification: "MBBS, MCPS, FCPS (Cardiology)",
    specialization: "Cardiology",
    department: "Cardiology",
    experience: "15+ Years",
    availability: "Mon, Wed, Fri",
    timing: "4:00 PM - 8:00 PM",
    assistant: "Staff Available",
    contact: "0336-4787803",
    image: headImage,
  },
  {
    id: 2,
    name: "Dr. Sarah Ahmed",
    qualification: "MBBS, FCPS (Gynecology)",
    specialization: "Gynecology & Obstetrics",
    department: "Gynecology",
    experience: "12+ Years",
    availability: "Mon-Sat",
    timing: "9:00 AM - 2:00 PM",
    assistant: "Aisha Bibi",
    contact: "+92 333 8877155",
  },
  {
    id: 3,
    name: "Dr. Muhammad Akram",
    qualification: "MBBS, FCPS (Surgery)",
    specialization: "General Surgery",
    department: "Surgery",
    experience: "18+ Years",
    availability: "Daily",
    timing: "10:00 AM - 4:00 PM",
    assistant: "Ahmad Khan",
    contact: "+92 333 8877155",
  },
  {
    id: 4,
    name: "Dr. Fatima Noor",
    qualification: "MBBS, DCH",
    specialization: "Pediatrics",
    department: "Pediatrics",
    experience: "10+ Years",
    availability: "Mon-Sat",
    timing: "8:00 AM - 1:00 PM",
    assistant: "Maryam Ali",
    contact: "+92 333 8877155",
  },
  {
    id: 5,
    name: "Dr. Imran Shah",
    qualification: "MBBS, FCPS (Orthopedics)",
    specialization: "Orthopedic Surgery",
    department: "Orthopedics",
    experience: "14+ Years",
    availability: "Tue, Thu, Sat",
    timing: "3:00 PM - 7:00 PM",
    assistant: "Bilal Khan",
    contact: "+92 333 8877155",
  },
  {
    id: 6,
    name: "Dr. Ayesha Khan",
    qualification: "MBBS, FCPS (Medicine)",
    specialization: "Internal Medicine",
    department: "General Medicine",
    experience: "16+ Years",
    availability: "Mon-Fri",
    timing: "9:00 AM - 3:00 PM",
    assistant: "Saima Akhtar",
    contact: "+92 333 8877155",
  },
  {
    id: 7,
    name: "Dr. Zahid Hussain",
    qualification: "MBBS, FCPS (ENT)",
    specialization: "ENT Specialist",
    department: "ENT",
    experience: "11+ Years",
    availability: "Mon, Wed, Fri",
    timing: "2:00 PM - 6:00 PM",
    assistant: "Kamran Ali",
    contact: "+92 333 8877155",
  },
  {
    id: 8,
    name: "Dr. Nadia Iqbal",
    qualification: "MBBS, FCPS (Dermatology)",
    specialization: "Dermatology",
    department: "Dermatology",
    experience: "9+ Years",
    availability: "Tue, Thu, Sat",
    timing: "10:00 AM - 2:00 PM",
    assistant: "Hina Tariq",
    contact: "+92 333 8877155",
  },
  {
    id: 9,
    name: "Dr. Ali Raza",
    qualification: "MBBS, FCPS (Neurology)",
    specialization: "Neurology",
    department: "Neurology",
    experience: "13+ Years",
    availability: "Wed, Fri, Sun",
    timing: "4:00 PM - 8:00 PM",
    assistant: "Usman Ahmed",
    contact: "+92 333 8877155",
  },
  {
    id: 10,
    name: "Dr. Sana Malik",
    qualification: "MBBS, FCPS (Radiology)",
    specialization: "Radiology",
    department: "Diagnostics",
    experience: "8+ Years",
    availability: "Mon-Sat",
    timing: "8:00 AM - 4:00 PM",
    assistant: "Rabia Khan",
    contact: "+92 333 8877155",
  },
  {
    id: 11,
    name: "Dr. Asad Mahmood",
    qualification: "MBBS, FCPS (Urology)",
    specialization: "Urology",
    department: "Urology",
    experience: "15+ Years",
    availability: "Mon, Tue, Thu",
    timing: "3:00 PM - 7:00 PM",
    assistant: "Tariq Mehmood",
    contact: "+92 333 8877155",
  },
  {
    id: 12,
    name: "Dr. Hina Ashraf",
    qualification: "MBBS, FCPS (Anesthesia)",
    specialization: "Anesthesiology",
    department: "Anesthesia",
    experience: "12+ Years",
    availability: "Daily",
    timing: "On Call",
    assistant: "Farhan Ali",
    contact: "+92 333 8877155",
  },
  {
    id: 13,
    name: "Dr. Kamran Afridi",
    qualification: "MBBS, FCPS (Gastro)",
    specialization: "Gastroenterology",
    department: "Gastroenterology",
    experience: "10+ Years",
    availability: "Tue, Thu, Sat",
    timing: "11:00 AM - 3:00 PM",
    assistant: "Naveed Shah",
    contact: "+92 333 8877155",
  },
  {
    id: 14,
    name: "Dr. Rabiya Khattak",
    qualification: "MBBS, MD (Pathology)",
    specialization: "Pathology",
    department: "Laboratory",
    experience: "7+ Years",
    availability: "Mon-Sat",
    timing: "8:00 AM - 2:00 PM",
    assistant: "Sadia Rahim",
    contact: "+92 333 8877155",
  },
  {
    id: 15,
    name: "Dr. Waqar Ahmed",
    qualification: "MBBS, FCPS (Emergency)",
    specialization: "Emergency Medicine",
    department: "Emergency",
    experience: "14+ Years",
    availability: "24/7 On Call",
    timing: "Emergency Services",
    assistant: "Haider Ali",
    contact: "+92 333 8877155",
  },
  {
    id: 16,
    name: "Dr. Mariam Noor",
    qualification: "MBBS, FCPS (Psychiatry)",
    specialization: "Psychiatry",
    department: "Mental Health",
    experience: "9+ Years",
    availability: "Mon, Wed, Fri",
    timing: "2:00 PM - 6:00 PM",
    assistant: "Zainab Khan",
    contact: "+92 333 8877155",
  },
  {
    id: 17,
    name: "Dr. Rashid Khan",
    qualification: "MBBS, FCPS (Ophthalmology)",
    specialization: "Ophthalmology",
    department: "Eye Care",
    experience: "11+ Years",
    availability: "Tue, Thu, Sat",
    timing: "9:00 AM - 1:00 PM",
    assistant: "Faisal Iqbal",
    contact: "+92 333 8877155",
  },
  {
    id: 18,
    name: "Dr. Shazia Bibi",
    qualification: "MBBS, FCPS (Family Medicine)",
    specialization: "Family Medicine",
    department: "General Medicine",
    experience: "13+ Years",
    availability: "Mon-Sat",
    timing: "8:00 AM - 2:00 PM",
    assistant: "Irum Shahid",
    contact: "+92 333 8877155",
  },
  {
    id: 19,
    name: "Dr. Junaid Afridi",
    qualification: "MBBS, FCPS (Nephrology)",
    specialization: "Nephrology",
    department: "Nephrology",
    experience: "10+ Years",
    availability: "Wed, Fri, Sun",
    timing: "3:00 PM - 7:00 PM",
    assistant: "Rizwan Ahmed",
    contact: "+92 333 8877155",
  },
  {
    id: 20,
    name: "Dr. Amina Shah",
    qualification: "MBBS, FCPS (Oncology)",
    specialization: "Oncology",
    department: "Cancer Care",
    experience: "12+ Years",
    availability: "Mon, Tue, Thu",
    timing: "10:00 AM - 4:00 PM",
    assistant: "Nida Khan",
    contact: "+92 333 8877155",
  },
  {
    id: 21,
    name: "Dr. Nasir Ullah",
    qualification: "MBBS, FCPS (Pulmonology)",
    specialization: "Pulmonology",
    department: "Chest Medicine",
    experience: "15+ Years",
    availability: "Tue, Thu, Sat",
    timing: "11:00 AM - 3:00 PM",
    assistant: "Yasir Khan",
    contact: "+92 333 8877155",
  },
  {
    id: 22,
    name: "Dr. Samina Akhtar",
    qualification: "MBBS, FCPS (Rheumatology)",
    specialization: "Rheumatology",
    department: "Joint Care",
    experience: "8+ Years",
    availability: "Mon, Wed, Fri",
    timing: "2:00 PM - 6:00 PM",
    assistant: "Asma Bibi",
    contact: "+92 333 8877155",
  },
];

const departments = [...new Set(doctors.map(d => d.department))];

export function OurTeam() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

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
            <Badge className="bg-white text-[#D62828] mb-4 px-4 py-2">Our Team</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our Expert Doctors
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Highly qualified medical professionals dedicated to your health and well-being
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by doctor name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p className="mt-4 text-gray-600">
            Showing {filteredDoctors.length} of {doctors.length} doctors
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden h-full border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-2xl bg-white">
                  {/* Doctor Image */}
                  <div className="relative h-48 bg-gradient-to-br from-[#D62828] to-[#B61F1F] overflow-hidden">
                    {doctor.image ? (
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="w-24 h-24 text-white/30" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-[#D62828]">
                        {doctor.experience}
                      </Badge>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {doctor.qualification}
                    </p>
                    <Badge className="bg-[#D62828] text-white mb-4">
                      {doctor.specialization}
                    </Badge>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-[#D62828]" />
                        <span>{doctor.availability}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-[#D62828]" />
                        <span>{doctor.timing}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="w-4 h-4 text-[#D62828]" />
                        <span>Assistant: {doctor.assistant}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-[#D62828]" />
                        <a href={`tel:${doctor.contact}`} className="hover:text-[#D62828]">
                          {doctor.contact}
                        </a>
                      </div>
                    </div>

                    <Link to="/appointment">
                      <Button className="w-full bg-[#D62828] hover:bg-[#B61F1F] text-white">
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No doctors found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
