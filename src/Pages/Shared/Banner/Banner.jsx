import { Button } from '@nextui-org/react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bannerBg h-[90vh] relative'>
            <div className='bg-gray-200 p-5 md:p-20 md:w-[550px] text-center rounded-xl absolute top-[30%] md:left-[15%] space-y-5'>
                <h2 className='text-[#A5C926]'>This Toy Store is for your kids</h2>
                <p className='text-3xl font-semibold'>Toys are children's words and play is their language</p>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-8">
                View Details
                </Button>
            </div>
            {/* <div id="container">
            <a href="#"><span></span>Scroll</a>
            </div> */}
        </div>
    );
};

export default Banner;