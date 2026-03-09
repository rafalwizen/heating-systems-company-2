'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flame } from 'lucide-react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';
      return /android|ipad|iphone|ipod/i.test(userAgent);
    };

    const mobile = checkMobile();

    const video = videoRef.current;
    if (!video) return;

    // On mobile, just show first frame
    if (mobile) {
      video.currentTime = 0;
      video.pause();
      return;
    }

    // On desktop, play backwards like before
    let animationFrameId: number;

    const playBackwards = () => {
      if (video.currentTime > 0) {
        video.currentTime -= 0.03; // Adjust this value to control playback speed
        animationFrameId = requestAnimationFrame(playBackwards);
      } else {
        // Pause when reaching the beginning
        video.pause();
      }
    };

    const initializeVideo = () => {
      // Set to the end of the video
      video.currentTime = video.duration || 0;
      // Start playing backwards immediately
      animationFrameId = requestAnimationFrame(playBackwards);
    };

    // Wait for video to be ready
    if (video.readyState >= 2) {
      // Video is already ready
      initializeVideo();
    } else {
      // Wait for video to be ready
      video.addEventListener('canplay', () => {
        initializeVideo();
      }, { once: true });
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        webkit-playsinline
      >
        <source src="/images/hero_main.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
              <Flame className="h-10 w-10 text-primary" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{ textShadow: '0 6px 20px rgba(0, 0, 0, 0.9), 0 3px 6px rgba(0, 0, 0, 0.7)' }}
          >
            Profesjonalne
            <span className="block text-white mt-2" style={{ textShadow: '0 6px 20px rgba(0, 0, 0, 0.9), 0 3px 6px rgba(0, 0, 0, 0.7)' }}>
              rozwiązania grzewcze
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto"
            style={{ textShadow: '0 4px 16px rgba(0, 0, 0, 0.9)' }}
          >
            Montaż kotłów, serwis, modernizacja instalacji i pompy ciepła.
            Ponad 15 lat doświadczenia w branży.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                Zgłoś się
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/#realizations">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              >
                Zobacz realizacje
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { label: 'Lat doświadczenia', value: '15+' },
              { label: 'Zadowolonych klientów', value: '500+' },
              { label: 'Zrealizowanych projektów', value: '1000+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ textShadow: '0 4px 16px rgba(0, 0, 0, 0.9)' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white" style={{ textShadow: '0 3px 12px rgba(0, 0, 0, 0.9)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1 h-3 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
