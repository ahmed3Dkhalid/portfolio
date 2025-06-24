import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Loader2, Upload, Camera, X } from "lucide-react";
import ProductCard from "./product-card";
import type { VisualSearchResult } from "@/lib/types";

export default function VisualSearch() {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<VisualSearchResult | null>(null);
  const { toast } = useToast();

  const visualSearchMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('image', file);
      
      const response = await apiRequest('POST', '/api/visual-search', formData);
      return await response.json() as VisualSearchResult;
    },
    onSuccess: (data) => {
      setSearchResults(data);
      toast({
        title: "Search Complete!",
        description: `Found ${data.results.length} similar products`,
      });
    },
    onError: (error) => {
      toast({
        title: "Search Failed",
        description: error.message || "Failed to process visual search",
        variant: "destructive",
      });
    },
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setSearchResults(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
    onDropRejected: (rejectedFiles) => {
      const error = rejectedFiles[0]?.errors[0];
      toast({
        title: "Upload Failed",
        description: error?.message || "Invalid file format or size",
        variant: "destructive",
      });
    }
  });

  const handleSearch = () => {
    if (uploadedImage) {
      visualSearchMutation.mutate(uploadedImage);
    }
  };

  const clearImage = () => {
    setUploadedImage(null);
    setImagePreview(null);
    setSearchResults(null);
  };

  return (
    <div className="space-y-8">
      {/* Upload Zone */}
      <motion.div
        {...getRootProps()}
        className={`upload-zone rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
          isDragActive ? 'drag-over border-amber-500 bg-amber-50' : 'border-gray-300 hover:border-primary hover:bg-blue-50'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <input {...getInputProps()} />
        
        <AnimatePresence mode="wait">
          {imagePreview ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative"
            >
              <img
                src={imagePreview}
                alt="Uploaded preview"
                className="max-w-full max-h-64 mx-auto rounded-lg shadow-lg"
              />
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  clearImage();
                }}
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
              >
                <X className="h-4 w-4" />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6"
              >
                <Upload className="h-16 w-16 text-gray-400 mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {isDragActive ? "Drop Your Image Here" : "Drop Your Image Here"}
              </h3>
              <p className="text-gray-600 mb-6">Or click to browse and upload from your device</p>
              <Button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                <Camera className="mr-2 h-4 w-4" />
                Choose Image
              </Button>
              <p className="text-sm text-gray-500 mt-4">Supports JPG, PNG, WebP up to 10MB</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Search Button */}
      <AnimatePresence>
        {uploadedImage && !searchResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <Button
              onClick={handleSearch}
              disabled={visualSearchMutation.isPending}
              className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all text-lg"
            >
              {visualSearchMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing Image...
                </>
              ) : (
                <>
                  <i className="fas fa-search mr-2"></i>
                  Search Similar Products
                </>
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results */}
      <AnimatePresence>
        {searchResults && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Found {searchResults.results.length} Similar Products
              </h3>
              <p className="text-gray-600">Here are the best matches for your image</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchResults.results.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Button
                onClick={clearImage}
                variant="outline"
                className="px-6 py-3 rounded-full"
              >
                <i className="fas fa-redo mr-2"></i>
                Search Another Image
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
