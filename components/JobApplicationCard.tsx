'use client'

import Link from 'next/link'
import React from 'react'

const JobApplicationCard = ({ cardTitle, value, redirectTitle, redirectLocation }) => {
  return (
    <div className='w-96 h-40 bg-white shadow-md rounded-md px-4 flex flex-col '>
      <div className='flex flex-col  justify-evenly h-full'>
        <div className='flex flex-col gap-2'>
          <div>
            <span className='text-xs font-semibold text-gray-500'> {cardTitle} </span>
          </div>
          <div>
            <span className='text-3xl font-semibold text-gray-800'> {value} </span>
          </div>
        </div>
        <div className='bg-gray-200 h-[1px] w-full'>
          <Link href={redirectLocation}>
            <span className='text-xs font-semibold text-blue-500'> {redirectTitle}  </span>
          </Link>

        </div>
      </div>

    </div>
  )
}

export default JobApplicationCard