'use client'

import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'


const Header = () => {
  return (
    <section className='h-18 shadow bottom-1 flex flex-col justify-center'>
      <div className=' '>

        <div className='flex items-center justify-between px-4 py-2 bg-white'>
          <div className='flex items-center'>
            {/* <img src='/logo.png' alt='Logo' className='h-8 w-8 mr-2' /> */}
            <h1 className='text-1xl font-bold'>Mini Job Tracker</h1>
          </div>


          <div className='flex items-center gap-4'>
            <Button variant='outline' className=' cursor-pointer'>

            <Link href={'/add-new-job'}>Add New Job</Link>
            </Button>
            {/* <Button variant='outline' className=' cursor-pointer'>Sign In</Button> */}
            
            <Avatar className='h-10 w-10'>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Header