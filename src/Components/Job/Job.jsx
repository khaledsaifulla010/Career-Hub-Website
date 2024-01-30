
const Job = ({job}) => {
    const {logo,job_title,company_name} = job;
    return (
        <div>
            <img src= {logo} />
            <h2>{job_title}</h2>
            <h3>{company_name}</h3>
        </div>
    );
};

export default Job;