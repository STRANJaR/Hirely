import Job from "@/models/Job.model";
import { dbConnect } from "@/utils/db";
import {NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {
    try {
        const {company, role, status, notes, link, company_website_url, job_posting_url,location,  description,contact_email, contact_name } = await request.json();
        if(!company || !role || !status || !notes || !link || !company_website_url || !job_posting_url || !location || !description || !contact_email || !contact_name) {
            return NextResponse.json({error: "Please fill all the fields"}, {status: 400})
        }
        await dbConnect();

        const newJob = await Job.create({
            company,
            role,
            status,
            notes,
            link,
            company_website_url,
            job_posting_url,
            location,
            description,
            contact_email,
            contact_name

        })

        return NextResponse.json(
            {message: "Job added successfully", job: newJob},
            {status: 201}
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: "Error while adding job"}, {status: 500})
    }

}


export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        const jobs = await Job.find({}).sort({createdAt: -1});
        return NextResponse.json({jobs}, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: "Error while fetching jobs"}, {status: 500})
    }
}

export async function PATCH(request: NextRequest){
    try {
        const {id, status} = await request.json();
        if(!id || !status) {
            return NextResponse.json({error: "Please fill all the fields"}, {status: 400})
        }
        await dbConnect();

        const updatedJob = await Job.findByIdAndUpdate(id, {status}, {new: true});

        return NextResponse.json(
            {message: "Job updated successfully", job: updatedJob},
            {status: 200}
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: "Error while updating job"}, {status: 500})
        
    }
}