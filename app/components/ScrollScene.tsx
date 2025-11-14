"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useAnimation, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function DogScroller() {
    const wrapperRef = useRef(null);
    const dogRef = useRef(null);
    const tlRef = useRef(null);
    const resizeRaf = useRef(null);
    const circle2Ref = useRef(null);        // ✅ CIRCLE-2 ref
    const homeControls = useAnimation();
    const aboutControls = useAnimation();
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const homeInView = useInView(homeRef, { once: true, margin: "-50px" });
    const aboutInView = useInView(aboutRef, { once: true, margin: "-50px" });
    const circleRef = useRef(null);
    const circle3Ref = useRef<HTMLImageElement | null>(null); // ✅ circle3
    const dogWrapRef = useRef(null);



    useEffect(() => {
        if (homeInView) homeControls.start({ y: 0, opacity: 1 });
    }, [homeInView, homeControls]);

    useEffect(() => {
        if (aboutInView) aboutControls.start({ y: 0, opacity: 1 });
    }, [aboutInView, aboutControls]);

    function computePositions(wrapperRect, homeRect, aboutRect, dogRect) {
        const W = wrapperRect.width;

        const startLeft = Math.round(W * -0.11);
        const startTop = Math.round(
            homeRect.top - wrapperRect.top + (homeRect.height - dogRect.height) * 0.55
        );

        const finalLeft = Math.round(
            Math.min(W * 0.82 - dogRect.width * 0.5, W * 0.75)
        );
        // Position character so it's half in section 2 (about) and half in section 3 (MeetCrew)
        // Position moved up
        const finalTop = Math.round(
            aboutRect.top - wrapperRect.top + aboutRect.height - (dogRect.height * 0.35) - 170 // Moved up by 170px
        );

        const midLeft = Math.round(startLeft + (finalLeft - startLeft) * 0.45);
        const midTop = Math.round(
            startTop +
            Math.max(window.innerHeight * 0.1, (finalTop - startTop) * 0.45)
        );

        return { startLeft, startTop, midLeft, midTop, finalLeft, finalTop };
    }

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const dog = dogRef.current;
        if (!wrapper || !dog) return;

        const circle = circleRef.current;

        if (circle && wrapper) {
            const wrapperHeight = wrapper.getBoundingClientRect().height;

            gsap.fromTo(
                circle,
                { y: 0 },
                {
                    y: -wrapperHeight + 200,
                    ease: "none",
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top top",
                        end: "+=100%",
                        scrub: true,
                    },
                }
            );
        }

        const homeContent = wrapper.querySelector(".home .content");
        const aboutContent = wrapper.querySelector(".about .content");
        if (!homeContent || !aboutContent) return;

        function onLoaded() {
            buildTimeline();

            function onResize() {
                cancelAnimationFrame(resizeRaf.current);
                resizeRaf.current = requestAnimationFrame(() => buildTimeline());
            }
            window.addEventListener("resize", onResize);
            return () => window.removeEventListener("resize", onResize);
        }

        function buildTimeline() {
            if (tlRef.current) {
                tlRef.current.scrollTrigger && tlRef.current.scrollTrigger.kill();
                tlRef.current.kill();
                tlRef.current = null;
            }

            const wrapperRect = wrapper.getBoundingClientRect();
            const homeRect = homeContent.getBoundingClientRect();
            const aboutRect = aboutContent.getBoundingClientRect();
            const dogRect = dog.getBoundingClientRect();

            const { startLeft, startTop, midLeft, midTop, finalLeft, finalTop } =
                computePositions(wrapperRect, homeRect, aboutRect, dogRect);

            dog.style.left = `${startLeft}px`;
            dog.style.top = `${startTop}px`;
            gsap.set(dog, { x: 0, y: 0, rotation: 0, scaleX: 1 });

            const dxFinal = finalLeft - startLeft;
            const dyFinal = finalTop - startTop;

            const tl = gsap.timeline({
                defaults: { ease: "power1.inOut" },
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top top",
                    end: "+=120%",
                    scrub: 1.4,
                    anticipatePin: 1,
                },
            });

            gsap.set(dog, {
                x: 0,
                y: 0,
                rotation: 0,
                scaleX: 1,
                transformOrigin: "50% 50%",
            });

            const moveDuration = 3.8;
            tl.addLabel("moveStart");

            tl.to(
                dogWrapRef.current,
                {
                    duration: moveDuration,
                    x: dxFinal,
                    y: dyFinal,
                    scale: 1.0,
                    ease: "power2.inOut",
                    force3D: true,
                },
                "moveStart"
            );

            // ---------- CIRCLE-2: position relative to dog's final box, with Y offset ----------
            const circle2 = circle2Ref.current;
            if (circle2) {
                // make sure wrapper is the containing block for absolute positioning
                // (do this once; safe if wrapper already positioned)
                if (wrapper && getComputedStyle(wrapper).position === "static") {
                    wrapper.style.position = "relative";
                }

                // offset values you can tweak — negative offsetY moves the circle UP
                const offsetX = 0;      // move right (+) / left (-)
                const offsetY = -220;   // move down (+) / up (-) — moved up more

                // ensure we measure the dog's final size (dogRect was measured earlier)
                // compute an anchor point relative to dog's final bounding box
                const anchorX = finalLeft + dogRect.width * 0.55 + offsetX; // tweak 0.55 to move L/R
                const anchorY = finalTop + dogRect.height * 0.22 + offsetY; // tweak 0.22 to move U/D

                // Position the circle so its CENTER is at the anchor point.
                // Using translate(-50%,-50%) avoids needing to read circle dimensions.
                circle2.style.position = "absolute";
                circle2.style.left = `${Math.round(anchorX)}px`;
                circle2.style.top = `${Math.round(anchorY)}px`;
                circle2.style.transform = "translate(-50%, -50%)";        // center the image at anchor
                circle2.style.transformOrigin = "50% 50%";
                circle2.style.willChange = "transform,opacity";

                // Optional: temporary outline to help debugging visually (remove after tuning)
                // circle2.style.outline = "2px solid rgba(255,0,0,0.6)";
                // circle2.style.opacity = 1; // if you want to see it immediately for tuning

                // Animate the circle in (fade + rotate). GSAP will animate transform/rotate but keep translate center.
                tl.fromTo(
                    circle2,
                    {
                        opacity: 0,
                        rotate: -180,
                    },
                    {
                        opacity: 1,
                        rotate: 0,
                        duration: 3.5,
                        ease: "power3.out",
                    },
                    `moveStart+=${moveDuration * 0.3}`
                );
            }


            // ✅ CIRCLE-3 (bottom-right of circle2)
            const circle3 = circle3Ref.current;
            if (circle3) {

                const offsetX = 250;
                const offsetY = 50; // moved up more

                circle3.style.position = "absolute";
                circle3.style.left = `${finalLeft + offsetX}px`;
                circle3.style.top = `${finalTop + offsetY}px`;
                circle3.style.transform = "translate(0, 0)";

                tl.fromTo(
                    circle3,
                    {
                        opacity: 0,
                        rotate: 90,                // ⬅️ opposite of circle2 (-90)
                        scale: 0.9,
                        transformOrigin: "0% 0%",  // ⬅️ top-left corner pivot (opposite)
                    },
                    {
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                        duration: 0.7,
                        ease: "power3.out",
                    },
                    `moveStart+=${moveDuration * 0.25}` // ⬅️ starts earlier (adjust as needed)
                );
            }


            const half = moveDuration / 3;
            tl.to(
                dogRef.current,
                {
                    duration: 0.6,
                    scaleX: -1,
                    ease: "power3.inOut",
                    force3D: true,
                },
                `moveStart+=${moveDuration * 0.35}`
            );

            tlRef.current = tl;
        }

        if (dog.complete) onLoaded();
        else dog.addEventListener("load", onLoaded, { once: true });

        return () => {
            if (tlRef.current) {
                tlRef.current.scrollTrigger && tlRef.current.scrollTrigger.kill();
                tlRef.current.kill();
                tlRef.current = null;
            }
            ScrollTrigger.getAll().forEach((st) => st.kill && st.kill());
        };
    }, []);

    return (
        <div 
            ref={wrapperRef} 
            className="animation-wrapper  loop-border" 
            style={{ 
                backgroundColor: "#FFCE21",
                overflow: "visible", // Allow character to extend into next section
            }}
        >

            {/* 🟡 HOME SECTION */}
            <section className="section home justify-end">
                <motion.div
                    ref={homeRef}
                    initial={{ y: 60, opacity: 0 }}
                    animate={homeControls}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="content flex flex-col gap-4 text-left ml-auto pr-[8vw] max-w-[700px]"
                >
                    <h1 className="font-bebas text-[80px] text-base leading-[82px]">
                        CELEBRATING CINEMA <br />
                        THAT SPEAKS, SINGS, <br />
                        AND REMEMBERS.
                    </h1>


                    <p className="font-abyssinica text-[20px] opacity-90">
                        A day of celebrating films, voices, and live experiences -<br />
                        <strong>1st February 2026, Bhopal</strong>
                    </p>


                    <div className="flex justify-start gap-3 mt-2">
                        <button className="px-4 py-2 bg-[#111] text-white rounded-md font-semibold">
                            Book Tickets
                        </button>
                        <button className="px-4 py-2 border-2 border-[#111] text-[#111] rounded-md font-semibold bg-transparent">
                            Submit Film
                        </button>
                    </div>
                </motion.div>

                <div
                    ref={dogWrapRef}
                    className="absolute"
                    style={{ left: 0, top: 0, zIndex: 30, willChange: "transform" }}
                >
                    <img
                        ref={dogRef}
                        src="/assets/dog.png"
                        alt="dog"
                        className="dog"
                        draggable="false"
                        style={{ display: "block", willChange: "transform" }}
                    />
                </div>

                {/* ✅ CIRCLE-2 element (no manual left/top here; GSAP sets it) */}
                <img
                    ref={circle2Ref}
                    src="/assets/circlep.png"
                    className="absolute w={[420]} h-auto pointer-events-none mix-blend-luminosity"
                    style={{ zIndex: 8, opacity: 0 }}
                    alt="circle behind dog"
                    draggable="false"
                />

                {/* ✅ circle-3: bottom-right of circle2, same size, starts hidden */}
                <img
                    ref={circle3Ref}
                    src="/assets/circlepq.png"
                    className="absolute w-[600px] h-auto pointer-events-none"


                    style={{ zIndex: 1, opacity: 0 }}
                    alt="circle bottom-right"
                    draggable="false"
                />


                <img
                    ref={circleRef}
                    src="/assets/circle.png"
                    alt=""
                    className="absolute left-0 w-[550px] h-auto z-10"
                    style={{ bottom: "-100px" }} // Moved up more
                    draggable="false"
                />
            </section>

            {/* 🟡 ABOUT SECTION */}
            <section className="section about justify-start">
                <motion.div
                    ref={aboutRef}
                    initial={{ y: 60, opacity: 0 }}
                    animate={aboutControls}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="content flex flex-col gap-4 text-left pl-[8vw] max-w-[700px]"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
                        WHO WE ARE
                    </h2>

                    <p className="opacity-90 leading-relaxed text-[#111]">
                        We are a collective of dreamers, doers, and storytellers at the
                        vibrant crossroads of Madhya Pradesh. We champion authentic
                        narratives and connect them to the world—nurturing creative souls
                        and building bridges between cinema, arts, literature, and people.
                        Our festival thrives on real stories, laughter, creative ambition,
                        and shared wisdom.
                    </p>

                    <p className="font-semibold text-[#111] leading-relaxed">
                        Our heart beats for cinema that digs deep into roots and grows new
                        ideas skyward.
                    </p>
                </motion.div>
            </section>
        </div>
    );
}
