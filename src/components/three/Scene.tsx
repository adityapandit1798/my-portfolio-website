import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Sphere3D } from './Sphere3D';

export const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
     {/*  <Sphere3D /> */}
    </Canvas>
  );
};