"use client"

import { Canvas, useThree } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"
import Box from "./Box.jsx"

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="h-full">
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={3}>
          <Box />
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}