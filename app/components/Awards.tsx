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
                className="pointer-events-none absolute select-none z-30"
                style={{
                    top: "12vh",             // adjust vertically
                    height: "160vh",        // size of circle (YOU can change anytime)
                    width: "auto",
                    objectFit: "contain",
                }}
            />

            <img
                src="/assets/movie.png"
                alt="Large movie character holding clapperboard"
                aria-hidden="true"
                className="pointer-events-none absolute z-40 select-none"
                style={{
                    left: "-10vw",    // tweak this to reveal more/less of the character
                    top: "8vh",       // vertical start relative to viewport
                    height: "150vh",  // tall so it visually towers into the 2nd viewport
                    width: "auto",
                    objectFit: "contain",
                }}
            />

            {/* ---------- PAGE 1 ---------- */}
            <section className="relative h-screen w-full">

                {/* Right content block (awardboard + categories) */}
                <aside
                    className="absolute right-[6vw] top-1/2 -translate-y-1/2 z-50 w-[48vw] max-w-[500px]"
                >
                    {/* Award board centered inside the right block */}
                    <div className="flex justify-center">
                        <div className="w-[24vw] mt-36 mr-40 relative">
                            <img
                                src="/assets/awardboard.png"
                                alt="Awards and categories title"
                                className="w-full h-auto block pointer-events-none relative z-30"
                            />
                        </div>
                    </div>

                    {/* Categories + vertical strip */}
                    <div className="relative flex items-start gap-10">

                        {/* Strip */}
                        <img
                            src="/assets/strip.png"
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none h-[50vh] w-auto object-contain"
                        />

                        {/* Category List */}
                        <ul className="flex flex-col" style={{ paddingTop: "8px", gap: "calc(3.25rem - 2px)" }}>
                            {["CATEGORY 1", "CATEGORY 2", "CATEGORY 3", "CATEGORY 4"].map((label, index) => (
                                <li key={label} className="text-[#111] font-bold text-lg leading-tight flex items-center" style={{ marginBottom: index < 3 ? "calc(2.5rem - 2px)" : "0", marginTop: index === 3 ? "-8px" : "0", lineHeight: "1.2" }}>
                                    {label}
                                </li>
                            ))}
                        </ul>

                    </div>
                </aside>

            </section>

            {/* ---------- PAGE 2 ---------- */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* small decorative awards on the right of page2 */}
                <div
                    className="absolute z-30"
                    style={{
                        left: "45vw",
                        top: "14vh",
                        width: "25vw",
                        maxWidth: 250,
                    }}
                >
                    <div className="relative w-full" style={{ aspectRatio: "1/1.2" }}>
                        <img
                            src="/assets/award.png"
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none w-full h-full object-contain relative z-30"
                        />
                    </div>
                </div>
                <div
                    className="absolute z-30"
                    style={{
                        left: "70vw",
                        top: "14vh",
                        width: "25vw",
                        maxWidth: 250,
                    }}
                >
                    <div className="relative w-full" style={{ aspectRatio: "1/1.2" }}>
                        <img
                            src="/assets/award.png"
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none w-full h-full object-contain relative z-30"
                        />
                    </div>
                </div>

                {/* Bottom wide small-halves that visually overlap */}
                <div className="absolute left-0 bottom-0 w-full z-10">
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
