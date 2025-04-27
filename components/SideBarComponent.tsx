import React from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { BriefcaseBusiness, ChartColumnBig, FileUser, LayoutDashboard, Settings } from 'lucide-react'
import { SignOutButton, UserButton, useUser } from '@clerk/nextjs'


const SideBarComponent = () => {
  const { user } = useUser()
  console.log(user)

  return (
    <div className='flex flex-col h-screen py-4'>
      <div className='flex items-center justify-center h-16 mb-4'>
        <span className='text-1xl font-semibold text-gray-800'>
          <BriefcaseBusiness className='inline mr-2 text-blue-500' /> Hirely
        </span>
      </div>
      <Separator className='mb-4' />

      <div className='px-2'>
        <ul className='space-y-3'>
          <li className='px-6 py-2 bg hover:bg-gray-200 rounded'>
            <Link href='/dashboard'>
              <span className='text-gray-700 text-sm font-medium'>
                <LayoutDashboard className='inline mr-1' /> Dashboard
              </span>
            </Link>
          </li>
          <li className='px-6 py-2 bg hover:bg-gray-200 rounded'>
            <Link href='/applications'>
              <span className='text-gray-700 text-sm font-medium'>
                <FileUser className='inline mr-1' /> Applications
              </span>
            </Link>
          </li>
          <li className='px-6 py-2 bg hover:bg-gray-200 rounded'>
            <Link href='/statistics'>
              <span className='text-gray-700 text-sm font-medium'>
                <ChartColumnBig className='inline mr-1' /> Statictics
              </span>
            </Link>
          </li>
          <li className='px-6 py-2 bg hover:bg-gray-200 rounded'>
            <Link href='/settings'>
              <span className='text-gray-700 text-sm font-medium'>
                <Settings className='inline mr-1' /> Settings
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className='mt-auto px-6'>
      <Separator className='my-4' />
      <div className='flex items-center justify-between'>
        <UserButton  /> 
        <div className='flex flex-col items-start justify-start'>
        <span className='text-xs font-medium text-gray-600'> {user?.fullName} </span> 
        <span className='text-xs text-gray-600'> {user?.primaryEmailAddress?.emailAddress} </span> 
        </div>

      </div>
        {/* <SignOutButton /> */}
      </div>
    </div>
  )
}

export default SideBarComponent