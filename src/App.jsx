import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'

const RotatingCube = () => {
  const meshref = useRef()

  useFrame(() => {
    if (meshref.current) {
      meshref.current.rotation.x += 0.01
      meshref.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshref}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
      <Sparkles count={100} scale={1} size={6} color={"orange"} speed={0.002} noise={0.2} />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <OrbitControls enablePan enableZoom enableRotate />

      <directionalLight position={[1, 1, 1]} intensity={10} color={'#006769'} />

      <color attach="background" args={['#F0F0F0']} />

      <RotatingCube />
    </Canvas>
  )
}

export default App
