import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const AddNewJob = () => {
  return (
    <section className='w-[50%] mx-auto'>

      <div className='py-4 shadow-md p-4 rounded-md mt-4'>
        <h1 className='text-2xl font-bold'>Add New Job</h1>
        <p className='text-xs'>Enter the details of the job you're applying for.</p>

        <form action="">
          {/* // Company Information  */}
          <div className='flex flex-col gap-4  '>
            <h2 className='text-lg font-semibold'>Company Information</h2>

            <div className='flex flex-col gap-2 w-full'>
              <div className='flex flex-row w-full gap-8'>

                <div className='w-full'>
                  <Label htmlFor="company" className='text-sm font-semibold'>Company Name</Label>
                  <Input type="text" placeholder='e.g. Google, Microsoft' className='w-full outline-none' />
                </div>

                <div className='w-full'>
                  <Label htmlFor="company-website" className='text-sm font-semibold'>Company Website</Label>
                  <Input type="text" placeholder='https://example.com' className='w-full' />
                </div>
              </div>
              <Label htmlFor="location" className='text-sm font-semibold'>Location</Label>
            </div>
            <Input type="text" placeholder='e.g. New Delhi, Gurgaon, Noida or Remote' className='w-full outline-none' />
            <Separator className='my-4' />
          </div>

          {/* Job Details  */}

          <div className='flex flex-col gap-4'>
            <h2 className='text-lg font-semibold'>Job Details</h2>

            <div className='flex flex-col gap-2 w-full'>
              <div className='flex flex-row w-full gap-8'>
                <div className='w-full'>
                  <Label htmlFor="company" className='text-sm font-semibold'>Job Title (Role)</Label>
                  <Input type="text" placeholder='e.g. Frontend Engineer' className='w-full outline-none' />
                </div>

                <div className='w-full'>
                  <Label htmlFor="company-website" className='text-sm font-semibold'>Job Type</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className='w-full '>Full-time</DropdownMenuTrigger>
                    <DropdownMenuContent className='w-full'>
                      <DropdownMenuLabel>Part-time</DropdownMenuLabel>
                      <DropdownMenuLabel>Internship</DropdownMenuLabel>
                      <DropdownMenuLabel>Freelance</DropdownMenuLabel>
                    </DropdownMenuContent>
                  </DropdownMenu>

                </div>
              </div>
              <div className='flex flex-row w-full gap-8'>
                <div className='w-full'>
                  <Label htmlFor="company" className='text-sm font-semibold'>Salary Range (Optional)</Label>
                  <Input type="text" placeholder='e.g. INR 250000-300000' className='w-full outline-none' />
                </div>

                <div className='w-full'>
                  <Label htmlFor="company-website" className='text-sm font-semibold'>Job Posting URL</Label>
                  <Input type="text" placeholder='https://careers.example.com/job/123' className='w-full' />
                </div>
              </div>
            </div>
            <Separator className='my-4' />
          </div>

        </form>
      </div>

    </section>
  )
}

export default AddNewJob