import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left Side - Text Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-black text-foreground dark:text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Syed<br/>
              <span className="text-primary neon-glow">Ahmed</span>
            </motion.h1>
            
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 dark:text-foreground/80 mb-4">
                3D Animator | Media Science Graduate
              </h2>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground">
                Rawalpindi, Pakistan
              </p>
            </motion.div>
            
            <motion.p 
              className="text-xl text-foreground/70 dark:text-foreground/70 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Creative and detail-oriented 3D Animator skilled in Blender and Adobe Animate with expertise in modeling, rigging, and storytelling.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg"
                size="lg"
              >
                <i className="fas fa-play mr-2"></i>
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold text-lg"
                size="lg"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get In Touch
              </Button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex justify-center lg:justify-start space-x-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {[
                { icon: "fab fa-linkedin", href: "#", label: "LinkedIn" },
                { icon: "fab fa-behance", href: "#", label: "Behance" },
                { icon: "fab fa-artstation", href: "#", label: "ArtStation" },
                { icon: "fab fa-instagram", href: "#", label: "Instagram" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground dark:text-muted-foreground hover:text-primary transition-colors text-2xl"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Side - 3D Visual */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center floating-animation"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-lg bg-card dark:bg-card border border-border dark:border-border flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fas fa-cube text-8xl md:text-9xl text-primary"></i>
                </motion.div>
              </motion.div>
              
              {/* Floating Elements */}
              {[
                { icon: "fas fa-cubes", delay: 0, x: -40, y: -60 },
                { icon: "fas fa-palette", delay: 1, x: 60, y: -40 },
                { icon: "fas fa-video", delay: 2, x: -60, y: 60 },
                { icon: "fas fa-magic", delay: 3, x: 40, y: 80 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute w-16 h-16 bg-primary/10 dark:bg-primary/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/20"
                  style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)` }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                >
                  <i className={`${item.icon} text-primary text-xl`}></i>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center text-muted-foreground dark:text-muted-foreground">
            <span className="text-sm mb-2">Scroll Down</span>
            <i className="fas fa-chevron-down text-xl"></i>
          </div>
        </motion.div>
      </div>
    </section>
  );
}