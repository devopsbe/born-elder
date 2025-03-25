"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiMaximize } from "react-icons/fi";

type Work = {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
};

type FeaturedWorksGalleryProps = {
  works: Work[];
};

export default function FeaturedWorksGallery({ works }: FeaturedWorksGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  
  // Progress indicator
  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <div className="flex flex-col space-y-6">
      {/* Horizontal scroll gallery */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto overflow-y-hidden pb-8 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex space-x-8 pl-4">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
          
          {/* Final card with CTA */}
          <div className="snap-center shrink-0 h-[600px] w-[350px] bg-gradient-to-br from-purple-600 to-indigo-800 rounded-xl flex flex-col items-center justify-center p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Discover More Artwork</h3>
            <p className="text-center mb-8 text-white/80">Explore the complete collection in the portfolio section.</p>
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-700 rounded-md font-medium hover:bg-purple-100 transition-colors"
            >
              View Full Portfolio <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll progress indicator */}
      <div className="relative h-1 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-purple-600 rounded-full"
          style={{ width: progressWidth }}
        />
      </div>
      
      {/* Scroll instructions */}
      <div className="flex justify-center items-center space-x-4 text-gray-500 dark:text-gray-400 text-sm">
        <FiChevronLeft />
        <span>Scroll horizontally to explore artworks</span>
        <FiChevronRight />
      </div>
    </div>
  );
}

function WorkCard({ work }: { work: Work }) {
  // For hover effects
  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    rest: { scale: 1, transition: { duration: 0.3 } }
  };
  
  const overlayVariants = {
    hover: { opacity: 1, transition: { duration: 0.3 } },
    rest: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="snap-center shrink-0 cursor-pointer group"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className="relative w-[350px] h-[600px] rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 flex flex-col">
        {/* Image container - top 2/3 */}
        <div className="relative h-[400px] overflow-hidden">
          <motion.div
            className="w-full h-full"
            variants={imageVariants}
          >
            <Image
              src={work.image}
              alt={work.title}
              fill
              className="object-cover"
            />
          </motion.div>
          
          {/* Overlay with view button */}
          <motion.div 
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
            variants={overlayVariants}
          >
            <Link
              href={`/portfolio/${work.id}`}
              className="p-3 bg-white rounded-full text-purple-700 hover:bg-purple-100 transition-colors"
              aria-label={`View details for ${work.title}`}
            >
              <FiMaximize className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
        
        {/* Info container - bottom 1/3 */}
        <div className="flex-1 p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-1 group-hover:text-purple-600 transition-colors">{work.title}</h3>
          <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">{work.category}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{work.description}</p>
          
          <div className="mt-auto pt-4">
            <Link
              href={`/portfolio/${work.id}`}
              className="inline-flex items-center gap-1 text-sm text-purple-600 hover:text-purple-800 transition-colors"
            >
              View Details <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 