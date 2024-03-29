import { Link } from 'react-router-dom';
import locations from '../../assets/icons/Location.png'
import money from '../../assets/icons/money.png'
const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div>
                <div className="card card-compact w-96 border-2 p-4 lg:w-[400px] bg-rose-100">
                    <figure><img className="lg:w-[340px] border-2" src={logo} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold mt-4">{job_title}</h2>
                        <p className="text-3xl font-bold">{company_name}</p>
                        <div className="flex items-center justify-between text-lg font-semibold mt-4">
                            <h2>{remote_or_onsite}</h2>
                            <h2>{job_type}</h2>
                        </div>
                        <div className="flex items-center justify-between text-lg font-semibold mt-4">
                            <div className='flex items-center justify-between'>
                                <img src={locations} />
                                <h2>{location}</h2>
                            </div>
                            <div className='flex items-center justify-between'>
                                <img src={money} />
                                <h2>{salary}</h2>
                            </div>
                        </div>
                        <div className="card-actions justify-start">
                            <Link to={`/job/${id}`}><button className="bg-purple-500 p-3 mt-8 text-white font-semibold rounded-xl">Show Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;