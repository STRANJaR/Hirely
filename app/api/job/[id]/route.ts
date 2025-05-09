import Job from "@/models/Job.model";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        const existingJob = await Job.findById(id)
        if (!existingJob) {
            return new Response("Job not found", { status: 404 });
        }
        return NextResponse.json(existingJob, { status: 200 });
    } catch (error) {
        return new Response("Failed to find job", { status: 500 });

    }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        const data = await request.json();

        const existingJob = await Job.findById(id);
        if (!existingJob) {
            return NextResponse.json({ message: "Job not found" }, { status: 404 });
        }
        const updatedJobApplication = await Job.findOneAndUpdate({ _id: id }, data, { new: true })
        return NextResponse.json({ message: "Job updated successfully", updatedJobApplication }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to update job" }, { status: 500 });

    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        await Job.findByIdAndDelete(id);
        return NextResponse.json({ message: "Job deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to delete job" }, { status: 500 });

    }
}