'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Gallery from '@/components/gallery';
import { realizations } from '@/lib/data';

export default function RealizacjePage() {
  // Get unique categories
  const categories = Array.from(new Set(realizations.map((r) => r.category)));

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Header */}
      <section className="py-20 bg-white border-b border-warm-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link href="/">
              <Button variant="ghost" className="mb-6 text-primary hover:text-primary/80">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Powrót do strony głównej
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nasze realizacje
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Zobacz przykłady naszych projektów i zrealizowanych instalacji
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-warm-100 text-warm-800 rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Gallery />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Chcesz, by Twoja instalacja była kolejną realizacją?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Skontaktuj się z nami, a przygotujemy bezpłatną wycenę dla Twojego projektu
            </p>
            <Link href="/#contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                Skontaktuj się z nami
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
