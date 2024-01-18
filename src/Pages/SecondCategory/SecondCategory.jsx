
import { Button } from "@nextui-org/react";
import teddyImg from "../../assets/Banner/teddy.png"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
const SecondCategory = () => {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center p-4">
                <h2 className="text-3xl font-bold mb-5">Fluppy Toys</h2>
                <div className="flex justify-center items-center gap-3 text-[#6A027B] text-semibold">
                    <Link>
                        <p className="font-semibold">See more</p>
                    </Link>
                    <FaArrowRight />
                </div>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 py-10">
                <div data-aos="fade-up" className="bg-gray-200 w-72 text-center p-5 space-y-4 rounded-xl">
                    <div className="flex justify-center items-center">
                        <img className="h-56" src={teddyImg} alt="" />
                    </div>
                    <h2 className="text-2xl font-bold">Teddy Bear</h2>
                    <Button color="secondary" radius="full" className=" text-white shadow-lg px-8">
                    BDT. 999
                    </Button>
                </div>
                <div data-aos="fade-up" className="bg-gray-200 w-72 text-center p-5 space-y-4 rounded-xl">
                    <div className="flex justify-center items-center">
                        <img className="h-56" src={teddyImg} alt="" />
                    </div>
                    <h2 className="text-2xl font-bold">Teddy Bear</h2>
                    <Button color="secondary" radius="full" className=" text-white shadow-lg px-8">
                    BDT. 999
                    </Button>
                </div>
                <div data-aos="fade-up" className="bg-gray-200 w-72 text-center p-5 space-y-4 rounded-xl">
                    <div className="flex justify-center items-center">
                        <img className="h-56" src={teddyImg} alt="" />
                    </div>
                    <h2 className="text-2xl font-bold">Teddy Bear</h2>
                    <Button color="secondary" radius="full" className=" text-white shadow-lg px-8">
                    BDT. 999
                    </Button>
                </div>
                <div data-aos="fade-up" className="bg-gray-200 w-72 text-center p-5 space-y-4 rounded-xl">
                    <div className="flex justify-center items-center">
                        <img className="h-56" src={teddyImg} alt="" />
                    </div>
                    <h2 className="text-2xl font-bold">Teddy Bear</h2>
                    <Button color="secondary" radius="full" className=" text-white shadow-lg px-8">
                    BDT. 999
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SecondCategory;