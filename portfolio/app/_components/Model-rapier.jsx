import React from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import { MeshTransmissionMaterial } from '@react-three/drei'
import { useControls } from 'leva'
import { BallCollider, Physics, RigidBody } from '@react-three/rapier'
import { easing } from 'maath'

export default function Model(props, position, vec = new THREE.Vector3(), r = THREE.MathUtils.randFloatSpread) {
  
    const {viewport} = useThree()
    const mesh = useRef()

    const config = useControls({
        meshPhysicalMaterial: false,
        transmissionSampler: false,
        backside: true,
        samples: { value: 16, min: 1, max: 32, step: 1 },
        resolution: { value: 2048, min: 256, max: 2048, step: 256 },
        transmission: { value: 1.0, min: 0, max: 1 },
        roughness: { value: 0.19, min: 0, max: 1, step: 0.01 },
        thickness: { value: 5.95, min: 0, max: 10, step: 0.01 },
        ior: { value: 1.15, min: 1, max: 5, step: 0.01 },
        chromaticAberration: { value: 0.39, min: 0, max: 1 },
        anisotropy: { value: 0.03, min: 0, max: 1, step: 0.01 },
        anisotropicBlur: { value: 0.88, min: 0, max: 1, step: 0.01 },
        distortion: { value: 0.18, min: 0, max: 1, step: 0.01 },
        distortionScale: { value: 0.4, min: 0.01, max: 1, step: 0.01 },
        temporalDistortion: { value: 0.1, min: 0, max: 1, step: 0.01 },
        clearcoat: { value: 0.26, min: 0, max: 1 },
        attenuationDistance: { value: 1.6, min: 0, max: 10, step: 0.01 },
        attenuationColor: "#ffffff",
        color: "#8f8f8f",
        bg: "#ffffff", 
      });
  
      const api = useRef()
      const ref = useRef()
      const pos = useMemo(() => position || [r(10), r(10), r(10)], [])
      useFrame((state, delta) => {
        delta = Math.min(0.1, delta)
        api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(0.2))
        
      })

    return (
        // put scale={viewport.width / 12} into <group> as a prop to make it scale responsively
    <group>
      <RigidBody linearDamping={4} angularDamping={1} friction={0.1} {...props} ref={api} colliders={false} {...props}>
      <BallCollider args={[1]} />
        <mesh ref={mesh} >
        <boxGeometry />
        <MeshTransmissionMaterial {...config} />
        </mesh>
        </RigidBody>
    </group>
  )
}