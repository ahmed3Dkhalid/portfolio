import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Software",
      icon: "fas fa-desktop",
      skills: [
        { name: "Blender", level: 90, icon: "fas fa-cube" },
        { name: "Adobe Animate", level: 85, icon: "fas fa-play-circle" },
        { name: "Adobe Premiere Pro", level: 80, icon: "fas fa-video" },
        { name: "Unreal Engine", level: 40, icon: "fas fa-gamepad", badge: "Learning" }
      ]
    },
    {
      title: "Creative Skills",
      icon: "fas fa-palette",
      skills: [
        { name: "3D Modeling", level: 95, icon: "fas fa-cubes" },
        { name: "Rigging", level: 85, icon: "fas fa-skeleton" },
        { name: "Texturing", level: 80, icon: "fas fa-brush" },
        { name: "Lighting & Rendering", level: 88, icon: "fas fa-lightbulb" },
        { name: "Storyboarding", level: 75, icon: "fas fa-film" },
        { name: "Composition", level: 82, icon: "fas fa-layer-group" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50 dark:bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for bringing creative visions to life through advanced 3D animation and digital storytelling
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              className="bg-card dark:bg-card rounded-2xl p-8 border border-border dark:border-border shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <i className={`${category.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-foreground dark:text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <i className={`${skill.icon} text-primary mr-3`}></i>
                        <span className="font-semibold text-foreground dark:text-foreground">{skill.name}</span>
                        {skill.badge && (
                          <span className="ml-2 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground dark:text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted dark:bg-muted rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Skills Tags */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-6">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Digital Sculpting",
              "Character Animation",
              "Motion Graphics",
              "Visual Effects",
              "3D Printing",
              "Game Development",
              "Virtual Reality",
              "Procedural Generation"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="skill-tag px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}