"use client";

import React from "react";

/**
 * Awards page
 * - Root container is tall (200vh) so the large character can visually span page1 -> page2
 * - Decorative images are absolutely positioned in the root so they aren't clipped by a section
 * - Tailwind used for layout; a couple of inline styles for vw/vh offsets that are easier to tweak
 */

export default function Awards() {
    return (
        <main className="relative w-full min-h-[200vh] bg-[#F4921F]">
            {/* Partition line before awards section */}
            <img
                src="/assets/partition line.png"
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none z-50"
                style={{
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                    height: "auto",
                }}
            />
            {/* BIG CHARACTER: placed in root so it can overlap both viewports */}

            {/* BG CIRCLE behind the movie character */}
            <img
                src="/assets/hhhh.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute select-none z-30 hidden md:block"
                style={{
                    top: "12vh",
                    height: "160vh",
                    width: "auto",
                    objectFit: "contain",
                }}
            />

            <img
                src="/assets/movie.png"
                alt="Large movie character holding clapperboard"
                aria-hidden="true"
                className="pointer-events-none absolute z-40 select-none hidden md:block"
                style={{
                    left: "-10vw",
                    top: "8vh",
                    height: "150vh",
                    width: "auto",
                    objectFit: "contain",
                }}
            />

            {/* ---------- PAGE 1 ---------- */}
            <section className="relative h-screen w-full flex items-center justify-center">

                {/* Content block (awardboard + categories) - centered on mobile */}
                <aside
                    className="relative md:absolute md:right-4 md:right-[6vw] md:top-1/2 md:-translate-y-1/2 z-50 w-[calc(100%-2rem)] md:w-[48vw] max-w-[500px] px-4 md:px-0"
                >
                    {/* Award board centered inside the block */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-[240px] sm:max-w-[280px] md:w-[24vw] md:max-w-none mt-8 md:mt-36 mr-0 md:mr-40 relative overflow-hidden">
                            <img
                                src="/assets/awardboard.png"
                                alt="Awards and categories title"
                                className="w-full h-auto block pointer-events-none relative z-30"
                            />
                            {/* Yellow background inside the box */}
                            <div className="absolute bg-[#FFCE21] z-20" style={{ 
                                top: "14%", 
                                bottom: "14%", 
                                left: "14%", 
                                right: "14%"
                            }}></div>
                        </div>
                    </div>

                    {/* Categories + vertical strip */}
                    <div className="relative flex items-start gap-4 md:gap-10 mt-6 md:mt-12 justify-center md:justify-start pl-0 md:pl-4">

                        {/* Strip */}
                        <img
                            src="/assets/strip.png"
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none h-[40vh] md:h-[50vh] w-auto object-contain hidden md:block"
                        />

                        {/* Category List */}
                        <ul className="flex flex-col items-center md:items-start" style={{ paddingTop: "8px", gap: "1.5rem" }}>
                            {["CATEGORY 1", "CATEGORY 2", "CATEGORY 3", "CATEGORY 4"].map((label, index) => (
                                <li key={label} className="text-[#111] font-bold text-sm sm:text-base md:text-lg leading-tight flex items-center" style={{ lineHeight: "1.2", paddingLeft: "8px" }}>
                                    {label}
                                </li>
                            ))}
                        </ul>

                    </div>
                </aside>

            </section>

            {/* ---------- PAGE 2 ---------- */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* small decorative awards on the right of page2 - hidden on mobile */}
                <div
                    className="absolute z-30 hidden md:block"
                    style={{
                        left: "45vw",
                        top: "calc(14vh + 8px)",
                        width: "25vw",
                        maxWidth: 250,
                    }}
                >
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1/1.2" }}>
                        <img
                            src="/assets/award.png"
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none w-full h-full object-contain relative z-30"
                        />
                        {/* Yellow background inside the frame - positioned behind the frame image */}
                        <div className="absolute bg-[#FFCE21] z-20" style={{ 
                            top: "12%", 
                            bottom: "12%", 
                            left: "12%", 
                            right: "12%",
                            transform: "translateY(10px)"
                        }}></div>
                    </div>
                </div>
                <div
                    className="absolute z-30 hidden md:block"
                    style={{
                        left: "70vw",
                        top: "calc(14vh + 8px)",
                        width: "25vw",
                        maxWidth: 250,
                    }}
                >
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1/1.2" }}>
                        <img
                            src="/assets/award.png"
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none w-full h-full object-contain relative z-30"
                        />
                        {/* Yellow background inside the frame - positioned behind the frame image */}
                        <div className="absolute bg-[#FFCE21] z-20" style={{ 
                            top: "12%", 
                            bottom: "12%", 
                            left: "12%", 
                            right: "12%",
                            transform: "translateY(10px)"
                        }}></div>
                    </div>
                </div>

                {/* Bottom wide small-halves that visually overlap */}
                <div className="absolute left-0 bottom-0 w-full z-10 hidden md:block">
                    <div className="relative w-full h-[40vh] overflow-hidden">
                        <img
                            src="/assets/smallalfr.png"
                            alt=""
                            aria-hidden="true"
                            className="absolute left-0 bottom-0 w-[65%] h-[40vh] object-cover object-top pointer-events-none"
                        />
                        <img
                            src="/assets/smallalfl.png"
                            alt=""
                            aria-hidden="true"
                            className="absolute right-0 bottom-0 w-[65%] h-[35vh] object-cover object-top pointer-events-none"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
