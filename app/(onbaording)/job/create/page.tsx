'use client'

import JobApplicationForm from '@/components/JobApplicationForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'sonner'


const createNewJobApplication = () => {
    const [loading, setLoading] = React.useState(false)
    const router = useRouter()

    const handleJobApplicationSubmit = async (payload: any) => {
        setLoading(true)

        try {
            const response = await axios.post('http://localhost:3000/api/job', payload)
            console.log(response.data);
            if (response.status === 201) {
                toast.success("Job application submitted successfully", { style: { backgroundColor: '#b9f8cf' } })
                setLoading(false)
                
                // setTimeout(() => {
                //     router.push('/dashboard')
                // }, 1000);

            }
        } catch (error) {
            console.error("Error submitting job application:", error);
            toast.error("Error submitting job application. Please try again.", { style: { backgroundColor: '#ffc9c9' } });
            setLoading(false)
            return;

        }

        setLoading(false)

    }
    return (
        <section className='w-full h-full bg-gray-100 px-10 py-8'>
            <div className='flex flex-row items-center justify-between '>
                <h1 className='text-2xl font-bold text-center'>Add New Job Application</h1>
                <Link href={'/dashboard'}>
                    <Button variant='outline' className=' cursor-pointer'> <ArrowLeft className='h-4' /> Back to Dashboard</Button>
                </Link>
            </div>


            <JobApplicationForm onFormSubmit={handleJobApplicationSubmit} />

        </section >
    )
}

export default createNewJobApplication