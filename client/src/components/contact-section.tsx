import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "Saabkz456@gmail.com",
      href: "mailto:Saabkz456@gmail.com"
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "0315-5300073",
      href: "tel:+923155300073"
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Location",
      value: "Rawalpindi, Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-linkedin", href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: "fab fa-behance", href: "#", label: "Behance", color: "hover:text-blue-500" },
    { icon: "fab fa-artstation", href: "#", label: "ArtStation", color: "hover:text-blue-400" },
    { icon: "fab fa-instagram", href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: "fab fa-github", href: "#", label: "GitHub", color: "hover:text-gray-600" }
  ];

  return (
    <section id="contact" className="py-20 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your creative vision to life? Get in touch and let's discuss your next animation project
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card dark:bg-card rounded-2xl p-8 border border-border dark:border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground dark:text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground dark:text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground dark:text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground dark:text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Discussion"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground dark:text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground dark:text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center p-4 bg-card dark:bg-card rounded-xl border border-border dark:border-border hover:border-primary transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-12 h-12 bg-primary/10 dark:bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                        <i className={`${info.icon} text-primary text-xl`}></i>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">{info.label}</p>
                        <p className="font-medium text-foreground dark:text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground dark:text-foreground mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-card dark:bg-card border border-border dark:border-border rounded-xl flex items-center justify-center text-muted-foreground dark:text-muted-foreground transition-all ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <i className={`${social.icon} text-xl`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
              
              {/* Availability Status */}
              <motion.div 
                className="bg-gradient-to-r from-green-500/20 to-primary/20 rounded-2xl p-6 border border-green-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <h4 className="text-lg font-semibold text-foreground dark:text-foreground">Available for Projects</h4>
                </div>
                <p className="text-foreground/80 dark:text-foreground/80 text-sm">
                  Currently accepting new animation projects and collaborations. Let's create something amazing together!
                </p>
              </motion.div>
              
              {/* Response Time */}
              <div className="bg-card dark:bg-card rounded-xl p-4 border border-border dark:border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <i className="fas fa-clock text-primary mr-2"></i>
                    <span className="font-medium text-foreground dark:text-foreground">Response Time</span>
                  </div>
                  <span className="text-sm text-muted-foreground dark:text-muted-foreground">Within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}