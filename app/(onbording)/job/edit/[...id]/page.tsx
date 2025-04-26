'use client'

import Alert from '@/components/Alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { ArrowLeft, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const EditJob = () => {
    const params = useParams();
    const { id } = params;
    const { register, handleSubmit, control, formState: { errors } } = useForm()
    const [loading, setLoading] = React.useState(false);
    const [jobData, setJobData] = React.useState(null);
    console.log('jobData', jobData);

    // Fetch job data when the component mounts
    const fetchJobData = async () => {
        try {
            const response = await axios.get(`/api/job/${id}`)
            if (response.status === 200) {
                setJobData(response.data);
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


    const handleEditJobApplication = async (data: any) => {
        setLoading(true);
    }



    return (
        <section className='w-full h-full bg-gray-100 px-10 py-8'>
            <div className='flex flex-row items-center justify-between '>
                <h1 className='text-2xl font-bold text-center'>Edit Job Application</h1>
                <Link href={'/dashboard'}>
                    <Button variant='outline' className=' cursor-pointer'> <ArrowLeft className='h-4' /> Back to Dashboard</Button>
                </Link>
            </div>


            <section className=''>
                <div className='py-8'>
                    <Alert 
                    job_title={jobData?.job_title}
                    company_name={jobData?.company}
                    />
                </div>
                <div className='py-4 shadow-md p-4 rounded-md mt-4'>
                    <div className='flex flex-col gap-2 mb-8'>
                        <h1 className='text-1xl text-gray-800 font-bold'>Job Details</h1>
                        <p className='text-xs font-medium text-gray-500'>Fill in the information about the job you're applying for</p>
                    </div>
                    <Separator className='my-4' />


                    <form onSubmit={handleSubmit(handleEditJobApplication)} className='flex flex-col gap-4'>
                        {/* // Company Information  */}
                        <div className='flex flex-col gap-4  '>
                            <h2 className='text-1xl text-gray-800 font-semibold'>Company Information</h2>

                            <div className='flex flex-col gap-2 w-full'>
                                <div className='flex flex-row w-full gap-8'>

                                    <div className='w-full'>
                                        <Label htmlFor="company" className='text-sm font-medium text-gray-800'>Company Name</Label>
                                        <Input
                                            type="text"
                                            defaultValue={jobData?.company}
                                            placeholder='e.g. Google, Microsoft'
                                            className='w-full outline-none'
                                            {...register("company", { required: true })}
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <Label htmlFor="company_website_url" className='text-sm font-medium text-gray-800'>Company Website</Label>
                                        <Input
                                            type="text"
                                            defaultValue={jobData?.company_website_url}
                                            placeholder='https://example.com'
                                            className='w-full'
                                            {...register("company_website_url", { required: true })}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-row w-full gap-8'>

                                    <div className='w-full'>
                                        <Label htmlFor="location" className='text-sm font-medium text-gray-800'>Location</Label>
                                        <Input
                                            type="text"
                                            defaultValue={jobData?.location}
                                            placeholder='e.g. New Delhi, Gurgaon, Noida or Remote'
                                            className='w-full outline-none'
                                            {...register("location", { required: true })}
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <Label htmlFor="work_type" className='text-sm font-medium text-gray-800'>Work Type</Label>
                                        <Controller
                                            name="work_type"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value} defaultValue={jobData?.work_type}>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Select Work Type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Remote">Remote</SelectItem>
                                                        <SelectItem value="On-site">On-site</SelectItem>
                                                        <SelectItem value="Hybrid">Hybrid</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                    </div>
                                </div>

                            </div>
                            <Separator className='my-4' />
                        </div>

                        {/* Position Details  */}

                        <div className='flex flex-col gap-4'>
                            <h2 className='text-1xl text-gray-800 font-semibold'>Position Details</h2>

                            <div className='flex flex-col gap-2 w-full'>
                                <div className='flex flex-row w-full gap-8'>
                                    <div className='w-full'>
                                        <Label htmlFor="job_title" className='text-sm font-medium text-gray-800'>Job Title (Role)</Label>
                                        <Input
                                            type="text"
                                            defaultValue={jobData?.job_title}
                                            placeholder='e.g. Frontend Engineer'
                                            className='w-full outline-none'
                                            {...register("job_title", { required: true })}
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <Label htmlFor="job_type" className='text-sm font-medium text-gray-800'>Job Type</Label>

                                        <Controller
                                            name="job_type"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value} defaultValue={jobData?.job_type}>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Full-time">Full-time</SelectItem>
                                                        <SelectItem value="Part-time">Part-time</SelectItem>
                                                        <SelectItem value="Internship">Internship</SelectItem>
                                                        <SelectItem value="Freelance">Freelance</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />

                                    </div>
                                </div>
                                <div className='flex flex-row w-full gap-8'>
                                    <div className='w-full'>
                                        <Label htmlFor="salary_range" className='text-sm font-medium text-gray-800'>Salary Range (Optional)</Label>
                                        <Input
                                            type="text"
                                            defaultValue={jobData?.salary_range}
                                            placeholder='e.g. INR 250000-300000'
                                            className='w-full outline-none'
                                            {...register("salary_range", { required: true })}
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <Label htmlFor="job_posting_url" className='text-sm font-medium text-gray-800'>Job Posting URL</Label>
                                        <Input
                                            type="text"
                                            defaultValue={jobData?.job_posting_url}
                                            placeholder='https://careers.example.com/job/123'
                                            className='w-full'
                                            {...register("job_posting_url", { required: true })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <Separator className='my-4' />
                        </div>

                        {/* Application Informations  */}

                        <div className='flex flex-col gap-4'>
                            <h2 className='text-1xl text-gray-800 font-semibold'>Application Informations</h2>

                            <div className='flex flex-col gap-2 w-full'>
                                <div className='flex flex-row w-full gap-8'>
                                    <div className='w-full'>
                                        <Label htmlFor="application_date" className='text-sm font-medium text-gray-800'>Application Date</Label>
                                        <Input
                                            type="date"
                                            defaultValue={jobData?.application_date}
                                            className='w-full outline-none'
                                            {...register("application_date", { required: true })}
                                            placeholder='e.g. 2023-10-01'
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <Label htmlFor="status" className='text-sm font-medium text-gray-800'>Status</Label>

                                        <Controller
                                            name="status"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value} defaultOpen={jobData?.status}>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Applied">Applied</SelectItem>
                                                        <SelectItem value="Interview">Interview</SelectItem>
                                                        <SelectItem value="Offer">Offer</SelectItem>
                                                        <SelectItem value="Rejected">Rejected</SelectItem>
                                                        <SelectItem value="Accepted">Accepted</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />


                                    </div>
                                </div>
                                <div className='flex flex-row w-full gap-8'>
                                    <div className='w-full'>
                                        <Label htmlFor="application_method" className='text-sm font-medium text-gray-800'>Application Method</Label>

                                        <Controller
                                            name="application_method"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value} defaultOpen={jobData?.application_method}>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Company-Website">Company Website</SelectItem>
                                                        <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                                                        <SelectItem value="Cold-Email">Cold Email</SelectItem>
                                                        <SelectItem value="Referral">Referral</SelectItem>
                                                        <SelectItem value="Other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />

                                    </div>

                                    <div className='w-full'>
                                        <Label htmlFor="referral_name" className='text-sm font-medium text-gray-800'>Referral Name (Optional)</Label>
                                        <Input
                                            type="text"
                                            defaultValue={jobData?.referral_name}
                                            placeholder=''
                                            className='w-full'
                                            {...register("referral_name", { required: false })}
                                        />
                                    </div>
                                </div>
                                <Label htmlFor="job_description" className='text-sm font-medium text-gray-800'>Job Description</Label>
                                <Textarea
                                    className='w-full'
                                    defaultValue={jobData?.job_description}
                                    {...register("job_description", { required: true })}
                                />
                                <span className='text-xs font-medium text-gray-500'>Brief description of the job requirements and responsibilities.</span>
                            </div>
                            <Separator className='my-4' />
                        </div>


                        {/* Contact Information  */}

                        <div className='flex flex-col gap-4'>
                            <h2 className='text-1xl text-gray-800 font-semibold'>Contact Informations</h2>

                            <div className='flex flex-col gap-2 w-full'>
                                <div className='flex flex-row w-full gap-8'>
                                    <div className='w-full'>
                                        <Label htmlFor="contact_name" className='text-sm font-medium text-gray-800'>Contact Name</Label>
                                        <Input
                                            type="text"
                                            defaultValue={jobData?.contact_name}
                                            className='w-full outline-none'
                                            {...register("contact_name", { required: true })}
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <Label htmlFor="contact_position" className='text-sm font-medium text-gray-800'>Contact Position</Label>
                                        <Input
                                            type="text"
                                            defaultValue={jobData?.contact_position}
                                            className='w-full outline-none'
                                            {...register("contact_position", { required: true })}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-row w-full gap-8'>
                                    <div className='w-full'>
                                        <Label htmlFor="contact_email" className='text-sm font-medium text-gray-800'>Contact Email</Label>
                                        <Input
                                            type="email"
                                            defaultValue={jobData?.contact_email}
                                            className='w-full outline-none'
                                            {...register("contact_email", { required: true })}
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <Label htmlFor="contact_phone" className='text-sm font-medium text-gray-800'>Contact Phone</Label>
                                        <Input
                                            type="number"
                                            placeholder=''
                                            defaultValue={jobData?.contact_phone}
                                            className='w-full'
                                            {...register("contact_phone", { required: true })}
                                        />
                                    </div>
                                </div>

                            </div>
                            <Separator className='my-4' />
                        </div>


                        {/* Additional Notes  */}
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-1xl text-gray-800 font-semibold'>Additional Notes</h2>

                            <div className='flex flex-col gap-2 w-full'>
                                <Label htmlFor="notes" className='text-sm font-medium text-gray-800'>Notes</Label>
                                <Textarea
                                    className='w-full'
                                    defaultValue={jobData?.notes}
                                    {...register("notes", { required: true })}
                                />
                                <span className='text-xs font-medium text-gray-500'>Any additional notes or comments about the job application.</span>
                            </div>
                            <Separator className='my-4' />
                        </div>


                        <div className='flex flex-row items-center justify-between gap-4'>
                            <div className=''>
                                <Button variant={'outline'} onClick={()=> handleDeleteJob} className='cursor-pointer bg-red-100 text-red-500 hover:bg-red-200'> <Trash2 /> Delete Application</Button>
                            </div>
                            <div className='flex flex-row items-center gap-4'>
                            <Button variant={'default'} type='reset' className='cursor-pointer'>Cancel</Button>
                            <Button variant={'default'} type='submit' className='cursor-pointer bg-blue-500 text-white hover:bg-blue-600'>
                                {loading ? "Updating..." : "Update Application"}
                            </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </section >

        </section >
    )
}

export default EditJob