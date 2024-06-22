import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export function Astronaut(props) {
  const scroll = useScroll();
  const { nodes, materials, animations } = useGLTF("./Scene1.glb");
  const { ref: astronautRef, actions } = useAnimations(animations);
  const cubeRef = useRef(); // Create a ref for the cube
  const camera = useThree((state) => state.camera); // Get the camera instance
  const mouse = useRef({ x: 0, y: 0 }); // To store mouse positions
  const raycaster = useThree(state => state.raycaster);
  const ref = useRef();
  const [hovered, hover] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Initialize all animations
    for (const key in actions) {
      const action = actions[key];
      if (action) {
        console.log(`Initializing animation: ${key}`); // Log to see available animations
        action.reset().play().paused = true;
      }
    }
  }, [actions]);

  useEffect(() => {
    // Set the initial focal length of the camera by adjusting the field of view (fov)
    camera.fov = 60; // Adjust the fov value as needed for your desired focal length
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame(() => {
    // Update each animation's time based on scroll offset
    for (const key in actions) {
      const action = actions[key];
      if (action) {
        const duration = action.getClip().duration;
        action.time = duration * scroll.offset;
        console.log(`Updating animation ${key}: time = ${action.time}`); // Log to see the time updates
      }
    }

    // Update camera position to match the cube's position
    if (cubeRef.current) {
      camera.position.copy(cubeRef.current.position);
    }
  });

  // Click handler for the Bubbletext mesh
  const handleClick = () => {
    navigate('/explore'); // Navigate to another scene
  };

  return (
    <group {...props} ref={astronautRef}>
      <group name="Scene" position={[17, -0.4, -7.5]} rotation={[0, -0.74, 0]}>
      <group name="wewnatrz_do_sfabaobjcleanergles" />
        <group name="Astronaut" position={[-9.8, 4.592, -2.134]} rotation={[-1.461, 0.192, 1.047]} scale={2.082}>
          <primitive object={nodes._rootJoint} />
          <group name="Object_9">
            <skinnedMesh name="Astronaut_Astronaut_0" geometry={nodes.Astronaut_Astronaut_0.geometry} material={materials.Astronaut} skeleton={nodes.Astronaut_Astronaut_0.skeleton} />
            <skinnedMesh name="Astronaut_Astronaut_0_1" geometry={nodes.Astronaut_Astronaut_0_1.geometry} material={materials['Material.002']} skeleton={nodes.Astronaut_Astronaut_0_1.skeleton} />
          </group>
        </group>
        <group name="Object_2" position={[-9.848, 6.005, -13.364]} rotation={[-1.808, 0.019, -1.961]} scale={0.006}>
          <mesh name="Object_0" geometry={nodes.Object_0.geometry} material={materials.Space_ship} />
          <mesh name="Object_0_1" geometry={nodes.Object_0_1.geometry} material={materials.Material} />
          <mesh name="Object_0_2" geometry={nodes.Object_0_2.geometry} material={materials['Material.001']} />
        </group>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={nodes.Plane.material} scale={20.333} />
        <mesh name="Dave" geometry={nodes.Dave.geometry} material={materials['Material.005']} position={[16.5, 0.7, 18.473]} rotation={[Math.PI / 2, 0, -1]} scale={0.598} />
        <mesh name="Description" geometry={nodes.Description.geometry} material={materials['Material.005']} position={[16.5, 0.5, 18.634]} rotation={[Math.PI / 2, 0, -1]} scale={0.157} />
        <group name="Bubbletext" position={[16.895, -1.228, 15.339]} rotation={[0.736, 0.562, -0.234]} scale={0.093} onClick={handleClick} > 
          <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.003']} />
          <mesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials['Material.004']} />
        </group>
        <mesh
          ref={cubeRef} // Assign the ref to the cube
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[18.328, 0.133, 19.059]}
          scale={0.04}
        />
      </group>
    </group>
  );
}
