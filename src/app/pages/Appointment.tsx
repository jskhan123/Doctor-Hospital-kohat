import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Calendar, Phone, User, Stethoscope, Clock, MessageSquare, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const departments = [
  "Cardiology",
  "General Medicine",
  "General Surgery",
  "Orthopedics",
  "Pediatrics",
  "Gynecology & Obstetrics",
  "ENT",
  "Dermatology",
  "Neurology",
  "Urology",
  "Gastroenterology",
  "Emergency Medicine",
];

const doctors = {
  "Cardiology": ["Dr. Hafeez Orakzai"],
  "General Medicine": ["Dr. Ayesha Khan", "Dr. Shazia Bibi"],
  "General Surgery": ["Dr. Muhammad Akram"],
  "Orthopedics": ["Dr. Imran Shah"],
  "Pediatrics": ["Dr. Fatima Noor"],
  "Gynecology & Obstetrics": ["Dr. Sarah Ahmed"],
  "ENT": ["Dr. Zahid Hussain"],
  "Dermatology": ["Dr. Nadia Iqbal"],
  "Neurology": ["Dr. Ali Raza"],
  "Urology": ["Dr. Asad Mahmood"],
  "Gastroenterology": ["Dr. Kamran Afridi"],
  "Emergency Medicine": ["Dr. Waqar Ahmed"],
};

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
];

export function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.department || !formData.doctor || !formData.date || !formData.time) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Show success message
    setIsSubmitted(true);
    toast.success("Appointment booked successfully! We will contact you shortly.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Reset doctor if department changes
    if (field === "department") {
      setFormData(prev => ({ ...prev, doctor: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F7FA] to-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <Card className="p-12 border-2 border-[#D62828] shadow-2xl">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
              Appointment Booked Successfully!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for choosing Doctors Hospital Kohat. Our team will contact you shortly to confirm your appointment.
            </p>
            <div className="bg-[#F5F7FA] rounded-lg p-6 mb-6 text-left">
              <h3 className="font-bold text-[#D62828] mb-4">Your Appointment Details:</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Department:</strong> {formData.department}</p>
                <p><strong>Doctor:</strong> {formData.doctor}</p>
                <p><strong>Date:</strong> {formData.date}</p>
                <p><strong>Time:</strong> {formData.time}</p>
              </div>
            </div>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              className="bg-[#D62828] hover:bg-[#B61F1F] text-white"
            >
              Book Another Appointment
            </Button>
          </Card>
        </motion.div>
      </div>
    );
  }

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
            <Badge className="bg-white text-[#D62828] mb-4 px-4 py-2">Book Appointment</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Schedule Your Visit
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Book an appointment with our expert doctors at your convenience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 border-2 hover:border-[#D62828] transition-all duration-300 shadow-2xl bg-white">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">
                Book Your Appointment
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Patient Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#D62828]" />
                    Patient Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#D62828]" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+92 XXX XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                {/* Department Selection */}
                <div className="space-y-2">
                  <Label htmlFor="department" className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-[#D62828]" />
                    Department *
                  </Label>
                  <Select value={formData.department} onValueChange={(value) => handleChange("department", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map(dept => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Doctor Selection */}
                {formData.department && (
                  <div className="space-y-2">
                    <Label htmlFor="doctor" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#D62828]" />
                      Select Doctor *
                    </Label>
                    <Select value={formData.doctor} onValueChange={(value) => handleChange("doctor", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors[formData.department as keyof typeof doctors]?.map(doc => (
                          <SelectItem key={doc} value={doc}>{doc}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Date Selection */}
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D62828]" />
                    Preferred Date *
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="h-12"
                  />
                </div>

                {/* Time Selection */}
                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D62828]" />
                    Preferred Time *
                  </Label>
                  <Select value={formData.time} onValueChange={(value) => handleChange("time", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map(slot => (
                        <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#D62828]" />
                    Additional Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Any specific concerns or requirements..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#D62828] hover:bg-[#B61F1F] text-white h-14 text-lg"
                >
                  Book Appointment
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t">
                <p className="text-center text-gray-600 mb-4">
                  For immediate assistance, call us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="tel:+923338877155" className="flex items-center gap-2 text-[#D62828] font-semibold hover:underline">
                    <Phone className="w-5 h-5" />
                    +92 333 8877155
                  </a>
                  <span className="hidden sm:block text-gray-400">|</span>
                  <a href="tel:0922510700" className="flex items-center gap-2 text-[#D62828] font-semibold hover:underline">
                    <Phone className="w-5 h-5" />
                    (0922) 510700
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
