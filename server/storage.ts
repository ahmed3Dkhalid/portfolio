import { users, products, visualSearches, type User, type InsertUser, type Product, type InsertProduct, type VisualSearch, type InsertVisualSearch } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  searchProductsByVisual(imageUrl: string): Promise<Product[]>;
  
  createVisualSearch(search: InsertVisualSearch): Promise<VisualSearch>;
  getVisualSearches(): Promise<VisualSearch[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private visualSearches: Map<number, VisualSearch>;
  private currentUserId: number;
  private currentProductId: number;
  private currentSearchId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.visualSearches = new Map();
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentSearchId = 1;
    
    // Initialize with sample products
    this.initializeProducts();
  }

  private initializeProducts() {
    const sampleProducts: InsertProduct[] = [
      // Fashion Products
      {
        name: "Elegant Evening Dress",
        description: "Classic black dress perfect for special occasions",
        price: "129.99",
        category: "fashion",
        imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.8",
        inStock: true,
      },
      {
        name: "Classic White Sneakers",
        description: "Comfortable daily wear sneakers",
        price: "89.99",
        category: "fashion",
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.6",
        inStock: true,
      },
      {
        name: "Designer Sunglasses",
        description: "Premium UV protection eyewear",
        price: "199.99",
        category: "fashion",
        imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.9",
        inStock: true,
      },
      {
        name: "Classic Denim Jacket",
        description: "Timeless casual outerwear",
        price: "69.99",
        category: "fashion",
        imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.5",
        inStock: true,
      },
      {
        name: "Leather Handbag",
        description: "Premium leather craftsmanship",
        price: "159.99",
        category: "fashion",
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.7",
        inStock: true,
      },
      {
        name: "Silk Designer Scarf",
        description: "Luxurious silk accessory",
        price: "79.99",
        category: "fashion",
        imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.8",
        inStock: true,
      },
      
      // Home Decor Products
      {
        name: "Modern Table Lamp",
        description: "Geometric design with warm LED",
        price: "89.99",
        category: "home",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.6",
        inStock: true,
      },
      {
        name: "Ceramic Vase",
        description: "Handcrafted ceramic centerpiece",
        price: "45.99",
        category: "home",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.8",
        inStock: true,
      },
      {
        name: "Throw Pillow Set",
        description: "Soft velvet decorative pillows",
        price: "39.99",
        category: "home",
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.5",
        inStock: true,
      },
      {
        name: "Abstract Wall Art",
        description: "Contemporary canvas print",
        price: "149.99",
        category: "home",
        imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.7",
        inStock: true,
      },
      {
        name: "Luxury Candle Set",
        description: "Aromatherapy soy candles",
        price: "59.99",
        category: "home",
        imageUrl: "https://images.unsplash.com/photo-1602874801006-8fef5793de5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.9",
        inStock: true,
      },
      {
        name: "Boho Area Rug",
        description: "Handwoven vintage pattern",
        price: "129.99",
        category: "home",
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.6",
        inStock: true,
      },
      
      // Electronics Products
      {
        name: "Wireless Headphones",
        description: "Noise-cancelling audio experience",
        price: "299.99",
        category: "electronics",
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.8",
        inStock: true,
      },
      {
        name: "Latest Smartphone",
        description: "Advanced camera and performance",
        price: "799.99",
        category: "electronics",
        imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.7",
        inStock: true,
      },
      {
        name: "Fitness Smartwatch",
        description: "Health monitoring and GPS",
        price: "399.99",
        category: "electronics",
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.6",
        inStock: true,
      },
      {
        name: "Bluetooth Speaker",
        description: "Portable premium sound",
        price: "149.99",
        category: "electronics",
        imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.5",
        inStock: true,
      },
      
      // Lifestyle Products
      {
        name: "Premium Yoga Mat",
        description: "Non-slip eco-friendly material",
        price: "79.99",
        category: "lifestyle",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.8",
        inStock: true,
      },
      {
        name: "Insulated Water Bottle",
        description: "24-hour temperature retention",
        price: "34.99",
        category: "lifestyle",
        imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.7",
        inStock: true,
      },
      {
        name: "Essential Oils Set",
        description: "Pure aromatherapy collection",
        price: "49.99",
        category: "lifestyle",
        imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.9",
        inStock: true,
      },
      {
        name: "Artisan Coffee Mug",
        description: "Handcrafted ceramic design",
        price: "24.99",
        category: "lifestyle",
        imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        rating: "4.6",
        inStock: true,
      },
    ];

    sampleProducts.forEach(product => {
      this.createProduct(product);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async searchProductsByVisual(imageUrl: string): Promise<Product[]> {
    // Mock visual search - return random products for demo
    const allProducts = Array.from(this.products.values());
    const shuffled = allProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  }

  async createVisualSearch(insertSearch: InsertVisualSearch): Promise<VisualSearch> {
    const id = this.currentSearchId++;
    const search: VisualSearch = { ...insertSearch, id };
    this.visualSearches.set(id, search);
    return search;
  }

  async getVisualSearches(): Promise<VisualSearch[]> {
    return Array.from(this.visualSearches.values());
  }
}

export const storage = new MemStorage();
