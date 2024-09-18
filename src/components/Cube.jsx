/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import React, { useEffect, useRef } from 'react'
import style from './style.module.scss'
import { OrbitControls } from '@react-three/drei'
import { useMotionValue, useSpring } from 'framer-motion'
import { motion } from 'framer-motion-3d'



function Cube() {
  return (
    <div className={style.main}>
        <Canvas>
            <OrbitControls enableZoom={false} enablePan={false}/>
            <ambientLight intensity={2}/>
            <directionalLight position={[3,2,2]}/>
            <Cubicle/>
        </Canvas>
    </div>
  )
}

function Cubicle(){
 const mesh= useRef(null);
 const mouse ={
    x:useMotionValue[0],
    y:useMotionValue[0]
 }

 

 const manageMouseMove=(e)=>{
    const {innerWidth, innerHeight}=window;
    const { clientX, clientY}= e;
    const x = clientX / innerWidth
    const y = clientY / innerHeight
    mouse.x.set(x);
    mouse.y.set(y);
 }
 
 useEffect(()=>{
    window.addEventListener("mousemove",manageMouseMove)

    return ()=> window.removeEventListener("mouse",manageMouseMove)

 })

// useFrame((state,delta)=>{
//     mesh.current.rotation.x += delta * 0.1;
//     mesh.current.rotation.y += delta * 0.1;
//     mesh.current.rotation.z += delta * 0.1;

// })

const texture_1=useLoader(TextureLoader, '/1.png' )
const texture_2=useLoader(TextureLoader, '/2.png' )
const texture_3=useLoader(TextureLoader, '/3.png' )
const texture_4=useLoader(TextureLoader, '/4.png' )
const texture_5=useLoader(TextureLoader, '/5.png' )
const texture_6=useLoader(TextureLoader, '/6.png' )



    return(
<motion.mesh ref={mesh} rotation-y={mouse.x} rotation-x={mouse.y}>
    <boxGeometry   
     args={[3,3,3]}
    />
    <meshStandardMaterial
    map={texture_1}
    attach='material-0'
    />
      <meshStandardMaterial
    map={texture_2}
    attach='material-1'
    />  
    <meshStandardMaterial
    map={texture_3}
    attach='material-2'
    />  
    <meshStandardMaterial
    map={texture_4}
    attach='material-3'
    />  
    <meshStandardMaterial
    map={texture_5}
    attach='material-4'
    />  
    <meshStandardMaterial
    map={texture_6}
    attach='material-5'
    />
</motion.mesh>

    )}



export default Cube