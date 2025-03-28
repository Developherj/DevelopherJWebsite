"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/app/constant/constant";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeToggle from "@/components/helpers/ThemeToggle";

interface NavProps {
  openNav: () => void;
}

const Nav = ({ openNav }: NavProps) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all ${
        navBg ? "bg-[#f7a7a7] shadow-md " : "fixed"
      } duration-200 h-[12vh] z-[100] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto">
        <div>
          {/* <img src={DevelopherjLogo} alt="developherj logo" /> */}
          <Image
            src="/images/Developherj_logo.png"
            alt="Developherj Logo"
            width={200}
            height={100}
          />
        </div>
        <div className="hidden lg:flex items-cent space-x-10">
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-[#1c2051] hover:text-[#ef229c] font-semibold transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#_"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-[#ef229c] rounded-md cursor-pointer group ring-offset-2 ring-1 ring-[#ff7bc9] ring-offset-[#fbf2f6] hover:ring-offset-[#ef229c] ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <FaPhone className="mr-3 w-5 h-5" />
              Contact me
            </span>
          </a>
          <ThemeToggle />

          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-[#1c2051] lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
