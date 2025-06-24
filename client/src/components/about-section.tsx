import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Photo/Visual */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-72 h-72 rounded-xl bg-card dark:bg-card border border-border dark:border-border flex items-center justify-center shadow-2xl">
                  <i className="fas fa-user text-6xl text-primary"></i>
                </div>
              </motion.div>
              
              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                3D Expert
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                Creative
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Side - Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
                Creative and detail-oriented 3D Animator skilled in <span className="text-primary font-semibold">Blender</span> and <span className="text-primary font-semibold">Adobe Animate</span> with a strong foundation in modeling, rigging, texturing, and storytelling.
              </p>
              
              <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
                Graduated in <span className="text-primary font-semibold">Media Science</span> with a specialization in digital media and animation. Gained valuable industry experience through an internship at <span className="text-primary font-semibold">Telenor's Goonj OTT platform</span>.
              </p>
              
              <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
                Currently expanding my skillset by learning <span className="text-primary font-semibold">Unreal Engine</span> for real-time animation and game development, staying at the forefront of modern animation technology.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { number: "2024", label: "Graduate Year" },
                { number: "4+", label: "Projects Completed" },
                { number: "3", label: "Software Mastered" },
                { number: "1", label: "Industry Internship" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-card dark:bg-card rounded-xl border border-border dark:border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground dark:text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Education Highlight */}
            <motion.div 
              className="bg-primary/10 dark:bg-primary/10 rounded-xl p-6 border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-2">
                <i className="fas fa-graduation-cap text-primary mr-2"></i>
                Education
              </h3>
              <p className="text-foreground/80 dark:text-foreground/80">
                <span className="font-semibold">BS in Media Science</span><br/>
                Bahria University • Graduated June 2025<br/>
                <span className="text-sm text-muted-foreground dark:text-muted-foreground">
                  Focus on animation, storytelling, and digital filmmaking
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}