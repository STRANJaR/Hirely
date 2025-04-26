'use client'

import JobApplicationCard from '@/components/JobApplicationCard'
import JobList from '@/components/JobList'
import SearchBar from '@/components/SearchBar'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Dashboard = () => {

  const [jobs, setJobs] = React.useState([])


  const fetchJobs = async () => {
    const response = await axios.get('http://localhost:3000/api/job');
    console.log(response.data.jobs);
    setJobs(response.data.jobs)
  }

  useEffect(() => {
    fetchJobs()
  }, [])


  return (
    <section className='w-full h-screen bg-gray-100 px-10 py-8'>
      <div className='flex flex-row items-center justify-between '>
        <h1 className='text-2xl font-bold text-center'>Dashboard</h1>
        <Link href={'/job/create'}>
        <Button variant='default' className='bg-blue-500 text-white cursor-pointer'> <Plus className='h-4' /> Add New Job</Button>
        </Link>
      </div>

      {/* Job Application Status Cards  */}
      <div className='flex flex-row gap-5 mt-8'>
        <JobApplicationCard
          cardTitle={"Total Job Applications"}
          value={10}
          redirectTitle={"View All Applications"}
          redirectLocation={"/applications"}
        />
        <JobApplicationCard
          cardTitle={"In Progress"}
          value={14}
          redirectTitle={"View active"}
          redirectLocation={"/applications"}
        />
        <JobApplicationCard
          cardTitle={"Interview Scheduled"}
          value={2}
          redirectTitle={"View Interviews"}
          redirectLocation={"/applications"}
        />
        <JobApplicationCard
          cardTitle={"Offers"}
          value={4}
          redirectTitle={"View Offers"}
          redirectLocation={"/applications"}
        />
      </div>

      {/* Search Bar */}
      <div className='py-8'>
        <div className='bg-white rounded-md shadow-md px-4 py-4'>
          <SearchBar />
        </div>
      </div>

      {/* Recent Applications  */}
      <div className='bg-white rounded-md shadow-md px-4 py-4'>
        <div className='py-2'>
          <h1 className='text-1xl font-semibold text-gray-800'>Recent Applications</h1>
          <span className='text-xs text-gray-500'>Your most recent job applications.</span>
        </div>
        <JobList
          jobs={jobs}
        />
      </div>

    </section>
  )
}

export default Dashboard