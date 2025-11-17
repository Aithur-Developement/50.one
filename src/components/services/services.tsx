import * as React from "react"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

export default function Services() {
    const sectionRef = useRef(null);
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

    return (
        <section className="w-screen min-h-screen px-[222px] flex items-center justify-between gap-[100px] border-y border-[rgba(203,205,205,0.20)] overflow-hidden" id="services" ref={sectionRef}>
            <div className="w-[700px] h-fit shrink-0 flex flex-col gap-4 text-[--white]">
                <h2 className="text-2xl">Our Services</h2>
                <p className="text-md">
                    From concept to completion, we craft spaces that unite form and function. Our process blends creativity, precision, and collaboration delivering results that stand the test of time.
                </p>
            </div>
            <div className="w-fit h-screen flex flex-col gap-[60px] pt-[145px] overflow-hidden">
                {data.map((service, index) => (
                    <div className="flex items-start gap-6" key={index}>
                        <span className="w-[145px] text-3xl text-[--primary]">0{index + 1}</span>
                        <div className="w-[500px] flex flex-col gap-6 p-6 bg-[--dark] text-[--white]">
                            <img src={service.imgSrc} className="w-full object-cover" alt="" />
                            <div className="w-full flex flex-col gap-2">
                                <h3 className="text-xl">{service.title}</h3>
                                <p className="text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
