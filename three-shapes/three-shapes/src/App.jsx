import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './components/Cube';
import Cylinder from './components/Cylinder';
import Pyramid from './components/Pyramid';
import Sphere from './components/Sphere';
import Menu from './components/Menu';
import './App.css';

const App = () => {
  const [visibleShapes, setVisibleShapes] = useState({
    cube: false, 
    cylinder: false, 
    pyramid: false, 
    sphere: false
  });
  const [menuVisible, setMenuVisible] = useState(true);

  const startAnimations = () => {
    setVisibleShapes({
      cube: true,
      cylinder: true,
      pyramid: true,
      sphere: true
    });
    setMenuVisible(false);  // Ocultar el menú al iniciar las animaciones
  };

  return (
    <div className="app-container">
      {menuVisible && <Menu onStart={startAnimations} />}
      
      <Canvas className="canvas" camera={{ position: [-2, 0, 10], fov: 60 }}>
        {/* Luces */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.5} 
          castShadow={true} 
        />
        <pointLight 
          position={[-5, 5, 5]} 
          intensity={1.5} 
          castShadow={true} 
        />

        {/* Figuras */}
        {visibleShapes.cube && <Cube />}
        {visibleShapes.cylinder && <Cylinder />}
        {visibleShapes.pyramid && <Pyramid />}
        {visibleShapes.sphere && <Sphere />}

        {/* Plano para recibir las sombras */}
        <mesh receiveShadow={true} position={[0, -2, 0]}>
          <planeGeometry args={[50, 50]} />
          <shadowMaterial opacity={0.5} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;
