import { motion } from "framer-motion";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProductGrid from "@/components/product-grid";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <ProductGrid />
        
        {/* Visual Search Features Section */}
        <section id="search" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Visual Search Works</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Our AI-powered visual recognition technology makes finding products effortless</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: "fas fa-camera",
                  title: "1. Upload Image",
                  description: "Simply drag and drop or click to upload any image from your device or camera",
                  color: "text-primary"
                },
                {
                  icon: "fas fa-brain",
                  title: "2. AI Analysis",
                  description: "Our advanced AI analyzes colors, shapes, patterns, and features to understand your image",
                  color: "text-amber-500"
                },
                {
                  icon: "fas fa-magic",
                  title: "3. Find Matches",
                  description: "Get instant results with visually similar products ranked by relevance and quality",
                  color: "text-green-500"
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                    <i className={`${step.icon} text-3xl ${step.color}`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Demo Section */}
            <motion.div 
              className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Try Visual Search Demo</h3>
                  <p className="text-gray-600 mb-8">Experience the power of visual search with our interactive demo. See how quickly you can find products using just an image.</p>
                  
                  <div className="space-y-4">
                    {[
                      "Instant visual recognition",
                      "Smart similarity matching",
                      "Real-time results"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button 
                    className="mt-8 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-play mr-2"></i>
                    Launch Demo
                  </motion.button>
                </div>
                
                <div className="relative">
                  <div className="bg-gray-100 rounded-2xl p-6 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-600">Visual Search Demo</span>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" 
                        alt="Sample sneaker for visual search demo" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="text-center">
                      <div className="animate-pulse-gentle">
                        <i className="fas fa-search text-2xl text-primary mb-2"></i>
                        <p className="text-sm text-gray-600">Analyzing image...</p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="absolute -bottom-4 -right-4 bg-primary text-white rounded-full p-4 shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <i className="fas fa-robot text-xl"></i>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
}
