// src/components/Sphere.jsx
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Sphere = () => {
  const sphereRef = useRef();
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    // Animación de rotación
    setRotation(rotation + 0.01);
    sphereRef.current.rotation.y = rotation;
  });

  return (
    <mesh
      ref={sphereRef}
      position={[10, 0, 0]} 
      castShadow={true}   // Habilita la proyección de sombras
      receiveShadow={true} // Habilita la recepción de sombras
    >
      <sphereGeometry args={[2, 32, 32]} /> {/* Géometría de la esfera */}
      <meshStandardMaterial color="red" /> {/* Material con color */}
    </mesh>
  );
};

export default Sphere;
