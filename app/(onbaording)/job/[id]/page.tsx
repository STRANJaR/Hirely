'use client'

import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { toast } from 'sonner';

type Job = {
    id: string;
    title: string;
    company: string;
    status: string;
    dateApplied: string;
    notes: string;
    location?: string;
    salary?: string;
  };

  interface jobData {
    id: string;
    title: string;
    company: string;
    status: string;
    dateApplied: string;
    notes: string;
    location?: string;
    salary?: string;
  };



const JobDetailPage = () => {

    const params = useParams();

    const { id } = params;
      const [jobData, setJobData] = React.useState<jobData | null>(null);
        const [loading, setLoading] = React.useState(false);


    const fetchJobData = async () => {
        try {
            const response = await axios.get(`/api/job/${id}`)
            if (response.status === 200) {
                setJobData(response.data);
                console.log("Job data fetched successfully:", response.data);
                toast.success("Job data fetched successfully", { style: { backgroundColor: '#b9f8cf' } });
            }
        } catch (error: any) {
            console.error("Error fetching job data:", error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        fetchJobData();
    }, [])
    return (
        <div>
            <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-white shadow-xl mt-10">
                <h1 className="text-2xl font-bold mb-4">{jobData?.title}</h1>
                <div className="text-gray-600 mb-2">
                    <span className="font-semibold">Company:</span> {jobData?.company}
                </div>
                <div className="text-gray-600 mb-2">
                    <span className="font-semibold">Status:</span> {jobData?.status}
                </div>
                <div className="text-gray-600 mb-2">
                    <span className="font-semibold">Applied On:</span> {jobData?.dateApplied}
                </div>
                {jobData?.location && (
                    <div className="text-gray-600 mb-2">
                        <span className="font-semibold">Location:</span> {jobData?.location}
                    </div>
                )}
                {jobData?.salary && (
                    <div className="text-gray-600 mb-2">
                        <span className="font-semibold">Salary:</span> {jobData?.salary}
                    </div>
                )}
                <div className="text-gray-700 mt-4">
                    <span className="font-semibold">Notes:</span>
                    <p className="mt-1 whitespace-pre-wrap">{jobData?.notes}</p>
                </div>
            </div>
        </div>
    )
}

export default JobDetailPage