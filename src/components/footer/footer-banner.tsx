import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { Button } from "@lib/components/ui/button";



export default function Footer_banner() {
    const sectionRef = useRef(null);
    
    const textRef = useRef(null);
    const quoteRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (!textRef.current || !quoteRef.current) return;
        gsap.registerPlugin(ScrollTrigger, SplitText);
        if (window.innerWidth > 1150) {
            ScrollTrigger.normalizeScroll(true);
        }

        let textSplit, quoteSplit;
        const tl = gsap.timeline({
            scrollTrigger: { trigger: sectionRef.current, start: "top center" },
        });

        document.fonts.ready.then(() => {
            gsap.set(textRef.current, { opacity: 1 });
            gsap.set(quoteRef.current, { opacity: 1 });
            gsap.set(buttonRef.current, { opacity: 1 });

            textSplit = SplitText.create(textRef.current, {
                type: "lines",
                linesClass: "line",
            });

            quoteSplit = SplitText.create(quoteRef.current, {
                type: "lines",
                linesClass: "line",
            });

            tl.from(textSplit.lines, { y: 40, opacity: 0, duration: 1, stagger: 0.09, ease: "back.out(1)", })
            tl.from(quoteSplit.lines, { y: 20, opacity: 0, duration: 1, stagger: 0.1, ease: "expo.out", }, "-=0.8")
                .from(buttonRef.current, { opacity: 0, duration: 1, stagger: 0.1, ease: "expo.out", }, "<")
        });

        return () => {
            textSplit && textSplit.revert();
            quoteSplit && quoteSplit.revert();
            tl.kill();
        };
    }, []);

    return (
        <footer className="w-full px-4 sm:px-6 xl:px-[5.208vw] py-[60px] sm:py-[7.813vw] xl:py-[5.208vw] " id="footer-banner" ref={sectionRef}>
            <div className="w-full xl:w-full bg-secondaryGradient text-center text-[--white] flex flex-col items-center gap-[22px] sm:gap-[22px] xl:gap-[1.146vw] py-[40px] sm:py-[60px] xl:py-[5.208vw] px-[24px] sm:px-[32px] xl:px-[5.208vw] rounded-48 overflow-hidden">
                <h2 className="text-1xl opacity-0" ref={textRef}>Validate Before You Build</h2>
                <p className="text-md opacity-0" ref={quoteRef}>Spend 5 minutes setting up your test, save thousands in development costs. Join the smart founders who validate first, build second.</p>
                <div className="w-fit opacity-0" ref={buttonRef}>
                    <Button variant={"light"} size={"large"} className="w-fit">
                        Run Your First Test
                    </Button>
                </div>
            </div>
        </footer>
    );
}
