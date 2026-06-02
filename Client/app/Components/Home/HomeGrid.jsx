"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const HomeGrid = () => {
    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);
    const mainContainerRef = useRef(null);
    const textTopRef = useRef(null);
    const textBottomRef = useRef(null);
    const btnRef = useRef(null);

  useGSAP(() => {
    const boxTl = gsap.timeline();

    boxTl.from(box1Ref.current, {
      xPercent: 50,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(2)"
    });

    boxTl.from(box2Ref.current, {
      yPercent: 40,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(2)"
    });

    boxTl.from(box3Ref.current, {
      scale: 0.4,
      opacity: 0,
      duration: 0.8,
      rotate: 270,
      ease: "back.out"
    });

        // 2. Scroll-bound timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainContainerRef.current,
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: 1,
            }
        });

        // Top text moves right
        tl.fromTo(textTopRef.current, {
            xPercent: -30 
        }, {
            xPercent: 30,
            ease: "none"
        }, "scroll");

        // Bottom text moves left
        tl.fromTo(textBottomRef.current, {
            xPercent: 30
        }, {
            xPercent: -30,
            ease: "none"
        }, "scroll");

        // Button entry tied to the scroll finish
        tl.from(btnRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        }, "finish");

    }, { scope: mainContainerRef, dependencies: [] });

    return (
        <div ref={mainContainerRef} className="relative w-full h-screen p-[10%] bg-[#ffffdb] overflow-hidden flex flex-col justify-center items-center">
            
            <div ref={textTopRef} className="whitespace-nowrap absolute top-[5%] left-0 font-black uppercase text-[15vw] text-[#121212] opacity-10 pointer-events-none select-none z-0">
                SADAT SADAT SADAT SADAT SADAT SADAT SADAT SADAT SADAT SADAT SADAT SADAT
            </div>
            
          
            <div className="w-full h-auto grid md:grid-cols-3 gap-[10%] z-10">
                <div ref={box1Ref} className="col-span-3 text-[4vw] p-[10%] bg-[#ffffff] border-[0.2em] border-[#121212] shadow-[0.4em_0.4em_0_0_#121212] w-full flex flex-col justify-center">
                    <h2 className="mb-[2%] uppercase font-black text-[6vw] text-[#121212]">sadat //</h2>
                    <p className="font-semibold text-[3vw] text-[#121212]">MERN Stack web developer & low level developer.</p>
                </div>
                
                <div ref={box2Ref} className="uppercase py-[5%] text-[4vw] md:col-span-2 w-full shadow-[0.4em_0.4em_0_0_#121212] bg-[#121212] text-[#ffffff] flex flex-col justify-center items-center">
                    <span>2026</span>
                    <span>edition</span>
                </div>
                
                <div ref={box3Ref} className="py-[5%] col-span-1 w-full font-black text-[4vw] shadow-[0.4em_0.4em_0_0_#121212] border-[0.2em] border-[#121212] flex justify-center items-center bg-white text-black">
                    &#123; &#125;
                </div>
            </div>
            
            
            <div ref={textBottomRef} className="whitespace-nowrap absolute bottom-[5%] left-0 font-black uppercase text-[15vw] text-[#121212] opacity-10 pointer-events-none select-none z-0">
                PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO
            </div>
            
            
            <div ref={btnRef} className="mt-[5%] z-20">
                <Link href="/projects" className="px-[2em] py-[0.5em] bg-[#121212] text-[#ffffff] border-[0.1em] border-[#121212] shadow-[0.2em_0.2em_0_0_#fff] hover:bg-opacity-90 transition-all block">
                    View Projects
                </Link>
            </div>
        </div>
    );
};

export default HomeGrid;
