import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs]=useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h1 className="lg:text-3xl font-bold text-center">Featured Jobs : {jobs.length}</h1>
            <p className="mt-4 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;