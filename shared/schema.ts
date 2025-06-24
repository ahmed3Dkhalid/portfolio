import { pgTable, text, serial, integer, boolean, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  rating: decimal("rating", { precision: 2, scale: 1 }).notNull(),
  inStock: boolean("in_stock").default(true),
});

export const visualSearches = pgTable("visual_searches", {
  id: serial("id").primaryKey(),
  imageUrl: text("image_url").notNull(),
  searchResults: text("search_results").notNull(), // JSON string of product IDs
  timestamp: integer("timestamp").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export const insertVisualSearchSchema = createInsertSchema(visualSearches).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type VisualSearch = typeof visualSearches.$inferSelect;
export type InsertVisualSearch = z.infer<typeof insertVisualSearchSchema>;
