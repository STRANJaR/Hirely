'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Separator } from './ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import dateFormat, { masks } from "dateformat";
import Pagination from './Pagination'
import { PAGE_SIZE } from '@/constant'


const JobList = ({ jobs }: any) => {
    const [currentPage, setCurrentPage] = useState(0)

    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    return (
        <div>
            <div className="">

                <table className="min-w-full bg-white  overflow-hidden text-sm">
                    <thead className="bg-gray-50">
                        <tr className='text-gray-600 text-xs uppercase font-semibold'>
                            <th className="px-4 py-3 text-left">Company</th>
                            <th className="px-4 py-3 text-left">Role</th>
                            <th className="px-4 py-3 text-left">Status</th>
                            <th className="px-4 py-3 text-left">Date</th>
                            <th className="px-4 py-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs && jobs.slice(start, end).map((job: any) => (
                            <tr key={job._id} className="border-t">
                                <td className="px-4 py-4 text-sm font-semibold">
                                    <div className='flex flex-row items-center space-x-2'>
                                        <Avatar className='h-10 w-10'>
                                            <AvatarImage className='h-10' src="https://github.com/shadcnd.png" alt="@shadcn" />
                                            <AvatarFallback className='bg-purple-100'>
                                                {job?.company.charAt(0).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="text-gray-800 font-semibold text-xs">{job.company}</span>
                                            <span className="text-gray-500 text-xs">{job.location || 'New Delhi'}</span>
                                        </div>
                                    </div>

                                </td>
                                <td className="px-4 py-4 text-gray-600 text-xs font-medium">{job.job_title}</td>
                                <td className="px-4 py-4 text-xs font-medium"> <span className={`${job?.status === 'Applied' ? 'bg-blue-100 text-blue-500' :
                                    job?.status === 'Interview' ? 'bg-yellow-100 text-yellow-500' :
                                        job?.status === 'Offer' ? 'bg-green-100 text-green-500' :
                                            job?.status === 'Rejected' ? 'bg-red-100 text-red-500' :
                                                job?.status === 'Accepted' ? 'bg-[#F3E8FF] text-[#A855F7]' : ''
                                    } px-3 py-1 rounded-xs`}>{job.status} </span> </td>

                                <td className="px-4 py-4">
                                    <span className="text-gray-500 text-xs font-medium">{dateFormat(job.application_date, "mmmm dS, yyyy")}</span>
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex h-5 items-center space-x-2 text-sm">
                                        <Link href={`/job/${job._id}`}
                                            className="text-blue-500 hover:text-blue-700 text-xs font-semibold"
                                        >
                                            View
                                        </Link>
                                        <Separator orientation='vertical' />
                                        <Link href={`/job/edit/${job._id}`}
                                            className="text-gray-500 hover:text-gray-700 text-xs font-semibold"
                                        >
                                            Edit
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* pagination  */}
            <Pagination
                jobs={jobs}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

        </div>
    )
}

export default JobList