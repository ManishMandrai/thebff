"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function SubmitFilmPage() {
  const [formData, setFormData] = useState({
    filmmakerName: "",
    email: "",
    phone: "",
    filmTitle: "",
    directorName: "",
    genre: "",
    duration: "",
    yearOfProduction: "",
    youtubeLink: "",
    synopsis: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateYouTubeUrl = (url: string) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return youtubeRegex.test(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.filmmakerName || !formData.email || !formData.filmTitle || !formData.youtubeLink) {
      setSubmitStatus("error");
      alert("Please fill in all required fields.");
      return;
    }

    if (!validateYouTubeUrl(formData.youtubeLink)) {
      setSubmitStatus("error");
      alert("Please enter a valid YouTube URL.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      
      setSubmitStatus("success");
      setFormData({
        filmmakerName: "",
        email: "",
        phone: "",
        filmTitle: "",
        directorName: "",
        genre: "",
        duration: "",
        yearOfProduction: "",
        youtubeLink: "",
        synopsis: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFCE21] overflow-x-hidden relative">
      <Navbar />
      

      {/* Decorative Circle Elements */}
      <div className="absolute top-32 left-0 w-[180px] md:w-[320px] h-auto z-5 pointer-events-none opacity-20 hidden sm:block">
        <Image
          src="/assets/circlepq.png"
          alt=""
          width={320}
          height={320}
          className="w-full h-auto"
          style={{ filter: "hue-rotate(90deg) saturate(1.3)" }}
        />
      </div>
      
      <div className="absolute bottom-32 right-0 w-[160px] md:w-[260px] h-auto z-5 pointer-events-none opacity-18 hidden sm:block">
        <Image
          src="/assets/circlep.png"
          alt=""
          width={260}
          height={260}
          className="w-full h-auto"
          style={{ filter: "hue-rotate(15deg) saturate(1.4)" }}
        />
      </div>

      {/* Character - Copy of 10-01.png on Left Side */}
      <div className="absolute left-0 top-[12%] z-20 pointer-events-none opacity-75 hidden lg:block" style={{ transform: 'translateX(-18%)' }}>
        <Image
          src="/assets/Copy of 10-01.png"
          alt="Character"
          width={650}
          height={950}
          className="w-auto h-[70vh] max-h-[850px] object-contain"
          style={{ 
            filter: "drop-shadow(10px 10px 20px rgba(0,0,0,0.25))",
          }}
        />
      </div>

      {/* Character - Copy of 11-01.png on Right Side */}
      <div className="absolute right-0 top-[10%] z-20 pointer-events-none opacity-75 hidden lg:block" style={{ transform: 'translate(10%, 0) scaleX(-1)' }}>
        <Image
          src="/assets/Copy of 11-01.png"
          alt="Character"
          width={650}
          height={950}
          className="w-auto h-[72vh] max-h-[880px] object-contain"
          style={{ 
            filter: "drop-shadow(10px 10px 20px rgba(0,0,0,0.25))",
          }}
        />
      </div>

      {/* Green Decorative Elements */}
      <div className="absolute top-[28%] right-[5%] z-15 pointer-events-none opacity-55 hidden xl:block">
        <Image
          src="/assets/leaf1.png"
          alt="Leaf decoration"
          width={150}
          height={150}
          className="w-32 h-32 object-contain"
          style={{ 
            transform: "rotate(-25deg)",
            filter: "hue-rotate(90deg) saturate(1.5) brightness(0.8) drop-shadow(4px 4px 8px rgba(0,0,0,0.2))",
          }}
        />
      </div>

      <div className="absolute top-[52%] left-[8%] z-15 pointer-events-none opacity-50 hidden xl:block">
        <Image
          src="/assets/leaf2.png"
          alt="Leaf decoration"
          width={130}
          height={130}
          className="w-28 h-28 object-contain"
          style={{ 
            transform: "rotate(35deg)",
            filter: "hue-rotate(95deg) saturate(1.6) brightness(0.85) drop-shadow(4px 4px 8px rgba(0,0,0,0.2))",
          }}
        />
      </div>

      {/* Orange Decorative Texture Elements */}
      <div className="absolute top-[38%] left-[2%] z-15 pointer-events-none opacity-45 hidden 2xl:block">
        <Image
          src="/assets/Texture image.png"
          alt="Texture"
          width={200}
          height={250}
          className="w-[200px] h-[250px] object-cover"
          style={{
            filter: "hue-rotate(15deg) saturate(1.7) brightness(0.9) contrast(1.3)",
            transform: "rotate(-28deg)",
            clipPath: "polygon(0 18%, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>

      <div className="absolute top-[58%] right-[12%] z-15 pointer-events-none opacity-40 hidden 2xl:block">
        <Image
          src="/assets/Texture image.png"
          alt="Texture"
          width={180}
          height={220}
          className="w-[180px] h-[220px] object-cover"
          style={{
            filter: "hue-rotate(350deg) saturate(1.6) brightness(0.88) contrast(1.3)",
            transform: "rotate(20deg)",
            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 22% 48%)",
          }}
        />
      </div>

      {/* Small Decorative Film Frames */}
      <div className="absolute top-[35%] right-[8%] z-15 pointer-events-none opacity-35 hidden 2xl:block">
        <Image
          src="/assets/frame.png"
          alt="Film frame"
          width={90}
          height={65}
          className="w-22 h-16 object-contain"
          style={{ 
            transform: "rotate(15deg)",
            filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.15)) hue-rotate(90deg)",
          }}
        />
      </div>

      <div className="absolute top-[54%] left-[12%] z-15 pointer-events-none opacity-30 hidden 2xl:block">
        <Image
          src="/assets/frame.png"
          alt="Film frame"
          width={80}
          height={58}
          className="w-20 h-14 object-contain"
          style={{ 
            transform: "rotate(-25deg)",
            filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.15)) hue-rotate(15deg)",
          }}
        />
      </div>

      {/* Main Content Section */}
      <div className="relative w-full pt-10 md:pt-16 pb-20 min-h-[calc(100vh-108px)]">
        <div className="relative z-30 px-4 md:px-8 lg:px-12 xl:px-20 max-w-6xl mx-auto">
          
          {/* Page Title Section */}
          <div className="text-center mb-12 md:mb-16 relative">
            {/* Decorative background for title */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-32 md:w-48 h-32 md:h-48 bg-gradient-to-br from-[#6A9139]/10 to-[#F4921F]/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              {/* Accent lines */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#6A9139] to-transparent"></div>
                <Image
                  src="/assets/frame.png"
                  alt=""
                  width={50}
                  height={35}
                  className="w-10 md:w-12 h-7 md:h-9 object-contain opacity-60"
                />
                <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#F4921F] to-transparent"></div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#091529] uppercase tracking-tight mb-4 leading-[0.9]">
                Submit Your
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Film</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-[#6A9139]/30 via-[#F4921F]/30 to-[#6A9139]/30 -z-10"></span>
                </span>
              </h1>
              
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#F4921F] to-transparent"></div>
                <Image
                  src="/assets/frame.png"
                  alt=""
                  width={50}
                  height={35}
                  className="w-10 md:w-12 h-7 md:h-9 object-contain opacity-60"
                />
                <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#6A9139] to-transparent"></div>
              </div>
              
              <p className="text-[#091529] text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mt-8 md:mt-10 font-medium">
                Share your story with us. Submit your film for consideration at the Bhopal Film Festival.
              </p>
            </div>
          </div>

          {/* Submission Form Section */}
          <div className="relative">
            {/* Large decorative background */}
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-[#6A9139]/15 via-white/30 to-[#F4921F]/15 rounded-2xl blur-2xl"></div>
            
            <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-[0_20px_60px_rgba(9,21,41,0.15)] p-8 md:p-12 lg:p-16 border-2 border-[#091529]/10">
              
              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-8 p-6 bg-gradient-to-r from-[#6A9139]/25 to-[#6A9139]/10 border-l-4 border-[#6A9139] text-[#091529] rounded-lg shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">✓</div>
                    <div>
                      <p className="font-bold text-xl mb-1">Thank you! Your submission has been received successfully.</p>
                      <p className="text-base mt-2 opacity-90">We'll review your film and get back to you soon via email.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-8 p-6 bg-gradient-to-r from-red-100 to-red-50 border-l-4 border-red-500 text-red-800 rounded-lg shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">✗</div>
                    <div>
                      <p className="font-bold text-xl mb-1">There was an error submitting your form.</p>
                      <p className="text-base mt-2">Please check all fields and try again.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Section 1: Contact Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#091529]/20">
                    <div className="w-2 h-8 bg-gradient-to-b from-[#6A9139] to-[#6A9139]/60 rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#091529] uppercase tracking-wide">Contact Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Filmmaker Name */}
                    <div className="space-y-2">
                      <label htmlFor="filmmakerName" className="block text-[#091529] font-bold text-base md:text-lg flex items-center gap-2">
                        <span className="w-2 h-6 bg-[#6A9139] rounded-full"></span>
                        Filmmaker Name <span className="text-red-600 text-xl">*</span>
                      </label>
                      <input
                        type="text"
                        id="filmmakerName"
                        name="filmmakerName"
                        value={formData.filmmakerName}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border-2 border-[#091529]/20 bg-white/95 text-[#091529] placeholder:text-[#091529]/40 focus:border-[#6A9139] focus:outline-none focus:ring-4 focus:ring-[#6A9139]/25 transition-all duration-300 text-base shadow-sm hover:border-[#091529]/30"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[#091529] font-bold text-base md:text-lg flex items-center gap-2">
                        <span className="w-2 h-6 bg-[#F4921F] rounded-full"></span>
                        Email Address <span className="text-red-600 text-xl">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border-2 border-[#091529]/20 bg-white/95 text-[#091529] placeholder:text-[#091529]/40 focus:border-[#F4921F] focus:outline-none focus:ring-4 focus:ring-[#F4921F]/25 transition-all duration-300 text-base shadow-sm hover:border-[#091529]/30"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-[#091529] font-bold text-base md:text-lg flex items-center gap-2">
                      <span className="w-2 h-6 bg-[#6A9139] rounded-full"></span>
                      Phone Number <span className="text-[#091529]/50 text-sm font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-[#091529]/20 bg-white/95 text-[#091529] placeholder:text-[#091529]/40 focus:border-[#091529] focus:outline-none focus:ring-4 focus:ring-[#091529]/20 transition-all duration-300 text-base shadow-sm hover:border-[#091529]/30"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                {/* Section 2: Film Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6 pt-6 pb-3 border-t-2 border-b-2 border-[#091529]/20">
                    <div className="w-2 h-8 bg-gradient-to-b from-[#F4921F] to-[#F4921F]/60 rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#091529] uppercase tracking-wide">Film Details</h2>
                  </div>

                  {/* Film Title */}
                  <div className="space-y-2">
                    <label htmlFor="filmTitle" className="block text-[#091529] font-bold text-base md:text-lg flex items-center gap-2">
                      <span className="w-2 h-6 bg-[#F4921F] rounded-full"></span>
                      Film Title <span className="text-red-600 text-xl">*</span>
                    </label>
                    <input
                      type="text"
                      id="filmTitle"
                      name="filmTitle"
                      value={formData.filmTitle}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border-2 border-[#091529]/20 bg-white/95 text-[#091529] placeholder:text-[#091529]/40 focus:border-[#091529] focus:outline-none focus:ring-4 focus:ring-[#091529]/20 transition-all duration-300 text-base shadow-sm hover:border-[#091529]/30"
                      placeholder="Enter the title of your film"
                    />
                  </div>

                  {/* Director Name */}
                  <div className="space-y-2">
                    <label htmlFor="directorName" className="block text-[#091529] font-bold text-base md:text-lg flex items-center gap-2">
                      <span className="w-2 h-6 bg-[#6A9139] rounded-full"></span>
                      Director Name <span className="text-[#091529]/50 text-sm font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="directorName"
                      name="directorName"
                      value={formData.directorName}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-[#091529]/20 bg-white/95 text-[#091529] placeholder:text-[#091529]/40 focus:border-[#091529] focus:outline-none focus:ring-4 focus:ring-[#091529]/20 transition-all duration-300 text-base shadow-sm hover:border-[#091529]/30"
                      placeholder="Enter director's name"
                    />
                  </div>

                  {/* Genre, Duration, Year */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Genre */}
                    <div className="space-y-2">
                      <label htmlFor="genre" className="block text-[#091529] font-bold text-base md:text-lg flex items-center gap-2">
                        <span className="w-2 h-6 bg-[#F4921F] rounded-full"></span>
                        Genre
                      </label>
                      <select
                        id="genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl border-2 border-[#091529]/20 bg-white/95 text-[#091529] focus:border-[#091529] focus:outline-none focus:ring-4 focus:ring-[#091529]/20 transition-all duration-300 text-base shadow-sm hover:border-[#091529]/30 appearance-none cursor-pointer"
                      >
                        <option value="">Select genre</option>
                        <option value="drama">Drama</option>
                        <option value="comedy">Comedy</option>
                        <option value="thriller">Thriller</option>
                        <option value="documentary">Documentary</option>
                        <option value="short-film">Short Film</option>
                        <option value="animation">Animation</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="action">Action</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Duration */}
                    <div className="space-y-2">
                      <label htmlFor="duration" className="block text-[#091529] font-bold text-base md:text-lg flex items-center gap-2">
                        <span className="w-2 h-6 bg-[#6A9139] rounded-full"></span>
                        Duration (min)
                      </label>
                      <input
                        type="number"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        min="1"
                        className="w-full px-6 py-4 rounded-xl border-2 border-[#091529]/20 bg-white/95 text-[#091529] placeholder:text-[#091529]/40 focus:border-[#091529] focus:outline-none focus:ring-4 focus:ring-[#091529]/20 transition-all duration-300 text-base shadow-sm hover:border-[#091529]/30"
                        placeholder="e.g., 120"
                      />
                    </div>

                    {/* Year of Production */}
                    <div className="space-y-2">
                      <label htmlFor="yearOfProduction" className="block text-[#091529] font-bold text-base md:text-lg flex items-center gap-2">
                        <span className="w-2 h-6 bg-[#F4921F] rounded-full"></span>
                        Year
                      </label>
                      <input
                        type="number"
                        id="yearOfProduction"
                        name="yearOfProduction"
                        value={formData.yearOfProduction}
                        onChange={handleChange}
                        min="1900"
                        max={new Date().getFullYear() + 1}
                        className="w-full px-6 py-4 rounded-xl border-2 border-[#091529]/20 bg-white/95 text-[#091529] placeholder:text-[#091529]/40 focus:border-[#091529] focus:outline-none focus:ring-4 focus:ring-[#091529]/20 transition-all duration-300 text-base shadow-sm hover:border-[#091529]/30"
                        placeholder="e.g., 2024"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Film Submission */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6 pt-6 pb-3 border-t-2 border-b-2 border-[#091529]/20">
                    <div className="w-2 h-8 bg-gradient-to-b from-[#6A9139] via-[#F4921F] to-[#6A9139] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#091529] uppercase tracking-wide">Film Submission</h2>
                  </div>

                  {/* YouTube Link */}
                  <div className="space-y-2">
                    <label htmlFor="youtubeLink" className="block text-[#091529] font-bold text-base md:text-lg flex items-center gap-2">
                      <span className="w-2 h-6 bg-[#6A9139] rounded-full"></span>
                      YouTube Link <span className="text-red-600 text-xl">*</span>
                    </label>
                    <input
                      type="url"
                      id="youtubeLink"
                      name="youtubeLink"
                      value={formData.youtubeLink}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border-2 border-[#091529]/20 bg-white/95 text-[#091529] placeholder:text-[#091529]/40 focus:border-[#091529] focus:outline-none focus:ring-4 focus:ring-[#091529]/20 transition-all duration-300 text-base shadow-sm hover:border-[#091529]/30"
                      placeholder="https://www.youtube.com/watch?v=..."
                    />
                    <p className="mt-3 text-sm text-[#091529]/70 flex items-center gap-2 px-2">
                      <span className="text-[#6A9139] font-bold">→</span>
                      Please provide a link to your film uploaded on YouTube
                    </p>
                  </div>

                  {/* Synopsis */}
                  <div className="space-y-2">
                    <label htmlFor="synopsis" className="block text-[#091529] font-bold text-base md:text-lg flex items-center gap-2">
                      <span className="w-2 h-6 bg-[#F4921F] rounded-full"></span>
                      Film Synopsis <span className="text-[#091529]/50 text-sm font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="synopsis"
                      name="synopsis"
                      value={formData.synopsis}
                      onChange={handleChange}
                      rows={7}
                      className="w-full px-6 py-4 rounded-xl border-2 border-[#091529]/20 bg-white/95 text-[#091529] placeholder:text-[#091529]/40 focus:border-[#091529] focus:outline-none focus:ring-4 focus:ring-[#091529]/20 transition-all duration-300 resize-none text-base shadow-sm hover:border-[#091529]/30"
                      placeholder="Write a brief description of your film, including plot, themes, and any relevant information..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative px-16 py-5 bg-gradient-to-r from-[#091529] via-[#0a1a35] to-[#091529] text-white rounded-xl shadow-[0_10px_30px_rgba(9,21,41,0.3)] text-xl font-bold uppercase tracking-wider hover:shadow-[0_15px_40px_rgba(9,21,41,0.4)] transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-4">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Film
                          <span className="text-[#F4921F] text-2xl transition-transform group-hover:translate-x-1">→</span>
                        </>
                      )}
                    </span>
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6A9139]/30 via-transparent to-[#F4921F]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Decorative Elements Below Form */}
          <div className="mt-20 flex items-center justify-center gap-8 opacity-40">
            <Image
              src="/assets/frame.png"
              alt="Film frame decoration"
              width={70}
              height={50}
              className="w-14 h-10 object-contain"
              style={{ 
                transform: "rotate(-10deg)",
                filter: "hue-rotate(90deg) saturate(1.3)",
              }}
            />
            <Image
              src="/assets/frame.png"
              alt="Film frame decoration"
              width={90}
              height={65}
              className="w-18 h-13 object-contain"
              style={{
                filter: "hue-rotate(15deg) saturate(1.4)",
              }}
            />
            <Image
              src="/assets/frame.png"
              alt="Film frame decoration"
              width={70}
              height={50}
              className="w-14 h-10 object-contain"
              style={{ 
                transform: "rotate(10deg)",
                filter: "hue-rotate(90deg) saturate(1.3)",
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
