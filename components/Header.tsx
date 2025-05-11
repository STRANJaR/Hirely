'use client'

import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import { BriefcaseBusiness } from 'lucide-react'


const Header = () => {
  const { user } = useUser()
  return (
    <section className='h-18 shadow bottom-1 flex flex-col justify-center'>
      <div className=' '>

        <div className='flex items-center justify-between px-4 py-2 bg-white'>
          <div className='flex items-center'>
            {/* <img src='/logo.png' alt='Logo' className='h-8 w-8 mr-2' /> */}
            <h1 className='text-1xl font-bold'>  <BriefcaseBusiness className='inline mr-2 text-blue-500' /> Hirely</h1>
          </div>


          <div className='flex items-center gap-4'>
            {user && (
              <div className='flex items-center gap-2'>
                <Avatar className='h-10 w-10'>
                  <AvatarImage src={user?.imageUrl} />
                  <AvatarFallback>{user?.firstName?.charAt(0) || 'U'}</AvatarFallback>
                </Avatar>
                <span>{user.firstName}</span>
              </div>
            )}
            
            {!user && (
            <Button variant='outline' className=' cursor-pointer'>
              <Link href={'/sign-in'}>Sign In</Link>
            </Button>
            )}

            {user && (
              <Button variant='outline' className=' cursor-pointer'>
                <Link href={'/dashboard'}>Dashboard</Link>
              </Button>
            )}

          </div>

        </div>
      </div>

    </section>
  )
}

export default Header