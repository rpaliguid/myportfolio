import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Scene1(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene1-transformed.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions) {
      // Replace 'Animation_0' with the actual name of your animation
      const action = actions['Animation_0']
      if (action) {
        action.play()
      }
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Object_6" position={[-9.8, 4.592, -2.134]} rotation={[-1.461, 0.192, 1.047]} scale={2.082}>
          <primitive object={nodes._rootJoint} />
        </group>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={nodes.Plane.material} scale={20.333} />
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[18.328, 0.133, 19.059]} scale={0.034} />
        <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Astronaut} skeleton={nodes.Object_9.skeleton} position={[-9.8, 4.592, -2.134]} rotation={[-1.461, 0.192, 1.047]} scale={2.082} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene1-transformed.glb')
