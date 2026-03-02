'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { realizations } from '@/lib/data';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Wszystkie');
  const [selectedRealization, setSelectedRealization] = useState<typeof realizations[0] | null>(null);

  const categories = ['Wszystkie', ...Array.from(new Set(realizations.map((r) => r.category)))];

  const filteredRealizations =
    selectedCategory === 'Wszystkie'
      ? realizations
      : realizations.filter((r) => r.category === selectedCategory);

  const handlePrevious = () => {
    const currentIndex = realizations.findIndex((r) => r.id === selectedRealization?.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : realizations.length - 1;
    setSelectedRealization(realizations[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = realizations.findIndex((r) => r.id === selectedRealization?.id);
    const nextIndex = currentIndex < realizations.length - 1 ? currentIndex + 1 : 0;
    setSelectedRealization(realizations[nextIndex]);
  };

  return (
    <>
      {/* Category Filter */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-white text-foreground hover:bg-warm-100 border border-warm-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRealizations.map((realization, index) => (
          <motion.div
            key={realization.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <Card
              className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-warm-200"
              onClick={() => setSelectedRealization(realization)}
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-warm-200 to-warm-300 flex items-center justify-center relative">
                <Tag className="h-12 w-12 text-warm-600 opacity-50" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                  {realization.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                  {realization.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {realization.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedRealization && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedRealization(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-warm-200">
                <span className="text-sm font-medium text-muted-foreground">
                  {selectedRealization.category}
                </span>
                <button
                  onClick={() => setSelectedRealization(null)}
                  className="p-2 hover:bg-warm-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-warm-200 to-warm-300 flex items-center justify-center">
                <Tag className="h-24 w-24 text-warm-600 opacity-50" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {selectedRealization.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedRealization.description}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between p-4 border-t border-warm-200 bg-warm-50">
                <button
                  onClick={handlePrevious}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-white rounded-lg transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Poprzednia
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-white rounded-lg transition-colors"
                >
                  Następna
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
