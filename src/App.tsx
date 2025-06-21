import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scene from './components/Scene';
import LoadingScreen from './components/LoadingScreen';
import Overlay from './components/Overlay';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for loading screen to finish
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Initialize GSAP ScrollTrigger after scene loads
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen bg-black relative overflow-hidden">
      <LoadingScreen />
      
      {isLoaded && (
        <Canvas
          camera={{ position: [-8, 2, 5], fov: 75 }}
          className="w-full h-full"
          gl={{ 
            antialias: true, 
            alpha: false,
            powerPreference: "high-performance"
          }}
          dpr={[1, 2]}
        >
          <ScrollControls pages={6} damping={0.1}>
            <Scene />
            <Scroll html>
              <Overlay />
            </Scroll>
          </ScrollControls>
        </Canvas>
      )}
    </div>
  );
}

export default App;