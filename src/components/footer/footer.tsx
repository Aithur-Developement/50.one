import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { Button } from "@lib/components/ui/button";
import Horizontal_separate from "@components/separate/horizontal-separate";




export default function Footer() {
    const sectionRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);
        
    }, []);

    return (
        <footer className="w-full overflow-hidden" id="footer" ref={sectionRef}>
            <div className="w-full sm:mb-0 mb-6 xl:px-6 flex xl:flex-nowrap flex-wrap items-stretch justify-between xl:justify-normal text-center xl:text-left gap-6 xl:gap-[1.25vw]">
                <div className="w-full xl:w-[26.979vw] sm:py-4 xl:py-[1.875vw] px-6 sm:px-0 flex flex-col xl:items-start items-center justify-center gap-4 xl:gap-[0.833vw] shrink-0">
                    <img src="/footer-logo.png" className="w-fit xl:w-[15.625vw] object-cover" alt="footer logo" />
                    <p className="text-sm text-[--black]">Lorem ipsum dolor sit amet consectetur. Ligula egestas tempor sem ultricies nulla diam. Urna morbi sit auctor nullam adipiscing aliquam. Sed nunc adipiscing facilisi turpis. Enim vestibulum et varius ac commodo.</p>
                </div>
                <div className="w-full xl:w-fit flex xl:flex-col items-center gap-2 shrink-0">
                    <div className="xl:h-full w-full xl:w-fit border-b xl:border-l border-[--lightGrey] rounded-[4px]"/>
                    <img src="/small-logo-vector.png" className="shrink-0" alt="logo-vector" />
                    <div className="xl:h-full w-full xl:w-fit border-b xl:border-l border-[--lightGrey] rounded-[4px]"/>
                </div>
                <div className="w-full sm:w-[45%] xl:w-full sm:py-4 xl:py-[0.833vw] flex flex-col gap-4 sm:gap-6 xl:gap-[1.25vw] text-[--black]">
                    <h6 className="text-md ">Site Map</h6>
                    <ul className="flex flex-col gap-2">
                        <li><button className="text-sm transition hover:text-[--primary]">Home</button></li>
                        <li><button className="text-sm transition hover:text-[--primary]">How It Works</button></li>
                        <li><button className="text-sm transition hover:text-[--primary]">Why Founders Use Validet</button></li>
                        <li><button className="text-sm transition hover:text-[--primary]">Pricing</button></li>
                    </ul>
                </div>
                <div className="w-full sm:w-[10px] xl:w-fit flex sm:flex-col items-center gap-2 shrink-0">
                    <div className="sm:h-full w-full sm:w-fit  border-b sm:border-l border-[--lightGrey] rounded-[4px]"/>
                    <img src="/small-logo-vector.png" className="shrink-0" alt="logo-vector" />
                    <div className="sm:h-full w-full sm:w-fit border-b sm:border-l border-[--lightGrey] rounded-[4px]"/>
                </div>
                <div className="w-full sm:w-[45%] xl:w-full sm:py-4 xl:py-[0.833vw] flex flex-col gap-4 sm:gap-6 xl:gap-[1.25vw] text-[--black]">
                    <h6 className="text-md ">Contact</h6>
                    <ul className="flex flex-col xl:items-start items-center gap-2">
                        <li>
                            <a href="" className="flex items-center gap-2 text-sm transition hover:text-[--primary]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M11.3464 10.6462L10.2054 12.0722C8.43836 11.0332 6.96536 9.56119 5.92736 7.79419L7.35336 6.65319C7.69736 6.37819 7.81236 5.90519 7.63336 5.50319L6.33336 2.57619C6.14036 2.14219 5.66236 1.91219 5.20336 2.03119L2.72836 2.67319C2.25036 2.79819 1.94136 3.26119 2.00936 3.75019C2.90136 10.1042 7.89536 15.0982 14.2504 15.9912C14.7394 16.0582 15.2024 15.7492 15.3264 15.2722L15.9684 12.7972C16.0874 12.3382 15.8574 11.8612 15.4244 11.6682L12.4974 10.3682C12.0954 10.1892 11.6234 10.3042 11.3474 10.6472L11.3464 10.6462Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                +6125849668
                            </a>
                        </li>
                        <li>
                            <a href="" className="flex items-center gap-2 text-sm transition hover:text-[--primary]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M1.75 5.75L8.517 9.483C8.818 9.649 9.182 9.649 9.483 9.483L16.25 5.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3.75 14.75L14.25 14.75C15.3546 14.75 16.25 13.8546 16.25 12.75V5.25C16.25 4.14543 15.3546 3.25 14.25 3.25L3.75 3.25C2.64543 3.25 1.75 4.14543 1.75 5.25L1.75 12.75C1.75 13.8546 2.64543 14.75 3.75 14.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                admin@validet.com
                            </a>
                        </li>
                        <li>
                            <a href="" className="flex items-center gap-2 text-sm transition hover:text-[--primary]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M14.7797 7.266C14.7797 9.888 11.3517 14.099 9.7757 15.897C9.3627 16.368 8.6367 16.368 8.2247 15.897C6.6487 14.1 3.2207 9.889 3.2207 7.266C3.2217 3.776 6.2077 1.75 9.0007 1.75C11.7937 1.75 14.7797 3.776 14.7797 7.266Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9 9.25C9.9665 9.25 10.75 8.4665 10.75 7.5C10.75 6.5335 9.9665 5.75 9 5.75C8.0335 5.75 7.25 6.5335 7.25 7.5C7.25 8.4665 8.0335 9.25 9 9.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Address will be here
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Horizontal_separate/>
            <div className="w-full grid grid-cols-12 items-center justify-between sm:gap-0 gap-4 p-6 xl:p-[1.25vw]">
                <div className="col-span-12 sm:col-span-4 xl:col-span-3 sm:text-left text-center">
                    <p className="text-sm text-[--black]">
                        ©2025 All Rights Reserved
                    </p>
                </div>
                <div className="col-span-12 sm:col-span-4 xl:col-span-6 flex items-center justify-center gap-6">
                    <a href="#" className="text-sm text-[--black] transition hover:text-[--primary]">Privacy Policy</a>
                    <a href="#" className="text-sm text-[--black] transition hover:text-[--primary]">Security Policy</a>
                </div>
                <div className="col-span-12 sm:col-span-4 xl:col-span-3 flex items-center sm:justify-end justify-center gap-2">
                    <p className="text-sm text-[--black] ">Designed & Developed by</p>
                    <a href="https://www.aithur.com/" className="text-sm text-[--black] transition hover:text-[--primary]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
                            <path d="M7.12699 17.9997C5.5331 17.9977 4.25017 16.708 4.25538 15.113C4.26058 13.5259 5.54481 12.2401 7.12699 12.2368C8.71894 12.2342 10.0149 13.5377 10.0077 15.1359C10.0006 16.723 8.71438 18.0016 7.12699 17.9997Z" fill="currentColor"/>
                            <path d="M22.2495 15.7181C21.8591 15.8486 19.9725 16.1746 18.8015 14.5444C17.4919 12.7219 16.2089 7.80284 15.939 5.93731C15.8232 5.13919 14.6378 0.199216 10.0188 0.00359951C6.24547 -0.126812 5.15381 3.32974 5.15381 3.32974C5.15381 3.32974 3.96197 7.21273 2.66734 8.28471C1.17103 9.52361 0 8.93676 0 8.93676C0 8.93676 3.31791 12.0666 6.24547 10.5669C9.17304 9.06718 10.0838 6.00251 10.0838 6.00251C10.0838 6.00251 11.0122 10.8538 11.7512 12.5361C12.0674 13.2553 13.2716 17.3483 16.5245 17.8047C19.7773 18.2612 22.2495 15.7181 22.2495 15.7181Z" fill="currentColor"/>
                            <rect x="19.7637" y="2.60059" width="2.87695" height="12.5796" rx="1.43848" fill="currentColor"/>
                            <rect x="19.7637" y="2.60059" width="2.87695" height="12.5796" rx="1.43848" fill="currentColor"/>
                            <path d="M33.7578 3.85385C33.7578 3.16169 34.3178 2.60059 35.0087 2.60059H35.3839C36.0747 2.60059 36.6348 3.16169 36.6348 3.85385V6.40737C36.6348 7.09953 36.929 7.33166 37.6198 7.33166H39.199C39.8898 7.33166 40.1997 7.09953 40.1997 6.40737V3.85385C40.1997 3.16169 40.7597 2.60059 41.4505 2.60059H41.8258C42.5166 2.60059 43.0766 3.16169 43.0766 3.85385V13.927C43.0766 14.6191 42.5166 15.1802 41.8258 15.1802H41.4505C40.7597 15.1802 40.1997 14.6191 40.1997 13.927V10.9975C40.1997 10.3053 39.8898 10.0888 39.199 10.0888H37.6198C36.929 10.0888 36.6348 10.3053 36.6348 10.9975V13.927C36.6348 14.6191 36.0747 15.1802 35.3839 15.1802H35.0087C34.3178 15.1802 33.7578 14.6191 33.7578 13.927V3.85385Z" fill="currentColor"/>
                            <path d="M33.7578 3.85385C33.7578 3.16169 34.3178 2.60059 35.0087 2.60059H35.3839C36.0747 2.60059 36.6348 3.16169 36.6348 3.85385V6.40737C36.6348 7.09953 36.929 7.33166 37.6198 7.33166H39.199C39.8898 7.33166 40.1997 7.09953 40.1997 6.40737V3.85385C40.1997 3.16169 40.7597 2.60059 41.4505 2.60059H41.8258C42.5166 2.60059 43.0766 3.16169 43.0766 3.85385V13.927C43.0766 14.6191 42.5166 15.1802 41.8258 15.1802H41.4505C40.7597 15.1802 40.1997 14.6191 40.1997 13.927V10.9975C40.1997 10.3053 39.8898 10.0888 39.199 10.0888H37.6198C36.929 10.0888 36.6348 10.3053 36.6348 10.9975V13.927C36.6348 14.6191 36.0747 15.1802 35.3839 15.1802H35.0087C34.3178 15.1802 33.7578 14.6191 33.7578 13.927V3.85385Z" fill="currentColor"/>
                            <path d="M25.1415 2.60059C24.4506 2.60059 23.8906 3.16169 23.8906 3.85385V4.1045C23.8906 4.79666 24.4506 5.35777 25.1415 5.35777H25.8685C26.5594 5.35777 26.7519 5.71522 26.7519 6.40737V13.927C26.7519 14.6191 27.312 15.1802 28.0028 15.1802H28.378C29.0689 15.1802 29.6289 14.6191 29.6289 13.927V6.40737C29.6289 5.71522 29.8137 5.35777 30.5045 5.35777H31.2394C31.9302 5.35777 32.4902 4.79666 32.4902 4.1045V3.85385C32.4902 3.16169 31.9302 2.60059 31.2394 2.60059H25.1415Z" fill="currentColor"/>
                            <path d="M25.1415 2.60059C24.4506 2.60059 23.8906 3.16169 23.8906 3.85385V4.1045C23.8906 4.79666 24.4506 5.35777 25.1415 5.35777H25.8685C26.5594 5.35777 26.7519 5.71522 26.7519 6.40737V13.927C26.7519 14.6191 27.312 15.1802 28.0028 15.1802H28.378C29.0689 15.1802 29.6289 14.6191 29.6289 13.927V6.40737C29.6289 5.71522 29.8137 5.35777 30.5045 5.35777H31.2394C31.9302 5.35777 32.4902 4.79666 32.4902 4.1045V3.85385C32.4902 3.16169 31.9302 2.60059 31.2394 2.60059H25.1415Z" fill="currentColor"/>
                            <path d="M45.0469 3.8226C45.0469 3.13044 45.6069 2.56934 46.2977 2.56934H46.673C47.3638 2.56934 47.9238 3.13044 47.9238 3.8226V11.021C47.9238 12.2743 48.6665 12.6142 49.6834 12.6142C50.793 12.6142 51.4888 12.2743 51.4888 11.021V3.8226C51.4888 3.13044 52.0488 2.56934 52.7396 2.56934H53.1149C53.8057 2.56934 54.3657 3.13044 54.3657 3.8226V11.6085C54.3657 12.8461 53.3572 15.431 49.6047 15.431C45.8521 15.431 45.0469 12.5406 45.0469 11.6085V3.8226Z" fill="currentColor"/>
                            <path d="M45.0469 3.8226C45.0469 3.13044 45.6069 2.56934 46.2977 2.56934H46.673C47.3638 2.56934 47.9238 3.13044 47.9238 3.8226V11.021C47.9238 12.2743 48.6665 12.6142 49.6834 12.6142C50.793 12.6142 51.4888 12.2743 51.4888 11.021V3.8226C51.4888 3.13044 52.0488 2.56934 52.7396 2.56934H53.1149C53.8057 2.56934 54.3657 3.13044 54.3657 3.8226V11.6085C54.3657 12.8461 53.3572 15.431 49.6047 15.431C45.8521 15.431 45.0469 12.5406 45.0469 11.6085V3.8226Z" fill="currentColor"/>
                            <path d="M66.5269 14.7452C66.501 14.6737 66.4595 14.6042 66.4121 14.5438C66.11 14.154 65.8045 13.7674 65.5004 13.3802C64.9142 12.6337 64.3261 11.8885 63.7425 11.1395C63.4559 10.7717 63.5097 10.3462 63.8663 10.0513C63.9863 9.95185 64.1043 9.84985 64.2139 9.74006C64.8675 9.08323 65.2858 8.30297 65.3967 7.37718C65.5277 6.28378 65.2715 5.27743 64.6237 4.38997C63.8021 3.26408 62.681 2.65339 61.2881 2.61765C60.0243 2.58517 58.7598 2.60856 57.4954 2.61116C57.1562 2.61181 56.8716 2.74889 56.6433 2.99836C56.4222 3.24069 56.3353 3.5298 56.3359 3.85529C56.3392 5.51651 56.3372 7.17838 56.3372 8.83961V13.6836C56.3372 13.7771 56.3359 13.8707 56.3385 13.9636C56.3606 14.6055 56.8553 15.0973 57.4967 15.1148C57.6724 15.1194 57.8488 15.1174 58.0251 15.1148C58.2534 15.1116 58.4654 15.0486 58.6541 14.9193C59.0043 14.6789 59.1839 14.3437 59.1846 13.9175C59.1865 13.2269 59.1846 12.5363 59.1859 11.8457C59.1859 11.7683 59.1885 11.6891 59.2021 11.6131C59.2702 11.2311 59.6184 10.9731 60.0042 11.0128C60.2363 11.0362 60.4069 11.1564 60.5482 11.3357C61.4671 12.5005 62.3898 13.6628 63.3067 14.829C63.4565 15.0193 63.6387 15.1168 63.8793 15.1161C64.636 15.1142 65.3921 15.1168 66.1489 15.1135C66.2247 15.1135 66.3051 15.0999 66.3758 15.0726C66.5217 15.0174 66.5794 14.8907 66.5269 14.7452ZM62.2044 7.98593C61.9255 8.32571 61.5676 8.50697 61.1234 8.50372C60.9373 8.50242 60.7506 8.50372 60.5645 8.50372C60.3621 8.50372 60.1605 8.50437 59.9588 8.50372C59.5094 8.50177 59.1956 8.19643 59.1878 7.7449C59.182 7.40772 59.1865 7.07054 59.1865 6.73335C59.1865 6.51571 59.1852 6.29742 59.1865 6.07978C59.191 5.60032 59.4978 5.28977 59.9744 5.28652C60.3472 5.28393 60.7201 5.28523 61.0929 5.28588C61.6772 5.28717 62.1006 5.56134 62.3756 6.06679C62.7037 6.66969 62.6304 7.46554 62.2044 7.98593Z" fill="currentColor"/>
                            <path d="M66.5269 14.7452C66.501 14.6737 66.4595 14.6042 66.4121 14.5438C66.11 14.154 65.8045 13.7674 65.5004 13.3802C64.9142 12.6337 64.3261 11.8885 63.7425 11.1395C63.4559 10.7717 63.5097 10.3462 63.8663 10.0513C63.9863 9.95185 64.1043 9.84985 64.2139 9.74006C64.8675 9.08323 65.2858 8.30297 65.3967 7.37718C65.5277 6.28378 65.2715 5.27743 64.6237 4.38997C63.8021 3.26408 62.681 2.65339 61.2881 2.61765C60.0243 2.58517 58.7598 2.60856 57.4954 2.61116C57.1562 2.61181 56.8716 2.74889 56.6433 2.99836C56.4222 3.24069 56.3353 3.5298 56.3359 3.85529C56.3392 5.51651 56.3372 7.17838 56.3372 8.83961V13.6836C56.3372 13.7771 56.3359 13.8707 56.3385 13.9636C56.3606 14.6055 56.8553 15.0973 57.4967 15.1148C57.6724 15.1194 57.8488 15.1174 58.0251 15.1148C58.2534 15.1116 58.4654 15.0486 58.6541 14.9193C59.0043 14.6789 59.1839 14.3437 59.1846 13.9175C59.1865 13.2269 59.1846 12.5363 59.1859 11.8457C59.1859 11.7683 59.1885 11.6891 59.2021 11.6131C59.2702 11.2311 59.6184 10.9731 60.0042 11.0128C60.2363 11.0362 60.4069 11.1564 60.5482 11.3357C61.4671 12.5005 62.3898 13.6628 63.3067 14.829C63.4565 15.0193 63.6387 15.1168 63.8793 15.1161C64.636 15.1142 65.3921 15.1168 66.1489 15.1135C66.2247 15.1135 66.3051 15.0999 66.3758 15.0726C66.5217 15.0174 66.5794 14.8907 66.5269 14.7452ZM62.2044 7.98593C61.9255 8.32571 61.5676 8.50697 61.1234 8.50372C60.9373 8.50242 60.7506 8.50372 60.5645 8.50372C60.3621 8.50372 60.1605 8.50437 59.9588 8.50372C59.5094 8.50177 59.1956 8.19643 59.1878 7.7449C59.182 7.40772 59.1865 7.07054 59.1865 6.73335C59.1865 6.51571 59.1852 6.29742 59.1865 6.07978C59.191 5.60032 59.4978 5.28977 59.9744 5.28652C60.3472 5.28393 60.7201 5.28523 61.0929 5.28588C61.6772 5.28717 62.1006 5.56134 62.3756 6.06679C62.7037 6.66969 62.6304 7.46554 62.2044 7.98593Z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
