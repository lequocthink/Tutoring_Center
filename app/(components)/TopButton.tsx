'use client';
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";


export default function TopButton() {
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        return () => window.removeEventListener('scroll', handleScroll, true);
    });

    return (
        <div>
            {showButton &&
                <button onClick={scrollToTop} className="fixed right-[2%] bottom-[2%] z-[40] w-[30px] h-[30px] bg-[white] flex justify-center items-center rounded-[15px] border-2 border-black border-solid transform motion-safe:hover:scale-110 hover:bg-[#289DCC] hover:border-[#063953] hover:text-[#063953]">
                    <MdKeyboardArrowUp className="text-[25px]" />
                </button>
            }
        </div>

    )
}