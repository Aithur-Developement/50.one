import * as React from "react"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { Button } from "@lib/components/ui/button";
import { Send } from 'lucide-react';
import { useLenis } from "hooks/useLenis";

export default function Contact() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1150;
    const lenis = isDesktop ? useLenis() : null;

    useEffect(() => {
        if (!textRef.current ) return;
        gsap.registerPlugin(ScrollTrigger,SplitText);
        if(window.innerWidth  > 1150){
            ScrollTrigger.normalizeScroll(true);
        }

        if (lenis) {
            lenis.on('scroll', ScrollTrigger.update);
        }
    
        let textSplit, quoteSplit;
        const tl = gsap.timeline();
    
        document.fonts.ready.then(() => {
          gsap.set(textRef.current, { opacity: 1 });
          
            textSplit = SplitText.create(textRef.current, {
                type: "lines",
                linesClass: "line",
                // autoSplit: true // Do not split words, keep as single line/word
            });

          tl.from(textSplit.lines, {y: 40,opacity: 0,duration: 1,stagger: 0.09,ease: "back.out(1)",})
        });
    
        return () => {
          textSplit && textSplit.revert();
          tl.kill();
        };
    }, [lenis]);
    return (
        <section className="w-screen overflow-hidden" id="contact" ref={sectionRef}>
            <div className="w-full py-[14px] sm:py-[1.563vw] xl:py-[0.833vw] px-6 sm:px-[4.688vw] xl:px-[4.167vw] border-y border-[rgba(203,205,205,0.20)]">
                <h2 ref={textRef} className="text-2xl text-[--white] opacity-0">Get in Touch</h2>
            </div>
            <div className="w-full sm:px-[4.688vw] xl:px-[4.167vw] ">
                <div className="grid grid-cols-12 items-stretch xl:border-x border-[rgba(203,205,205,0.20)]">
                    <div className="col-span-12 xl:col-span-6 p-6 sm:p-[4.688vw] xl:p-[2.5vw] flex flex-col gap-6 sm:gap-8 xl:gap-[2.5vw] justify-between border-b xl:border-none border-[rgba(203,205,205,0.20)]">
                        <h3 className="text-base text-[--white]">Start a Conversation</h3>
                        <div className="w-full h-fit flex flex-col justify-between gap-6 xl:gap-[3.125vw]">
                            <div className="flex flex-col gap-6 xl:gap-[1.875vw]">
                                <input type="text" name="full-name" placeholder="Full Name" className="w-full py-4 pr-6 text-md bg-transparent placeholder-[--white] text-[--white] border-b border-[--white] outline-none" />
                                <input type="email" name="email" placeholder="Email" className="w-full py-4 pr-6 text-md bg-transparent placeholder-[--white] text-[--white] border-b border-[--white] outline-none" />
                                <input type="text" name="message" placeholder="Message" className="w-full py-4 pr-6 text-md bg-transparent placeholder-[--white] text-[--white] border-b border-[--white] outline-none" />
                            </div>
                            <Button variant={'light'} size={'large'} className="w-full">
                               Send Message
                                <Send className="size-[18px] text-[--primary]" />
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6 flex flex-col xl:border-l border-[rgba(203,205,205,0.20)]">
                        <div className="w-full flex sm:flex-row flex-col items-stretch border-b border-[rgba(203,205,205,0.20)]">
                            <div className="w-full p-6 xl:p-[1.25vw] flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <path d="M32.6667 4.66663H15.3333C12.3878 4.66663 10 7.05444 10 9.99996V38C10 40.9455 12.3878 43.3333 15.3333 43.3333H32.6667C35.6122 43.3333 38 40.9455 38 38V9.99996C38 7.05444 35.6122 4.66663 32.6667 4.66663Z" stroke="#F2032B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20.667 4.66663V7.33329H27.3337V4.66663" stroke="#F2032B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M23.9997 37.3333C25.4724 37.3333 26.6663 36.1394 26.6663 34.6667C26.6663 33.1939 25.4724 32 23.9997 32C22.5269 32 21.333 33.1939 21.333 34.6667C21.333 36.1394 22.5269 37.3333 23.9997 37.3333Z" fill="#F2032B"/>
                                </svg>
                                <div className="w-full flex flex-col gap-2">
                                    <h4 className="text-lg text-[--white]">Phone</h4>
                                    <a href="tel:0416151505" className="text-18 transition text-[--white] hover:text-[--primary]">0416 151 505</a>
                                </div>
                            </div>
                            <div className="w-full p-6 xl:p-[1.25vw] flex items-start gap-4 border-none sm:border-l border-[rgba(203,205,205,0.20)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <path d="M4.66602 15.3333L22.7114 25.2879C23.514 25.7306 24.4847 25.7306 25.2873 25.2879L43.3327 15.3333" stroke="#F2032B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.99967 39.3333L37.9997 39.3333C40.9452 39.3333 43.333 36.9454 43.333 33.9999V13.9999C43.333 11.0544 40.9452 8.66659 37.9997 8.66659L9.99967 8.66659C7.05415 8.66659 4.66634 11.0544 4.66634 13.9999V33.9999C4.66634 36.9454 7.05415 39.3333 9.99967 39.3333Z" stroke="#F2032B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div className="w-full flex flex-col gap-2">
                                    <h4 className="text-lg text-[--white]">Email</h4>
                                    <a href="mailto:renato@50one.com.au" className="text-18 transition text-[--white] hover:text-[--primary]">
                                        renato@50one.com.au
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-6 xl:p-[1.25vw] flex items-start gap-4 border-b border-[rgba(203,205,205,0.20)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M9.59863 21.6125C9.59863 13.6527 16.0458 7.19983 23.9986 7.19983C31.9515 7.19983 38.3986 13.6527 38.3986 21.6125C38.3986 29.5724 30.9236 36.0814 26.745 39.7592C25.1686 41.1466 22.8286 41.1466 21.2523 39.7592C17.0734 36.0814 9.59863 28.8188 9.59863 21.6125Z" stroke="#F2032B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M23.9986 23.9998C25.3241 23.9998 26.3986 22.9253 26.3986 21.5998C26.3986 20.2743 25.3241 19.1998 23.9986 19.1998C22.6731 19.1998 21.5986 20.2743 21.5986 21.5998C21.5986 22.9253 22.6731 23.9998 23.9986 23.9998Z" fill="#F2032B" stroke="#F2032B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="w-full flex flex-col gap-2">
                                <h4 className="text-lg text-[--white]">Address</h4>
                                <a href="https://www.google.com/maps/place/514+Parramatta+Rd,+Petersham+NSW+2049" target="_blank" rel="noopener noreferrer" className="text-18 transition text-[--white] hover:text-[--primary]">
                                    514 Parramatta Road, PETERSHAM NSW 2049
                                </a>
                            </div>
                        </div>
                        <div className="size-full min-h-[400px] xl:min-h-auto">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.278309986518!2d151.15282027569526!3d-33.89237902393426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b019a4bd1f5f%3A0x4fcbec4c596cb736!2s514%20Parramatta%20Rd%2C%20Petersham%20NSW%202049%2C%20Australia!5e0!3m2!1sen!2sau!4v1700739020000"
                                width="100%"
                                height="100%"
                                // allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="border-0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
