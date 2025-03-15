import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Born Elder</h1>
          <div className="w-20 h-1 bg-purple-600 mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Creative Technologist based in Ajo, Arizona
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
          <div className="md:col-span-1">
            {/* Placeholder for Born's photo */}
            <div className="aspect-w-1 aspect-h-1 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-6">
              <span className="text-gray-400 dark:text-gray-600 text-sm">Profile Image</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
                <p className="font-medium">Ajo, Arizona</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Originally From</h3>
                <p className="font-medium">Steubenville, Ohio</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Age</h3>
                <p className="font-medium">29</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold mb-4">My Story</h2>
            
            <p className="text-gray-700 dark:text-gray-300">
              I'm Born Elder, and I'm excited to introduce myself to the Ajo community. My creative journey began with drawing and music production, producing beats, mixing, and mastering for local artists in Steubenville, Ohio. Over time, I expanded my skills into coding and blockchain development, launching my own NFT projects and exploring innovative digital solutions.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              I now define my work as that of a Creative Technologist, blending technology, music, and visual art to craft engaging digital and physical experiences. Ajo's vibrant, supportive community drew me in, and I'm excited to contribute my skills while learning from others.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-10">Expertise</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Website & App Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Designing and building user-friendly, responsive digital platforms.</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">UI/UX Design</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Creating intuitive, visually appealing interfaces.</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Blockchain & Smart Contracts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Developing decentralized applications (dApps) and NFT projects.</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Music Production & Engineering</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Producing, mixing, and mastering high-quality tracks.</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Digital & Traditional Art</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Designing custom digital cover art for artists, and painting commissioned pieces on handmade stretched canvas.</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-colors"
              >
                Let's Connect <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
          
          <div className="relative border-l-4 border-purple-200 dark:border-purple-900 ml-6 pl-8 pb-8">
            {/* Timeline items would be dynamically generated in a real app */}
            <div className="mb-12 relative">
              <div className="absolute -left-14 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                <span>1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Early Beginnings in Art</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Started drawing and creating visual art in Steubenville, Ohio.</p>
              <span className="text-sm text-gray-500">2010's</span>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute -left-14 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                <span>2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Music Production</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Began producing beats, mixing, and mastering for local artists.</p>
              <span className="text-sm text-gray-500">Mid 2010's</span>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute -left-14 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                <span>3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Diving into Technology</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Expanded skills into coding and web development.</p>
              <span className="text-sm text-gray-500">Late 2010's</span>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute -left-14 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                <span>4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Blockchain & NFT Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Launched first NFT projects and explored blockchain technology.</p>
              <span className="text-sm text-gray-500">2020-2021</span>
            </div>
            
            <div className="relative">
              <div className="absolute -left-14 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                <span>5</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Moving to Ajo</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Relocated to Ajo, Arizona to join the vibrant creative community.</p>
              <span className="text-sm text-gray-500">Recent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 