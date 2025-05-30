import Job from "@/models/Job.model";
import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";

type Context = {
    params: {
        id: string;
    };
};


export async function GET(req: NextRequest, {params}: any) {
    await dbConnect();
    const { id } = params;

    try {
        const job = await Job.findById(id);
        if (!job) return new Response("Job not found", { status: 404 });
        return NextResponse.json(job, { status: 200 });
    } catch (err) {
        return new Response("Failed to fetch job", { status: 500 });
    }
}

export async function PUT(req: NextRequest, {params}: any) {
    await dbConnect();
    const { id } = params;

    try {
        const data = await req.json();
        const updatedJob = await Job.findByIdAndUpdate(id, data, { new: true });

        if (!updatedJob) return NextResponse.json({ message: "Job not found" }, { status: 404 });

        return NextResponse.json({ message: "Job updated", updatedJob }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Failed to update job" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, {params}: any) {
    await dbConnect();
    const { id } = params;

    try {
        await Job.findByIdAndDelete(id);
        return NextResponse.json({ message: "Job deleted" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Failed to delete job" }, { status: 500 });
    }
}
