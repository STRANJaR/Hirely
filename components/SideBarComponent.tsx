import React from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { ChartColumnBig, FileUser, LayoutDashboard, Settings } from 'lucide-react'

const SideBarComponent = () => {
  return (
    <div className='flex flex-col h-screen py-4'>
      <div className='flex items-center justify-center h-16 mb-4'>
        <h1 className='text-2xl font-bold'>Logo</h1>
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
    </div>
  )
}

export default SideBarComponent