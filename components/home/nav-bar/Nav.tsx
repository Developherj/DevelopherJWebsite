"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeToggle from "@/components/helpers/ThemeToggle";
import { navLinks, socialIcons } from "@/app/constant/constant";

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
      } duration-200 h-[12vh] z-[100] fixed w-full `}
    >
      <div className="flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto">
        <div className="w-[200px]">
          <Image
            src="/images/Developherj_logo.png"
            alt="Developherj Logo"
            width={200}
            height={100}
            className="h-auto object-contain"
            priority
          />
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="transition-all duration-200 text-[var(--dj-blue)] font-semibold"
              >
                <div>
                  <p>{link.label}</p>
                </div>
              </Link>
            );
          })}
          {socialIcons.map((icon) => {
            return (
              <Link
                href={icon.url}
                key={icon.id}
                className="transition-all duration-200 text-[#1c2051] font-semibold"
                target={icon.target}
                aria-label={icon.ariaLabel}
              >
                <div>
                  <div>{icon.icon}</div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
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
