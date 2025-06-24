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
    { label: 'Visual Search', id: 'search' },
    { label: 'Products', id: 'products' },
    { label: 'About Us', id: 'about' }
  ];

  const supportLinks = [
    { label: 'Help Center', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' }
  ];

  const socialLinks = [
    { icon: 'fab fa-twitter', href: '#', label: 'Twitter' },
    { icon: 'fab fa-facebook', href: '#', label: 'Facebook' },
    { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
    { icon: 'fab fa-linkedin', href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              className="flex items-center space-x-2 mb-6 cursor-pointer"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-search text-2xl text-primary"></i>
              <span className="text-xl font-bold">VisualFind</span>
            </motion.div>
            <p className="text-gray-300 mb-6 max-w-md">
              Revolutionizing product discovery through advanced visual search technology. 
              Find exactly what you're looking for with just an image.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-primary transition-colors text-left"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300">&copy; 2024 VisualFind. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
