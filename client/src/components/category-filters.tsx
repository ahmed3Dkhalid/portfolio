import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { CategoryType, CategoryInfo } from "@/lib/types";

interface CategoryFiltersProps {
  activeCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

const categories: CategoryInfo[] = [
  { id: 'all', name: 'All Products', icon: 'fas fa-th', color: 'bg-primary text-white' },
  { id: 'fashion', name: 'Fashion', icon: 'fas fa-tshirt', color: 'bg-gray-100 text-gray-700' },
  { id: 'home', name: 'Home & Decor', icon: 'fas fa-home', color: 'bg-gray-100 text-gray-700' },
  { id: 'electronics', name: 'Electronics', icon: 'fas fa-laptop', color: 'bg-gray-100 text-gray-700' },
  { id: 'lifestyle', name: 'Lifestyle', icon: 'fas fa-heart', color: 'bg-gray-100 text-gray-700' },
];

export default function CategoryFilters({ activeCategory, onCategoryChange }: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.div key={category.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeCategory === category.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            variant="ghost"
          >
            <i className={`${category.icon} mr-2`}></i>
            {category.name}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
