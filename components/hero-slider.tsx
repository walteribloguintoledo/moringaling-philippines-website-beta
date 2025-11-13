
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    title: "Cultivating Health in the Philippines",
    subtitle: "Filipino farmers nurturing the miracle tree across beautiful Philippine landscapes",
    image: "https://static.abacusaicdn.net/images/038bbbed-a669-4527-ad6c-830332651254.png",
    cta: "Learn About Cultivation",
    ctaLink: "/about"
  },
  {
    id: 2,
    title: "Fresh Moringa Leaves",
    subtitle: "Discover the nutritional powerhouse growing in Philippine rural communities",
    image: "https://static.abacusaicdn.net/images/d0bd68aa-7936-43e7-b4c4-f82135040796.png",
    cta: "Explore Health Benefits",
    ctaLink: "/about#benefits"
  },
  {
    id: 3,
    title: "Premium Moringa Products",
    subtitle: "From traditional farms to modern wellness products made in the Philippines",
    image: "https://static.abacusaicdn.net/images/9ff7fb02-2a3b-4237-949a-3461eb6c337e.png",
    cta: "View Products",
    ctaLink: "/about#products"
  },
  {
    id: 4,
    title: "Family Tradition",
    subtitle: "Generations of Filipino families working together to harvest nature's gift",
    image: "https://static.abacusaicdn.net/images/c2586b3c-f5ec-47a7-bbe7-8a8bd4ba53cf.png",
    cta: "Join Our Community",
    ctaLink: "/membership"
  },
  {
    id: 5,
    title: "Moringa Plantations",
    subtitle: "Vast Philippine landscapes dedicated to growing the tree of life",
    image: "https://static.abacusaicdn.net/images/ea9a58fe-4604-4a61-9a3e-31776c40503f.png",
    cta: "Learn More",
    ctaLink: "/about"
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <Image
              src={slides[currentSlide]?.image || '/placeholder.jpg'}
              alt={slides[currentSlide]?.title || 'Slide'}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl mx-auto">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {slides[currentSlide]?.title}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            {slides[currentSlide]?.subtitle}
          </motion.p>
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              <a href={slides[currentSlide]?.ctaLink}>
                {slides[currentSlide]?.cta}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
