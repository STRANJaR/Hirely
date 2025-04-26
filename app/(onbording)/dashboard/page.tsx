'use client'

import JobApplicationCard from '@/components/JobApplicationCard'
import JobList from '@/components/JobList'
import SearchBar from '@/components/SearchBar'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { Plus, RotateCw } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { toast } from 'sonner'

const Dashboard = () => {

  const [jobs, setJobs] = React.useState([])
  const [loading, setLoading] = React.useState(false)


  const fetchJobs = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:3000/api/job');
      console.log(response.data.jobs);
      setJobs(response.data.jobs)
      toast.success('Jobs fetched successfully', {style: { backgroundColor: '#b9f8cf' }})
    } catch (error) {
      console.error('Error fetching jobs:', error);
      toast.error('Error fetching jobs', {style: { backgroundColor: '#ffc9c9' }})
      setLoading(false)
      
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])


  return (
    <section className='w-full h-full bg-gray-100 px-10 py-8'>
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
        <div className='py-2 flex flex-row items-center justify-between'>
          <div>
          <h1 className='text-1xl font-semibold text-gray-800'>Recent Applications</h1>
          <span className='text-xs text-gray-500'>Your most recent job applications.</span>
          </div>
          <div>
            <span className='text-xs text-gray-500'>
              <Button 
              onClick={() => fetchJobs()}
              variant='outline' className='text-gray-500 hover:bg-gray-200 transition-all cursor-pointer'>
               {loading ? <RotateCw className='h-4 w-4 animate-spin' /> : <RotateCw className='h-4 w-4' />}
              </Button>
            </span>
          </div>
        </div>
        <JobList
          jobs={jobs}
        />
      </div>

    </section>
  )
}

export default Dashboard