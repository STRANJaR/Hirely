'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Separator } from './ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const JobList = ({ jobs }) => {

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
                        {jobs?.map(job => (
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
                                <td className="px-4 py-4 text-gray-800">{job.role}</td>
                                <td className="px-4 py-4 text-xs font-medium"> <span className='bg-pink-200 px-2 rounded-full'>{job.status} </span> </td>
                                <td className="px-4 py-4">{job.date}</td>
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
        </div>
    )
}

export default JobList