import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="product-card bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer border-0">
        <div className="relative overflow-hidden">
          <motion.img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
          </motion.div>
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}
        </div>
        
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 mb-2 text-lg">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-primary font-bold text-xl">${product.price}</span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
            </div>
          </div>
          
          <Button 
            className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
            disabled={!product.inStock}
          >
            {product.inStock ? "View Details" : "Out of Stock"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
