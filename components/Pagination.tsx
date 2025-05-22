import React, { useState } from 'react'
import { Button } from './ui/button'
import { PAGE_SIZE } from '@/constant';

const Pagination = ({ currentPage, setCurrentPage, jobs }: any) => {


    const totalJobs = jobs.length;
    const numberOfPages = Math.ceil(totalJobs / PAGE_SIZE);
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;


    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage((prev: number) => prev - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < numberOfPages - 1) {
            setCurrentPage((prev: number) => prev + 1);
        }
    }


    return (
        <div>
            <div className="flex flex-row items-center justify-end mt-4 ">
                <span className="text-gray-500 text-xs font-medium pr-3">Showing {start} to {end} of {totalJobs} entries</span>
                <div className="flex flex-row space-x-2">

                    <Button
                        disabled={currentPage === 0}
                        variant={'outline'}
                        onClick={() => handlePrev()}
                        className='px-2 py-1 text-xs font-semibold text-gray-500 hover:bg-gray-100 border rounded-md cursor-pointer'
                    >Prev</Button>

                    {[...Array(numberOfPages).keys().map(page => (
                        <span
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-1 flex items-center text-xs font-semibold text-gray-500 hover:bg-gray-100 border rounded-md cursor-pointer 
                            ${page === currentPage ? 'bg-blue-100 border-blue-400' : 'bg-gray-50'} `}
                        >
                            {page}
                        </span>
                    ))]}

                    <Button
                        disabled={currentPage === numberOfPages - 1}
                        variant={'outline'}
                        onClick={() => handleNext()}
                        className='px-2 py-1 text-xs font-semibold text-gray-500 hover:bg-gray-100 border rounded-md cursor-pointer'
                    >Next</Button>

                </div>
            </div>
        </div>
    )
}

export default Pagination