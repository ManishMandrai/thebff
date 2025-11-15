"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MeetCrew() {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const eleWrapRef = useRef<HTMLDivElement | null>(null);
    const eleImgRef = useRef<HTMLImageElement | null>(null);
    const tlRef = useRef<any>(null);

    const g1Ref = useRef<HTMLDivElement | null>(null);

    function computePositions(
        wrapperRect: DOMRect,
        sec1Rect: DOMRect,
        sec2Rect: DOMRect,
        eleRect: DOMRect
    ) {
        const W = wrapperRect.width;

        const startLeft = Math.round(W * 0.05);
        const startTop = Math.round(
            sec1Rect.top - wrapperRect.top + (sec1Rect.height - eleRect.height) * 0.7
        );

        const finalLeft = Math.round(
            Math.min(W * 0.82 - eleRect.width * 0.5, W - eleRect.width - 32)
        );
        const finalTop = Math.round(
            sec2Rect.top - wrapperRect.top + (sec2Rect.height - eleRect.height) * 0.5 - 40 // moved up to prevent leg cutoff
        );

        const midLeft = Math.round(startLeft + (finalLeft - startLeft) * 0.45);
        const midTop = Math.round(startTop + (finalTop - startTop) * 0.45);

        return { startLeft, startTop, midLeft, midTop, finalLeft, finalTop };
    }

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const eleWrap = eleWrapRef.current;
        const eleImg = eleImgRef.current;
        const g1 = g1Ref.current;

        if (!wrapper || !eleWrap || !eleImg || !g1) return;

        const sec1 = wrapper.querySelector(".meet1 .frames1") as HTMLElement | null;
        const sec2 = wrapper.querySelector(".meet2") as HTMLElement | null;
        if (!sec1 || !sec2) return;

        function buildTimeline() {
            if (!wrapper || !eleWrap || !eleImg || !sec1 || !sec2) return;
            
            if (tlRef.current) {
                tlRef.current.scrollTrigger?.kill();
                tlRef.current.kill();
                tlRef.current = null;
            }

            const wrapperRect = wrapper.getBoundingClientRect();
            const sec1Rect = sec1.getBoundingClientRect();
            const sec2Rect = sec2.getBoundingClientRect();
            const eleRect = eleImg.getBoundingClientRect();

            const { startLeft, startTop, midLeft, midTop, finalLeft, finalTop } =
                computePositions(wrapperRect, sec1Rect, sec2Rect, eleRect);

            // place at start
            eleWrap.style.left = `${startLeft}px`;
            eleWrap.style.top = `${startTop}px`;

            // reset transforms
            gsap.set(eleWrap, { x: 0, y: 0, scale: 1, transformOrigin: "50% 50%" });
            gsap.set(eleImg, { scaleX: 1, transformOrigin: "50% 50%" });

            const dxMid = midLeft - startLeft;
            const dyMid = midTop - startTop;
            const dxFinal = finalLeft - startLeft;
            const dyFinal = finalTop - startTop;

            // Timeline durations (we use relative durations so the scroll progress maps to 40%/20%/40% + extra zoom)
            // move1: 40% , flip: 20%, move2: 40%, zoom: small extra portion
            const move1 = 0.8; // 40%
            const flipDur = 0.4; // 20%
            const move2 = 0.8; // 40%
            const zoomDur = 0.4; // extra zoom portion (total timeline maps to end += 140%)

            const tl = gsap.timeline({
                defaults: { ease: "power2.inOut" },
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top top",
                    // timeline mapped across 140% of the viewport so: first 100% finishes the move, next 40% handles zoom
                    end: "+=140%",
                    scrub: 1,
                    pin: false,
                },
            });

            // Move: start -> mid (40%)
            tl.to(eleWrap, {
                duration: move1,
                x: dxMid,
                y: dyMid,
            });

            // Flip (20%) — quick flip around vertical center
            tl.to(
                eleImg,
                {
                    duration: flipDur,
                    scaleX: -1,
                    transformOrigin: "50% 50%",
                },
                ">"
            );

            // Middle -> Final (40%) — arrive with a larger scale (1.5)
            // Note: we scale the wrapper so the element grows uniformly
            tl.to(
                eleWrap,
                {
                    duration: move2,
                    scale: 1.0, // arrives at 1.5x the starting size
                    x: dxFinal,
                    y: dyFinal,
                },
                ">"
            );

            // Move DOWN + zoom with scroll after reaching position 2
            tl.to(
                eleWrap,
                {
                    duration: zoomDur,
                    y: dyFinal + 100, // reduced downward movement to keep legs visible
                    scale: 1.2,       // zoom to 1.2x (reduced to prevent leg cutoff)
                    ease: "power1.out",
                },
                ">"
            );

            tlRef.current = tl;
        }

        if (eleImg.complete && eleImg.naturalWidth !== 0) {
            buildTimeline();
        } else {
            eleImg.onload = () => buildTimeline();
            // fallback build in case image load event doesn't fire reliably
            setTimeout(() => {
                if (wrapper && eleWrap && eleImg && sec1 && sec2) {
                    buildTimeline();
                }
            }, 500);
        }

        const resizeHandler = () => {
            if (!eleWrap || !eleImg) return;
            gsap.killTweensOf(eleWrap);
            gsap.killTweensOf(eleImg);
            ScrollTrigger.getAll().forEach((s) => s.kill());
            buildTimeline();
        };
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
            ScrollTrigger.getAll().forEach((s) => s.kill());
            tlRef.current?.kill();
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="relative w-full overflow-hidden bg-[#6A9139]"
            // Make the section 2.5 viewports tall so we have room for the arrival + extra zoom
            style={{ height: "250vh" }}
        >
            {/* PAGE 1 */}
            <section className="meet1 h-screen relative flex items-start justify-center">

                <div className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 z-10">
                    <Image src="/assets/jurymeet.png" alt="meet" width={240} height={80} className="w-[140px] sm:w-[180px] md:w-[240px] h-auto" />
                </div>

                <div
                    ref={g1Ref}
                    className="frames1 absolute top-32 sm:top-40 md:top-96 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 right-4 md:right-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 justify-center md:justify-end z-10"
                >
                    {/* Frame 1 */}
                    <div className="relative w-[160px] sm:w-[200px] md:w-[300px] mx-auto">
                        <Image src="/assets/frame.png" alt="" width={300} height={340} className="relative z-10 w-full h-auto" />
                        {/* Yellow background box inside the frame */}
                        <div className="absolute bg-[#FFCE21] z-15" style={{ top: "8%", bottom: "25%", left: "8%", right: "8%" }}></div>
                        <div className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden" style={{ top: "8%", bottom: "25%", left: "8%", right: "8%" }}>
                            <Image 
                                src="/assets/jurry1.png" 
                                alt="Jury member" 
                                width={400} 
                                height={480} 
                                className="object-cover"
                                style={{ objectPosition: "center 20%", transform: "scale(1.0) translateY(18px)" }}
                            />
                        </div>
                        <div className="absolute bg-[#F5E6D3] px-3 py-2 md:px-4 md:py-3 z-30 flex flex-col items-center justify-center" style={{ bottom: "8%", left: "8%", right: "8%", height: "17%" }}>
                            <p className="font-bebas text-black font-bold text-center uppercase" style={{ fontSize: "12px", letterSpacing: "1px", lineHeight: "1.2" }}>NAME SURNAME</p>
                            <p className="font-texta text-black text-center" style={{ fontSize: "9px", letterSpacing: "0.3px", marginTop: "2px" }}>Category / Role</p>
                        </div>
                    </div>

                    {/* Frame 2 */}
                    <div className="relative w-[160px] sm:w-[200px] md:w-[300px] mx-auto">
                        <Image src="/assets/frame.png" alt="" width={300} height={340} className="relative z-10 w-full h-auto" />
                        {/* Yellow background box inside the frame */}
                        <div className="absolute bg-[#FFCE21] z-15" style={{ top: "8%", bottom: "25%", left: "8%", right: "8%" }}></div>
                        <div className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden" style={{ top: "8%", bottom: "25%", left: "8%", right: "8%" }}>
                            <Image 
                                src="/assets/jurry2.png" 
                                alt="Jury member" 
                                width={400} 
                                height={480} 
                                className="object-cover"
                                style={{ objectPosition: "center 20%", transform: "scale(1.6)" }}
                            />
                        </div>
                        <div className="absolute bg-[#F5E6D3] px-3 py-2 md:px-4 md:py-3 z-30 flex flex-col items-center justify-center" style={{ bottom: "8%", left: "8%", right: "8%", height: "17%" }}>
                            <p className="font-bebas text-black font-bold text-center uppercase" style={{ fontSize: "12px", letterSpacing: "1px", lineHeight: "1.2" }}>NAME SURNAME</p>
                            <p className="font-texta text-black text-center" style={{ fontSize: "9px", letterSpacing: "0.3px", marginTop: "2px" }}>Category / Role</p>
                        </div>
                    </div>

                    {/* Frame 3 */}
                    <div className="relative w-[160px] sm:w-[200px] md:w-[300px] mx-auto">
                        <Image src="/assets/frame.png" alt="" width={300} height={340} className="relative z-10 w-full h-auto" />
                        {/* Yellow background box inside the frame */}
                        <div className="absolute bg-[#FFCE21] z-15" style={{ top: "8%", bottom: "25%", left: "8%", right: "8%" }}></div>
                        <div className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden" style={{ top: "8%", bottom: "25%", left: "8%", right: "8%" }}>
                            <Image 
                                src="/assets/jurry 3.png" 
                                alt="Jury member" 
                                width={400} 
                                height={480} 
                                className="object-cover"
                                style={{ objectPosition: "center 20%", transform: "scale(1.0)" }}
                            />
                        </div>
                        <div className="absolute bg-[#F5E6D3] px-3 py-2 md:px-4 md:py-3 z-30 flex flex-col items-center justify-center" style={{ bottom: "8%", left: "8%", right: "8%", height: "17%" }}>
                            <p className="font-bebas text-black font-bold text-center uppercase" style={{ fontSize: "12px", letterSpacing: "1px", lineHeight: "1.2" }}>NAME SURNAME</p>
                            <p className="font-texta text-black text-center" style={{ fontSize: "9px", letterSpacing: "0.3px", marginTop: "2px" }}>Category / Role</p>
                        </div>
                    </div>
                </div>
                {/* ELEPHANT BACKGROUND LEAF-PATH */}
                <img
                    src="/assets/leaf1.png"
                    alt=""
                    className="absolute pointer-events-none"
                    style={{
                        left: "0vw",
                        top: "25vh", // moved up from 35vh
                        width: "80vw",
                        zIndex: 1, // behind elephant
                        filter: "hue-rotate(120deg) saturate(0.8) brightness(0.7) contrast(1.2)", // convert red/orange to dark green
                    }}
                />

                <img
                    src="/assets/leaf2.png"
                    alt=""
                    className="absolute pointer-events-none"
                    style={{
                        right: "-12vw",
                        top: "90vh", // moved up from 100vh
                        width: "45vw",
                        zIndex: 1,
                        filter: "hue-rotate(120deg) saturate(0.8) brightness(0.7) contrast(1.2)", // convert red/orange to dark green
                    }}
                />


                {/* Elephant */}
                <div ref={eleWrapRef} className="absolute z-30 will-change-transform hidden md:block">
                    <img
                        ref={eleImgRef}
                        src="/assets/elephant.png"
                        alt=""
                        className="block h-[85vh] w-auto pointer-events-none"
                        draggable="false"
                    />
                </div>
                
                {/* Mobile Elephant - Static positioned */}
                <div className="absolute bottom-0 right-0 w-1/2 md:hidden pointer-events-none z-20 flex items-end justify-end" style={{ height: "60vh" }}>
                    <img
                        src="/assets/elephant.png"
                        alt=""
                        className="w-auto max-w-full h-[55vh] object-contain object-bottom"
                        draggable="false"
                    />
                </div>
            </section>

            {/* PAGE 2 */}
            <section className="meet2 top-50 h-screen relative">
                {/* LEFT STITCH STRIP */}

                {/* TEXT CONTENT */}
                <div className="absolute left-4 md:left-[10vw] top-[20vh] md:top-[42vh] max-w-[90%] md:max-w-[600px] z-10 px-4 md:px-0">
                    <h2 className="font-bebas text-xl sm:text-2xl md:text-4xl font-extrabold mb-4 md:mb-8 text-[#111]">EVENT OFFERINGS</h2>

                    {/* Container for strip and list */}
                    <div className="relative flex items-start gap-4 md:gap-6">
                        {/* STRIP - positioned to align symbols with text */}
                        <div className="relative hidden md:block flex-shrink-0" style={{ alignSelf: "flex-start" }}>
                            <img
                                src="/assets/strip.png"
                                alt=""
                                className="pointer-events-none w-auto object-contain"
                                style={{
                                    height: "calc(1.5rem + 1.5rem + 1.5rem + 1.5rem + 1.5rem + 1.5rem + 1.5rem + 0.5rem)",
                                }}
                            />
                        </div>

                        <ul className="font-texta flex flex-col text-[#111] leading-relaxed list-none relative text-sm sm:text-base md:text-base flex-shrink-0" style={{ paddingLeft: "0px", zIndex: 2, gap: "1.5rem" }}>
                            <li className="relative flex items-start">
                                <strong>Screenings:</strong> <span className="ml-1">A curated showcase of regional gems and fresh voices.</span>
                            </li>

                            <li className="relative flex items-start">
                                <strong>Workshops:</strong> <span className="ml-1">Immersive, practical, and playful sessions—hands-on learning at its best.</span>
                            </li>

                            <li className="relative flex items-start">
                                <strong>Skill Development Initiatives:</strong> <span className="ml-1">From editing to story labs, we equip creators for the world stage.</span>
                            </li>

                            <li className="relative flex items-start">
                                <strong>Panels and Discussions:</strong> <span className="ml-1">Where audiences meet artists, ideas, and culture.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>


            {/* No frames here; elephant should have arrived near the top of this section */}

            {/* PAGE 3 (half page to make it 2.5 total) */}
            <section className="h-1/2-screen relative"></section>
        </div>
    );
}
