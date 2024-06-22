import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, ScrollControls, Loader, OrbitControls } from '@react-three/drei';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EffectComposer } from '@react-three/postprocessing';
import { Astronaut } from './Astronaut.jsx';
import { Rig } from './Camerashake.jsx';
import AnotherScene from './AnotherScene.jsx';
import { Environment } from '@react-three/drei';

export default function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight intensity={0.05} />
                <fog attach="fog" args={["#57676", -20, 120]} />
                <pointLight intensity={[100]} position={[-20.848, 10.005, -13.364]}/>
                <pointLight intensity={[1.5]} position={[17, 1, 18]}/>
                <ScrollControls pages={4} damping={0.25}>
                  <Astronaut/>
                </ScrollControls>
                <Rig />
                <Stars />
                <EffectComposer>
                </EffectComposer>
              </Suspense>
            </Canvas>
          } />
          <Route path="/explore" element={
            <Canvas>
              <Suspense fallback={null}>
              <Environment preset="apartment" />
                <ambientLight/>
                <AnotherScene />
              </Suspense>
              <OrbitControls position={[0, 0, 0]} minDistance={0.001} maxDistance={0.001} />
            </Canvas>
          } />
        </Routes>
      </Router>
      <Loader />
    </>
  );
}
