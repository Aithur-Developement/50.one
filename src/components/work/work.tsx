import * as React from "react"
import { useEffect, useState, useRef,useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { Button } from "@lib/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight , ChevronLeft } from 'lucide-react';
import WorkDetail from "./work-detail";
import './style.css';

declare global {
  interface Window {
    lenis?: {
      stop: () => void;
      start: () => void;
    };
  }
}


export default function Work() {
    const sectionRef = useRef(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [show, setShow] = useState(true);
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true,dragFree: false});
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // const lenis = window.lenis;
        // if (!lenis) return;
    
        if (isOpen) {
            // lenis.stop();
            document.body.style.overflow = 'hidden';
            // if(window.innerWidth  > 1150){
            //     ScrollTrigger.normalizeScroll(false);
            // }
        } else {
            // if(window.innerWidth  > 1150){
            //     ScrollTrigger.normalizeScroll(true);
            // }
            // lenis.start();
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    const data = [
        {
            imgSrc: "./work/1.jpg",
            title: "Waterfront Residence",
            location: "Russell Lea, Sydney",
            date: "2014",
            description:
            "A waterfront residential development oriented toward a public park and Sydney Harbour, maximising outlook, amenity, and a strong connection to landscape and harbour front living.",
            content: `
                <p class="text-md">The residence occupies two narrow lots arranged in tandem, addressing two street frontages. The longitudinal planning strategy originally relied on extended circulation corridors. To improve spatial efficiency, ancillary services were integrated within primary living spaces through operable wall systems, enabling flexible use and reducing reliance on corridors.
                    The elongated building envelope introduced complexity to the external elevations. Visual impact was moderated through articulated indentations, varied materiality, and a restrained colour palette. Privacy along the length of the building was addressed using operable screening devices. High-performance thermal insulation systems were incorporated to offset energy impacts associated with large, glazed openings, while maximising daylight penetration to internal spaces, a key consideration for occupant wellbeing.
                </p>
            `,
            images: [
                "/work/residence/01.jpg",
                "/work/residence/02.jpg",
            ]
        },
        {
            imgSrc: "./work/2.jpg",
            title: "Skyline Hotel + Apartment Redevelopment",
            location: "CBD, Brisbane",
            date: "2015",
            description:
            "An 80-storey high-rise mixed-use building incorporating commercial and residential uses, designed with a strong geometric architectural expression and sustainable material systems. The building features high-performance glazed and metallic façades that provide panoramic outlooks while optimising environmental performance.",
            content: `
                <p class="text-md">
                    The Brisbane proposal was a concept development involving the consolidation of three CBD sites near the Brisbane River. The scheme comprised a hotel within the lower levels, with residential apartments above. The upper levels were designed to capture panoramic views of the Brisbane skyline and distant coastal horizons.
                </p>
                <p class="text-md">
                    The façade composition, expressed through irregularly arranged glass and polished metal elements, was intentionally conceived to create an organic visual character that evolved over a 24-hour cycle. At night, the glazed components were envisioned to emit subtle shifts in colour and light, reinforcing the design intent of an organic, sculptural edifice.
                </p>
            `,
            images: [
                "/work/hotel/01.jpg",
                "/work/hotel/02.jpg",
            ]
        },
        {
            imgSrc: "./work/3.jpg",
            title: "Urban Residential Development",
            location: "Leppington, Sydney",
            date: "2016",
            description:
            "Concept proposal for a high-density residential development over 4.3 hectares of existing farmland, rezoned for residential use.",
            content: `
                <p class="text-md">
                    Concept proposal for a high-density residential development on a 4.3-hectare site formerly used for agricultural purposes and rezoned for residential use. The proposal investigates land-use yield, built-form controls, staging, public and private open-space provision, movement networks, and supporting infrastructure to enable an orderly and efficient transition to an urban residential environment.
                </p>
                <p class="text-md">
                    The central tower buildings are conceived with full-height glazed façades incorporating photovoltaic (PV) glass technology. This approach integrates on-site renewable energy generation, enhanced thermal performance, and façade articulation, contributing to reduced operational energy demand, lower carbon footprint, and improved environmental sustainability outcomes.
                </p>
            `,
            images: [
                "/work/urban/01.jpg",
                "/work/urban/02.jpg",
            ]
        },
        {
            imgSrc: "./work/4.jpg",
            title: "Terrace Refurbishment",
            location: "Darlinghurst, Sydney",
            date: "2018",
            description:
            "The original street façade is reinstated to reflect the past, while the spaces behind are collaboratively designed to meet the clients’ contemporary aspirations.",
            content: `
                <p class="text-md">External Works:</p>
                <p class="text-md">The front façade was reinstated to its original form and detailing, preserving the heritage character and streetscape. The existing building envelope was retained and reconfigured to include an attic, increasing usable internal area.</p>
                <p class="text-md">New ground-level outdoor spaces and a private rooftop terrace provide sun-filled outdoor amenity and strengthen the connection between internal and external spaces.</p>
                <br/>
                <p class="text-md">Internal Works:</p>
                <p class="text-md">The interior was fully refurbished to meet contemporary living requirements, introducing open, flexible spaces with improved access to daylight and sunlight, enhancing overall amenity.</p>
            `,
            images: [
                "/work/terrace/01.jpg",
                "/work/terrace/02.jpg",
                "/work/terrace/03.jpg",
                "/work/terrace/04.jpg",
                "/work/terrace/05.jpg",
            ]
        },
        {
            imgSrc: "./work/5.jpg",
            title: "Integrated Industrial Food Facility",
            location: "Auburn, Sydney",
            date: "2024",
            description:
            "A complex food manufacturing facility incorporating controlled inventory systems, value-added processing lines, and integrated logistics and distribution operations.",
            content: `
                <p class="text-md">The evolution of the complex was driven by the spatial and operational requirements of the manufacturing process, including statutory and regulatory compliance. The overall composition integrates each stage of production into a coherent workflow, directly informing the final built form.
                    External wall cladding was selected for its antimicrobial properties to minimise the potential growth of bacteria, fungi, and viruses. An aluminium cladding system was adopted to reflect the sensitivity and precision of the facility’s function while providing durability and ease of maintenance. Long-term maintenance considerations were a fundamental design driver.
                    Sustainability principles were integrated throughout the design, supporting operational efficiency, material longevity, and reduced lifecycle impact.
                </p>
            `,
            images: [
                "/work/industrial/01.jpg",
                "/work/industrial/02.jpg",
                "/work/industrial/03.jpg",
            ]
        },
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
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);
    const selectedItem = data[selectedIndex];

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <>
            <section className="w-screen xl:min-h-screen overflow-hidden" id="work" ref={sectionRef}>
                <div className="w-full py-[14px] sm:py-[1.563vw] xl:py-[0.833vw] px-6 sm:px-[4.688vw] xl:px-[4.167vw] border-y border-[rgba(203,205,205,0.20)]">
                    <h2 className="text-2xl text-[--white]">
                        Our Work
                    </h2>
                </div>
                <div className="relative w-full pb-[50px] sm:pb-[80px] xl:pb-[2.604vw]">
                    <div className="works w-full overflow-hidden ">
                        <div className="works__viewport" ref={emblaRef}>
                            <div className="works__container" ref={trackRef}>
                                {data.map((item, index) => (
                                    <div onClick={()=> setIsOpen(true)} className="works__slide" key={index}>
                                        <div className="work-card">
                                            <div className="card-image">
                                                <img src={item.imgSrc} className="w-full object-scale-down" alt="" />
                                            </div>
                                            <div className="card-info text-[--white]">
                                                <div className="w-full flex items-start">
                                                    <div className="w-full flex flex-col gap-3 sm:gap-[1.172vw] xl:gap-[0.625vw]">
                                                        <h5 className="text-lg">{selectedItem.title}</h5>
                                                        <p className="text-sm">
                                                            Location: {selectedItem.location}
                                                        </p>
                                                    </div>
                                                    <span className="text-sm text-[--primary] shrink-0">{selectedItem.date}</span>
                                                </div>
                                                <div className="w-full min-h-[80px] sm:min-h-[7.813vw] xl:min-h-[4.167vw] flex items-end">
                                                    <p className="text-sm line-clamp-3">
                                                        {selectedItem.description}
                                                    </p>
                                                </div>
                                                <button className="w-fit flex items-center gap-2 text-sm text-[--white] hover:text-[--primary] transition">
                                                    <span className="underline underline-offset-2">View Detail</span>
                                                    <ChevronRight className="size-[18px] text-[--primary]" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute inset-0 hidden sm:flex items-center pointer-events-none">
                            <div className="w-[760px] sm:w-[74.219vw] xl:w-[47.24vw] mx-auto flex justify-between">
                                <Button variant={'primary'} size={'sm_btn'} className="pointer-events-auto" onClick={onPrevButtonClick} disabled={prevBtnDisabled} >
                                    <ChevronLeft />
                                </Button>
                                <Button variant={'primary'} size={'sm_btn'} className="pointer-events-auto" onClick={onNextButtonClick} disabled={nextBtnDisabled} >
                                    <ChevronRight />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block relative z-30 w-[650px] sm:w-[63.477vw] xl:w-[41.406vw] mx-auto border-y border-[rgba(203,205,205,0.20)] ">
                        <div className={`relative w-full h-fit p-6 sm:p-[2.344vw] xl:p-[1.25vw] flex flex-col gap-6 sm:gap-[2.344vw] xl:gap-[1.25vw] text-[--white] ${show ? 'zoom-in' : 'zoom-out'} `}>
                            <div className="w-full flex items-start">
                                <div className="w-full flex flex-col gap-3 sm:gap-[1.172vw] xl:gap-[0.625vw]">
                                    <h5 className="text-lg">{selectedItem.title}</h5>
                                    <p className="text-sm">
                                        Location: {selectedItem.location}
                                    </p>
                                </div>
                                <span className="text-sm text-[--primary] shrink-0">{selectedItem.date}</span>
                            </div>
                            <div className="w-full min-h-[80px] sm:min-h-[7.813vw] xl:min-h-[4.167vw] flex items-end">
                                <p className="text-sm line-clamp-3">
                                    {selectedItem.description}
                                </p>
                            </div>
                            <button onClick={()=> setIsOpen(true)} className="w-fit ms-auto flex items-center gap-2 text-sm text-[--white] hover:text-[--primary] transition">
                                <span className="underline underline-offset-2">View Detail</span>
                                <ChevronRight className="size-[18px] text-[--primary]" />
                            </button>
                            <div className="hidden sm:block absolute top-[-1px] right-[0] size-[12px] border-t border-r border-[--primary] pointer-events-none"/>
                            <div className="hidden sm:block absolute top-[-1px] left-[0] size-[12px] border-t border-l border-[--primary] pointer-events-none"/>
                            <div className="hidden sm:block absolute bottom-[-1px] right-[0] size-[12px] border-b border-r border-[--primary] pointer-events-none"/>
                            <div className="hidden sm:block absolute bottom-[-1px] left-[0] size-[12px] border-b border-l border-[--primary] pointer-events-none"/>
                        </div>
                    </div>
                    <div className="hidden sm:block absolute z-20 top-0 left-[calc(calc(100%-650px)/2)] sm:left-[calc(calc(100%-63.477vw)/2)] xl:left-[calc(calc(100%-41.406vw)/2)] w-[650px] sm:w-[63.477vw] xl:w-[41.406vw] h-full border-x border-[rgba(203,205,205,0.20)] pointer-events-none" >
                        <div className="w-[36px] border-t border-[--primary] ml-[-18px] mt-[-1px]"/>
                        <div className="ms-auto w-[36px] border-t border-[--primary] mr-[-18px] mt-[-1px]"/>
                        <div className="h-[18px] inline-block border-l border-[--primary] ml-[-1px]"/>
                        <div className="float-right h-[18px] border-l border-[--primary] mr-[-1px]"/>
                    </div>
                </div>
                <div className="sm:hidden flex items-end justify-end gap-6 pb-[50px] px-6">
                    <Button variant={'primary'} size={'sm_btn'} onClick={onPrevButtonClick} disabled={prevBtnDisabled} >
                        <ChevronLeft />
                    </Button>
                    <Button variant={'primary'} size={'sm_btn'} onClick={onNextButtonClick} disabled={nextBtnDisabled} >
                        <ChevronRight />
                    </Button>
                </div>
            </section>
            <WorkDetail isOpen={isOpen} setIsOpen={setIsOpen} data={selectedItem} />
        </>
    );
}
