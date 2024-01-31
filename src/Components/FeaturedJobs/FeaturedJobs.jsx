import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <h1 className="lg:text-4xl font-bold text-center lg:mt-24">Featured Jobs</h1>
            <p className="mt-8 text-center text-xl font-semibold">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid lg:grid-cols-3 mt-24 lg:ml-24 gap-y-6">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;