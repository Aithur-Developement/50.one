import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { Button } from "@lib/components/ui/button";
import { useLenis } from '../../hooks/useLenis';
// import './css/style.css';

export default function BlogList(props) {
    const [type, setType] = useState(1);
    const [active, setActive] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(props.data || []);
    const sectionPin = useRef(null);
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1150;
    const lenis = isDesktop ? useLenis() : null;
    const textRef = useRef(null);
    const quoteRef = useRef(null);
    const ButtonRef = useRef(null);
    const quote1Ref = useRef(null);
    const listRef = useRef(null);
    
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
          gsap.set(ButtonRef.current, { opacity: 1 });
          gsap.set(listRef.current, { opacity: 1 });
          
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
          .from(ButtonRef.current, {y: 20,opacity: 0,duration: 1,stagger: 0.1,ease: "expo.out",}, "<")
          .from(listRef.current, {opacity: 0,duration: 1,stagger: 0.1,ease: "expo.out",}, "<")
        });
    
        return () => {
          textSplit && textSplit.revert();
          quoteSplit && quoteSplit.revert();
          tl.kill();
        };
    }, [lenis]);

    useEffect(() => {
        filterData();
    }, [type, searchTerm, props.data]);

    const changeStep = (newStep) => {
        setActive(false)
        setTimeout(() => {
            setType(newStep);
            setActive(true)
        }, 300);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    function toShortDate(date) {
        if (!(date instanceof Date)) {
            date = new Date(date);
        }
        if (isNaN(date)) {
            return "Invalid Date";
        }

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month = months[date.getMonth()];
        let day = date.getDate();
        let year = date.getFullYear();

        return `${day} ${month}, ${year}`;
    }
    const filterData = () => {
        let filtered = props.data || [];

        if (searchTerm) {
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        const now = new Date();
        switch (type) {
            case 2: // This Week
                filtered = filtered.filter(item => {
                    const itemDate = new Date(item.date);
                    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
                    return itemDate >= startOfWeek;
                });
                break;
            case 3: // This Month
                filtered = filtered.filter(item => {
                    const itemDate = new Date(item.date);
                    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
                    return itemDate >= startOfMonth;
                });
                break;
            case 4: // This Year
                filtered = filtered.filter(item => {
                    const itemDate = new Date(item.date);
                    const startOfYear = new Date(now.getFullYear(), 0, 1);
                    return itemDate >= startOfYear;
                });
                break;
            default:
                // All posts
                break;
        }

        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setFilteredData(filtered);
    };
    useEffect(() => {
        let sortedData = [...props.data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setFilteredData(sortedData);
    }, [props.data]);
    
    return (
        <section className="blog-list flex flex-col gap-6 sm:gap-6 xl:gap-[2.5vw] relative w-screen sm:min-h-screen px-4 sm:px-6 xl:px-[2.5vw] xl:pb-[5.208vw]" id="blog-list" ref={sectionPin}>
            <div className="w-full flex flex-col items-center gap-4 text-[--black] text-center">
                <h2 className="text-2xl opacity-0" ref={textRef}>Blogs</h2>
                <p className="xl:w-[37.813vw] sm:w-[80%] w-full xl:px-0 px-6 mx-auto text-md opacity-0" ref={quoteRef}>
                    Your idea. Real people. Real insights. Done for you validation, built for founders who don’t guess.
                </p>
            </div>
            <div className="w-full flex items-center justify-center gap-2 opacity-0" ref={ButtonRef}>
                <Button variant={type === 1 ? "primary" : "lightPrimary"} size={'extraLarge'} className="text-sm" onClick={() => changeStep(1)}>
                    All
                </Button>
                <Button variant={type === 2 ? "primary" : "lightPrimary"} size={'extraLarge'} className="text-sm" onClick={() => changeStep(2)}>
                    This Week
                </Button>
                <Button variant={type === 3 ? "primary" : "lightPrimary"} size={'extraLarge'} className="text-sm" onClick={() => changeStep(3)}>
                    This Month
                </Button>
                <Button variant={type === 4 ? "primary" : "lightPrimary"} size={'extraLarge'} className="text-sm" onClick={() => changeStep(4)}>
                    This Year
                </Button>
            </div>
            <div className={`grid grid-cols-12 gap-6 xl:gap-[1.25vw] opacity-0 ${active?'fade-in':'fade-out'}`} ref={listRef}>
                {filteredData.map((item, index) => (
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
    );
}