import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import ProductCard from "./product-card";
import CategoryFilters from "./category-filters";
import { Button } from "@/components/ui/button";
import type { Product, CategoryType } from "@/lib/types";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [displayCount, setDisplayCount] = useState(8);

  const { data: products = [], isLoading, error } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return products;
    }
    return products.filter(product => product.category === activeCategory);
  }, [products, activeCategory]);

  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, displayCount);
  }, [filteredProducts, displayCount]);

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 8);
  };

  const handleCategoryChange = (category: CategoryType) => {
    setActiveCategory(category);
    setDisplayCount(8); // Reset display count when category changes
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
              <p className="text-gray-600">Loading amazing products...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600 mb-4">Failed to load products</p>
            <Button onClick={() => window.location.reload()} variant="outline">
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Discoveries</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore trending products found through visual search</p>
        </motion.div>
        
        {/* Filter Tabs */}
        <CategoryFilters 
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        
        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {displayedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Load More Button */}
        {displayedProducts.length < filteredProducts.length && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={handleLoadMore}
              className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all hover:shadow-lg"
            >
              <i className="fas fa-plus mr-2"></i>
              Load More Products
            </Button>
          </motion.div>
        )}
        
        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
            <p className="text-gray-600">Try selecting a different category or upload an image for visual search.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
