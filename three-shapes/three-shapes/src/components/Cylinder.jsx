// src/components/Cylinder.jsx
import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Cylinder = () => {
  const cylinderRef = useRef();
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    // Animación de rotación
    setRotation(rotation + 0.01);
    cylinderRef.current.rotation.y = rotation;

    // Agrega rotacion en eje x al cilindro
    cylinderRef.current.rotation.x = rotation;
  });

  return (
    <mesh
      ref={cylinderRef}
      position={[0, 0, 0]} 
      castShadow={true}
      receiveShadow={true}
    >
      <cylinderGeometry args={[1, 1, 3]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Cylinder;
