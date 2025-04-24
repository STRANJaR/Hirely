'use client'

import React, { useState } from 'react'

const JobList = ({jobs}) => {
    
        return (
            <div>
                <div className="p-4">
                    
                    <table className="min-w-full bg-white shadow rounded-sm overflow-hidden text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 text-left">Company</th>
                                <th className="px-4 py-3 text-left">Role</th>
                                <th className="px-4 py-3 text-left">Status</th>
                                <th className="px-4 py-3 text-left">Date</th>
                                <th className="px-4 py-3 text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs?.map(job => (
                                <tr key={job._id} className="border-t">
                                    <td className="px-4 py-4 text-sm font-semibold">{job.company}</td>
                                    <td className="px-4 py-4">{job.role}</td>
                                    <td className="px-4 py-4 text-xs font-medium"> <span className='bg-pink-200 px-2 rounded-full'>{job.status} </span> </td>
                                    <td className="px-4 py-4">{job.date}</td>
                                    <td className="px-4 py-4">
                                        <button
                                            className="text-blue-500 hover:text-blue-700 text-xs font-semibold"
                                        >
                                            Edit
                                        </button>
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