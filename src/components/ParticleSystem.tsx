import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSystem: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particle positions
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    
    for (let i = 0; i < 200; i++) {
      // Coffee steam particles
      if (i < 20) {
        positions[i * 3] = -2 + (Math.random() - 0.5) * 0.2; // x
        positions[i * 3 + 1] = -0.2 + Math.random() * 2; // y
        positions[i * 3 + 2] = 0.5 + (Math.random() - 0.5) * 0.2; // z
      }
      // Ambient room particles
      else {
        positions[i * 3] = (Math.random() - 0.5) * 20; // x
        positions[i * 3 + 1] = Math.random() * 8; // y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
      }
    }
    
    return positions;
  }, []);

  const particleColors = useMemo(() => {
    const colors = new Float32Array(200 * 3);
    
    for (let i = 0; i < 200; i++) {
      if (i < 20) {
        // Coffee steam - white/gray
        colors[i * 3] = 0.8 + Math.random() * 0.2; // r
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2; // g
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // b
      } else {
        // Ambient particles - blue/green tech colors
        colors[i * 3] = Math.random() * 0.3; // r
        colors[i * 3 + 1] = 0.5 + Math.random() * 0.5; // g
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // b
      }
    }
    
    return colors;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < 200; i++) {
        const i3 = i * 3;
        
        if (i < 20) {
          // Coffee steam animation
          positions[i3 + 1] += 0.01; // Rise up
          positions[i3] += Math.sin(clock.elapsedTime + i) * 0.002; // Slight sway
          
          // Reset steam particles when they get too high
          if (positions[i3 + 1] > 3) {
            positions[i3 + 1] = -0.2;
            positions[i3] = -2 + (Math.random() - 0.5) * 0.2;
            positions[i3 + 2] = 0.5 + (Math.random() - 0.5) * 0.2;
          }
        } else {
          // Floating ambient particles
          positions[i3] += Math.sin(clock.elapsedTime * 0.5 + i) * 0.001;
          positions[i3 + 1] += Math.cos(clock.elapsedTime * 0.3 + i) * 0.001;
          positions[i3 + 2] += Math.sin(clock.elapsedTime * 0.4 + i) * 0.001;
        }
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef} positions={particlePositions}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={particlePositions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleColors.length / 3}
          array={particleColors}
          itemSize={3}
        />
      </bufferGeometry>
    </Points>
  );
};

export default ParticleSystem;