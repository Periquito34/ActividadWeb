// src/components/Cube.jsx
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
  const cubeRef = useRef();
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    setRotation(rotation + 0.01);
    cubeRef.current.rotation.y = rotation;

    // Agrega movimiento en eje y al cubo
    cubeRef.current.position.y = Math.sin(rotation) * 2;
    

    
  });

  return (
    <mesh
      ref={cubeRef}
      position={[-5, 0, 0]} // Asegúrate de que el cubo esté en el centro
      castShadow={true}  // El cubo proyecta sombra
      receiveShadow={true}  // El cubo recibe sombra
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Cube;
