'use client'

import ApplicationCard from '@/components/ApplicationCard'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const JobApplications = () => {
  return (
    <main className='w-full h-screen bg-gray-100'>
      <section className='w-full h-full bg-gray-100 px-10 py-8'>
        <div className='flex flex-row items-center justify-between '>
          <h1 className='text-2xl font-bold text-center'>All Applications</h1>
          <Link href={'/dashboard'}>
            <Button variant='outline' className=' cursor-pointer'> <ArrowLeft className='h-4' /> Back to Dashboard</Button>
          </Link>
        </div>
        <div className='w-full my-10'>
          <div className='flex flex-row flex-wrap gap-4 justify-'>

          <ApplicationCard
            company_name='Monkhub Inc.'
            location='Remote'
            status='Applied'
            role='Software Engineer'
            contact_email='abc@gmail.com'
            company_website='www.monkhub.com'
            updated_at='2023-10-01'
            redirect_location='/dashboard/applications'

          />
          <ApplicationCard
            company_name='Monkhub Inc.'
            location='Remote'
            status='Applied'
            role='Software Engineer'
            contact_email='abc@gmail.com'
            company_website='www.monkhub.com'
            updated_at='2023-10-01'
            redirect_location='/dashboard/applications'

          />
          <ApplicationCard
            company_name='Monkhub Inc.'
            location='Remote'
            status='Applied'
            role='Software Engineer'
            contact_email='abc@gmail.com'
            company_website='www.monkhub.com'
            updated_at='2023-10-01'
            redirect_location='/dashboard/applications'

          />
          </div>

        </div>
      </section >
    </main>
  )
}

export default JobApplications