"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-[#FFF2C6]">
      <Navbar />

      {/* Main Content Area */}
      <section className="relative min-h-[calc(100vh-120px)] flex items-center justify-center px-6 md:px-12 py-12">
        
        <div className="relative w-full max-w-[1800px] mx-auto flex items-center min-h-[80vh]">
          
          {/* Left Side - Illustration area (spotlight with bird character) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[35%] max-w-[500px] h-[80vh] z-10 pointer-events-none">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Spotlight and bird illustration placeholder - can be replaced with actual image */}
              <div className="relative w-full max-w-[400px]">
                {/* Large circle/spotlight shape */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] h-[250px] opacity-80">
                  <Image
                    src="/assets/circle.png"
                    alt=""
                    width={250}
                    height={250}
                    className="w-full h-auto"
                    style={{ 
                      filter: "hue-rotate(180deg) saturate(1.5) brightness(1.1)",
                      transform: "scale(1.2)"
                    }}
                  />
                </div>
                {/* Bird character placeholder - using circular elements */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] h-[200px]">
                  <div className="relative w-full h-full">
                    {/* Character body placeholder */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[150px] bg-gradient-to-b from-[#FF8C42] to-[#FF6B35] rounded-t-full opacity-90"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Text Content */}
          <div className="relative z-20 w-full max-w-[800px] mx-auto px-8">
            <div className="max-w-[700px] mx-auto">
              <h1 className="text-5xl md:text-7xl font-extrabold text-[#091529] mb-8 uppercase tracking-tight leading-tight">
                ABOUT US
              </h1>
              
              <div className="space-y-6 text-[#091529] text-lg md:text-xl leading-relaxed">
                <p>
                  This is a passionate collective of filmmakers, artists, and storytellers who believe in the power of cinema to build connections and spark dialogue. The Bhopal Film Festival was born from the desire to create a space where independent voices can be seen, heard, and celebrated, right here in the heart of Madhya Pradesh.
                </p>
                
                <p>
                  Our work grows from collaboration and curiosity. We come from different creative backgrounds, but share a commitment to stories that are honest, rooted, and imaginative. Together, we aim to nurture a community where cinema becomes more than an art form, it becomes a shared experience that brings people closer. We see this festival as a living, evolving platform, one that supports filmmakers, engages audiences, and places Bhopal firmly on the map for independent cinema and cultural dialogue.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Decorative Patterns */}
          <div className="absolute right-0 top-0 w-[30%] max-w-[400px] h-full z-10 pointer-events-none">
            {/* Top-right pattern - dark yellow/ochre with black strokes */}
            <div className="absolute top-0 right-0 w-full h-[45%] overflow-hidden">
              <Image
                src="/assets/side strip.png"
                alt=""
                width={500}
                height={600}
                className="w-full h-auto"
                style={{ 
                  filter: "hue-rotate(20deg) saturate(1.3) brightness(0.75) contrast(1.2)",
                  opacity: 0.7
                }}
              />
            </div>
            
            {/* Bottom-right pattern - red and orange */}
            <div className="absolute bottom-0 right-0 w-full h-[55%] overflow-hidden">
              <Image
                src="/assets/strip.png"
                alt=""
                width={500}
                height={700}
                className="w-full h-auto"
                style={{ 
                  filter: "hue-rotate(350deg) saturate(1.4) brightness(0.8)",
                  opacity: 0.8
                }}
              />
            </div>
          </div>

          {/* Bottom-left Pattern - red and orange */}
          <div className="absolute left-0 bottom-0 w-[22%] max-w-[300px] h-[28%] z-10 pointer-events-none overflow-hidden">
            <Image
              src="/assets/strip.png"
              alt=""
              width={400}
              height={500}
              className="w-full h-auto"
              style={{ 
                filter: "hue-rotate(350deg) saturate(1.4) brightness(0.8)",
                opacity: 0.6
              }}
            />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

