'use client'

import ApplicationCard from '@/components/ApplicationCard'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const JobApplications = () => {

  const [jobData, setJobData] = useState([])

  const fetchAllJob = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/job')
      console.log('JobData: ', response.data)
      setJobData(response.data.jobs)
    } catch (error) {
      console.log('something went wrong while fetching job')
    }
  }

  useEffect(()=> {
    fetchAllJob()
  }, [])


  return (
    <main className='w-full h-full bg-gray-100'>
      <section className='w-full h-full bg-gray-100 px-10 py-8'>
        <div className='flex flex-row items-center justify-between '>
          <h1 className='text-2xl font-bold text-center'>All Applications</h1>
          <Link href={'/dashboard'}>
            <Button variant='outline' className=' cursor-pointer'> <ArrowLeft className='h-4' /> Back to Dashboard</Button>
          </Link>
        </div>
        <div className='w-full my-10'>
          <div className='flex flex-row flex-wrap gap-4 justify-'>


        {jobData && jobData.map(job => (
          <ApplicationCard
          key={job._id}
              company_name={job.company}
              location={job.location}
              status={job.status}
              role={job.job_title}
              contact_email={job.contact_email}
              company_website={job.company_website_url}
              updated_at={job.updatedAt}
              // redirect_location={job.job_posting_url}

            />
        ))}
            

          </div>

        </div>
      </section >
    </main>
  )
}

export default JobApplications