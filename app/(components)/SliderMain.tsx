'use client';

import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image";


interface CarouselProps {
    images:string[];
}
export default function SliderMain({images}:CarouselProps) {

    const [current,setCurrent] = useState(0)

    const currentImage = images[current]

    const prevImage = () => {
        const isFirstSlide = current === 0;
        const newIndex = isFirstSlide ? images.length - 1 : current - 1;
        setCurrent(newIndex)
    }

    const nextImage = () => {
        const isLastSlide = current === images.length - 1;
        const newIndex = isLastSlide ? 0 : current + 1;
        setCurrent(newIndex)

    }


  return (
    <div className="relative">
        <div>
            <button onClick={prevImage} className="absolute left-[2%] top-[50%] z-[40] w-[30px] h-[30px] bg-[white] flex justify-center items-center rounded-[15px] border-2 border-black border-solid transform motion-safe:hover:scale-110 hover:bg-[#289DCC] hover:border-[#063953] hover:text-[#063953]">
                <MdKeyboardArrowLeft className="text-[25px]" />
            </button>
            <img src={currentImage} alt={`Image ${current + 1}`} width={0} height={0} className="h-[650px] object-cover w-full"/>
            {/* {current === 1 && (
                <div className="absolute top-[20%] left-[10%] bg-white p-6 max-w-[450px]">
                     <h1 className="my-4 text-[2rem] font-bold">Learning that gets you</h1>
                    <h4 className="text-[1.2rem]">Skills for your present (and your future). Get started with us.</h4>
                </div>
            )}


            {current === 0 && (
                    <div className="absolute top-[20%] left-[10%] bg-white p-6 max-w-[450px]">
                    <h1 className="my-4 text-[2rem] font-bold">Unlock the power of your people</h1>
                        <h4 className="text-[1.2rem]">Udemy Business is trusted by 12.5K+ companies around the world. Find out what we can do for yours.</h4>
                    </div>
            )} */}

            <button onClick={nextImage} className="absolute right-[2%] top-[50%] z-[40] w-[30px] h-[30px] bg-[white] flex justify-center items-center rounded-[15px] border-2 border-black border-solid transform motion-safe:hover:scale-110 hover:bg-[#289DCC] hover:border-[#063953] hover:text-[#063953]">
                <MdKeyboardArrowRight className="text-[25px]" />
            </button>


        </div>
    </div>
  )
}