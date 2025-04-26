'use client'

import SideBarComponent from '@/components/SideBarComponent'
import React from 'react'

const onBordingLayout = ({ children }) => {
  return (
    <div className='grid grid-cols-8 h-screen'>
      <div className='border-r-2 col-span-1'>
        <SideBarComponent/>
      </div>

      <div className='col-span-7'>
        {children}
      </div>
    </div>
  )
}

export default onBordingLayout