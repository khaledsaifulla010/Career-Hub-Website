import { useLoaderData, useParams } from "react-router-dom";
import JobDetailsCard from "./JobDetailsCard";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id == id)
    console.log(job)
    return (
        <div>
            <JobDetailsCard job={job}></JobDetailsCard>
        </div>
    );
};

export default JobDetails;