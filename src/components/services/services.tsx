import * as React from "react"
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { Button } from "@lib/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight , ChevronLeft } from 'lucide-react';
import './style.css';


export default function Services() {
    const sectionRef = useRef(null);
    const listRef = useRef<(HTMLDivElement | null)[]>([]);
    const [desktopView, setDesktopView] = React.useState(true);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [emblaRef, emblaApi] = useEmblaCarousel({dragFree: false});
    const data = [
        {
            imgSrc: "/services/1.jpg",
            title: "Residential Design",
            description: "Custom homes and extensions that respond to your lifestyle and landscape.",
        },
        {
            imgSrc: "/services/2.jpg",
            title: "Commercial Design",
            description: "Smart, functional spaces that enhance business identity and productivity.",
        },
        {
            imgSrc: "/services/3.jpg",
            title: "Industrial Design",
            description: "Robust and efficient facilities tailored for performance and compliance.",
        },
        {
            imgSrc: "/services/4.jpg",
            title: "Renovation  and Restoration",
            description: "Custom homes and extensions that respond to your lifestyle and landscape.",
        },
        {
            imgSrc: "/services/5.jpg",
            title: "Urban consolidation and infusion",
            description: "Custom homes and extensions that respond to your lifestyle and landscape.",
        },
        {
            imgSrc: "/services/6.jpg",
            title: "Virtual Architecture",
            description: "Custom homes and extensions that respond to your lifestyle and landscape.",
        },
        {
            imgSrc: "/services/7.jpg",
            title: "3D Rendering",
            description: "Custom homes and extensions that respond to your lifestyle and landscape.",
        },
    ]

    useEffect(() => {
        if(window.innerWidth > 1150){
            gsap.registerPlugin(ScrollTrigger);
            const tl = gsap.timeline();
            const card = listRef.current[0];
            const card_height = card ? card.offsetHeight : 0;
            // var gap = 60;

            tl.to(listRef.current[0], {y: -(card_height + 60),duration: 1,ease: "power2.inOut",},'step1');
            tl.to(listRef.current[1], {y: -(card_height + 60),duration: 1,ease: "power2.inOut",},'step1');
            tl.to(listRef.current[2], {y: -(card_height + 60),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[3], {y: -(card_height + 60),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[4], {y: -(card_height + 60),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[5], {y: -(card_height + 60),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[6], {y: -(card_height + 60),duration: 1,ease: "power2.inOut",},'<');

            tl.to(listRef.current[1], {y: -((card_height*2) + (60*2)),duration: 1,ease: "power2.inOut",},'step2');
            tl.to(listRef.current[0], {y: -((card_height*2) + (60*2)),duration: 1,ease: "power2.inOut",},'step2');
            tl.to(listRef.current[2], {y: -((card_height*2) + (60*2)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[3], {y: -((card_height*2) + (60*2)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[4], {y: -((card_height*2) + (60*2)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[5], {y: -((card_height*2) + (60*2)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[6], {y: -((card_height*2) + (60*2)),duration: 1,ease: "power2.inOut",},'<');

            tl.to(listRef.current[2], {y: -((card_height*3) + (60*3)),duration: 1,ease: "power2.inOut",},'step3');
            tl.to(listRef.current[1], {y: -((card_height*3) + (60*3)),duration: 1,ease: "power2.inOut",},'step3');
            tl.to(listRef.current[0], {y: -((card_height*3) + (60*3)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[3], {y: -((card_height*3) + (60*3)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[4], {y: -((card_height*3) + (60*3)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[5], {y: -((card_height*3) + (60*3)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[6], {y: -((card_height*3) + (60*3)),duration: 1,ease: "power2.inOut",},'<');

            tl.to(listRef.current[3], {y: -((card_height*4) + (60*4)),duration: 1,ease: "power2.inOut",},'step4');
            tl.to(listRef.current[1], {y: -((card_height*4) + (60*4)),duration: 1,ease: "power2.inOut",},'step4');
            tl.to(listRef.current[0], {y: -((card_height*4) + (60*4)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[2], {y: -((card_height*4) + (60*4)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[4], {y: -((card_height*4) + (60*4)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[5], {y: -((card_height*4) + (60*4)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[6], {y: -((card_height*4) + (60*4)),duration: 1,ease: "power2.inOut",},'<');

            tl.to(listRef.current[4], {y: -((card_height*5) + (60*5)),duration: 1,ease: "power2.inOut",},'step5');
            tl.to(listRef.current[1], {y: -((card_height*5) + (60*5)),duration: 1,ease: "power2.inOut",},'step5');
            tl.to(listRef.current[0], {y: -((card_height*5) + (60*5)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[2], {y: -((card_height*5) + (60*5)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[3], {y: -((card_height*5) + (60*5)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[5], {y: -((card_height*5) + (60*5)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[6], {y: -((card_height*5) + (60*5)),duration: 1,ease: "power2.inOut",},'<');

            tl.to(listRef.current[5], {y: -((card_height*6) + (60*6)),duration: 1,ease: "power2.inOut",},'step6');
            tl.to(listRef.current[1], {y: -((card_height*6) + (60*6)),duration: 1,ease: "power2.inOut",},'step6');
            tl.to(listRef.current[0], {y: -((card_height*6) + (60*6)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[2], {y: -((card_height*6) + (60*6)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[3], {y: -((card_height*6) + (60*6)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[4], {y: -((card_height*6) + (60*6)),duration: 1,ease: "power2.inOut",},'<');
            tl.to(listRef.current[6], {y: -((card_height*6) + (60*6)),duration: 1,ease: "power2.inOut",},'<');

    
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=600%",
                animation: tl,
                scrub: 1,
                markers: false,
                pin: true,
            });
        }else{
            setDesktopView(false);
        }
    }, []);

    const onPrevButtonClick = useCallback(() => {
            if (!emblaApi) return;
            emblaApi.scrollPrev();
        }, [emblaApi]);
    
        const onNextButtonClick = useCallback(() => {
            if (!emblaApi) return;
            emblaApi.scrollNext();
        }, [emblaApi]);
    
        const onSelect = useCallback(() => {
            if (!emblaApi) return;
    
            setPrevBtnDisabled(!emblaApi.canScrollPrev());
            setNextBtnDisabled(!emblaApi.canScrollNext());
        }, [emblaApi]);
    
        useEffect(() => {
            if (!emblaApi) return;
            emblaApi.on("select", onSelect);
            onSelect();
        }, [emblaApi, onSelect]);


    return (
        <section className="w-screen xl:min-h-screen pb-[48px] xl:px-[11.563vw] flex xl:flex-row flex-col xl:items-center xl:justify-between gap-[48px] xl:gap-[5.208vw] border-b xl:border-y border-[rgba(203,205,205,0.20)] overflow-hidden" id="services" ref={sectionRef}>
            {desktopView ?(
                <React.Fragment>
                    <div className="w-[700px] xl:w-[36.458vw] h-fit shrink-0 flex flex-col gap-4 xl:gap-[0.833vw] text-[--white]">
                        <h2 className="text-2xl">Our Services</h2>
                        <p className="text-md">
                            From concept to completion, we craft spaces that unite form and function. Our process blends creativity, precision, and collaboration delivering results that stand the test of time.
                        </p>
                    </div>
                    <div className="w-fit h-screen flex flex-col gap-[60px] xl:gap-[3.125vw] pt-[145px] xl:pt-[7.552vw] overflow-hidden">
                        {data.map((service, index) => (
                            <div 
                                key={index}
                                ref={(el) => (listRef.current[index] = el)}
                                id={`card-${index + 1}`}
                                className="flex items-start gap-6 xl:gap-[1.25vw]" 
                            >
                                <span className="w-[145px] xl:w-[7.552vw] text-3xl text-[--primary]">0{index + 1}</span>
                                <div className="w-[500px] xl:w-[26.042vw] flex flex-col gap-6 xl:gap-[1.25vw] p-6 xl:gap-[1.25vw] bg-[--dark] text-[--white]">
                                    <img src={service.imgSrc} className="w-full object-scale-down" alt="" />
                                    <div className="w-full flex flex-col gap-2">
                                        <h3 className="text-xl !font-poppins">{service.title}</h3>
                                        <p className="text-sm">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            ):(
                <React.Fragment>
                    <div className="w-full py-[14px] sm:py-[1.563vw] xl:py-[0.833vw] px-6 sm:px-[4.688vw] xl:px-[4.167vw] border-y border-[rgba(203,205,205,0.20)]">
                        <h2 className="text-2xl text-[--white]">
                            Our Services
                        </h2>
                    </div>
                    <div className="services w-full overflow-hidden ">
                        <div className="services__viewport" ref={emblaRef}>
                            <div className="services__container" ref={trackRef}>
                                {data.map((item, index) => (
                                    <div className="services__slide" key={index}>
                                        <div className="slide-detail">
                                            <div className="w-full h-[310px] sm:h-[40.234vw]">
                                                <img src={item.imgSrc} className="w-full h-full object-cover" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <span className="text-xl !font-poppins text-[--primary]">0{index + 1}</span>
                                                <h3 className="text-xl !font-poppins text-[--white]">{item.title}</h3>
                                                <p className="text-sm text-[--white]">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-end justify-end gap-4 px-6">
                        <Button variant={'primary'} size={'sm_btn'} onClick={onPrevButtonClick} disabled={prevBtnDisabled} >
                            <ChevronLeft />
                        </Button>
                        <Button variant={'primary'} size={'sm_btn'} onClick={onNextButtonClick} disabled={nextBtnDisabled} >
                            <ChevronRight />
                        </Button>
                    </div>
                </React.Fragment>
            )}
        </section>
    );
}
