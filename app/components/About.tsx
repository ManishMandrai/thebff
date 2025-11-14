// src/components/About.tsx
"use client";

import Image from "next/image";
import { MotionValue, useReducedMotion, useTransform, motion } from "framer-motion";

type Props = { scrollProgress: MotionValue<number> };

export default function About({ scrollProgress }: Props) {
  const prefersReduced = useReducedMotion();

  const rotateX = useTransform(
    scrollProgress,
    [0, 0.18, 0.45, 0.8],
    prefersReduced ? [0, 0, 0, 0] : [0, 45, 45, -45]
  );

  const rotateY = useTransform(
    scrollProgress,
    [0, 0.45, 0.65, 1],
    prefersReduced ? [0, 0, 0, 0] : [0, 180, 180, 180]
  );

  const translateY = useTransform(
    scrollProgress,
    [0, 0.18, 0.4],
    prefersReduced ? [0, 0, 0] : [0, 140, 120]
  );

  const translateX = useTransform(
    scrollProgress,
    [0, 0.4, 1],
    prefersReduced ? [0, 0, 0] : [0, 120, 420]
  );

  return (
    <section
      id="about"
      aria-label="About"
      className="relative overflow-hidden min-h-[80vh] md:min-h-screen flex items-center"
      style={{ backgroundColor: "#FFF2C6", perspective: 1200 }}
    >
      {/* Left content */}
      <div className="w-full lg:w-1/2 px-6 md:px-12 z-20">
        <div className="max-w-lg py-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#091529] mb-6">
            WHO WE ARE
          </h2>
          <p className="text-[#091529] text-lg leading-relaxed">
            We are a collective of dreamers, doers, and storytellers at the
            vibrant crossroads of Madhya Pradesh. We champion authentic narratives
            and connect them to the world — nurturing creative souls, building
            bridges between cinema, arts, literature, and people.
          </p>

          <p className="mt-6 text-[#091529] text-lg">
            Our festival thrives on real stories, shared laughter, creative ambition, and collective wisdom.
          </p>
        </div>
      </div>

      {/* Right: animated director finishing pose */}
      <div className="absolute right-0 bottom-0 w-[60vw] max-w-[1100px] pointer-events-none z-40">
        <motion.div
          style={{
            x: translateX,
            y: translateY,
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d",
            willChange: "transform",
          }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
        >
          <Image
            src="/assets/director.png"
            alt="Director"
            width={1600}
            height={900}
            className="w-full h-auto select-none"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
