'use client'
import { Info } from 'lucide-react'
import React from 'react'

const Alert = ({ job_title, company_name }: any) => {
    return (
        <div className="h-14 w-full bg-blue-100 text-blue-500 text-sm font-medium p-4 rounded-md border-l-4 border-blue-500 mb-4">
            <div>
                <p className='flex items-center'>
                    <Info className="inline mr-2" />
                    You're editing your application for &nbsp;  <span className='text-blue-600 font-semibold'>{ job_title }</span> &nbsp; at &nbsp; <span className='text-blue-600 font-semibold'>{ company_name }.</span>
                </p>
            </div>
        </div>
    )
}

export default Alert