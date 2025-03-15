import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  // This would normally be fetched from a CMS or API
  const featuredWorks = [
    { id: 1, title: "Homecoming", image: "/homecoming.jpg", category: "Art" },
    { id: 2, title: "Metaplane", image: "/metaplane.jpg", category: "Art" },
    { id: 3, title: "My World My Rules", image: "/my-world-my-rules.jpg", category: "Art" },
    { id: 4, title: "Stance of Flow", image: "/stance-of-flow.jpg", category: "Art" },
    { id: 5, title: "What Is That", image: "/what-is-that.jpg", category: "Art" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 flex items-center">
        <div className="absolute inset-0 opacity-30">
          {/* Abstract patterns inspired by Futura 2000 */}
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-yellow-400 mix-blend-overlay"></div>
          <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-pink-500 mix-blend-overlay"></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-400 mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              BORN ELDER
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-8">
              Creative Technologist &amp; Artist
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl">
              Blending technology, music, and visual art to craft engaging digital and physical experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/portfolio" 
                className="px-6 py-3 bg-white text-purple-900 rounded-md font-medium hover:bg-purple-100 transition-colors flex items-center gap-2"
              >
                View Portfolio <FiArrowRight />
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Works</h2>
            <Link 
              href="/portfolio" 
              className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
            >
              View All <FiArrowRight />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((work) => (
              <div 
                key={work.id} 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="aspect-w-3 aspect-h-2 bg-gray-100 dark:bg-gray-800">
                  {/* Image placeholders - would be replaced with actual images */}
                  <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-blue-500 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                      {work.title}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white text-xl font-bold mb-2">{work.title}</h3>
                    <p className="text-white/80 mb-4">{work.category}</p>
                    <Link 
                      href={`/portfolio/${work.id}`} 
                      className="inline-flex items-center gap-2 text-sm text-white hover:text-purple-300 transition-colors"
                    >
                      View Details <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
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
