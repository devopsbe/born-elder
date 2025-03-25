import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import VirtualGallery from "./components/VirtualGallery";
import HeroSection from "./components/HeroSection";

export default function Home() {
  // This would normally be fetched from a CMS or API
  const featuredWorks = [
    { 
      id: 1, 
      title: "Homecoming", 
      image: "/image/homecoming.jpg", 
      category: "Digital Art",
      description: "An exploration of identity and belonging, this piece reflects on the journey back to one's roots and the complex emotions that accompany it."
    },
    { 
      id: 2, 
      title: "Metaplane", 
      image: "/image/metaplane.jpg", 
      category: "Digital Art",
      description: "Inspired by the concept of digital realms and alternate realities, Metaplane visualizes the intersection between physical and virtual worlds."
    },
    { 
      id: 3, 
      title: "My World My Rules", 
      image: "/image/my-world-my-rules.jpg", 
      category: "Digital Art",
      description: "A bold statement on personal autonomy and the power of creating your own reality, expressed through vibrant colors and dynamic composition."
    },
    { 
      id: 4, 
      title: "Stance of Flow", 
      image: "/image/stance-of-flow.jpg", 
      category: "Digital Art",
      description: "This piece explores the state of flow - that perfect balance between challenge and skill where creativity flourishes and time seems to stand still."
    },
    { 
      id: 5, 
      title: "What Is That", 
      image: "/image/what-is-that.jpg", 
      category: "Digital Art",
      description: "An invitation to curiosity and questioning, this work plays with perception and encourages viewers to form their own interpretations."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Y2K-style header with retro gaming feel */}
      <section className="py-16 px-4 relative overflow-hidden border-b-4 border-[#00ff44]">
        <div className="container mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-center mb-4 glitch-text">BORN ELDER</h1>
          <p className="text-xl md:text-2xl text-center text-[#00ffcc] font-mono mb-8">CREATIVE TECHNOLOGIST // DIGITAL EXPLORER</p>
          <div className="flex justify-center space-x-8">
            <Link 
              href="/portfolio" 
              className="px-8 py-3 bg-[#003366] border-2 border-[#00aaff] text-[#00ffff] rounded-md font-mono hover:bg-[#004477] transition-colors"
            >
              ENTER GALLERY
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-transparent border-2 border-[#ff00aa] text-[#ff66cc] rounded-md font-mono hover:bg-[#330033] transition-colors"
            >
              CONTACT
            </Link>
          </div>
        </div>
        
        {/* Y2K-style grid background */}
        <div className="absolute inset-0 -z-10 opacity-20 grid-bg"></div>
      </section>

      {/* Featured Works Section - 3D Virtual Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#00ffaa] font-mono border-l-4 border-[#00ffaa] pl-4">*{"}"} The 4ault {"{"} *</h2>
            <Link 
              href="/portfolio" 
              className="flex items-center gap-2 text-[#00aaff] hover:text-[#00ffff] transition-colors font-mono"
            >
              VIEW_ALL <FiArrowRight />
            </Link>
          </div>
          
          <div className="bg-[#000022] border-2 border-[#0066aa] rounded-lg p-6 shadow-[0_0_15px_rgba(0,170,255,0.5)]">
            <VirtualGallery artworks={featuredWorks} />
          </div>
          
          <div className="mt-8 text-center text-[#00aaff] font-mono text-sm">
            <p className="blink">[WASD OR ARROWS TO NAVIGATE THE VIRTUAL GALLERY]</p>
          </div>
        </div>
      </section>

      {/* Services Overview - Y2K Style */}
      <section className="py-20 bg-[#000033]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What I Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Website & App Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Designing and building user-friendly, responsive digital platforms.
              </p>
              <Link 
                href="/services#development" 
                className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800 transition-colors"
              >
                Learn More <FiArrowRight />
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Digital & Traditional Art</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Designing custom digital cover art for artists, and painting commissioned pieces.
              </p>
              <Link 
                href="/services#art" 
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Learn More <FiArrowRight />
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Music Production</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Producing, mixing, and mastering high-quality tracks for various artists.
              </p>
              <Link 
                href="/services#music" 
                className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-800 transition-colors"
              >
                Learn More <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's create something amazing. Reach out to discuss your project.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-white text-purple-700 rounded-md font-medium hover:bg-purple-100 transition-colors inline-flex items-center gap-2"
          >
            Get in Touch <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
