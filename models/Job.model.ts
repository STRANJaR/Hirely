import mongoose, { Schema } from "mongoose";

export interface IJob {
    _id?: mongoose.Types.ObjectId;
    company: string;
    company_website_url: string;
    location: string;
    work_type: string;
    job_title: string;
    job_type: string;
    salary_range?: string;
    job_posting_url?: string;
    application_date: Date;
    status: string;
    application_method: string;
    referral_name?: string;
    job_description: string;
    contact_name?: string;
    contact_position?: string;
    contact_email: string;
    contact_phone?: string;
    notes: string;
    updated_at: Date;

}

const JobSchema = new Schema<IJob>({
    company: {
        type: String,
        required: true,
    },
    company_website_url: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    work_type: {
        type: String,
        required: true,
        enum: ["Remote", "On-site", "Hybrid"]
    },
    job_title: {
        type: String,
        required: true,
    },
    job_type: {
        type: String,
        required: true,
        enum: ["Full-time", "Part-time", "Internship", "Freelance"]
    },
    salary_range: {
        type: String,
        required: false,
    },
    job_posting_url: {
        type: String,
        required: false,
    },
    application_date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["Applied", "Interviewing", "Offer", "Rejected", "Accepted"]
    },
    application_method: {
        type: String,
        required: true,
        enum: ["Company-Website", "LinkedIn", "Referral", "Cold-Email", "Other"]
    },
    referral_name: {
        type: String,
        required: false,
    },
    job_description: {
        type: String,
        required: true,
    },
    contact_name: {
        type: String,
        required: false,
    },
    contact_position: {
        type: String,
        required: false
    },
    contact_email: {
        type: String,
        required: true
    },
    contact_phone: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: true
    },
    updated_at: {
        type: Date,
        default: Date.now,
        required: true
    },
}, { timestamps: true });

const Job = mongoose.models?.Job || mongoose.model<IJob>("Job", JobSchema);

export default Job;
