'use client'

import Header from '@/components/Header'
import JobList from '@/components/JobList'
import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
  const [jobs, setJobs] = React.useState([])


  const fetchJobs = async () => {
    const response = await axios.get('http://localhost:3000/api/job');
    console.log(response.data.jobs);
    setJobs(response.data.jobs)
  }

  useEffect(()=> {
    fetchJobs()
  }, [])
  return (
    <div className='w-[60%] mx-auto'>
      <Header/>
      <JobList 
      jobs={jobs}
      />
    </div>
  )
}

export default Home