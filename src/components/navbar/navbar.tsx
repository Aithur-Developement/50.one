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

function Navbar(props: {links?: boolean}) {
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
            <div className={`relative py-4 sm:py-6 xl:py-[1.25vw] px-6 sm:px-[4.688vw] xl:px-[4.167vw] w-screen h-fit z-[120]`}>
                <div className="relative w-full  flex justify-between items-center">
                    <a href="/">
                        <img src={props.links?"logo-primary.png":"/logo.png"} className="header-logo w-[100px] sm:w-[14.453vw] xl:w-[7.708vw] " alt="logo" />
                    </a>
                    <div className="w-fit hidden xl:flex items-center gap-6 xl:gap-[1.25vw]">
                        {props.links&&(
                            <div className="flex items-center gap-6 xl:gap-[1.25vw] px-6 xl:px-[1.25vw]">
                                <a href="/" className="text-md transition text-[--white] hover:text-[--primary]">Home</a>
                                <span className="w-[24px] border-b "/>
                                <a href="/contact-us" className="text-md transition text-[--white] hover:text-[--primary]">Contact us</a>
                                
                            </div>
                        )}
                        <Button variant={'light'} size={'large'} asChild>
                            <a href="/contact-us">
                                Get In Touch
                            </a>    
                        </Button>
                    </div>
                    <button className={`hamburger ${isSidebarOpen&&'show'}`} onClick={handleMenu}
                    >
                        <span className="icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                    <div className={`absolute top-[calc(100%+16px)] right-0 w-[214px] p-4 bg-[--lightestGrey] flex flex-col gap-6 overflow-hidden transition ${!isSidebarOpen&&'opacity-0 pointer-events-none'}`}>
                        <a href="/" className="text-lg text-[--black] transition hover:text-[--primary]">Home</a>
                        <div className="w-full border-b border-[--black]"/>
                        <Button variant={'dark'} size={'large'} asChild>
                            <a href="/contact-us">
                                Get In Touch
                            </a>    
                        </Button>
                    </div>
                </div>
            </div>
            <div ref={backDrop} className={`fixed top-0 left-0 z-[100] w-screen h-screen bg-[#00000078] backdrop-blur-[10px] transition ${!isSidebarOpen&&'opacity-0 pointer-events-none'}`} ></div>
            
        </>
    );
}

export default Navbar;
