import mongoose, {Schema} from "mongoose";

export interface IJob {
    _id?: mongoose.Types.ObjectId;
    company: string;
    role: string;
    status: string;
    date?: Date;
    notes: string;
    company_website_url: string;
    job_posting_url: string;
    location: string;
    description: string;
    contact_email: string;
    contact_name: string;

}

const JobSchema = new Schema<IJob>({
    company: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: false,
    },
    notes: {
        type: String,
        required: true,
    },
    company_website_url: {
        type: String,
        required: true,
    },
    job_posting_url: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    contact_email: {
        type: String,
        required: true,
    },
    contact_name: {
        type: String,
        required: false,
    },
}, {timestamps: true});

const Job = mongoose.models?.Job || mongoose.model<IJob>("Job", JobSchema);

export default Job;
