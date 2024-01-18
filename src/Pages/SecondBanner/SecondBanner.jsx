import { Button } from "@nextui-org/react";
import teddyImg from "../../assets/Banner/teddy.png"
import toyImg from "../../assets/Banner/toy1.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


const SecondBanner = () => {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <div className="flex flex-col md:flex-row justify-center items-center py-20 gap-10 text-white">
            <div data-aos="fade-up" className="flex bg-gradient-to-br from-pink-500 to-yellow-500 rounded-xl justify-center items-center md:w-[550px]">
                <div>
                    <img className="h-56 -mt-14" src={teddyImg} alt="" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Fluppy Toys</h2>
                    <Button color="secondary" radius="full" className=" text-white shadow-lg px-8">
                        Shop Now
                    </Button>
                </div>
            </div>
            <div data-aos="fade-up" className="flex bg-gradient-to-br from-pink-500 to-yellow-500 rounded-xl justify-center items-center md:w-[550px]">
                <div>
                    <img className="h-56 -mt-14" src={teddyImg} alt="" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Fluppy Toys</h2>
                    <Button color="secondary" radius="full" className=" text-white shadow-lg px-8">
                        Shop Now
                    </Button>
                </div>
            </div>
            {/* <div data-aos="fade-up" className="flex bg-gradient-to-tr from-pink-500 to-yellow-500 rounded-xl justify-center items-center md:w-[550px]">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Fluppy Toys</h2>
                    <Button color="secondary" radius="full" className=" text-white shadow-lg px-8">
                    Shop Now
                    </Button>
                </div>
                <div>
                    <img className="h-56 -mt-14" src={toyImg} alt="" />
                </div>
            </div> */}
        </div>
    );
};

export default SecondBanner;