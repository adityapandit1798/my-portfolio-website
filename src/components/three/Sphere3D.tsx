import { motion } from 'framer-motion';
import { Sphere } from '@react-three/drei';

export const Sphere3D = () => {
  return (
    <motion.group
      animate={{
        rotateY: Math.PI * 2,
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial
          color="#4299e1"
          wireframe
          transparent
          opacity={0.5}
        />
      </Sphere>
    </motion.group>
  );
};