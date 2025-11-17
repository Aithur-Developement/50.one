import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { Button } from "@lib/components/ui/button";




export default function Footer_banner() {
    const sectionRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);
        
    }, []);

    return (
        <section className="w-full h-[500px] xl:h-[31.25vw] flex items-center justify-center overflow-hidden" id="footer-banner" ref={sectionRef}>
            <div className="size-[720px] xl:size-[57.083vw] rotate-[45deg] flex flex-col items-center border-[2px] border-[rgba(203,205,205,0.20)]">
                <div className="w-full flex items-center justify-between">
                    <div className="size-[100px] xl:size-[9.688vw] border-r-[2px] border-b-[2px] border-[rgba(203,205,205,0.20)]"/>
                    <div className="size-[100px] xl:size-[9.688vw] border-l-[2px] border-b-[2px] border-[rgba(203,205,205,0.20)]"/>
                </div>
                <div className="w-[calc(100%-calc(100px*2))] xl:w-[calc(100%-calc(9.688vw*2))] h-full flex items-center justify-center border-[2px] border-[rgba(203,205,205,0.20)]">
                    <div className="w-[calc(100%-calc(84px*2))] xl:w-[calc(100%-calc(5.313vw*2))] h-[calc(100%-calc(70px*2))] xl:h-[calc(100%-calc(5.729vw*2))] rotate-[45deg] border-[2px] border-[rgba(203,205,205,0.20)]">
                        <div className="size-full flex flex-col items-center justify-center text-center gap-6 sm:gap-[36px] xl:gap-[2.5vw] -rotate-[90deg]">
                            <h3 className="text-1xl text-[--white]">Let’s Create together</h3>
                            <Button variant={'primary'} size={'large'}>
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="size-[100px] xl:size-[9.688vw] border-r-[2px] border-t-[2px] border-[rgba(203,205,205,0.20)]"/>
                    <div className="size-[100px] xl:size-[9.688vw] border-l-[2px] border-t-[2px] border-[rgba(203,205,205,0.20)]"/>
                </div>
            </div>
        </section>
    );
}
