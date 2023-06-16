'use client'
import React from 'react'
import Particles from "react-tsparticles";


import particlesConfig from '@/app/config/particlesConfig'

const test = () => {
  return (
    <Particles param={particlesConfig} className='bg-red-500'>
      <div>Hello</div>
    </Particles>
  )
}

export default test