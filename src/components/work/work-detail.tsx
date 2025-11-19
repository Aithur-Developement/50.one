import React, { useState, useEffect, useRef } from "react";
import { Button } from "@lib/components/ui/button";
import { X } from 'lucide-react';
import gsap from "gsap";
import "./style.css";

export default function projects(props) {

    
    return (
        <div className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[500] bg-[#00000078] backdrop-blur-[10px] transition 
            ${props.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`
        }>
            <div className="w-[calc(100%-24px)] sm:w-[calc(100%-48px)] h-[calc(100vh-24px)] sm:h-fit flex flex-col xl:gap-[0.833vw] sm:gap-4 gap-3 text-[--black] bg-[--mediumBlack] overflow-hidden">
                <div className="w-full flex items-center justify-between p-4 sm:p-6 xl:p-[1.25vw] border-b border-[rgba(203,205,205,0.20)]">
                    <h2 className="text-base text-[--white]" >
                        {props.data?.title}
                    </h2>
                    <Button variant={'dark'} size={'sm_btn'} onClick={() => props.setIsOpen(false)}>
                        <X className="size-[24px]"/>
                    </Button>
                </div>
                <div className="w-full h-full sm:h-fit flex xl:flex-row flex-col sm:items-stretch items-start xl:pr-0 pr-2 xl:overflow-hidden overflow-auto line-scroll" data-lenis-prevent>
                    <div className="xl:order-1 order-2 w-full h-fit flex p-4 sm:p-6 xl:p-[1.25vw]">
                        <div className="w-full h-fit sm:h-[63.477vw] xl:h-[31.25vw] 1xl:h-[38.542vw] flex-col xl:pr-[1.25vw] sm:pr-[2.344vw] pr-0 sm:overflow-auto line-scroll" data-lenis-prevent>
                            <div className="w-full 
                            ">
                                {/* border-b border-[rgba(203,205,205,0.20)] pb-6 xl:pb-[1.25vw] mb-6 xl:mb-[1.25vw] */}
                                <img src={props.data?.imgSrc} className="w-full object-cover" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="xl:order-2 order-1 w-full h-fit sm:h-[39.063vw] xl:h-auto xl:w-[28.75vw] p-4 sm:p-6 xl:p-[1.25vw] flex flex-col gap-[48px] xl:gap-[2.5vw] shrink-0 border-b xl:border-l border-[rgba(203,205,205,0.20)] sm:overflow-auto line-scroll" data-lenis-prevent>
                        <div className="w-full flex items-center justify-between gap-6 xl:gap-[1.25vw]">
                            <h6 className="text-md text-[--white]">Location: {props.data?.location}</h6>
                            <span className="text-md text-[--primary]">{props.data?.date}</span>
                        </div>
                        <p className="text-md text-[--white]">
                            {props.data?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
