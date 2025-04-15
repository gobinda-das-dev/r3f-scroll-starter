import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Gallery = () => {
   const scrollRef = useRef(null)

   return (
      <>
         <div ref={scrollRef} className='h-screen w-full scale-10' />

         <UseCanvas>
            <ScrollScene track={scrollRef}>
               {(props) => {
                  return (
                     <>
                        <RotatingBox {...props} />
                     </>
                  )
               }}
            </ScrollScene>
         </UseCanvas>
      </>
   )
}

const RotatingBox = ({...props}) => {
   const cube = useRef(null)

   useFrame(({ clock }) => {
      const time = clock.elapsedTime;

      cube.current.rotation.x = time * 0.5;
      cube.current.rotation.y = time * 0.5;
      cube.current.rotation.z = time * 0.5;
   })

   return (
      <mesh ref={cube} scale={props.scale.x}>
         <boxGeometry />
         <meshNormalMaterial />
      </mesh>
   )
}

export default Gallery
