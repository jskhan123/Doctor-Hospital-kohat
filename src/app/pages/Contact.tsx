import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Phone, MapPin, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Message sent successfully! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
            <Badge className="bg-white text-[#D62828] mb-4 px-4 py-2">Contact Us</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're here to help. Reach out to us anytime for assistance or inquiries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: Phone,
                title: "Phone",
                info: ["+92 333 8877155", "(0922) 510700"],
                color: "from-blue-500 to-blue-600",
                action: "tel:+923338877155"
              },
              {
                icon: MapPin,
                title: "Address",
                info: ["Near Police Line", "Hangu Road, Kohat, Pakistan"],
                color: "from-red-500 to-red-600",
                action: "#map"
              },
              {
                icon: Mail,
                title: "Email",
                info: ["info@doctorshospitalkohat.com", "support@doctorshospitalkohat.com"],
                color: "from-purple-500 to-purple-600",
                action: "mailto:info@doctorshospitalkohat.com"
              },
              {
                icon: Clock,
                title: "Working Hours",
                info: ["24/7 Emergency", "OPD: 8:00 AM - 8:00 PM"],
                color: "from-green-500 to-green-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-6 h-full border-2 hover:border-[#D62828] transition-all duration-300 hover:shadow-xl bg-white text-center group">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                  {item.info.map((text, idx) => (
                    item.action ? (
                      <a
                        key={idx}
                        href={item.action}
                        className="block text-gray-600 hover:text-[#D62828] transition-colors"
                      >
                        {text}
                      </a>
                    ) : (
                      <p key={idx} className="text-gray-600">{text}</p>
                    )
                  ))}
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-2 hover:border-[#D62828] transition-all duration-300 shadow-xl bg-white">
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
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

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-[#D62828] hover:bg-[#B61F1F] text-white h-14"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Google Map */}
              <Card className="overflow-hidden border-2 hover:border-[#D62828] transition-all duration-300 shadow-xl" id="map">
                <div className="h-[400px] bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.8!2d71.4!3d33.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzQ4LjAiTiA3McKwMjQnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Doctors Hospital Kohat Location"
                  />
                </div>
              </Card>

              {/* WhatsApp Contact */}
              <Card className="p-8 border-2 border-green-500 hover:border-green-600 transition-all duration-300 shadow-xl bg-gradient-to-br from-green-50 to-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">WhatsApp Support</h3>
                    <p className="text-gray-600">Get instant assistance</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Chat with us on WhatsApp for quick responses to your queries and appointment booking.
                </p>
                <a 
                  href="https://wa.me/923338877155" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white h-12">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-8 border-2 border-red-500 hover:border-red-600 transition-all duration-300 shadow-xl bg-gradient-to-br from-red-50 to-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">Emergency Hotline</h3>
                    <p className="text-gray-600">Available 24/7</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  For medical emergencies, call us immediately. Our emergency team is always ready.
                </p>
                <a href="tel:+923338877155">
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white h-12">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Emergency: +92 333 8877155
                  </Button>
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
