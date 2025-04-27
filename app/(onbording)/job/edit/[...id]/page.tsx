'use client'

import Alert from '@/components/Alert';
import JobApplicationForm from '@/components/JobApplicationForm';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { ArrowLeft, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

const EditJob = () => {
    const params = useParams();
    const { id } = params;
    const [initialValues, setInitialValues] = React.useState(null);
    const [loading, setLoading] = React.useState(false);


    // Fetch job data when the component mounts
    const fetchJobData = async () => {
        try {
            const response = await axios.get(`/api/job/${id}`)
            if (response.status === 200) {
                setInitialValues(response.data);
                console.log("Job data fetched successfully:", response.data);
                toast.success("Job data fetched successfully");
            } else {
                console.error("Failed to fetch job data:", response.statusText);
                toast.error("Failed to fetch job data");
            }
        } catch (error: any) {
            console.error("Error fetching job data:", error);
            toast.error(error.message);
        }
    }

    // Handle job update
    const handleJobUpdate = async (payload: any) => {
        setLoading(true);
        try {
            const updatedJobApplication = await axios.put(`http://localhost:3000/api/job/${id}`, payload)
            if (updatedJobApplication.status === 200) {
                toast.success("Job updated successfully");
                console.log("Job updated successfully:", updatedJobApplication.data);
            } else {
                console.error("Failed to update job:", updatedJobApplication.statusText);
                toast.error("Failed to update job");
            }
        } catch (error: any) {
            console.error("Error updating job:", error);
            toast.error(error.message);
            setLoading(false);

        }
        setLoading(false);
    }

    // Handle delete job
    const handleDeleteJob = async () => {
        try {
            const deletedJob = await axios.delete(`/api/job/${id}`)
            if (deletedJob.status === 200) {
                toast.success("Job deleted successfully");
                console.log("Job deleted successfully:", deletedJob.data);
            } else {
                console.error("Failed to delete job:", deletedJob.statusText);
                toast.error("Failed to delete job");
            }
        } catch (error: any) {
            console.error("Error deleting job:", error);
            toast.error(error.message);

        }
    }

    React.useEffect(() => {
        fetchJobData();
    }, [id]);



    if (!initialValues) return (<div>Loading...</div>)

    return (
        <section className='w-full h-full bg-gray-100 px-10 py-8'>
            <div className='flex flex-row items-center justify-between '>
                <h1 className='text-2xl font-bold text-center'>Edit Job Application</h1>
                <Link href={'/dashboard'}>
                    <Button variant='outline' className=' cursor-pointer'> <ArrowLeft className='h-4' /> Back to Dashboard</Button>
                </Link>
            </div>


            <JobApplicationForm initialValues={initialValues} onFormSubmit={handleJobUpdate} />

        </section >
    )
}

export default EditJob