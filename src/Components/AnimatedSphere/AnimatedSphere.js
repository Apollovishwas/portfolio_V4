import React , {Suspense}from 'react';
import {Sphere, MeshDistortMaterial} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { OrbitControls } from '@react-three/drei';
import './AnimatedSphere.css'
export default function AnimatedSphere() {
    return(
        <Canvas className='canvas'>

        <OrbitControls enableZoom = {false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2, 5, 2]} intensity={1} />

        <Suspense fallback={null}>
        <Sphere visible args = {[1, 100, 200]} scale={3} >
          <MeshDistortMaterial shininess ={150}  color='#ffb0b9' attacj='material' distort={0.6} speed={2} roughness={0.2} />
      </Sphere>
        </Suspense>
    </Canvas>
     

  
    )
}