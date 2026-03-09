'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { services } from '@/lib/data';
import { Flame, Wrench, RefreshCw, Thermometer, Sun, Droplets } from 'lucide-react';

const iconMap = {
  Flame,
  Wrench,
  RefreshCw,
  Thermometer,
  Sun,
  Droplets,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-cool-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nasze usługi
          </h2>
          <p className="text-xl text-muted-foreground">
            Kompleksowe rozwiązania grzewcze dla domu i firmy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-cool-200 group">
                  <div className="flex flex-col h-full">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      {Icon && <Icon className="h-8 w-8 text-primary" />}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Potrzebujesz pomocy z czymś innym?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Skontaktuj się z nami
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
