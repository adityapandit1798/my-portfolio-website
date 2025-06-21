import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Box, Cylinder, Sphere, Text, Torus, Octahedron, Dodecahedron, Icosahedron, Tetrahedron, Cone } from '@react-three/drei';
import * as THREE from 'three';

const DeskSetup: React.FC = () => {
  const coffeeRef = useRef<THREE.Group>(null);
  const ledRef = useRef<THREE.Mesh>(null);
  const certRef = useRef<THREE.Mesh>(null);
  const serverRackRef = useRef<THREE.Group>(null);
  const cloudRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    // Animate coffee steam (simulated with scaling)
    if (coffeeRef.current) {
      coffeeRef.current.scale.y = 1 + Math.sin(clock.elapsedTime * 2) * 0.1;
    }

    // Blinking LED
    if (ledRef.current) {
      const material = ledRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(clock.elapsedTime * 3) * 0.3;
    }

    // Rotating AWS certification badge
    if (certRef.current) {
      certRef.current.rotation.y = clock.elapsedTime * 0.5;
    }

    // Animated server rack
    if (serverRackRef.current) {
      serverRackRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.5) * 0.1;
    }

    // Floating cloud infrastructure
    if (cloudRef.current) {
      cloudRef.current.position.y = 3 + Math.sin(clock.elapsedTime * 0.8) * 0.3;
      cloudRef.current.rotation.y = clock.elapsedTime * 0.3;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Desk Surface */}
      <Box position={[0, -0.5, 0]} args={[8, 0.2, 4]}>
        <meshStandardMaterial color="#8b4513" />
      </Box>

      {/* Primary Monitor */}
      <group position={[0, 1, -1.5]}>
        <Box args={[3, 2, 0.1]}>
          <meshStandardMaterial color="#1f2937" />
        </Box>
        {/* Screen showing AWS Console */}
        <Box position={[0, 0, 0.06]} args={[2.8, 1.8, 0.01]}>
          <meshStandardMaterial 
            color="#000000" 
            emissive="#ff9900" 
            emissiveIntensity={0.3}
          />
        </Box>
        {/* Monitor Stand */}
        <Cylinder position={[0, -1.2, 0]} args={[0.3, 0.3, 0.4]}>
          <meshStandardMaterial color="#374151" />
        </Cylinder>
      </group>

      {/* Secondary Monitor - Grafana Dashboard */}
      <group position={[3.2, 1, -1.3]} rotation={[0, -0.3, 0]}>
        <Box args={[2.5, 1.6, 0.1]}>
          <meshStandardMaterial color="#1f2937" />
        </Box>
        <Box position={[0, 0, 0.06]} args={[2.3, 1.4, 0.01]}>
          <meshStandardMaterial 
            color="#000000" 
            emissive="#10b981" 
            emissiveIntensity={0.2}
          />
        </Box>
      </group>

      {/* Mechanical Keyboard */}
      <Box position={[0, -0.3, 1]} args={[1.5, 0.1, 0.5]}>
        <meshStandardMaterial color="#2d3748" />
      </Box>

      {/* Mouse */}
      <Box position={[1.2, -0.25, 1.2]} args={[0.3, 0.15, 0.5]} scale={[1, 0.8, 1]}>
        <meshStandardMaterial color="#1a202c" />
      </Box>

      {/* Coffee Mug with "Cloud Engineer" text */}
      <group ref={coffeeRef} position={[-2, -0.2, 0.5]}>
        <Cylinder args={[0.25, 0.25, 0.4]}>
          <meshStandardMaterial color="#1e40af" />
        </Cylinder>
        {/* Handle */}
        <Torus 
          position={[0.35, 0, 0]} 
          args={[0.15, 0.03, 8, 16]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#1e40af" />
        </Torus>
        {/* Coffee */}
        <Cylinder position={[0, 0.15, 0]} args={[0.22, 0.22, 0.05]}>
          <meshStandardMaterial color="#3e2723" />
        </Cylinder>
      </group>

      {/* AWS Certification Badge - Complex Dodecahedron */}
      <group ref={certRef} position={[-3, -0.1, -0.5]}>
        <Dodecahedron args={[0.3]}>
          <meshStandardMaterial color="#ff9900" emissive="#ff9900" emissiveIntensity={0.2} />
        </Dodecahedron>
        <Text
          position={[0, 0, 0.35]}
          fontSize={0.08}
          color="#ffffff"
          anchorX="center"
          anchorY="center"
        >
          AWS
        </Text>
      </group>

      {/* Terraform Book */}
      <Box position={[-1, -0.35, 1.5]} args={[1, 0.05, 0.7]} rotation={[0, -0.2, 0]}>
        <meshStandardMaterial color="#7b42bc" />
      </Box>

      {/* Pen */}
      <Cylinder 
        position={[-0.5, -0.3, 1.8]} 
        args={[0.02, 0.02, 0.6]} 
        rotation={[0, 0, Math.PI / 6]}
      >
        <meshStandardMaterial color="#1e40af" />
      </Cylinder>

      {/* Phone */}
      <Box position={[1.8, -0.35, 0.3]} args={[0.15, 0.05, 0.3]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>

      {/* Status LED Indicator */}
      <Sphere ref={ledRef} position={[3, -0.2, 1]} args={[0.1]}>
        <meshStandardMaterial 
          color="#10b981" 
          emissive="#10b981" 
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Complex Server Rack */}
      <group ref={serverRackRef} position={[2.5, 0.5, -0.8]}>
        {/* Main Server Body */}
        <Box args={[0.4, 1.2, 0.3]}>
          <meshStandardMaterial color="#2d3748" />
        </Box>
        
        {/* Server Slots */}
        {[0.4, 0.2, 0, -0.2, -0.4].map((y, index) => (
          <Box key={index} position={[0, y, 0.16]} args={[0.35, 0.15, 0.02]}>
            <meshStandardMaterial color="#1a202c" />
          </Box>
        ))}
        
        {/* LED Indicators */}
        {[0.4, 0.2, 0, -0.2, -0.4].map((y, index) => (
          <Sphere key={index} position={[0.15, y, 0.17]} args={[0.02]}>
            <meshStandardMaterial 
              color="#22c55e" 
              emissive="#22c55e" 
              emissiveIntensity={0.8}
            />
          </Sphere>
        ))}
        
        {/* Cooling Fans */}
        <Torus position={[-0.1, 0.5, 0.16]} args={[0.06, 0.02, 8, 16]}>
          <meshStandardMaterial color="#6b7280" />
        </Torus>
        <Torus position={[0.1, 0.5, 0.16]} args={[0.06, 0.02, 8, 16]}>
          <meshStandardMaterial color="#6b7280" />
        </Torus>
        
        <Text
          position={[0, -0.5, 0.16]}
          fontSize={0.04}
          color="#ffffff"
          anchorX="center"
        >
          Proxmox
        </Text>
      </group>

      {/* Floating Cloud Infrastructure */}
      <group ref={cloudRef} position={[0, 3, -3]}>
        {/* Main Cloud Structure */}
        <Icosahedron position={[0, 0, 0]} args={[0.8]}>
          <meshStandardMaterial 
            color="#0ea5e9" 
            emissive="#0ea5e9" 
            emissiveIntensity={0.1}
            transparent
            opacity={0.7}
          />
        </Icosahedron>
        
        {/* Satellite Nodes */}
        <Octahedron position={[-1.5, 0.5, 0]} args={[0.3]}>
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.2} />
        </Octahedron>
        
        <Tetrahedron position={[1.5, -0.5, 0]} args={[0.4]}>
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.2} />
        </Tetrahedron>
        
        <Cone position={[0, 1.2, 0]} args={[0.3, 0.6]}>
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.2} />
        </Cone>
        
        {/* Connection Lines */}
        <Cylinder position={[-0.75, 0.25, 0]} args={[0.02, 0.02, 1.5]} rotation={[0, 0, Math.PI / 6]}>
          <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.3} />
        </Cylinder>
        
        <Cylinder position={[0.75, -0.25, 0]} args={[0.02, 0.02, 1.5]} rotation={[0, 0, -Math.PI / 6]}>
          <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.3} />
        </Cylinder>
        
        <Cylinder position={[0, 0.6, 0]} args={[0.02, 0.02, 1.2]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.3} />
        </Cylinder>
      </group>

      {/* Whiteboard with Complex Architecture */}
      <group position={[0, 2, -2]}>
        <Box args={[4, 2, 0.05]}>
          <meshStandardMaterial color="#ffffff" />
        </Box>
        
        {/* AWS Architecture Diagram */}
        <Text
          position={[-1.5, 0.7, 0.03]}
          fontSize={0.1}
          color="#ff9900"
          anchorX="center"
        >
          AWS
        </Text>
        
        {/* VPC - Complex Hexagon */}
        <Cylinder position={[-1, 0.3, 0.03]} args={[0.4, 0.4, 0.02, 6]}>
          <meshStandardMaterial color="#0ea5e9" />
        </Cylinder>
        <Text
          position={[-1, 0.3, 0.04]}
          fontSize={0.06}
          color="#ffffff"
          anchorX="center"
        >
          VPC
        </Text>
        
        {/* EKS Cluster - Octahedron */}
        <Octahedron position={[0, 0, 0.03]} args={[0.3]}>
          <meshStandardMaterial color="#326ce5" />
        </Octahedron>
        <Text
          position={[0, 0, 0.04]}
          fontSize={0.05}
          color="#ffffff"
          anchorX="center"
        >
          EKS
        </Text>
        
        {/* RDS Database - Torus */}
        <Torus position={[1, -0.3, 0.03]} args={[0.25, 0.1, 8, 16]}>
          <meshStandardMaterial color="#10b981" />
        </Torus>
        <Text
          position={[1, -0.3, 0.04]}
          fontSize={0.05}
          color="#ffffff"
          anchorX="center"
        >
          RDS
        </Text>
        
        {/* Connection Lines */}
        <Cylinder position={[-0.5, 0.15, 0.03]} args={[0.01, 0.01, 0.5]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#374151" />
        </Cylinder>
        <Cylinder position={[0.5, -0.15, 0.03]} args={[0.01, 0.01, 0.5]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#374151" />
        </Cylinder>
      </group>

      {/* Docker Container Stack */}
      <group position={[-3.5, 0, 1]}>
        <Box position={[0, 0, 0]} args={[0.6, 0.2, 0.6]}>
          <meshStandardMaterial color="#2496ed" />
        </Box>
        <Box position={[0, 0.25, 0]} args={[0.6, 0.2, 0.6]}>
          <meshStandardMaterial color="#0db7ed" />
        </Box>
        <Box position={[0, 0.5, 0]} args={[0.6, 0.2, 0.6]}>
          <meshStandardMaterial color="#384d54" />
        </Box>
        <Text
          position={[0, 0.7, 0.31]}
          fontSize={0.04}
          color="#ffffff"
          anchorX="center"
        >
          Docker
        </Text>
      </group>

      {/* Kubernetes Cluster Visualization */}
      <group position={[3.5, 0.5, 1]}>
        {/* Master Node */}
        <Icosahedron position={[0, 0.5, 0]} args={[0.2]}>
          <meshStandardMaterial color="#326ce5" emissive="#326ce5" emissiveIntensity={0.2} />
        </Icosahedron>
        
        {/* Worker Nodes */}
        <Octahedron position={[-0.4, 0, 0]} args={[0.15]}>
          <meshStandardMaterial color="#4285f4" />
        </Octahedron>
        <Octahedron position={[0.4, 0, 0]} args={[0.15]}>
          <meshStandardMaterial color="#4285f4" />
        </Octahedron>
        <Octahedron position={[0, 0, 0.4]} args={[0.15]}>
          <meshStandardMaterial color="#4285f4" />
        </Octahedron>
        
        {/* Connection Lines */}
        <Cylinder position={[-0.2, 0.25, 0]} args={[0.01, 0.01, 0.5]} rotation={[0, 0, Math.PI / 4]}>
          <meshStandardMaterial color="#326ce5" emissive="#326ce5" emissiveIntensity={0.3} />
        </Cylinder>
        <Cylinder position={[0.2, 0.25, 0]} args={[0.01, 0.01, 0.5]} rotation={[0, 0, -Math.PI / 4]}>
          <meshStandardMaterial color="#326ce5" emissive="#326ce5" emissiveIntensity={0.3} />
        </Cylinder>
        <Cylinder position={[0, 0.25, 0.2]} args={[0.01, 0.01, 0.5]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#326ce5" emissive="#326ce5" emissiveIntensity={0.3} />
        </Cylinder>
        
        <Text
          position={[0, -0.3, 0]}
          fontSize={0.04}
          color="#ffffff"
          anchorX="center"
        >
          K8s
        </Text>
      </group>
    </group>
  );
};

export default DeskSetup;