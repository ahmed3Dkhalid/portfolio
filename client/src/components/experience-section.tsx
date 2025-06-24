import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Motion Graphics Intern",
      company: "Goonj OTT (Telenor)",
      period: "July - October 2024",
      location: "Pakistan",
      type: "Internship",
      description: "Designed motion graphics for digital content, worked on social media campaigns, and aligned visuals with brand identity guidelines.",
      achievements: [
        "Created engaging motion graphics for OTT platform content",
        "Developed social media campaign visuals that increased engagement",
        "Collaborated with design team to maintain brand consistency",
        "Gained experience with professional design workflows"
      ],
      technologies: ["After Effects", "Premiere Pro", "Illustrator", "Brand Guidelines"],
      icon: "fas fa-video"
    }
  ];

  const education = {
    degree: "BS in Media Science",
    institution: "Bahria University",
    period: "2021 - 2025",
    graduated: "June 2025",
    focus: "Animation, storytelling, and digital filmmaking",
    gpa: "3.6/4.0",
    achievements: [
      "Specialized in digital media and animation",
      "Completed advanced coursework in 3D modeling and animation",
      "Developed expertise in visual storytelling techniques",
      "Participated in various multimedia projects and presentations"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-muted/50 dark:bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            Professional experience and academic background in digital media and animation
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground dark:text-foreground mb-8 flex items-center">
              <i className="fas fa-briefcase text-primary mr-3"></i>
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="bg-card dark:bg-card rounded-2xl p-6 border border-border dark:border-border shadow-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <i className={`${exp.icon} text-primary text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground dark:text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">{exp.period} • {exp.location}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                    {exp.type}
                  </span>
                </div>
                
                <p className="text-foreground/80 dark:text-foreground/80 mb-4">{exp.description}</p>
                
                <div className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1 text-sm"></i>
                      <span className="text-sm text-foreground/70 dark:text-foreground/70">{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted dark:bg-muted text-muted-foreground dark:text-muted-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Education Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground dark:text-foreground mb-8 flex items-center">
              <i className="fas fa-graduation-cap text-primary mr-3"></i>
              Education
            </h3>
            
            <motion.div 
              className="bg-card dark:bg-card rounded-2xl p-6 border border-border dark:border-border shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <i className="fas fa-university text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground dark:text-foreground">{education.degree}</h4>
                    <p className="text-primary font-medium">{education.institution}</p>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">{education.period}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-600 text-sm font-medium rounded-full">
                  Graduated
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-foreground/80 dark:text-foreground/80 mb-2">
                  <span className="font-semibold">Focus:</span> {education.focus}
                </p>
                <p className="text-foreground/80 dark:text-foreground/80">
                  <span className="font-semibold">GPA:</span> {education.gpa}
                </p>
              </div>
              
              <div className="space-y-2 mb-6">
                {education.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start">
                    <i className="fas fa-star text-primary mr-3 mt-1 text-sm"></i>
                    <span className="text-sm text-foreground/70 dark:text-foreground/70">{achievement}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-primary/10 dark:bg-primary/10 rounded-xl border border-primary/20">
                <h5 className="font-semibold text-foreground dark:text-foreground mb-2">Key Coursework</h5>
                <div className="grid grid-cols-2 gap-2 text-sm text-foreground/70 dark:text-foreground/70">
                  <div>• 3D Animation</div>
                  <div>• Digital Filmmaking</div>
                  <div>• Visual Effects</div>
                  <div>• Motion Graphics</div>
                  <div>• Storytelling</div>
                  <div>• Media Production</div>
                </div>
              </div>
            </motion.div>
            
            {/* Future Goals */}
            <motion.div 
              className="mt-8 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl p-6 border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground dark:text-foreground mb-3 flex items-center">
                <i className="fas fa-rocket text-primary mr-2"></i>
                Currently Learning
              </h4>
              <p className="text-foreground/80 dark:text-foreground/80 mb-3">
                Expanding skills in <span className="text-primary font-semibold">Unreal Engine</span> for real-time animation and game development, staying current with industry trends and emerging technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Unreal Engine", "Real-time Rendering", "Game Development", "VR/AR"].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}