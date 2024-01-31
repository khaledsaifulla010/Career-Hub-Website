import account from '../../assets/icons/accounts.png'
import creative from '../../assets/icons/creative.png'
import marketing from '../../assets/icons/marketing.png'
import chip from '../../assets/icons/chip.png'

const CategoryList = () => {
    return (
        <div>
            <div>
                <h2 className="lg:text-4xl font-bold text-center lg:mt-24">Job Category List</h2>
                <p className="mt-8 text-center text-xl font-semibold">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex items-center justify-around mt-24 '>
                <div className='w-[250px] h-[200px] p-4 border-2 rounded-xl'>
                    <img src={account} />
                    <h2 className='text-2xl font-semibold mt-6'>Account & Finance</h2>
                    <p className='mt-4'>300 Jobs Available</p>
                </div>
                <div className='w-[250px] h-[200px] p-4 border-2 rounded-xl '>
                    <img src={creative} />
                    <h2 className='text-2xl font-semibold mt-6'>Creative Design</h2>
                    <p className='mt-4'>100+ Jobs Available</p>
                </div>
                <div className='w-[250px] h-[200px] p-4 border-2 rounded-xl mt-4'>
                    <img src={marketing} />
                    <h2 className='text-2xl font-semibold mt-6'>Marketing & Sales</h2>
                    <p className='mt-4'>150 Jobs Available</p>
                </div>
                <div className='w-[250px] h-[200px] p-4 border-2 rounded-xl mt-4'>
                    <img src={chip} />
                    <h2 className='text-2xl font-semibold mt-6'>Engineering Job</h2>
                    <p className='mt-4'>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;