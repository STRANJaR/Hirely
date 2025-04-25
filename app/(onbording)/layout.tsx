'use client'

import React from 'react'

const onBordingLayout = ({ children }) => {
  return (
    <div className='grid grid-cols-8 h-screen'>
      <div className='bg-blue-200'>
        Sidebar
      </div>

      <div className='col-span-7'>
        {children}
      </div>
    </div>
  )
}

export default onBordingLayout