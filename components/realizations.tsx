'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { realizations } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Realizations() {
  return (
    <section id="realizations" className="py-20 bg-cool-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nasze realizacje
          </h2>
          <p className="text-xl text-muted-foreground">
            Zobacz przykłady naszych projektów i zrealizowanych instalacji
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {realizations.slice(0, 3).map((realization, index) => (
            <motion.div
              key={realization.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-cool-200">
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={realization.image}
                    alt={realization.title}
                    className="w-full h-full object-cover"
                  />
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/realizations"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Zobacz wszystkie realizacje
            <ExternalLink className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
