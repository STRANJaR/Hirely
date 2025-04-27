import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import Link from 'next/link'
import React from 'react'
import { AvatarFallback } from './ui/avatar'
import { Building2, MapPin } from 'lucide-react'

const ApplicationCard = ({ company_name, location, status, role, contact_email, company_website, updated_at, redirect_location }: any) => {
    return (
        <div>
            <div className='w-lg h-68 bg-white shadow-md rounded-md px-4 flex flex-col '>
                <div className='flex flex-col  justify-between py-6 h-full'>
                    <div className='flex flex-row gap-4 justify-between px-2'>
                        <div className='flex flex-row gap-4'>
                            <div>
                                <Avatar className='w-10 h-10'>
                                    <AvatarImage className='w-14 h-14 rounded-md' src="" alt="@shadcn" />
                                    <AvatarFallback className='w-14 h-14 rounded-md bg-purple-200'>
                                        {company_name.charAt(0).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-lg font-bold text-gray-800'> <Building2 className='text-gray-500 inline h-5 w-5' /> {company_name} </span>
                                <span className='text-xs font-semibold text-gray-500'> <MapPin className='text-gray-500 inline h-5 w-5' /> {location} </span>
                            </div>
                        </div>
                        <div>
                            <span className={`${status === 'Applied' ? 'bg-blue-100 text-blue-500' :
                                status === 'Interview' ? 'bg-yellow-100 text-yellow-500' :
                                    status === 'Offer' ? 'bg-green-100 text-green-500' :
                                        status === 'Rejected' ? 'bg-red-100 text-red-500' :
                                            status === 'Accepted' ? 'bg-[#F3E8FF] text-[#A855F7]' : ''
                                } px-3 py-1 rounded-xs text-sm font-medium`}>{status} </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 px-2 py-4'>
                        <span className='text-sm font-semibold text-gray-500'> "Role" : "{role}" </span>
                        <span className='text-sm font-semibold text-gray-500'> "Contact Email" : "{contact_email}" </span>
                        <Link href={company_website} target='_blank' className='text-sm font-semibold text-gray-500'> "Website" : <span className='hover:text-blue-500'> "{company_website}"</span> </Link>
                            
                    </div>
                    <div className=' w-full flex justify-end'>
                        <span className='w-full text-end text-xs text-gray-500 '>
                           Last update : {updated_at}
                        </span>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ApplicationCard