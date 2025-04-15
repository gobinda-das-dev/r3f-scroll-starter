import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'
import { OrbitControls } from '@react-three/drei'
import React from 'react'

const GlobalScene = () => {
  return (
    <>
      <SmoothScrollbar config={{ lerp: 0.07, wheelMultiplier: 0.65 }} />
      <GlobalCanvas flat >
        {/* <OrbitControls /> */}
      </GlobalCanvas>
    </>
  )
}

export default GlobalScene
