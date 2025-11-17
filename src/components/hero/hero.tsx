import * as React from "react"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { useLenis } from '../../hooks/useLenis';

import './style.css';

export default function Hero() {
    const sectionRef = useRef(null);
     const textRef = useRef(null);
    const quoteRef = useRef(null);
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1150;
	const lenis = isDesktop ? useLenis() : null;

    useEffect(() => {
        if (!textRef.current || !quoteRef.current) return;
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
          gsap.set(quoteRef.current, { opacity: 1 });
          
            textSplit = SplitText.create(textRef.current, {
                type: "lines",
                linesClass: "line",
                // autoSplit: true // Do not split words, keep as single line/word
            });
    
          quoteSplit = SplitText.create(quoteRef.current, {
            type: "lines",
            linesClass: "line",
          });

          tl.from(textSplit.lines, {y: 40,opacity: 0,duration: 1,stagger: 0.09,ease: "back.out(1)",})
          tl.from(quoteSplit.lines, {y: 20,opacity: 0,duration: 1,stagger: 0.1,ease: "expo.out",}, "-=0.8")
        });
    
        return () => {
          textSplit && textSplit.revert();
          quoteSplit && quoteSplit.revert();
          tl.kill();
        };
    }, [lenis]);

    return (
        <section className="hero-section relative w-screen h-screen flex items-end " id="hero" ref={sectionRef}>
            <div className="relative w-full xl:w-[52.708vw] h-fit flex flex-col xl:items-start items-center gap-2 xl:text-left text-center text-[--white] px-6 xl:pr-0 sm:px-[4.688vw] xl:ps-[4.167vw] pb-[80px] sm:pb-[11.719vw] xl:pb-[2.5vw] " >
                <div className="absolute left-0 bottom-0 w-full h-[92%] bg-blur_gradient backdrop-blur-[4px] z-[1] pointer-events-none"></div>
                <h1 ref={textRef} className="relative z-10 text-3xl opacity-0">
                    Spaces for People. Places for Life.
                </h1>
                <p ref={quoteRef} className="relative z-10 text-md opacity-0">
                    At 50one, we turn imagination into form and complexity into clarity creating architecture that inspires and endures. Every project begins with exploration and ideas that, through collaboration, evolve into one clear and timeless vision rooted in its context.
                </p>
            </div>
        </section>
    );
}
