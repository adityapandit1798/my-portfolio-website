import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { 
  PerspectiveCamera, 
  Environment, 
  useScroll,
  Text,
  Box,
  Sphere,
  Cylinder
} from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import DeskSetup from './DeskSetup';
import Terminal from './Terminal';
import ParticleSystem from './ParticleSystem';

gsap.registerPlugin(ScrollTrigger);

const Scene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const { camera, gl } = useThree();
  const scroll = useScroll();

  useEffect(() => {
    if (!cameraRef.current) return;

    // Initial camera position - hero view
    gsap.set(cameraRef.current.position, { x: -8, y: 2, z: 5 });
    gsap.set(cameraRef.current.rotation, { x: -0.1, y: -0.8, z: 0 });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useFrame(() => {
    if (scroll && cameraRef.current) {
      const scrollOffset = scroll.offset;
      
      if (scrollOffset < 0.16) {
        // Section 1: Hero - Side view of desk
        const progress = scrollOffset / 0.16;
        cameraRef.current.position.lerp(
          new THREE.Vector3(-8, 2, 5), 
          0.02
        );
        cameraRef.current.lookAt(-2, 0, 0);
      } else if (scrollOffset < 0.33) {
        // Section 2: About - Right side view
        const progress = (scrollOffset - 0.16) / 0.17;
        cameraRef.current.position.lerp(
          new THREE.Vector3(8, 3, 4), 
          progress * 0.02
        );
        cameraRef.current.lookAt(0, 0, 0);
      } else if (scrollOffset < 0.5) {
        // Section 3: Skills - Top-down view
        const progress = (scrollOffset - 0.33) / 0.17;
        cameraRef.current.position.lerp(
          new THREE.Vector3(0, 8, 2), 
          progress * 0.02
        );
        cameraRef.current.lookAt(0, 0, 0);
      } else if (scrollOffset < 0.66) {
        // Section 4: Experience - Angled view
        const progress = (scrollOffset - 0.5) / 0.16;
        cameraRef.current.position.lerp(
          new THREE.Vector3(-6, 4, 8), 
          progress * 0.02
        );
        cameraRef.current.lookAt(0, 1, 0);
      } else if (scrollOffset < 0.83) {
        // Section 5: Projects - Rotating view
        const progress = (scrollOffset - 0.66) / 0.17;
        const angle = progress * Math.PI * 0.5;
        cameraRef.current.position.x = Math.sin(angle) * 10;
        cameraRef.current.position.z = Math.cos(angle) * 10;
        cameraRef.current.position.y = 5;
        cameraRef.current.lookAt(0, 0, 0);
      } else {
        // Section 6: Contact - Final overview
        const progress = (scrollOffset - 0.83) / 0.17;
        cameraRef.current.position.lerp(
          new THREE.Vector3(0, 6, 12), 
          progress * 0.02
        );
        cameraRef.current.lookAt(0, 0, 0);
      }
    }
  });

  return (
    <group ref={groupRef}>
      <PerspectiveCamera ref={cameraRef} makeDefault fov={75} />
      
      {/* Lighting Setup */}
      <ambientLight intensity={0.4} color="#1e3a8a" />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1.2} 
        color="#ffffff"
        castShadow
      />
      <pointLight position={[0, 2, 4]} intensity={0.8} color="#0ea5e9" />
      <pointLight position={[-3, 1, 0]} intensity={0.6} color="#10b981" />
      <pointLight position={[3, 1, 0]} intensity={0.4} color="#f59e0b" />

      {/* Environment */}
      <Environment preset="night" />

      {/* Main 3D Elements */}
      <DeskSetup />
      <Terminal />
      <ParticleSystem />

      {/* Room Environment */}
      <RoomEnvironment />
      
      {/* Floating Tech Elements */}
      <FloatingElements />
    </group>
  );
};

// Room environment component
const RoomEnvironment: React.FC = () => {
  return (
    <group>
      {/* Floor */}
      <Box position={[0, -2, 0]} args={[20, 0.1, 20]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>
      
      {/* Back Wall */}
      <Box position={[0, 3, -10]} args={[20, 10, 0.1]}>
        <meshStandardMaterial color="#111827" />
      </Box>
      
      {/* Left Wall */}
      <Box position={[-10, 3, 0]} args={[0.1, 10, 20]}>
        <meshStandardMaterial color="#111827" />
      </Box>
      
      {/* Right Wall */}
      <Box position={[10, 3, 0]} args={[0.1, 10, 20]}>
        <meshStandardMaterial color="#111827" />
      </Box>
    </group>
  );
};

// Floating elements representing technologies
const FloatingElements: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.2) * 0.1;
      groupRef.current.position.y = 4 + Math.sin(clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 4, 0]}>
      {/* AWS Logo */}
      <Sphere position={[-4, 2, 0]} args={[0.6]} scale={[1.2, 0.8, 1]}>
        <meshStandardMaterial 
          color="#ff9900" 
          emissive="#ff9900" 
          emissiveIntensity={0.2} 
        />
      </Sphere>
      
      {/* Docker Container */}
      <Box position={[-1, 2, 0]} args={[1, 0.6, 1]}>
        <meshStandardMaterial 
          color="#2496ed" 
          emissive="#2496ed" 
          emissiveIntensity={0.1} 
        />
      </Box>
      
      {/* Kubernetes */}
      <Sphere position={[2, 2, 0]} args={[0.5]}>
        <meshStandardMaterial 
          color="#326ce5" 
          emissive="#326ce5" 
          emissiveIntensity={0.2} 
        />
      </Sphere>
      
      {/* Terraform */}
      <Cylinder position={[5, 2, 0]} args={[0.5, 0.5, 0.2, 6]}>
        <meshStandardMaterial 
          color="#7b42bc" 
          emissive="#7b42bc" 
          emissiveIntensity={0.2} 
        />
      </Cylinder>

      {/* Jenkins */}
      <Box position={[0, 0, 3]} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial 
          color="#d33833" 
          emissive="#d33833" 
          emissiveIntensity={0.1} 
        />
      </Box>

      {/* Prometheus */}
      <Sphere position={[-3, 0, -3]} args={[0.4]}>
        <meshStandardMaterial 
          color="#e6522c" 
          emissive="#e6522c" 
          emissiveIntensity={0.2} 
        />
      </Sphere>
    </group>
  );
};

export default Scene;