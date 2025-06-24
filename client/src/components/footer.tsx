import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'fab fa-behance', href: '#', label: 'Behance' },
    { icon: 'fab fa-artstation', href: '#', label: 'ArtStation' },
    { icon: 'fab fa-instagram', href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-card dark:bg-card border-t border-border dark:border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1 md:col-span-1">
            <motion.div 
              className="flex items-center space-x-2 mb-6 cursor-pointer"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-cube text-2xl text-primary"></i>
              <span className="text-xl font-bold text-foreground dark:text-foreground">Syed Ahmed</span>
            </motion.div>
            <p className="text-muted-foreground dark:text-muted-foreground mb-6 max-w-md">
              Creative 3D Animator and Media Science graduate passionate about bringing stories to life through innovative animation and visual storytelling.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground dark:text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground dark:text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground dark:text-muted-foreground hover:text-primary transition-colors text-left"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground dark:text-foreground mb-6">Contact Info</h4>
            <div className="space-y-3 text-muted-foreground dark:text-muted-foreground">
              <div className="flex items-center">
                <i className="fas fa-envelope text-primary mr-3"></i>
                <a href="mailto:Saabkz456@gmail.com" className="hover:text-primary transition-colors">
                  Saabkz456@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-primary mr-3"></i>
                <a href="tel:+923155300073" className="hover:text-primary transition-colors">
                  0315-5300073
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-primary mr-3"></i>
                <span>Rawalpindi, Pakistan</span>
              </div>
            </div>
            
            <motion.div 
              className="mt-6 p-4 bg-primary/10 dark:bg-primary/10 rounded-xl border border-primary/20"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-foreground dark:text-foreground">Available for Projects</span>
              </div>
              <p className="text-xs text-muted-foreground dark:text-muted-foreground">
                Open to new animation opportunities and collaborations
              </p>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-border dark:border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground dark:text-muted-foreground text-sm">
            &copy; 2024 Syed Ahmed. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6 text-sm text-muted-foreground dark:text-muted-foreground">
            <span>Built with passion for animation</span>
            <span>•</span>
            <span>Made in Pakistan 🇵🇰</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
