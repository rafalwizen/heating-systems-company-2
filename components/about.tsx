'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Award, Clock, Shield, Users } from 'lucide-react';
import { companyData } from '@/lib/data';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Doświadczenie',
      description: 'Ponad 15 lat w branży grzewczej',
    },
    {
      icon: Clock,
      title: 'Terminowość',
      description: 'Realizujemy projekty zgodnie z planem',
    },
    {
      icon: Shield,
      title: 'Gwarancja',
      description: 'Na wszystkie usługi udzielamy gwarancji',
    },
    {
      icon: Users,
      title: 'Zespół ekspertów',
      description: 'Certyfikowani fachowcy z uprawnieniami',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O nas
          </h2>
          <p className="text-xl text-muted-foreground">
            {companyData.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-cool-50 border-cool-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 bg-gradient-to-br from-primary to-secondary text-primary-foreground border-0">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Nasza misja</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Zapewniamy naszym klientom kompleksowe i profesjonalne usługi
                grzewcze. Każdy projekt traktujemy indywidualnie, dbając o najwyższą
                jakość wykonania i zadowolenie klienta. Dążymy do tworzenia
                efektywnych i ekologicznych rozwiązań grzewczych.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
