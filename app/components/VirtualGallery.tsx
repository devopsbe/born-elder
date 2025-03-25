"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUp, FiArrowDown, FiExternalLink } from "react-icons/fi";

type Artwork = {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
};

type VirtualGalleryProps = {
  artworks: Artwork[];
};

type CorridorProps = {
  artworks: Artwork[];
  position: number;
  isMoving: boolean;
  isViewingArtwork: boolean;
  onReachEnd: () => void;
};

type ArtworkFrameProps = {
  artwork: Artwork;
  position: [number, number, number];
  rotation: [number, number, number];
};

// The main component that renders the 3D scene
export default function VirtualGallery({ artworks }: VirtualGalleryProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isMoving, setIsMoving] = useState(false);
  const [position, setPosition] = useState(0);
  const [isViewingArtwork, setIsViewingArtwork] = useState(false);
  const [showPortalMessage, setShowPortalMessage] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [imageStatuses, setImageStatuses] = useState<{[key: number]: boolean}>({});
  
  // Check if images are accessible
  useEffect(() => {
    // Pre-check if images exist
    const checkImages = async () => {
      console.log("Checking artwork images availability...");
      const statuses: {[key: number]: boolean} = {};
      
      for (const art of artworks) {
        try {
          const imagePath = art.image.startsWith('/') ? art.image : `/${art.image}`;
          console.log(`Testing image path: ${imagePath}`);
          
          // Test if image is accessible with a fetch request
          const response = await fetch(imagePath, { method: 'HEAD' });
          const exists = response.ok;
          statuses[art.id] = exists;
          
          console.log(`Image for "${art.title}" ${exists ? 'exists' : 'does not exist'} at path: ${imagePath}`);
        } catch (error) {
          console.error(`Error checking image for "${art.title}":`, error);
          statuses[art.id] = false;
        }
      }
      
      setImageStatuses(statuses);
    };
    
    checkImages();
  }, [artworks]);
  
  // Update the time every second (client-side only)
  useEffect(() => {
    // Initial time setting
    const formatTime = () => {
      const now = new Date();
      // Use a fixed format - HH:MM:SS in 24-hour format
      return now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    };
    
    setCurrentTime(formatTime());
    
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Controls for moving through the corridor
  const moveForward = () => {
    if (isMoving) return;
    
    // If viewing artwork, proceed to next position
    if (isViewingArtwork) {
      setIsViewingArtwork(false);
      setSelectedArtwork(null);
      setIsMoving(true);
      const newPosition = position + 1;
      setPosition(newPosition);
      
      setTimeout(() => {
        setIsMoving(false);
      }, 1000);
    } 
    // If not viewing artwork, approach the artwork at current position
    else {
      setIsViewingArtwork(true);
      // Set the current artwork based on position
      if (position < artworks.length) {
        setSelectedArtwork(artworks[position]);
      }
    }
  };
  
  const moveBackward = () => {
    if (isMoving || position <= 0) return;
    
    // If viewing artwork, step back from it
    if (isViewingArtwork) {
      setIsViewingArtwork(false);
      setSelectedArtwork(null);
    } 
    // If not viewing artwork, move back to previous position
    else {
      setIsMoving(true);
      const newPosition = position - 1;
      setPosition(newPosition);
      
      setTimeout(() => {
        setIsMoving(false);
      }, 1000);
    }
  };
  
  // Handle reaching the end of the gallery
  const handleReachEnd = () => {
    setShowPortalMessage(true);
  };
  
  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          moveForward();
          break;
        case "ArrowDown":
        case "s":
        case "S":
          moveBackward();
          break;
        default:
          break;
      }
    };
    
    // Add event listener for keyboard controls
    window.addEventListener("keydown", handleKeyDown);
    
    // Clean up event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position, isMoving, isViewingArtwork, selectedArtwork]); // Re-create handler when dependencies change
  
  // Add Y2K styling CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
      }
      .blink {
        animation: blink 1.5s infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="relative h-[600px] w-full">
      {/* 3D canvas for the corridor */}
      <Canvas className="bg-black">
        <ambientLight intensity={0.3} />
        <spotLight position={[0, 5, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <PerspectiveCamera makeDefault position={[0, 1.6, 0]} fov={75} />
        
        <Corridor 
          artworks={artworks} 
          position={position} 
          isMoving={isMoving}
          isViewingArtwork={isViewingArtwork}
          onReachEnd={handleReachEnd}
        />
      </Canvas>
      
      {/* Y2K-style interface overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm text-[#00ffaa] font-mono">
        <div className="flex justify-between">
          <div className="flex-1">
            <div className="text-sm mb-1">ARTWORK: {position >= artworks.length ? "FINAL GATEWAY" : `${position + 1}/${artworks.length}`}</div>
            <div className="text-sm">MEDIUM: {selectedArtwork ? selectedArtwork.category : "Digital"}</div>
          </div>
          
          <div className="flex-1 flex justify-center">
            {/* Simplified Navigation controls */}
            <div className="grid grid-cols-1 gap-2 w-32">
              <div>
                <button 
                  onClick={moveForward}
                  disabled={isMoving}
                  className="w-full h-10 bg-[#003322] hover:bg-[#004433] border border-[#00ffaa] rounded flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span>{isViewingArtwork ? "NEXT" : "APPROACH"}</span> <FiArrowUp className="text-[#00ffaa]" />
                </button>
              </div>
              <div>
                <button 
                  onClick={moveBackward}
                  disabled={isMoving || (position <= 0 && !isViewingArtwork)}
                  className="w-full h-10 bg-[#003322] hover:bg-[#004433] border border-[#00ffaa] rounded flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span>{isViewingArtwork ? "STEP BACK" : "GO BACK"}</span> <FiArrowDown className="text-[#00ffaa]" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-right">
            <div className="text-sm blink">SYSTEM ACTIVE</div>
            <div className="text-sm">{currentTime}</div>
          </div>
        </div>
      </div>
      
      {/* Artwork detail overlay */}
      {selectedArtwork && isViewingArtwork && (
        <div className="absolute top-10 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 text-white flex flex-col items-center justify-center max-h-[50%] overflow-auto">
          <div className="max-w-2xl w-full bg-[#000033] border-2 border-[#00aaff] rounded-lg overflow-hidden">
            <div className="p-4 bg-[#000055] text-[#00ffff] font-mono flex justify-between items-center">
              <span>ARTWORK #{selectedArtwork.id}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00ffff] mb-2 font-mono">{selectedArtwork.title.toUpperCase()}</h3>
              <p className="text-sm text-[#00aaff] mb-4 font-mono">{selectedArtwork.category}</p>
              <div className="bg-[#001122] p-3 rounded border border-[#003366]">
                <p className="text-sm text-[#66ddff] font-mono leading-relaxed">{selectedArtwork.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Portal message overlay */}
      {showPortalMessage && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 backdrop-blur-md p-8 text-white flex flex-col items-center justify-center">
          <div className="max-w-md w-full bg-[#000033] border-2 border-[#00aaff] rounded-lg overflow-hidden">
            <div className="p-4 bg-[#000055] text-[#00ffff] font-mono flex justify-between items-center">
              <span>SYSTEM MESSAGE</span>
              <button 
                onClick={() => setShowPortalMessage(false)}
                className="px-2 py-1 bg-[#003366] hover:bg-[#004477] rounded text-sm"
              >
                CLOSE [X]
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00ffff] mb-4 font-mono text-center">PORTAL DETECTED</h3>
              <div className="relative h-[200px] w-full mb-4 border border-[#003366] bg-[#001122] flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#00aaff] to-[#ff00aa] animate-pulse opacity-70" />
                </div>
                <div className="relative z-10 text-center">
                  <p className="text-white font-mono mb-4">FULL PORTFOLIO ACCESS POINT</p>
                  <FiExternalLink className="text-[#00ffaa] w-12 h-12 mx-auto" />
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Link 
                  href="/portfolio" 
                  className="px-6 py-3 bg-[#003366] border-2 border-[#00aaff] text-[#00ffff] rounded-md font-mono hover:bg-[#004477] transition-colors flex items-center gap-2"
                >
                  ENTER FULL PORTFOLIO <FiExternalLink />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// The 3D corridor component
function Corridor({ artworks, position, isMoving, isViewingArtwork, onReachEnd }: CorridorProps) {
  const { camera } = useThree();
  const corridorGroupRef = useRef<THREE.Group>(null);
  
  // Try to load textures but handle missing files
  let floorTexture, wallTexture;
  try {
    floorTexture = useTexture("/textures/floor.jpg");
    wallTexture = useTexture("/textures/wall.jpg");
    
    // Apply repeating textures
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(10, 100);
    wallTexture.repeat.set(2, 1);
  } catch (error) {
    console.warn("Texture files not found, using fallback colors");
  }
  
  // Check if we've reached the end of artworks
  useEffect(() => {
    if (position >= artworks.length && !isMoving) {
      onReachEnd();
    }
  }, [position, isMoving, artworks.length, onReachEnd]);
  
  // Set up camera position and rotation based on player position
  useEffect(() => {
    // Base position is at each artwork station
    const baseZ = position * -8;
    
    // When viewing artwork, get closer and look slightly up
    let targetPosition, targetRotation;
    
    if (isViewingArtwork && position < artworks.length) {
      // Position closer to artwork when viewing
      targetPosition = new THREE.Vector3(0, 1.6, baseZ - 2);
      targetRotation = new THREE.Euler(0.1, 0, 0); // Look slightly up at artwork
    } else {
      // Position at viewing distance when not focused on artwork
      targetPosition = new THREE.Vector3(0, 1.6, baseZ);
      targetRotation = new THREE.Euler(0, 0, 0); // Look straight ahead
    }
    
    // Animate camera rotation with GSAP
    gsap.to(camera.rotation, {
      x: targetRotation.x,
      y: targetRotation.y,
      z: targetRotation.z,
      duration: 0.5,
      ease: "power2.out"
    });
    
    // Animate camera position with GSAP
    gsap.to(camera.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      duration: 1,
      ease: "power2.inOut"
    });
  }, [camera, position, isViewingArtwork, isMoving, artworks.length]);
  
  return (
    <group ref={corridorGroupRef}>
      {/* Corridor floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -50]}>
        <planeGeometry args={[4, 100]} />
        <meshStandardMaterial 
          map={floorTexture} 
          color="#335566" 
          wireframe={!floorTexture}
        />
      </mesh>
      
      {/* Corridor ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 3, -50]}>
        <planeGeometry args={[4, 100]} />
        <meshStandardMaterial 
          map={floorTexture} 
          color="#223344" 
          wireframe={!floorTexture}
        />
      </mesh>
      
      {/* Left wall */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-2, 1.5, -50]}>
        <planeGeometry args={[100, 3]} />
        <meshStandardMaterial 
          map={wallTexture} 
          color="#445566" 
          wireframe={!wallTexture}
        />
      </mesh>
      
      {/* Right wall */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[2, 1.5, -50]}>
        <planeGeometry args={[100, 3]} />
        <meshStandardMaterial 
          map={wallTexture} 
          color="#445566" 
          wireframe={!wallTexture}
        />
      </mesh>
      
      {/* Artworks placed in sequence along the corridor */}
      {artworks.map((artwork: Artwork, index: number) => {
        // Place the artwork in the center of the path, spaced 8 units apart
        const positionZ = -index * 8 - 4;
        
        return (
          <ArtworkFrame 
            key={artwork.id}
            artwork={artwork}
            position={[0, 1.5, positionZ]}
            rotation={[0, 0, 0]}
          />
        );
      })}
      
      {/* Portal at the end */}
      {artworks.length > 0 && (
        <group position={[0, 1.5, -artworks.length * 8 - 8]}>
          {/* Portal frame */}
          <mesh position={[0, 0, 0]}>
            <ringGeometry args={[1.2, 1.5, 32]} />
            <meshStandardMaterial 
              color="#00aaff" 
              emissive="#0055aa"
              emissiveIntensity={0.5}
            />
          </mesh>
          
          {/* Portal effect */}
          <mesh position={[0, 0, 0.01]}>
            <circleGeometry args={[1.2, 32]} />
            <meshBasicMaterial 
              color="#003366"
              opacity={0.7}
              transparent
            >
              <color attach="color" args={["#003366"]} />
            </meshBasicMaterial>
          </mesh>
          
          {/* Portal light */}
          <pointLight position={[0, 0, 1]} intensity={2} color="#00aaff" />
        </group>
      )}
      
      {/* Add some Y2K-style decorative elements */}
      {Array.from({ length: 15 }).map((_, i) => (
        <group key={`decor-${i}`} position={[0, 0, -i * 8 - 2]}>
          {/* Glowing floor markers */}
          <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1, 0.1]} />
            <meshBasicMaterial color="#00ffaa" opacity={0.7} transparent />
          </mesh>
          
          {/* Ceiling lights */}
          <pointLight position={[0, 2.9, 0]} intensity={0.5} color="#6688ff" />
        </group>
      ))}
    </group>
  );
}

// Component for displaying artwork frames along the path
function ArtworkFrame({ artwork, position, rotation }: ArtworkFrameProps) {
  // Create a canvas texture for the artwork
  const canvasTexture = useRef<THREE.CanvasTexture | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const textureLoader = useRef(new THREE.TextureLoader());
  const [artTexture, setArtTexture] = useState<THREE.Texture | null>(null);
  
  // Load the actual image texture
  useEffect(() => {
    console.log(`Attempting to load image for artwork: ${artwork.title}`, artwork.image);
    
    // Get window location to form absolute URL (client-side only)
    if (typeof window !== 'undefined') {
      // Create absolute URL
      const baseUrl = window.location.origin;
      const imagePath = artwork.image.startsWith('/') ? artwork.image : `/${artwork.image}`;
      const absoluteUrl = `${baseUrl}${imagePath}`;
      
      console.log(`Trying absolute URL: ${absoluteUrl}`);
      
      // Create an HTML Image element first to verify it loads
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      
      img.onload = () => {
        console.log(`HTML Image loaded successfully for: ${artwork.title}`);
        
        // Now that we know the image exists, load it as a texture
        const texture = new THREE.TextureLoader().load(absoluteUrl);
        texture.needsUpdate = true;
        setArtTexture(texture);
        setImageLoaded(true);
        setLoadError(false);
      };
      
      img.onerror = () => {
        console.error(`HTML Image failed to load for: ${artwork.title}`);
        setLoadError(true);
        generateFallbackTexture();
      };
      
      // Start loading
      img.src = absoluteUrl;
    }
    
    return () => {
      // Clean up textures to prevent memory leaks
      if (artTexture) {
        artTexture.dispose();
      }
    };
  }, [artwork.image, artwork.title]);
  
  // Generate fallback texture with title if image fails to load
  const generateFallbackTexture = () => {
    console.log(`Generating fallback texture for: ${artwork.title}`);
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Create a placeholder colored rectangle
    if (ctx) {
      ctx.fillStyle = '#001133';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00aaff';
      ctx.font = '30px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(artwork.title, canvas.width / 2, canvas.height / 2);
      
      // Create Y2K-style tech border
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 10;
      ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
      
      // Add some tech circuit patterns
      ctx.strokeStyle = '#0088aa';
      ctx.lineWidth = 3;
      for (let i = 0; i < 5; i++) {
        const offset = i * 30;
        ctx.beginPath();
        ctx.moveTo(0, offset);
        ctx.lineTo(offset, 0);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(canvas.width, offset);
        ctx.lineTo(canvas.width - offset, 0);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(offset, canvas.height);
        ctx.lineTo(0, canvas.height - offset);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(canvas.width - offset, canvas.height);
        ctx.lineTo(canvas.width, canvas.height - offset);
        ctx.stroke();
      }
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    canvasTexture.current = texture;
    setArtTexture(texture);
  };
  
  return (
    <group position={position} rotation={rotation}>
      {/* Frame */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[2, 2, 0.1]} />
        <meshStandardMaterial color="#001122" />
      </mesh>
      
      {/* Artwork */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[1.8, 1.8]} />
        {artTexture ? (
          <meshStandardMaterial 
            map={artTexture}
            emissive="#003366"
            emissiveIntensity={0.5}
          />
        ) : (
          <meshStandardMaterial 
            color="#001133"  // Default color if no texture
            emissive="#001133" 
            emissiveIntensity={0.3}
          />
        )}
      </mesh>
      
      {/* Add debug indicator for loading state */}
      {!imageLoaded && (
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[0.3, 0.3]} />
          <meshBasicMaterial color={loadError ? "#ff0000" : "#00ff00"} transparent opacity={0.7} />
        </mesh>
      )}
      
      {/* Title plate */}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[1.5, 0.3, 0.05]} />
        <meshStandardMaterial color="#00223a" />
      </mesh>
      
      {/* Spotlights on artwork */}
      <spotLight 
        position={[0, 1, 1]} 
        angle={0.5} 
        penumbra={0.5} 
        intensity={1} 
        color="#ffffff"
        target-position={[0, 0, 0]}
      />
    </group>
  );
} 