import * as React from "react"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

export default function About() {
    const sectionRef = useRef(null);
    //  const textRef = useRef(null);
    // const quoteRef = useRef(null);

    // useEffect(() => {
    //     if (!textRef.current || !quoteRef.current) return;
    //     gsap.registerPlugin(ScrollTrigger,SplitText);
    //     if(window.innerWidth  > 1150){
    //         ScrollTrigger.normalizeScroll(true);
    //     }
    
    //     let textSplit, quoteSplit;
    //     const tl = gsap.timeline();
    
    //     document.fonts.ready.then(() => {
    //       gsap.set(textRef.current, { opacity: 1 });
    //       gsap.set(quoteRef.current, { opacity: 1 });
          
    //         textSplit = SplitText.create(textRef.current, {
    //             type: "lines",
    //             linesClass: "line",
    //             // autoSplit: true // Do not split words, keep as single line/word
    //         });
    
    //       quoteSplit = SplitText.create(quoteRef.current, {
    //         type: "lines",
    //         linesClass: "line",
    //       });

    //       tl.from(textSplit.lines, {y: 40,opacity: 0,duration: 1,stagger: 0.09,ease: "back.out(1)",})
    //       tl.from(quoteSplit.lines, {y: 20,opacity: 0,duration: 1,stagger: 0.1,ease: "expo.out",}, "-=0.8")
    //     });
    
    //     return () => {
    //       textSplit && textSplit.revert();
    //       quoteSplit && quoteSplit.revert();
    //       tl.kill();
    //     };
    // }, []);

    return (
        <section className="w-screen min-h-screen pt-[60px] xl:pt-[7.708vw] overflow-hidden" id="about" ref={sectionRef}>
            <div className="w-full py-[14px] sm:py-[1.563vw] xl:py-[0.833vw] px-6 sm:px-[4.688vw] xl:px-[4.167vw] border-y border-[rgba(203,205,205,0.20)]">
                <h2 className="text-2xl text-[--white]">About Us</h2>
            </div>
            <div className="size-full px-6 sm:px-[4.688vw] xl:px-[4.167vw] py-[52px] sm:py-[98px] xl:py-[6.302vw]">
                <div className="w-full xl:px-[1.25vw] flex xl:flex-row flex-col xl:items-center gap-6 sm:gap-[3.125vw] xl:gap-[3.75vw]">
                    <div className="w-full sm:w-[63.965vw] xl:w-[34.115vw] h-fit xl:h-[32.813vw] shrink-0">
                        <img src="./about.jpg" className="w-full h-full object-cover object-scale-down" alt="about" />
                    </div>
                    <div className="w-full flex flex-col gap-[36px] xl:gap-[4.167vw] text-[--white]">
                        <div className="flex flex-col gap-[36px] xl:gap-[1.875vw]">
                            <h3 className="text-xl">About Company</h3>
                            <p className="text-md">We believe great architecture emerges from balance between creativity and precision, emotion and logic, possibility and clarity. We work closely with our clients and collaborators to translate their aspirations into built form creating designs that endure and inspire.</p>
                        </div>
                        <div className="flex flex-col gap-[36px] xl:gap-[1.875vw]">
                            <p className="text-md ps-6 xl:px-[1.25vw] border-l-4 border-[--primary]">
                                Architecture is more than creating space. It is a dialogue between people, place and time. At 50.one, we design with respect for the past, awareness of the present and responsibility towards the future.
                            </p>
                            <div className="w-fit flex flex-col">
                                <span className="text-lg">Renato Ius</span>
                                <span className="text-sm">CEO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
