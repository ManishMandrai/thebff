"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#500E1E] text-white pt-16 pb-8 px-6 md:px-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/20 pb-10">
        {/* Left - Logo & Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo.png"
              alt="Bhopal Film Festival"
              width={110}
              height={120}
              className="object-contain brightness-0 invert"
            />
            <h2 className="text-xl font-semibold">Bhopal Film Festival</h2>
          </div>
          <p className="text-sm text-white/90 leading-relaxed">
            Celebrating films and voices from the heart of Madhya Pradesh. Showcasing stories that inspire and connect audiences.
          </p>
          <p className="text-sm text-white/80">
            Discover screenings, events, and passes — be part of the festival.
          </p>
        </div>

        {/* Middle - Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <Link href="#submit" className="text-white/90 hover:text-white transition">
            Submit Film
          </Link>
          <Link href="#about" className="text-white/90 hover:text-white transition">
            About
          </Link>
          <Link href="/passes" className="text-white/90 hover:text-white transition">
            Get Passes
          </Link>
          <Link href="mailto:info@bhopalfilmfestival.com" className="text-white/90 hover:text-white transition">
            Email
          </Link>
        </div>

        {/* Right - Subscribe */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <div className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-200 text-black placeholder-gray-600 outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-md font-medium hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-300 transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-white/80">
        <p>© {year} All rights reserved — Bhopal Film Festival</p>
        <p>
          Built with ❤️ by{" "}
          <Link
            href="https://www.ETWOT.com/"
            target="_blank"
            className="underline hover:text-white"
          >
            ETWOT
          </Link>
        </p>
      </div>
    </footer>
  );
}
