import { Parallax } from "react-parallax";
import secondBanner from "../../assets/Banner/banner2.jpg"
import { FaPlayCircle } from "react-icons/fa";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const ParallaxBanner = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <div>
            <Parallax blur={10} bgImage={secondBanner} bgImageAlt="the cat" strength={200}>
                <div className="text-center max-w-7xl mx-auto px-20 py-32 space-y-6">
                    <h2 className="font-semibold text-[#7828C8]">About the Shop</h2>
                    <h2 className="text-4xl font-bold text-white">Watch Our Story</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem unde deleniti officiis sed pariatur numquam accusantium illum delectus aperiam aliquam accusamus vitae aut laudantium eveniet tenetur, ducimus, obcaecati minus repellat.</p>
                    <div className="flex justify-center items-center">
                        
                        <Button className="text-7xl bg-[#7828C8] text-white p-8" onPress={onOpen}><FaPlayCircle /></Button>
                            <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                                <ModalContent>
                                {(onClose) => (
                                    <>
                                    <ModalHeader className="flex flex-col gap-1">Watch our Story</ModalHeader>
                                    <ModalBody>
                                    <iframe width="auto" height="315" src="https://www.youtube.com/embed/lo6x4eulY9g?si=CXRtFOm_P2pfDoq5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    
                                        {/* <video controls width="">
                                        
                                        Download the
                                        <a href="/media/cc0-videos/flower.webm">WEBM</a>
                                        or
                                        <a href="/media/cc0-videos/flower.mp4">MP4</a>
                                        video.
                                        </video> */}
                                        
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                        </Button>
                                        
                                    </ModalFooter>
                                    </>
                                )}
                                </ModalContent>
                            </Modal>
                    </div>  
                </div>
            </Parallax>
        </div>
    );
};

export default ParallaxBanner;