import React, { useState, useEffect, useRef } from "react";
import { Button } from "@lib/components/ui/button";
import { X } from 'lucide-react';
import "./style.css";

export default function projects(props) {
    const [isOpen, setIsOpen] = useState(false);

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
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[500]">
            <div className="w-[calc(100%-48px)] h-fit flex flex-col xl:gap-[0.833vw] sm:gap-4 gap-3 text-[--black] bg-[--mediumBlack] overflow-hidden">
                <div className="w-full flex items-center justify-between p-6 xl:p-[1.25vw] border-b border-[rgba(203,205,205,0.20)]">
                    <h2 className="text-base text-[--white]" >
                        Project Name
                    </h2>
                    <Button variant={'dark'} size={'sm_btn'} onClick={() => setIsOpen(false)}>
                        <X className="size-[24px]"/>
                    </Button>
                </div>
                <div className="w-full h-fit flex items-stretch" >
                    <div className="w-full h-fit flex p-6">
                        <div className="w-full h-[740px] flex-col overflow-auto line-scroll" data-lenis-prevent>
                            <div className="w-full border-b border-[rgba(203,205,205,0.20)] pb-6 mb-6">
                                <img src="./work/1.jpg" className="w-full object-cover" alt="" />
                            </div>
                            <div className="w-full">
                                <img src="./work/1.jpg" className="w-full object-cover" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[552px] p-6 flex flex-col gap-[48px] shrink-0 border-l border-[rgba(203,205,205,0.20)]">
                        <div className="w-full flex items-center justify-between gap-6">
                            <h6 className="text-md text-[--white]">Location: Sydney</h6>
                            <span className="text-md text-[--primary]">Aug 02, 2023</span>
                        </div>
                        <p className="text-md text-[--white]">
                            This project redefines urban living through simplicity and thoughtful proportions.
                            Every detail, from facade articulation to interior flow, is designed around human experience.
                            Natural light, muted tones, and spatial balance create an atmosphere of calm sophistication.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
