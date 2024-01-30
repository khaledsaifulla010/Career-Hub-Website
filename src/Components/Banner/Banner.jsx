import banner from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div>
            <div className='flex items-center justify-between lg:p-8 lg:m-12'>
                <div className='text-left'>
                    <h2 className='lg:text-7xl font-bold '>One Step Closer<br /> <span >To Your Dream Job</span></h2>
                </div>
                <img className='w-[550px]' src={banner} />
            </div>
        </div>
    );
};

export default Banner;