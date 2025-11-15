"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#091529]">
      <div className="mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4 md:py-[30px]">
          <Link href="/" aria-label="Home" className="flex items-center gap-2 md:gap-0">
            <Image
              src="/assets/logo.svg"
              alt="Bhopal Film Festival Logo"
              width={50}
              height={50}
              priority
              className="object-contain h-10 md:h-12 w-auto"
              style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(98%) saturate(1352%) hue-rotate(0deg) brightness(102%) contrast(101%)' }}
            />
            <div className="md:hidden flex flex-col text-[#FFCE21] leading-tight">
              <span className="text-sm font-bold">THE BHOPAL</span>
              <span className="text-xs font-normal">FILM FESTIVAL</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-3">
              <li>
                <Link
                  href="/about"
                  className="bg-[#FFCE21] text-[#500E1E] font-bold text-sm uppercase px-4 py-2 rounded-md hover:opacity-90 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/submit-film"
                  className="bg-[#FFCE21] text-[#500E1E] font-bold text-sm uppercase px-4 py-2 rounded-md hover:opacity-90 transition"
                >
                  Submit Film
                </Link>
              </li>
              <li>
                <Link
                  href="/passes"
                  className="bg-[#FFCE21] text-[#500E1E] font-bold text-sm uppercase px-4 py-2 rounded-md hover:opacity-90 transition"
                >
                  GET PASSES
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="bg-[#FFCE21] text-[#500E1E] font-bold text-sm uppercase px-4 py-2 rounded-md hover:opacity-90 transition"
                >
                  T&C
                </Link>
              </li>
            </ul>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-[#FFCE21]"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={30} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed right-0 top-0 h-full w-[80%] bg-[#091529] shadow-xl
            flex flex-col items-center justify-center gap-6 transition-transform duration-300"
          >
            <button
              className="absolute top-4 right-4 text-[#FFCE21]"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={30} />
            </button>

            <Link
              href="/about"
              className="bg-[#FFCE21] text-[#500E1E] font-bold text-lg uppercase px-6 py-3 rounded-md hover:opacity-90 transition w-48 text-center"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <Link
              href="/submit-film"
              className="bg-[#FFCE21] text-[#500E1E] font-bold text-lg uppercase px-6 py-3 rounded-md hover:opacity-90 transition w-48 text-center"
              onClick={() => setOpen(false)}
            >
              Submit Film
            </Link>

            <Link
              href="/passes"
              className="bg-[#FFCE21] text-[#500E1E] font-bold text-lg uppercase px-6 py-3 rounded-md hover:opacity-90 transition w-48 text-center"
              onClick={() => setOpen(false)}
            >
              GET PASSES
            </Link>

            <Link
              href="/terms"
              className="bg-[#FFCE21] text-[#500E1E] font-bold text-lg uppercase px-6 py-3 rounded-md hover:opacity-90 transition w-48 text-center"
              onClick={() => setOpen(false)}
            >
              T&C
            </Link>
          </div>

          <div className="flex-1 bg-black/50" onClick={() => setOpen(false)}></div>
        </div>
      )}
    </header>
  );
}
