"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import SafeLink from "../components/SafeLink";

export default function PassesPage() {
  return (
    <main className="min-h-screen bg-[#FFCE21] overflow-x-hidden relative">
      <Navbar />
      
      {/* Decorative Circle Elements */}
      <div className="absolute top-20 left-0 w-[120px] sm:w-[200px] md:w-[400px] h-auto z-0 pointer-events-none opacity-30">
        <Image
          src="/assets/circle.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
      
      <div className="absolute top-40 right-4 sm:right-10 w-[100px] sm:w-[150px] md:w-[300px] h-auto z-0 pointer-events-none opacity-25">
        <Image
          src="/assets/circlep.png"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto mix-blend-luminosity"
        />
      </div>

      
      {/* Large Character - Dog on Left Side (Upper Area) */}
      {/* Mobile version - hidden */}
      {/* Desktop version */}
      <div className="absolute left-0 top-[15%] z-20 pointer-events-none opacity-85 hidden md:block" style={{ transform: 'translateX(calc(-30% + 15px - 30px))' }}>
        <Image
          src="/assets/dog.png"
          alt="Dog character"
          width={600}
          height={900}
          className="w-auto h-[80vh] max-h-[900px] object-contain"
          style={{ 
            filter: "drop-shadow(6px 6px 12px rgba(0,0,0,0.15))",
            transform: 'translateX(25%)'
          }}
        />
      </div>

      {/* Large Character - Copy of 7-01 on Right Side (Upper Area) */}
      {/* Mobile version - hidden */}
      {/* Desktop version */}
      <div className="absolute right-0 top-[10%] z-20 pointer-events-none opacity-85 hidden md:block" style={{ transform: 'translate(20%, 0)' }}>
        <Image
          src="/assets/Copy of 7-01.png"
          alt="Character"
          width={600}
          height={900}
          className="w-auto h-[75vh] max-h-[850px] object-contain"
          style={{ 
            filter: "drop-shadow(6px 6px 12px rgba(0,0,0,0.15))",
            transform: 'translate(-5%, 0)'
          }}
        />
      </div>


      {/* Small Decorative Elements - Leaves */}
      <div className="absolute top-[25%] right-[8%] z-15 pointer-events-none opacity-40 hidden lg:block">
        <Image
          src="/assets/leaf1.png"
          alt="Leaf decoration"
          width={120}
          height={120}
          className="w-24 h-24 object-contain"
          style={{ 
            transform: "rotate(-15deg)",
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))"
          }}
        />
      </div>

      <div className="absolute top-[45%] left-[12%] z-15 pointer-events-none opacity-35 hidden lg:block">
        <Image
          src="/assets/leaf2.png"
          alt="Leaf decoration"
          width={100}
          height={100}
          className="w-20 h-20 object-contain"
          style={{ 
            transform: "rotate(25deg)",
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))"
          }}
        />
      </div>

      {/* Small Decorative Elements - Film Frames (Upper Area Only) */}
      <div className="absolute top-[30%] right-[12%] z-15 pointer-events-none opacity-25 hidden xl:block">
        <Image
          src="/assets/frame.png"
          alt="Film frame"
          width={80}
          height={60}
          className="w-20 h-16 object-contain"
          style={{ 
            transform: "rotate(10deg)",
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))"
          }}
        />
      </div>

      <div className="absolute top-[35%] left-[18%] z-15 pointer-events-none opacity-20 hidden xl:block">
        <Image
          src="/assets/frame.png"
          alt="Film frame"
          width={70}
          height={50}
          className="w-16 h-12 object-contain"
          style={{ 
            transform: "rotate(-20deg)",
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))"
          }}
        />
      </div>

      <div className="absolute top-[50%] right-[20%] z-15 pointer-events-none opacity-20 hidden xl:block">
        <Image
          src="/assets/frame.png"
          alt="Film frame"
          width={65}
          height={45}
          className="w-14 h-10 object-contain"
          style={{ 
            transform: "rotate(15deg)",
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))"
          }}
        />
      </div>

      {/* Additional Small Leaf Elements */}
      <div className="absolute top-[55%] left-[20%] z-15 pointer-events-none opacity-30 hidden xl:block">
        <Image
          src="/assets/leaf1.png"
          alt="Leaf decoration"
          width={90}
          height={90}
          className="w-20 h-20 object-contain"
          style={{ 
            transform: "rotate(45deg)",
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))"
          }}
        />
      </div>

      <div className="absolute top-[40%] right-[25%] z-15 pointer-events-none opacity-25 hidden xl:block">
        <Image
          src="/assets/leaf2.png"
          alt="Leaf decoration"
          width={85}
          height={85}
          className="w-20 h-20 object-contain"
          style={{ 
            transform: "rotate(-30deg)",
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))"
          }}
        />
      </div>

      {/* Yellow Content Section */}
      <div className="relative w-full">
        {/* Main Yellow Content Area */}
        <div className="relative bg-[#FFCE21] px-4 md:px-8 lg:px-12 xl:px-16 pb-12 md:pb-16 pt-0 min-h-[calc(100vh-80px)]">
            {/* Content with padding to avoid large characters */}
            <div className="relative z-30 pl-16 sm:pl-20 md:pl-8 lg:pl-16 xl:pl-24 pr-16 sm:pr-20 md:pr-8 lg:pr-16 xl:pr-24 pt-20 md:pt-20 lg:pt-24 flex flex-col items-center justify-center min-h-[70vh] max-w-5xl mx-auto">
              {/* Coming Soon Title */}
              <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#091529] mb-6 md:mb-8 uppercase tracking-tight text-center">
                Coming Soon
              </h1>
              
              <div className="w-24 h-1 bg-[#091529] mb-8"></div>
              
              <p className="font-texta text-[#091529] text-xl md:text-2xl mb-4 text-center max-w-2xl leading-relaxed">
                Festival passes and tickets will be available soon!
              </p>
              
              <p className="font-texta text-[#091529] text-base md:text-lg mb-12 text-center max-w-xl leading-relaxed opacity-90">
                Stay tuned for updates on passes, ticket pricing, and early bird offers. 
                Be the first to know when booking opens.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <SafeLink
                  href="/"
                  className="font-texta inline-flex items-center justify-center px-8 py-4 bg-[#091529] text-white rounded-md shadow-lg text-base md:text-lg font-semibold hover:bg-[#0a1a35] transition transform hover:scale-105"
                >
                  Back to Home
                </SafeLink>
              </div>

              {/* Small Decorative Elements Around Content */}
              <div className="mt-16 flex items-center gap-6 opacity-30">
                <Image
                  src="/assets/frame.png"
                  alt="Film frame decoration"
                  width={60}
                  height={40}
                  className="w-12 h-8 object-contain"
                  style={{ transform: "rotate(-5deg)" }}
                />
                <Image
                  src="/assets/frame.png"
                  alt="Film frame decoration"
                  width={80}
                  height={55}
                  className="w-16 h-10 object-contain"
                />
                <Image
                  src="/assets/frame.png"
                  alt="Film frame decoration"
                  width={60}
                  height={40}
                  className="w-12 h-8 object-contain"
                  style={{ transform: "rotate(5deg)" }}
                />
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}

