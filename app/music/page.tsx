"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiPlay, FiPause, FiMusic, FiHeadphones, FiUsers } from 'react-icons/fi';

export default function MusicPage() {
  // This would normally be fetched from a CMS or API
  const tracks = [
    {
      id: 1,
      title: "Cosmic Drift",
      artist: "Born Elder",
      duration: "3:42",
      genre: "Electronic",
      year: "2023",
      image: "/placeholder-track-1.jpg",
      audioSrc: "/placeholder-audio.mp3"
    },
    {
      id: 2,
      title: "Digital Dreams",
      artist: "Born Elder ft. Luna Ray",
      duration: "4:15",
      genre: "Hip Hop",
      year: "2023",
      image: "/placeholder-track-2.jpg",
      audioSrc: "/placeholder-audio.mp3"
    },
    {
      id: 3,
      title: "Neural Network",
      artist: "Born Elder",
      duration: "3:28",
      genre: "Electronic",
      year: "2022",
      image: "/placeholder-track-3.jpg",
      audioSrc: "/placeholder-audio.mp3"
    },
    {
      id: 4,
      title: "Blockchain Beats",
      artist: "Born Elder ft. Crypto Kid",
      duration: "3:56",
      genre: "Hip Hop",
      year: "2022",
      image: "/placeholder-track-4.jpg",
      audioSrc: "/placeholder-audio.mp3"
    },
    {
      id: 5,
      title: "Metaverse Melody",
      artist: "Born Elder",
      duration: "5:12",
      genre: "Ambient",
      year: "2021",
      image: "/placeholder-track-5.jpg",
      audioSrc: "/placeholder-audio.mp3"
    }
  ];

  const collaborations = [
    {
      id: 1,
      title: "Future Vision",
      artist: "Tech Visionary ft. Born Elder",
      role: "Producer, Mixing Engineer",
      year: "2023",
      image: "/placeholder-collab-1.jpg"
    },
    {
      id: 2,
      title: "Digital Renaissance",
      artist: "Art Collective",
      role: "Producer, Sound Design",
      year: "2022",
      image: "/placeholder-collab-2.jpg"
    },
    {
      id: 3,
      title: "Web3 Anthem",
      artist: "Crypto Crew ft. Born Elder",
      role: "Co-Producer, Mixing Engineer",
      year: "2022",
      image: "/placeholder-collab-3.jpg"
    }
  ];

  const [playingTrack, setPlayingTrack] = useState<number | null>(null);

  const togglePlay = (trackId: number) => {
    if (playingTrack === trackId) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackId);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Music Production</h1>
          <div className="w-20 h-1 bg-purple-600 mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            A selection of my original music productions, collaborations, and client work.
          </p>
        </div>
        
        {/* Featured Track */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-1 bg-black/20 h-64 lg:h-auto flex items-center justify-center">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                  <FiMusic className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <div className="lg:col-span-2 p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Featured Release</h2>
                <h3 className="text-2xl font-light mb-6">Cosmic Drift EP</h3>
                
                <p className="mb-6 text-white/80">
                  A collection of electronic tracks exploring the intersection of technology and creativity. 
                  Featuring ambient soundscapes, glitchy beats, and futuristic synth work.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Electronic</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Ambient</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Experimental</span>
                </div>
                
                <div className="flex gap-4">
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-purple-700 rounded-md hover:bg-purple-100 transition-colors">
                    <FiPlay /> Listen Now
                  </button>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 rounded-md hover:bg-white/10 transition-colors"
                  >
                    Inquire About Licensing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tracks Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-8">Recent Tracks</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Artist
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Genre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Year
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Play
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {tracks.map((track, index) => (
                    <tr 
                      key={track.id} 
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium">{track.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 dark:text-gray-400">{track.artist}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                          {track.genre}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {track.year}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {track.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button 
                          onClick={() => togglePlay(track.id)}
                          className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                          aria-label={playingTrack === track.id ? "Pause" : "Play"}
                        >
                          {playingTrack === track.id ? <FiPause /> : <FiPlay />}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Collaborations Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-8">Collaborations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborations.map((collab) => (
              <div key={collab.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                {/* Collaboration Image/Preview */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 h-48 flex items-center justify-center">
                  <span className="text-white font-bold">Album Cover</span>
                </div>
                
                {/* Collaboration Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{collab.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{collab.artist}</p>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <FiHeadphones className="text-purple-600 dark:text-purple-400" />
                    <span className="text-sm">{collab.role}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{collab.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Services Section */}
        <div className="max-w-4xl mx-auto mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Music Production Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiMusic className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Beat Production</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Custom beat production for artists, commercials, and multimedia projects.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiHeadphones className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mixing & Mastering</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Professional mixing and mastering services to make your music sound polished and radio-ready.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiUsers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Artist Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Guidance and production support for emerging artists looking to develop their sound.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Whether you're an artist looking for production, a brand needing custom music, or a project requiring sound design, let's collaborate.
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