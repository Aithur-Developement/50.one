import * as React from "react"
import { useEffect, useState, useRef } from "react";
import { Button } from "@lib/components/ui/button";
import './style.css';

declare global {
  interface Window {
    lenis?: {
      stop: () => void;
      start: () => void;
    };
  }
}

function Navbar() {
    const backDrop = useRef<HTMLDivElement | null>(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    

    const handleMenu = () => {
        if (isSidebarOpen) {
            setSidebarOpen(false);
            setIsOpen(false)
            document.body.style.overflow = '';
        } else {
            setSidebarOpen(true);
            setIsOpen(true)
            document.body.style.overflow = 'hidden';
        }
    };

    useEffect(() => {
        const lenis = window.lenis;
        if (!lenis) return;

        if (isOpen) {
            lenis.stop();
        } else {
            lenis.start();
        }
    }, [isOpen]);

    return (
        <>
            <div className={`absolute left-0 top-0 py-4 sm:py-6 xl:py-[1.25vw] px-6 sm:px-[4.688vw] xl:px-[4.167vw] w-screen h-fit z-[120]`}>
                <div className="relative w-full  flex justify-between items-center">
                    <a href="/">
                        <img src={"/logo.png"} className="header-logo w-[100px] sm:w-[14.453vw] xl:w-[7.708vw] " alt="logo" />
                    </a>
                    <div className="w-fit">
                        <Button variant={'light'} size={'large'}>
                            Get In Touch
                        </Button>
                    </div>
                    {/* <button className={`hamburger ${isSidebarOpen&&'show'}`} onClick={handleMenu}
                    >
                        <span className="icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                    <div className={`absolute top-[100%] right-4 w-[214px] p-4 bg-[--lightestGrey] rounded-[20px] flex flex-col gap-6 overflow-hidden transition ${!isSidebarOpen&&'opacity-0 pointer-events-none'}`}>
                        <a href="/" className="text-lg text-[--black] transition hover:text-[--primary]">Home</a>
                        <a href="/blogs" className="text-lg text-[--black] transition hover:text-[--primary]">Blogs</a>
                        <Button variant={'primary'} size={'large'} asChild>
                            <a href="" target="_blank" className="">
                                Signup for Free
                            </a>
                        </Button>
                    </div> */}
                </div>
            </div>
            <div ref={backDrop} className={`fixed top-0 left-0 z-[100] w-screen h-screen bg-[#00000078] backdrop-blur-[10px] transition ${!isSidebarOpen&&'opacity-0 pointer-events-none'}`} ></div>
            
        </>
    );
}

export default Navbar;
