"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFCE21] overflow-x-hidden relative">
      <Navbar />
      
      {/* Main Content Section */}
      <div className="relative w-full min-h-[calc(100vh-108px)] pt-8 md:pt-12 pb-16 overflow-hidden">
        {/* Side Semicircles - Left (hhhh.png) - Bulge facing right towards text */}
        <div className="absolute left-0 top-0 h-full w-[150px] md:w-[400px] pointer-events-none z-[1]">
          {/* Mobile version - smaller */}
          <Image
            src="/assets/hhhh.png"
            alt=""
            width={400}
            height={1200}
            className="md:hidden absolute left-0 h-full w-auto object-contain"
            style={{
              top: "50%",
              transform: "translateY(calc(-50% + 300px)) translateX(-30%) scale(0.4) scaleY(-1)",
            }}
            aria-hidden="true"
          />
          {/* Desktop version - full size */}
          <Image
            src="/assets/hhhh.png"
            alt=""
            width={400}
            height={1200}
            className="hidden md:block absolute left-0 h-full w-auto object-contain"
            style={{
              top: "50%",
              transform: "translateY(calc(-50% + 300px)) translateX(-30%) scaleY(-1)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Side Semicircles - Right (hhhh.png duplicated) - Top - Color #CCA000 - Flipped and Tilted Opposite */}
        <div className="absolute right-0 top-0 h-full w-[500px] pointer-events-none z-[2] hidden md:block">
          <Image
            src="/assets/hhhh.png"
            alt=""
            width={500}
            height={1500}
            className="absolute right-0 h-auto object-contain"
            style={{
              top: "58px",
              height: "85vh",
              transform: "translateX(0%) scaleX(-1) scale(1.3) rotate(35deg)",
              transformOrigin: "center center",
              filter: "sepia(100%) saturate(200%) hue-rotate(25deg) brightness(0.8)",
              opacity: 1
            }}
            aria-hidden="true"
          />
          <div 
            className="absolute right-0 h-auto"
            style={{
              top: "58px",
              height: "85vh",
              width: "100%",
              backgroundColor: "#CCA000",
              mixBlendMode: "multiply",
              opacity: 0.85,
              pointerEvents: "none",
              transform: "translateX(0%) scaleX(-1) scale(1.3) rotate(35deg)",
              transformOrigin: "center center",
              maskImage: "url('/assets/hhhh.png')",
              WebkitMaskImage: "url('/assets/hhhh.png')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "right center"
            }}
            aria-hidden="true"
          />
        </div>

        {/* Side Semicircles - Right (hhhh.png duplicated) - Bottom - Flipped - Aligns with second paragraph */}
        <div className="absolute right-0 top-0 h-full w-[500px] pointer-events-none z-[1] hidden md:block">
          <Image
            src="/assets/hhhh.png"
            alt=""
            width={500}
            height={1500}
            className="absolute right-0 h-auto object-contain"
            style={{
              top: "calc(108px + 100px + 30vh)",
              height: "80vh",
              width: "auto",
              transform: "translateX(30%) scaleX(-1) scale(1.5)"
            }}
            aria-hidden="true"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-start">
            
            {/* Left Side - Character with Spotlight Illustration */}
            <div className="relative flex items-start justify-start w-full lg:w-[45%] xl:w-[48%] min-h-[500px] md:min-h-[600px] lg:min-h-[700px] z-30 overflow-visible -ml-12 md:-ml-24 lg:-ml-32 xl:-ml-40">
              <div className="relative w-full max-w-[2400px] lg:max-w-[3300px] xl:max-w-[3900px]">
                <Image
                  src="/assets/Copy of 5-01.png"
                  alt="Film spotlight character"
                  width={3900}
                  height={5850}
                  className="w-full h-auto object-contain"
                  priority
                  style={{
                    transform: "translateX(calc(-40% + 270px)) translateY(-10%) scaleX(-1) scale(3)",
                    transformOrigin: "center top"
                  }}
                />
              </div>
            </div>

            {/* Right Side - ABOUT US Text - Split into 2 sections */}
            <div className="relative z-20 w-full lg:w-[55%] xl:w-[52%] py-4 lg:py-0 flex flex-col justify-start items-center text-center" style={{ marginLeft: '-140px', marginTop: '100px' }}>
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#091529] uppercase tracking-tight mb-6 md:mb-8 lg:mb-10 text-center">
                ABOUT US
              </h1>
              
              {/* Section 1 - First Paragraph */}
              <div className="relative z-20 mb-8 md:mb-12 lg:mb-16 max-w-2xl">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-center text-[#091529]">
                  This is a passionate collective of filmmakers, artists, and storytellers who believe in the power of cinema to build connections and spark dialogue. The Bhopal Film Festival was born from the desire to create a space where independent voices can be seen, heard, and celebrated, right here in the heart of Madhya Pradesh.
                </p>
              </div>

              {/* Section 2 - Second Paragraph */}
              <div className="relative z-20 max-w-2xl">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-center text-[#091529]">
                  Our work grows from collaboration and curiosity. We come from different creative backgrounds, but share a commitment to stories that are honest, rooted, and imaginative. Together, we aim to nurture a community where cinema becomes more than an art form, it becomes a shared experience that brings people closer. We see this festival as a living, evolving platform, one that supports filmmakers, engages audiences, and places Bhopal firmly on the map for independent cinema and cultural dialogue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
