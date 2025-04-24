import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'


const AddNewJob = () => {
  return (
    <section className='w-[60%] mx-auto'>

      <div className='py-4'>
        <h1 className='text-2xl font-bold'>Add New Job</h1>
        <p className='text-xs'>Enter the details of the job you're applying for.</p>

        <div className='flex flex-col gap-4  shadow-md p-4 rounded-md mt-4'>
          <h2 className='text-lg font-semibold'>Company Information</h2>

          <form action="">
            <div className='flex flex-row gap-2 w-full'>

              <div className='w-full'>
                <Label htmlFor="company" className='text-sm font-semibold'>Company Name</Label>
                <Input type="text" placeholder='e.g. Google, Microsoft' className='w-full outline-none' />
              </div>

              <div className='w-full'>
                <Label htmlFor="company" className='text-sm font-semibold'>Company Name</Label>
                <Input type="text" placeholder='https://example.com' className='w-full' />
              </div>
            </div>
          </form>
        </div>

      </div>

    </section>
  )
}

export default AddNewJob