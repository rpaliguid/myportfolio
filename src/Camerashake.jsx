import * as THREE from 'three'
import { useEffect } from 'react'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'
import { useFrame, useThree } from '@react-three/fiber'
import { CameraShake } from '@react-three/drei'

RectAreaLightUniformsLib.init()

export function Rig() {
    const { camera, mouse } = useThree()

    useEffect(() => {
        // Set the initial rotation of the camera to look at a specific point
        camera.lookAt(new THREE.Vector3(0, 0, 0))
      }, [camera])
    
    useFrame(() => {
      // Calculate target rotation based on mouse position
      const targetRotation = new THREE.Euler(
        THREE.MathUtils.lerp(camera.rotation.x, mouse.y * 0.6, 0.3),
        THREE.MathUtils.lerp(camera.rotation.y, mouse.x * 0.6, 0.3),
        0
      )
  
      // Apply the new rotation to the camera
      camera.rotation.copy(targetRotation)
    })
    
    return (
      <CameraShake
        maxYaw={0.09}
        maxPitch={0.09}
        maxRoll={0.09}
        yawFrequency={0.6}
        pitchFrequency={0.6}
        rollFrequency={0.4}
      />
    )
  }