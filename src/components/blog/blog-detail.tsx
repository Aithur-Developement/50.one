import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import BlogContent from "./blog-content";
import { useLenis } from '../../hooks/useLenis';

// import "./css/style.css";


export default function Blog(props) {
    const sectionPin = useRef(null);
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1150;
    const lenis = isDesktop ? useLenis() : null;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);
        if(window.innerWidth  > 1150){
            ScrollTrigger.normalizeScroll(true);
        }

		// If using Lenis, connect it with GSAP
		if (lenis) {
			lenis.on('scroll', ScrollTrigger.update);
		}
    }, [lenis]);
    function toShortDate(date) {
        if (!(date instanceof Date)) {
            date = new Date(date);
        }
        if (isNaN(date.getTime())) {
            return "Invalid Date";
        }
    
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        let month = months[date.getMonth()];
        let day = date.getDate();
        let year = date.getFullYear();
    
        return `${day} ${month}, ${year}`;
    }
    function getMinutesAgo(isoString) {
        let blogDate = new Date(isoString);
        let now = new Date();
    
        if (isNaN(blogDate.getTime())) {
            return "Invalid Date";
        }
    
        let diffInMs = now.getTime() - blogDate.getTime(); // Difference in milliseconds
        let diffInMinutes = Math.floor(diffInMs / (1000 * 60)); // Convert to minutes
    
        let minutes = diffInMinutes % 60;
        let hours = Math.floor((diffInMinutes % 1440) / 60);
        let days = Math.floor((diffInMinutes % 525600) / 1440); // 525600 min = 1 year
        let years = Math.floor(diffInMinutes / 525600);
    
        if (years > 0) {
            return `${years} yr${years > 1 ? "s" : ""} ${days} day${days > 1 ? "s" : ""}`;
        } else if (days > 0) {
            return `${days} day${days > 1 ? "s" : ""} ${hours} hr${hours > 1 ? "s" : ""}`;
        } else if (hours > 0) {
            return `${hours} hr${hours > 1 ? "s" : ""} ${minutes} min`;
        } else {
            return `${minutes} min`;
        }
    }

    return (
		<>
            {props.data && (
                <section className="blog-detail flex flex-col gap-4 sm:gap-6 relative w-screen xl:py-[5.208vw] sm:py-[80px] py-[60px] xl:px-[13.542vw] sm:px-6 px-4 overflow-hidden" id="blog-detail" ref={sectionPin}>
                    <div className="w-full flex sm:flex-row flex-col sm:items-center justify-between gap-4 text-[--black]">
                        <h3 className="text-1xl">{props.data.title}</h3>
                        <div className="flex items-center gap-6">
                            <span className="text-sm">{toShortDate(props.data.date)}</span>
                            <div className="flex items-stretch gap-2">
                                {props.data.blogTags.map((tag, idx) => (
                                    <span key={idx} className="text-sm text-[--black] border border-[rgba(203,205,205,0.40)] rounded-full py-2 px-4">
                                        {tag.tagName}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-2">
                        <div className="w-full border-b border-[--lightGrey]"/>
                        <img src="/small-logo-vector.png" className="shrink-0" alt="logo-vector" />
                        <div className="w-full border-b border-[--lightGrey]"/>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                        <div className="flex items-center gap-2">
                            <div className="size-[48px] rounded-full overflow-hidden">
                                <img src={`http://validet.aithur.com${props.data.authorImage[0].url}`} alt={props.data.authorName} className="size-full object-cover"  />
                            </div>
                            <span className="text-md text-[--black]">{props.data.authorName}</span>
                        </div>
                        <span className="text-sm text-[--black]">{getMinutesAgo(props.data.date)} ago</span>
                    </div>
                    <BlogContent content={props.data.content}/>
                </section>
            )}
            {props.blogList && (
                <section className="blog-list flex flex-col gap-2 sm:gap-4 xl:gap-6 relative w-screen xl:px-[2.5vw] sm:px-6 px-4 xl:pb-[10.417vw] pb-[60px] overflow-hidden" id="blog-list">
                    <h2 className="text-2xl">Other Articles</h2>
                    <div className="grid grid-cols-12 gap-6 xl:gap-[1.25vw]">
                        {props.blogList.slice(0, 3).map((item, index) => (
                            <a href={`blogs/${item.slug}`} key={index} className="xl:col-span-4 sm:col-span-6 col-span-12 p-3 sm:p-6 flex sm:flex-col flex-row-reverse gap-3 sm:gap-6 bg-[--white] border-[rgba(203,205,205,0.40)] border rounded-[30px]">
                                <div className="w-full hidden sm:flex items-center justify-between gap-6">
                                    <span className="text-sm text-[--black]">
                                        {toShortDate(item.date)}
                                    </span>
                                    <div className="flex items-stretch gap-2">
                                        {item.blogTags.slice(0, 2).map((tag, idx) => (
                                            <span key={idx} className="text-sm text-[--black] border border-[rgba(203,205,205,0.40)] rounded-full py-2 px-4">
                                                {tag.tagName}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="xl:h-[15.625vw] sm:h-[300px] h-[128px] sm:w-fit w-[150px] shrink-0 overflow-hidden rounded-[20px]">
                                    <img src={`http://validet.aithur.com${item.image[0].url}`} alt={item.title} className="w-full h-full object-cover"/>
                                </div>
                                <div className="w-full flex flex-col xl:justify-normal justify-between gap-4">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-smallest ">{toShortDate(item.date)}</span>
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                    </div>
                                    <p className="sm:block hidden text-sm text-[--black] line-clamp-4">{item.description}</p>
                                    <p className="sm:hidden text-sm text-[--black] line-clamp-3">{item.description}</p>
                                    <div className="w-full hidden sm:flex items-center gap-2">
                                        <div className="w-full border-b border-[--lightGrey]"/>
                                        <img src="/small-logo-vector.png" className="shrink-0" alt="logo-vector" />
                                        <div className="w-full border-b border-[--lightGrey]"/>
                                    </div>
                                    <div className="hidden sm:flex items-center justify-between gap-4 text-[--black]">
                                        <span className="text-xs">{item.authorName}</span>
                                        <span className="text-xs">5 mins read</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    
                </section>
            )}
        </>
    );
}
