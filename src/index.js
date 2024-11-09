/*
911.glb
Author: Karol Miklas https://sketchfab.com/karolmiklas
Sketchfab: https://sketchfab.com/3d-models/free-porsche-911-carrera-4s-d01b254483794de3819786d93e0e1ebf */

import { render } from 'react-dom'
import { Suspense } from 'react'
import './styles.css'
import { Loader } from '@react-three/drei'
import React from 'react'
import { App } from './App'

render(
  <>
    <Suspense fallback={null}>
      <div className="fullscreen">
        <App />
      </div>
    </Suspense>
    <Loader />f
  </>,
  document.getElementById('root')
)
