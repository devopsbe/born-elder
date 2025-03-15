"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiEye, FiFilter } from 'react-icons/fi';

export default function PortfolioPage() {
  // This would normally be fetched from a CMS or API
  const artworks = [
    { id: 1, title: "Homecoming", image: "/homecoming.jpg", category: "Digital Art", year: "2023" },
    { id: 2, title: "Metaplane", image: "/metaplane.jpg", category: "Digital Art", year: "2023" },
    { id: 3, title: "My World My Rules", image: "/my-world-my-rules.jpg", category: "Digital Art", year: "2023" },
    { id: 4, title: "Stance of Flow", image: "/stance-of-flow.jpg", category: "Digital Art", year: "2022" },
    { id: 5, title: "What Is That", image: "/what-is-that.jpg", category: "Digital Art", year: "2022" },
  ];
  
  const categories = ["All", "Digital Art", "Traditional", "NFT", "Commissions"];
  const years = ["All", "2023", "2022", "2021", "2020"];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredArtworks = artworks.filter(artwork => {
    const matchesCategory = selectedCategory === "All" || artwork.category === selectedCategory;
    const matchesYear = selectedYear === "All" || artwork.year === selectedYear;
    return matchesCategory && matchesYear;
  });
  
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Art Portfolio</h1>
          <div className="w-20 h-1 bg-purple-600 mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            A collection of digital and traditional artwork created for personal projects and commissions.
          </p>
        </div>
        
        {/* Filter Controls */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Gallery</h2>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <FiFilter /> Filter
            </button>
          </div>
          
          {showFilters && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedCategory === category
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                      } transition-colors`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Year</h3>
                <div className="flex flex-wrap gap-2">
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedYear === year
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                      } transition-colors`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.length > 0 ? (
              filteredArtworks.map(artwork => (
                <div key={artwork.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
                  {/* In a real implementation, we would use Next.js Image component for optimized images */}
                  <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-blue-500 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                      {artwork.title}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1">{artwork.title}</h3>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{artwork.category}</span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{artwork.year}</span>
                      </div>
                      <Link
                        href={`/portfolio/${artwork.id}`}
                        className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 transition-colors text-sm"
                      >
                        <FiEye /> View
                      </Link>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No artworks match your filter criteria. Try adjusting your filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedYear("All");
                  }}
                  className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Art Process Section */}
        <div className="max-w-4xl mx-auto mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">My Creative Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Concept</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every piece begins with an idea or emotion I want to express, often inspired by music, nature, or personal experiences.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Experimentation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I explore various techniques, colors, and compositions, pushing boundaries to find unique visual solutions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Refinement</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I iteratively refine the piece, focusing on details, balance, and the emotional impact it creates.
              </p>
            </div>
          </div>
        </div>
        
        {/* Commission CTA */}
        <div className="max-w-4xl mx-auto mt-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in a Commission?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              I'm available for custom artwork commissions for personal or commercial projects. Let's create something unique together.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-6 py-3 bg-white text-purple-700 rounded-md font-medium hover:bg-purple-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 