"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects for shapes
  const yellowCircleY = useTransform(scrollY, [0, 500], [0, 100]);
  const pinkCircleY = useTransform(scrollY, [0, 500], [0, 150]);
  const blueCircleY = useTransform(scrollY, [0, 500], [0, 80]);
  const contentY = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // For spray paint effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-[100vh] overflow-hidden bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 flex items-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Graffiti-style background patterns inspired by Futura 2000 */}
      <div className="absolute inset-0 opacity-30">
        {/* Abstract geometric shapes with parallax */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-yellow-400 mix-blend-overlay"
          style={{ y: yellowCircleY }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-pink-500 mix-blend-overlay"
          style={{ y: pinkCircleY }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-400 mix-blend-overlay"
          style={{ y: blueCircleY }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        
        {/* Grafitti-inspired lines */}
        <motion.div 
          className="absolute left-0 right-0 top-1/4 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.div 
          className="absolute left-1/4 bottom-20 h-[3px] w-[30%] bg-gradient-to-r from-yellow-500 to-red-500"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        
        {/* Spray paint effect following cursor */}
        {isHovering && (
          <motion.div
            className="pointer-events-none absolute w-40 h-40 rounded-full bg-gradient-to-r from-purple-400 to-blue-300 mix-blend-overlay blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            style={{
              left: mousePosition.x - 80,
              top: mousePosition.y - 80,
            }}
          />
        )}
      </div>
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y: contentY, opacity }}
      >
        <motion.div 
          className="max-w-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ letterSpacing: "0.3em", opacity: 0 }}
            animate={{ letterSpacing: "0.05em", opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            BORN ELDER
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl font-light text-white/90 mb-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creative Technologist &amp; Artist
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80 mb-10 max-w-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Blending technology, music, and visual art to craft engaging digital and physical experiences.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              href="/portfolio" 
              className="px-6 py-3 bg-white text-purple-900 rounded-md font-medium hover:bg-purple-100 transition-colors flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">View Portfolio <FiArrowRight className="inline" /></span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <motion.div 
                className="absolute inset-0 bg-white/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
        }}
      >
        <p className="text-white/70 text-sm mb-2">Scroll to explore</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/70">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
} 