'use client'

import JobApplicationStatusCard from '@/components/JobApplicationStatusCard'
import JobList from '@/components/JobList'
import SearchBar from '@/components/SearchBar'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { Plus, RotateCw } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { toast } from 'sonner'


const Dashboard = () => {

  // TODO: Add a loading state to the job list 
  interface Job {
    id: string;
    title: string;
    status: string;
    // Add other properties as needed
  }

  const [jobs, setJobs] = React.useState<Job[]>([])
  const [loading, setLoading] = React.useState(false)

  console.log("Jobs: ", jobs)

  const { user } = useUser()
  console.log("User: ", user?.id)

  const fetchJobs = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:3000/api/job');
      setJobs(response.data.jobs)
      toast.success('Jobs fetched successfully', { style: { backgroundColor: '#b9f8cf' } })
    } catch (error) {
      console.error('Error fetching jobs:', error);
      toast.error('Error fetching jobs', { style: { backgroundColor: '#ffc9c9' } })
      setLoading(false)

    }
    setLoading(false)
  }

  const totalJobApplications = jobs?.length;
  const totalJobApplicationsInProgress = jobs?.filter(job => job?.status !== 'Rejected').length;
  const totalJobApplicationsInterview = jobs?.filter(job => job?.status === 'Interview').length;
  const totalJobOffers = jobs?.filter(job => job?.status === 'Offer').length;
  

  useEffect(() => {
    fetchJobs()
  }, [])


  return (
    <section className='w-full h-full bg-gray-100 px-10 py-8'>
      <div className='flex flex-row items-center justify-between '>
        <h1 className='text-2xl font-bold text-center'>Dashboard</h1>
        <Link href={'/job/create'}>
          <Button variant='default' className='bg-blue-500 hover:bg-blue-700 text-white cursor-pointer'> <Plus className='h-4' /> Add New Job</Button>
        </Link>
      </div>

      {/* Job Application Status Cards  */}
      <div className='flex flex-row gap-5 mt-8'>
        <JobApplicationStatusCard
          cardTitle={"Total Job Applications"}
          value={totalJobApplications}
          redirectTitle={"View All Applications"}
          redirectLocation={"/applications"}
        />
        <JobApplicationStatusCard
          cardTitle={"In Progress"}
          value={totalJobApplicationsInProgress}
          redirectTitle={"View active"}
          redirectLocation={"/in-progress"}
        />
        <JobApplicationStatusCard
          cardTitle={"Interview Scheduled"}
          value={totalJobApplicationsInterview}
          redirectTitle={"View Interviews"}
          redirectLocation={"/interview-scheduled"}
        />
        <JobApplicationStatusCard
          cardTitle={"Offers"}
          value={totalJobOffers}
          redirectTitle={"View Offers"}
          redirectLocation={"/offers"}
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