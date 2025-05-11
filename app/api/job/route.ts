import Job from "@/models/Job.model";
import { dbConnect } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const { userId } = await auth()
    console.log("Server userId: ", userId)
    const {
        company,
        company_website_url,
        location,
        work_type,
        job_title,
        job_type,
        salary_range,
        job_posting_url,
        application_date,
        status,
        application_method,
        referral_name,
        job_description,
        contact_name,
        contact_position,
        contact_email,
        contact_phone,
        notes
    } = await request.json();

    if (!company || !location || !work_type || !job_title || !job_type || !status || !application_date || !application_method || !job_description || !contact_email || !notes) {
        return NextResponse.json({ error: "Please fill all the fields" }, { status: 400 })
    }
    if (!company_website_url) {
        return NextResponse.json({ error: "Please fill company website url" }, { status: 400 })
    }
    if (!contact_name) {
        return NextResponse.json({ error: "Please fill contact name" }, { status: 400 })
    }
    if (!contact_position) {
        return NextResponse.json({ error: "Please fill contact position" }, { status: 400 })
    }
    if (!contact_phone) {
        return NextResponse.json({ error: "Please fill contact phone" }, { status: 400 })
    }
    if (!salary_range) {
        return NextResponse.json({ error: "Please fill salary range" }, { status: 400 })
    }
    if (!job_posting_url) {
        return NextResponse.json({ error: "Please fill job posting url" }, { status: 400 })
    }
    if (!application_date) {
        return NextResponse.json({ error: "Please fill application date" }, { status: 400 })
    }
    if (!contact_phone) {
        return NextResponse.json({ error: "Please fill contact phone" }, { status: 400 })
    }
    if (!notes) {
        return NextResponse.json({ error: "Please fill notes" }, { status: 400 })
    }
    if (!job_description) {
        return NextResponse.json({ error: "Please fill job description" }, { status: 400 })
    }
    await dbConnect();


    try {
        const newJob = await Job.create({
            userId,
            company,
            company_website_url,
            location,
            work_type,
            job_title,
            job_type,
            salary_range,
            job_posting_url,
            application_date,
            status,
            application_method,
            referral_name: referral_name || "",
            job_description,
            contact_name,
            contact_position,
            contact_email,
            contact_phone,
            notes

        })

        return NextResponse.json(
            { message: "Job added successfully", job: newJob },
            { status: 201 }
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error while adding job" }, { status: 500 })
    }

}


// GET all jobs
export async function GET(request: NextRequest) {
    const { userId } = await auth()
    try {
        await dbConnect();
        const jobs = await Job.find({ userId }).sort({ createdAt: -1 });
        return NextResponse.json({ jobs }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error while fetching jobs" }, { status: 500 })
    }
}

// DELETE a job
export async function PATCH(request: NextRequest) {
    try {
        const { id, status } = await request.json();
        if (!id || !status) {
            return NextResponse.json({ error: "Please fill all the fields" }, { status: 400 })
        }
        await dbConnect();

        const updatedJob = await Job.findByIdAndUpdate(id, { status }, { new: true });

        return NextResponse.json(
            { message: "Job updated successfully", job: updatedJob },
            { status: 200 }
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error while updating job" }, { status: 500 })

    }
}
