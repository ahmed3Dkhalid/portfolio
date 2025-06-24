import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage";
import { insertProductSchema, insertVisualSearchSchema } from "@shared/schema";
import { z } from "zod";

const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all products
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  // Get products by category
  app.get("/api/products/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const products = await storage.getProductsByCategory(category);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products by category" });
    }
  });

  // Get single product
  app.get("/api/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid product ID" });
      }
      
      const product = await storage.getProduct(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  // Create new product
  app.post("/api/products", async (req, res) => {
    try {
      const validatedProduct = insertProductSchema.parse(req.body);
      const product = await storage.createProduct(validatedProduct);
      res.status(201).json(product);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid product data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create product" });
    }
  });

  // Visual search endpoint
  app.post("/api/visual-search", upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No image file provided" });
      }

      // In a real implementation, you would:
      // 1. Save the uploaded image to cloud storage
      // 2. Use AI/ML service for image analysis
      // 3. Match against product database using visual features
      
      // For now, we'll create a mock image URL and return similar products
      const mockImageUrl = `https://example.com/uploads/${Date.now()}-${req.file.originalname}`;
      
      const searchResults = await storage.searchProductsByVisual(mockImageUrl);
      
      // Save the search for analytics
      const visualSearch = await storage.createVisualSearch({
        imageUrl: mockImageUrl,
        searchResults: JSON.stringify(searchResults.map(p => p.id)),
        timestamp: Date.now(),
      });

      res.json({
        searchId: visualSearch.id,
        results: searchResults,
        message: "Visual search completed successfully"
      });
    } catch (error) {
      console.error('Visual search error:', error);
      res.status(500).json({ message: "Visual search failed" });
    }
  });

  // Get visual search history
  app.get("/api/visual-searches", async (req, res) => {
    try {
      const searches = await storage.getVisualSearches();
      res.json(searches);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch search history" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
