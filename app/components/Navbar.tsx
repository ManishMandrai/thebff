"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#080002]">
      <div className="mx-auto  px-6 lg:px-12">
        <div className="flex items-center justify-between py-2">
          <Link href="/" aria-label="Home" className="flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="Bhopal Film Festival Logo"
              width={120}
              height={40}
              priority
              className="object-contain h-11 w-auto fill-[#FFCE21]"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-10">
              <li>
                <Link
                  href="/about"
                  className="text-[#FFCE21] font-bold text-lg"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/submit"
                  className="text-[#FFCE21] font-bold text-lg"
                >
                  Submit Film
                </Link>
              </li>
              <li>
                <Link
                  href="/passes"
                  className="text-[#FFCE21] font-bold text-lg"
                >
                  Get Passes
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[#FFCE21] font-bold text-lg"
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

      {/* SMALL YELLOW BAR UNDER HEADER */}
      <div className="w-full h-2 "></div>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed right-0 top-0 h-full w-[80%] bg shadow-xl
            flex flex-col items-center justify-center gap-8 transition-transform duration-300"
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
              className="text-[#FFCE21] font-bold text-xl"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <Link
              href="/submit"
              className="text-[#FFCE21] font-bold text-xl"
              onClick={() => setOpen(false)}
            >
              Submit Film
            </Link>

            <Link
              href="/passes"
              className="text-[#FFCE21] font-bold text-xl"
              onClick={() => setOpen(false)}
            >
              Get Passes
            </Link>

            <Link
              href="/terms"
              className="text-[#FFCE21] font-bold text-xl"
              onClick={() => setOpen(false)}
            >
              T&C
            </Link>
          </div>

          <div className="flex-1" onClick={() => setOpen(false)}></div>
        </div>
      )}
    </header>
  );
}
