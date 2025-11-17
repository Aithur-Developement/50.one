import * as React from "react"
import { useEffect, useState, useRef,useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { Button } from "@lib/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight , ChevronLeft } from 'lucide-react';
import './style.css';



export default function Work() {
    const sectionRef = useRef(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [show, setShow] = useState(true);
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true,dragFree: false});
    const [selectedIndex, setSelectedIndex] = useState(0);

    const data = [
        {
            imgSrc: "./work/1.jpg",
            title: "Harbour Residence",
            location: "Sydney, Australia",
            date: "Jan 12, 2024",
            description:
            "A modern residential space blending natural textures with contemporary architecture. Large open layouts and soft lighting create a calm and immersive living experience."
        },
        {
            imgSrc: "./work/2.jpg",
            title: "Skyline Tower",
            location: "Melbourne, Australia",
            date: "Feb 25, 2024",
            description:
            "A high-rise commercial building designed with clean geometry and sustainable materials. The structure features panoramic glass surfaces and efficient internal circulation."
        },
        {
            imgSrc: "./work/3.jpg",
            title: "The Minimalist Home",
            location: "Brisbane, Australia",
            date: "Mar 18, 2024",
            description:
            "Inspired by minimalism, this project emphasizes open spaces, natural daylight, and warm neutral tones. Every corner is designed to support a balanced, clutter-free lifestyle."
        },
        {
            imgSrc: "./work/4.jpg",
            title: "Urban Living Complex",
            location: "Perth, Australia",
            date: "Apr 05, 2024",
            description:
            "A thoughtfully designed urban complex integrating living, recreation, and community spaces. The project stands out through its bold form and functional layout."
        },
        {
            imgSrc: "./work/5.jpg",
            title: "Coastal Modern Villa",
            location: "Gold Coast, Australia",
            date: "May 20, 2024",
            description:
            "A luxury villa with a seamless connection between indoor and outdoor areas. Natural wood, stone, and open airflow create a refreshing coastal atmosphere."
        }
    ];


    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        setShow(false);
        emblaApi.scrollPrev();
        setTimeout(() => {
            setShow(true);
        }, 300);
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        setShow(false);
        emblaApi.scrollNext();
        setTimeout(() => {
            setShow(true);
        }, 300);
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;

        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
        setSelectedIndex(emblaApi.selectedScrollSnap());   // 👈 yeh line important
    }, [emblaApi]);
    const selectedItem = data[selectedIndex];

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <section className="w-screen min-h-screen overflow-hidden" id="work" ref={sectionRef}>
            <div className="w-full py-[16px] px-[80px] border-y border-[rgba(203,205,205,0.20)]">
                <h2 className="text-2xl text-[--white]">
                    Our Work
                </h2>
            </div>
            <div className="relative w-full pb-[50px]">
                <div className="works w-full overflow-hidden ">
                    <div className="works__viewport" ref={emblaRef}>
                        <div className="works__container" ref={trackRef}>
                            {data.map((item, index) => (
                                <div className="works__slide" key={index}>
                                    <div className="work-card">
                                        <img src={item.imgSrc} className="w-full object-scale-down" alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center pointer-events-none">
                        <div className="w-[907px] mx-auto flex justify-between">
                            <Button variant={'primary'} size={'sm_btn'} className="pointer-events-auto" onClick={onPrevButtonClick} disabled={prevBtnDisabled} >
                                <ChevronLeft />
                            </Button>
                            <Button variant={'primary'} size={'sm_btn'} className="pointer-events-auto" onClick={onNextButtonClick} disabled={nextBtnDisabled} >
                                <ChevronRight />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="relative z-30 w-[795px] mx-auto border-y border-[rgba(203,205,205,0.20)] ">
                    <div className={`relative w-full h-fit p-6 flex flex-col gap-6 text-[--white] ${show ? 'zoom-in' : 'zoom-out'} `}>
                                <div className="w-full flex items-start">
                                    <div className="w-full flex flex-col gap-3">
                                        <h5 className="text-lg">{selectedItem.title}</h5>
                                        <p className="text-sm">
                                            Location: {selectedItem.location}
                                        </p>
                                    </div>
                                    <span className="text-sm text-[--primary] shrink-0">{selectedItem.date}</span>
                                </div>
                                <div className="w-full min-h-[80px] flex items-end">
                                    <p className="text-sm line-clamp-3">
                                        {selectedItem.description}
                                    </p>
                                </div>
                                <button className="w-fit ms-auto flex items-center gap-2 text-sm text-[--white] hover:text-[--primary] transition">
                                    <span className="underline underline-offset-2">View Detail</span>
                                    <ChevronRight className="size-[18px] text-[--primary]" />
                                </button>
                        <div className="absolute top-[-1px] right-[0] size-[12px] border-t border-r border-[--primary] pointer-events-none"/>
                        <div className="absolute top-[-1px] left-[0] size-[12px] border-t border-l border-[--primary] pointer-events-none"/>
                        <div className="absolute bottom-[-1px] right-[0] size-[12px] border-b border-r border-[--primary] pointer-events-none"/>
                        <div className="absolute bottom-[-1px] left-[0] size-[12px] border-b border-l border-[--primary] pointer-events-none"/>
                    </div>
                </div>
                <div className="absolute z-20 top-0 left-[calc(calc(100%-795px)/2)] w-[795px]  h-full border-x border-[rgba(203,205,205,0.20)] pointer-events-none" >
                    <div className="w-[36px] border-t border-[--primary] ml-[-18px] mt-[-1px]"/>
                    <div className="ms-auto w-[36px] border-t border-[--primary] mr-[-18px] mt-[-1px]"/>
                    <div className="h-[18px] inline-block border-l border-[--primary] ml-[-1px]"/>
                    <div className="float-right h-[18px] border-l border-[--primary] mr-[-1px]"/>
                </div>
            </div>
        </section>
    );
}
