'use client'

import React from 'react'
import { Input } from './ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const SearchBar = () => {
    return (
        <div>
            <div className='flex flex-row gap-5 items-center justify-between'>
                <Input type="text" placeholder='Search for jobs' className='border border-gray-300 rounded-md px-4 py-2 w-full' />
                <div className="w-64">

                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All Statuses" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="applied">Applied</SelectItem>
                            <SelectItem value="interview">Interview</SelectItem>
                            <SelectItem value="offred">Offred</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                    </Select>

                </div>
            </div>
        </div>
    )
}

export default SearchBar