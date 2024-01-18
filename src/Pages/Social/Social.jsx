import toyImg1 from "../../assets/toys/toy1.jpg"
import toyImg2 from "../../assets/toys/toy2.jpg"
import toyImg3 from "../../assets/toys/toy4.jpg"
import toyImg5 from "../../assets/toys/toy6.jpg"
import toyImg6 from "../../assets/toys/toy7.jpg"
import { Button } from "@nextui-org/react"
import './Social.css'
import { useEffect } from "react"
import Aos from "aos"

const Social = () => {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <div className="max-w-7xl mx-auto py-20">
            <h2 className="text-5xl font-bold text-center mb-10">Follow Our Social Media</h2>
            <div data-aos="fade-up" className="flex flex-col md:flex-row gap-6 justify-between items-center">
                <img className="w-40 h-32 rounded-xl" src={toyImg1} alt="" />
                <img className="w-40 h-32 rounded-xl" src={toyImg6} alt="" />
                <img className="w-40 h-32 rounded-xl" src={toyImg2} alt="" />
                <img className="w-40 h-32 rounded-xl" src={toyImg3} alt="" />
                <img className="w-40 h-32 rounded-xl" src={toyImg2} alt="" />
                <img className="w-40 h-32 rounded-xl" src={toyImg5} alt="" />
                <img className="w-40 h-32 rounded-xl" src={toyImg6} alt="" />
            </div>
            <div className="flex justify-center mt-10">
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-8">
                    See more Photos
                </Button>
            </div>
        </div>
    );
};

export default Social;