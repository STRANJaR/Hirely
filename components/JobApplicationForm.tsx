'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { useForm, Controller } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

const JobApplicationForm = ({ initialValues = {}, onFormSubmit }: any) => {
    const [loading, setLoading] = React.useState(false)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            company: initialValues.company || '',
            company_website_url: initialValues.company_website_url || '',
            location: initialValues.location || '',
            work_type: initialValues.work_type || '',
            job_title: initialValues.job_title || '',
            job_type: initialValues.job_type || '',
            salary_range: initialValues.salary_range || '',
            job_posting_url: initialValues.job_posting_url || '',
            application_date: initialValues.application_date
                ? new Date(initialValues.application_date).toISOString().split('T')[0]
                : '',
            status: initialValues.status || '',
            application_method: initialValues.application_method || '',
            referral_name: initialValues.referral_name || '',
            job_description: initialValues.job_description || '',
            contact_name: initialValues.contact_name || '',
            contact_position: initialValues.contact_position || '',
            contact_email: initialValues.contact_email || '',
            contact_phone: initialValues.contact_phone || '',
            notes: initialValues.notes || '',
        },
    })

    return (
        <section className="max-w-5xl mx-auto p-4">
            <div className="bg-white shadow-md p-6 rounded-lg">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Job Details</h1>
                    <p className="text-sm text-gray-500">
                        Fill in the information about the job you're applying for
                    </p>
                </div>

                <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-10">
                    {/* Company Information */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">Company Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="company">Company Name</Label>
                                <Input
                                    placeholder="e.g. Google, Microsoft"
                                    {...register('company', { required: true })}
                                />
                            </div>
                            <div>
                                <Label htmlFor="company_website_url">Company Website</Label>
                                <Input
                                    placeholder="https://example.com"
                                    {...register('company_website_url', { required: true })}
                                />
                            </div>
                            <div>
                                <Label htmlFor="location">Location</Label>
                                <Input
                                    placeholder="e.g. New Delhi, Remote"
                                    {...register('location', { required: true })}
                                />
                            </div>
                            <div>
                                <Label htmlFor="work_type">Work Type</Label>
                                <Controller
                                    name="work_type"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
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

                    {/* Position Details */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">Position Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="job_title">Job Title</Label>
                                <Input placeholder="e.g. Frontend Engineer" {...register('job_title', { required: true })} />
                            </div>
                            <div>
                                <Label htmlFor="job_type">Job Type</Label>
                                <Controller
                                    name="job_type"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Job Type" />
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
                            <div>
                                <Label htmlFor="salary_range">Salary Range</Label>
                                <Input
                                    placeholder="e.g. INR 250000-300000"
                                    {...register('salary_range', { required: false })}
                                />
                            </div>
                            <div>
                                <Label htmlFor="job_posting_url">Job Posting URL</Label>
                                <Input
                                    placeholder="https://careers.example.com/job/123"
                                    {...register('job_posting_url', { required: true })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Application Info */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">Application Info</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="application_date">Application Date</Label>
                                <Input type="date" {...register('application_date', { required: true })} />
                            </div>
                            <div>
                                <Label htmlFor="status">Status</Label>
                                <Controller
                                    name="status"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Status" />
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
                            <div>
                                <Label htmlFor="application_method">Application Method</Label>
                                <Controller
                                    name="application_method"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Method" />
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
                            <div>
                                <Label htmlFor="referral_name">Referral Name</Label>
                                <Input {...register('referral_name')} />
                            </div>
                            <div className="md:col-span-2">
                                <Label htmlFor="job_description">Job Description</Label>
                                <Textarea {...register('job_description', { required: true })} />
                                <p className="text-xs text-gray-500">Brief job requirements and responsibilities.</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">Contact Info</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="contact_name">Contact Name</Label>
                                <Input {...register('contact_name', { required: true })} />
                            </div>
                            <div>
                                <Label htmlFor="contact_position">Contact Position</Label>
                                <Input {...register('contact_position', { required: true })} />
                            </div>
                            <div>
                                <Label htmlFor="contact_email">Contact Email</Label>
                                <Input type="email" {...register('contact_email', { required: true })} />
                            </div>
                            <div>
                                <Label htmlFor="contact_phone">Contact Phone</Label>
                                <Input type="tel" {...register('contact_phone', { required: true })} />
                            </div>
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">Additional Notes</h2>
                        <div>
                            <Label htmlFor="notes">Notes</Label>
                            <Textarea {...register('notes', { required: true })} />
                            <p className="text-xs text-gray-500">Add comments about the job application.</p>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <Button variant="outline" type="reset" className="w-32">
                            Reset
                        </Button>
                        <Button type="submit" className="w-32 bg-blue-600 text-white hover:bg-blue-700">
                            {isSubmitting ? <Loader2 className="animate-spin" /> : 'Submit'}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default JobApplicationForm;