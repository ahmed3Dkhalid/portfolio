import { motion } from "framer-motion";
import VisualSearch from "./visual-search";

export default function HeroSection() {
  const categoryTiles = [
    {
      icon: "fas fa-tshirt",
      title: "Fashion",
      color: "text-primary"
    },
    {
      icon: "fas fa-home",
      title: "Home & Decor",
      color: "text-amber-500"
    },
    {
      icon: "fas fa-laptop",
      title: "Electronics",
      color: "text-green-500"
    },
    {
      icon: "fas fa-heart",
      title: "Lifestyle",
      color: "text-pink-500"
    }
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-16">
      {/* Parallax Background */}
      <div className="absolute inset-0 parallax-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50"></div>
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.2) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)`
          }}
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Products<br/>
            <span className="text-primary">Through Vision</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Skip the keywords. Upload an image and find exactly what you're looking for with our advanced visual search technology.
          </motion.p>
        </motion.div>
        
        {/* Visual Search Upload Zone */}
        <motion.div 
          className="max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <VisualSearch />
        </motion.div>
        
        {/* Quick Category Tiles */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {categoryTiles.map((category, index) => (
            <motion.div
              key={index}
              className="product-card bg-white rounded-xl p-6 text-center shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <i className={`${category.icon} text-3xl ${category.color} mb-4`}></i>
              <h4 className="font-semibold text-gray-900">{category.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
