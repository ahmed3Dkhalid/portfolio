import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import donutVideo from "@assets/0001-0200_1753452735033.mp4";
import mobileVideo from "@assets/video_1753452720213.mp4";

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  category: string;
  image?: string;
  video?: string;
  features: string[];
}

export default function PortfolioSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "3D Donut Animation",
      description: "Stylized donut animation featuring advanced physics simulation, realistic lighting setup, and dynamic material properties. Created using Blender's Cycles engine.",
      tools: ["Blender", "Cycles Renderer", "Physics Simulation"],
      category: "3D Animation",
      video: donutVideo,
      features: ["Physics Simulation", "Realistic Lighting", "Material Design"]
    },
    {
      id: 2,
      title: "3D Character Design",
      description: "Realistic humanoid character model featuring detailed sculpting, complete rigging system, and facial animation controls. Demonstrates advanced character creation workflow.",
      tools: ["Blender", "Sculpting", "Rigging"],
      category: "Character Design",
      image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Digital Sculpting", "Rigging System", "Facial Animation"]
    },
    {
      id: 3,
      title: "2D Animated Short",
      description: "Character-driven animated short featuring lip sync, audio timing, and smooth character animation. Showcases storytelling through animation principles.",
      tools: ["Adobe Animate", "Audio Sync", "Character Animation"],
      category: "2D Animation",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Lip Sync", "Audio Timing", "Character Animation"]
    },
    {
      id: 4,
      title: "Mobile Animation",
      description: "Creative mobile device animation showcasing smooth motion graphics and interface transitions. Demonstrates expertise in modern digital animation techniques.",
      tools: ["Motion Graphics", "Interface Design", "Animation Principles"],
      category: "Motion Graphics",
      video: mobileVideo,
      features: ["Interface Animation", "Motion Design", "Digital Graphics"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            A showcase of creative projects demonstrating technical expertise and artistic vision in 3D animation and digital media
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="portfolio-card rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Media */}
              <div className="relative overflow-hidden h-64">
                {project.video ? (
                  <motion.video
                    src={project.video}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                
                {/* Video Indicator */}
                {project.video && (
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <i className="fas fa-play text-white text-sm"></i>
                    </div>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white text-black hover:bg-gray-100 font-semibold">
                    <i className={`fas ${project.video ? 'fa-play' : 'fa-eye'} mr-2`}></i>
                    {project.video ? 'Watch Video' : 'View Project'}
                  </Button>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground dark:text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground dark:text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-2 py-1 bg-muted dark:bg-muted text-muted-foreground dark:text-muted-foreground text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Tools Used */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-3 py-1 bg-primary/10 dark:bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fas fa-external-link-alt text-muted-foreground dark:text-muted-foreground hover:text-primary transition-colors cursor-pointer"></i>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Projects */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold text-lg"
            size="lg"
          >
            <i className="fas fa-folder-open mr-2"></i>
            View All Projects
          </Button>
        </motion.div>
        
        {/* Skills Highlight */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: "fas fa-cube",
              title: "3D Modeling",
              description: "Creating detailed and optimized 3D models with proper topology and UV mapping"
            },
            {
              icon: "fas fa-magic",
              title: "Animation",
              description: "Bringing characters and objects to life with smooth, realistic motion"
            },
            {
              icon: "fas fa-eye",
              title: "Visual Storytelling",
              description: "Crafting compelling narratives through visual composition and timing"
            }
          ].map((skill, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className={`${skill.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">{skill.title}</h3>
              <p className="text-muted-foreground dark:text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}