import Link from "next/link";
import { FiExternalLink, FiGithub, FiCode, FiLayers } from "react-icons/fi";

export default function DevelopmentPage() {
  // This would normally be fetched from a CMS or API
  const projects = [
    {
      id: 1,
      title: "NFT Marketplace",
      description: "A decentralized marketplace for buying, selling, and trading NFTs with support for multiple blockchains.",
      image: "/placeholder-dev-1.jpg",
      tags: ["React", "Solidity", "Ethereum", "Web3.js"],
      link: "https://example.com/nft-marketplace",
      github: "https://github.com/bornelder/nft-marketplace",
      featured: true
    },
    {
      id: 2,
      title: "Music Streaming Platform",
      description: "A web application for independent artists to share and monetize their music directly with fans.",
      image: "/placeholder-dev-2.jpg",
      tags: ["Next.js", "Node.js", "MongoDB", "AWS"],
      link: "https://example.com/music-platform",
      github: "https://github.com/bornelder/music-platform",
      featured: true
    },
    {
      id: 3,
      title: "Artist Portfolio Template",
      description: "A customizable portfolio template designed specifically for visual artists to showcase their work.",
      image: "/placeholder-dev-3.jpg",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      link: "https://example.com/artist-portfolio",
      github: "https://github.com/bornelder/artist-portfolio",
      featured: false
    },
    {
      id: 4,
      title: "Smart Contract Collection",
      description: "A collection of reusable smart contracts for various blockchain applications and NFT projects.",
      image: "/placeholder-dev-4.jpg",
      tags: ["Solidity", "Ethereum", "Smart Contracts"],
      link: null,
      github: "https://github.com/bornelder/smart-contracts",
      featured: false
    },
    {
      id: 5,
      title: "Audio Visualization Tool",
      description: "A web-based tool for creating real-time audio visualizations for music and sound design.",
      image: "/placeholder-dev-5.jpg",
      tags: ["JavaScript", "Web Audio API", "Canvas", "Three.js"],
      link: "https://example.com/audio-viz",
      github: "https://github.com/bornelder/audio-viz",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Development Portfolio</h1>
          <div className="w-20 h-1 bg-purple-600 mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            A showcase of my work as a developer, including web applications, blockchain projects, and creative coding experiments.
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          
          <div className="grid grid-cols-1 gap-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Project Image/Preview */}
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 h-64 lg:h-auto flex items-center justify-center">
                    <span className="text-white font-bold text-xl">Project Preview</span>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                        >
                          <FiExternalLink /> View Project
                        </a>
                      )}
                      
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <FiGithub /> View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Other Projects */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">More Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                {/* Project Image/Preview */}
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 h-48 flex items-center justify-center">
                  <span className="text-white font-bold">Project Preview</span>
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-purple-600 hover:text-purple-800 transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                      >
                        <FiGithub className="w-4 h-4" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="max-w-4xl mx-auto mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center">
                  <FiCode className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Frontend Development</h3>
              </div>
              
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>React / Next.js</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>JavaScript / TypeScript</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>HTML / CSS</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Tailwind CSS</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Framer Motion</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center">
                  <FiLayers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Backend & Blockchain</h3>
              </div>
              
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>Node.js / Express</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>MongoDB / PostgreSQL</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Solidity</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Web3.js / Ethers.js</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>AWS / Vercel</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Developer for Your Project?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              I'm available for freelance projects and collaborations. Let's discuss how I can help bring your ideas to life.
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