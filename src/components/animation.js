'use client';
import React from 'react';
import { motion } from 'framer-motion';
import templeImg from './temple.jpg';

const stripeVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? '-100%' : '100%', // Alternating directions
    y: '100%', // Start below the viewport
  }),
  visible: (i) => ({
    opacity: 1,
    x: '0%',
    y: '0%', // Set in place
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      delay: i * 0.3, // Stagger animation for each stripe
    },
  }),
};

const textTransition = {
  duration: 1,
  ease: 'easeInOut',
  delay: 2, // Start text animation after the stripes finish
};

const AnimationPage = () => {
  const stripeCount = 5; // Number of vertical sections
  const stripes = Array.from({ length: stripeCount }, (_, i) => i);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Movable animation with multiple stripes */}
      <div className="absolute inset-0 flex">
        {stripes.map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={stripeVariants}
            className="w-1/5 h-full" // Adjust width for the number of stripes
            style={{
              backgroundImage: `url(${templeImg.src})`,
              backgroundSize: '500% 100%', // Expand background to cover all stripes
              backgroundPositionX: `${(i * 100) / (stripeCount - 1)}%`,
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
      </div>

      {/* Text overlay with smooth animation */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-center text-white z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={textTransition}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to the Veer Raghav Hotel
        </h1>
        <p className="text-lg md:text-2xl mt-4">Find peace and spirituality</p>
      </motion.div>
    </div>
  );
};

export default AnimationPage;
