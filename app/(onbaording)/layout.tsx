'use client'

import SideBarComponent from '@/components/SideBarComponent'
import React from 'react'

const onBordingLayout = ({ children }: any) => {
  return (
    <div className='grid grid-cols-8 h-screen'>
      <div className='border-r-2 col-span-1 fixed h-screen top-0 left-0 w-56 bg-white'>
        <SideBarComponent/>
      </div>

      <div className='col-span-8 ml-56'>  
        {children}
      </div>
    </div>
  )
}

export default onBordingLayout