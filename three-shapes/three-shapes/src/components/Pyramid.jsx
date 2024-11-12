// src/components/Pyramid.jsx
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Pyramid = () => {
  const pyramidRef = useRef();
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    // Animación de rotación
    setRotation(rotation + 0.01);
    pyramidRef.current.rotation.y = rotation;

    // Haz que la piramide pulse en todas las direcciones
    pyramidRef.current.scale.y = Math.sin(rotation) + 1;
    pyramidRef.current.scale.x = Math.sin(rotation) + 1;
    pyramidRef.current.scale.z = Math.sin(rotation) + 1;
    

  });

  return (
    <mesh
      ref={pyramidRef}
      position={[4, 0, 0]} 
      castShadow={true}   // Habilita la proyección de sombras
      receiveShadow={true} // Habilita la recepción de sombras
    >
      <coneGeometry args={[2, 3, 4]} /> {/* Géometría de la pirámide */}
      <meshStandardMaterial color="blue" /> {/* Material con color */}
    </mesh>
  );
};

export default Pyramid;
