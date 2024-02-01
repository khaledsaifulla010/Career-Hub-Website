import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const JobDetailsCard = ({ job }) => {



    const { job_description, job_responsibility, educational_requirements, experiences, contact_information, phone, email, address } = job


    const handleApplyJob = () => {
        toast('You Have Applied Successfully! ')
    }
    return (
        <div className="mt-24">
            <div className="  border-2 lg:w-[1100px] lg:h-[890px] lg:ml-48 rounded-xl bg-green-50 text-">
                <div className="hero-content text-center ">
                    <div>
                        <h1 className="text-4xl font-bold mt-10 underline">Job Details</h1>
                        <p className="py-6 text-justify mr-12 mt-8 text-xl"><span className="font-bold underline">Job Description</span> : {job_description}</p>
                        <p className="py-6 text-justify mr-12 mt-6 text-xl"><span className="font-bold underline">Job Responsibility</span> : {job_responsibility}</p>
                        <p className="py-6 text-justify mr-12 mt-2 text-xl"><span className="font-bold underline">Educational Requirements </span> : {educational_requirements}</p>
                        <p className="py-6 text-justify mr-12 mt-2 text-xl"><span className="font-bold underline">Experiences</span> : {experiences}</p>

                        <p className=" text-justify mr-12  text-xl"><span className="font-bold underline">Contact Information</span> : <br /> <span className="font-bold underline">Phone</span> : {contact_information.phone}</p>
                        <p className=" text-justify mr-12 text-xl "><span className="font-bold underline"></span> <br /> <span className="font-bold underline">Email</span> : {contact_information.email}</p>
                        <p className=" text-justify mr-12 text-xl"><span className="font-bold underline"></span>  <br /> <span className="font-bold underline">Address</span> : {contact_information.address}</p>

                        <div>
                            <button onClick={handleApplyJob} className="bg-green-500 text-white font-bold p-2 rounded-xl mt-10">Apply Now</button>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsCard;