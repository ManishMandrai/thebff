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
            sec2Rect.top - wrapperRect.top + (sec2Rect.height - eleRect.height) * 0.7
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
                    y: dyFinal + 170, // move downward smoothly
                    scale: 1.4,       // zoom to 1.4x
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
            setTimeout(() => buildTimeline(), 500);
        }

        const resizeHandler = () => {
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

                <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10">
                    <Image src="/assets/jurymeet.png" alt="meet" width={240} height={80} />
                </div>

                <div
                    ref={g1Ref}
                    className="frames1 absolute top-96 right-12 grid grid-cols-3 gap-6 justify-end z-10"
                >
                    <Image src="/assets/frame.png" alt="" width={300} height={340} />
                    <Image src="/assets/frame.png" alt="" width={300} height={340} />
                    <Image src="/assets/frame.png" alt="" width={300} height={340} />
                </div>
                {/* ELEPHANT BACKGROUND LEAF-PATH */}
                <img
                    src="/assets/leaf1.png"
                    alt=""
                    className="absolute pointer-events-none"
                    style={{
                        left: "0vw",
                        top: "35vh",
                        width: "80vw",
                        zIndex: 1, // behind elephant
                    }}
                />

                <img
                    src="/assets/leaf2.png"
                    alt=""
                    className="absolute pointer-events-none"
                    style={{
                        right: "-12vw",
                        top: "100vh",
                        width: "45vw",
                        zIndex: 1,
                    }}
                />


                {/* Elephant */}
                <div ref={eleWrapRef} className="absolute z-30 will-change-transform">
                    <img
                        ref={eleImgRef}
                        src="/assets/elephant.png"
                        alt=""
                        className="block h-[100vh] w-auto pointer-events-none"
                        draggable="false"
                    />
                </div>
            </section>

            {/* PAGE 2 */}
            <section className="meet2 top-50 h-screen relative">
                {/* LEFT STITCH STRIP */}

                {/* STRIP */}
                <img
                    src="/assets/strip.png"
                    alt=""
                    className="absolute pointer-events-none"
                    style={{
                        left: "7vw",
                        top: "40vh",
                        height: "45vh",
                        zIndex: 2,
                    }}
                />

                {/* TEXT CONTENT */}
                <div className="absolute left-[10vw] top-[32vh] max-w-[600px] z-10">
                    <h2 className="text-4xl font-extrabold mb-8">EVENT OFFERINGS</h2>

                    <ul className="flex flex-col gap-15 text-[#111] leading-relaxed">
                        <li>
                            <strong>Screenings:</strong> A curated showcase of regional gems and fresh voices.
                        </li>

                        <li>
                            <strong>Workshops:</strong> Immersive, practical, and playful sessions—hands-on learning at its best.
                        </li>

                        <li>
                            <strong>Skill Development Initiatives:</strong> From editing to story labs, we equip creators for the world stage.
                        </li>

                        <li>
                            <strong>Panels and Discussions:</strong> Where audiences meet artists, ideas, and culture.
                        </li>
                    </ul>
                </div>

            </section>


            {/* No frames here; elephant should have arrived near the top of this section */}

            {/* PAGE 3 (half page to make it 2.5 total) */}
            <section className="h-1/2-screen relative"></section>
        </div>
    );
}
