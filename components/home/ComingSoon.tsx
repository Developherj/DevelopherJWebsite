"use client";
import React from "react";
import Image from "next/image";
import { Itim } from "next/font/google";

const itim = Itim({ weight: ["400"], subsets: ["latin"] });

const ComingSoon = () => {
  return (
    <main className="relative w-full h-screen flex justify-center flex-col bg-[#f3ebeb] bg_clip">
      <section className="px-4 w-full flex flex-col lg:flex-row justify-between items-center">
        <aside
          data-aos="fade-up"
          className="w-full lg:w-1/2 text-center lg:text-start"
        >
          <h1 className="text-6xl lg:text-7xl xl:text-7xl text-[var(--dj-blue)]">
            <small className="text-3xl font-semibold">This page is</small>
            <br />
            <span className={itim.className}>Coming Soon!</span>
          </h1>

          <h2 className="text-[var(--dj-blue)] mt-4 text-lg lg:text-xl">
            It&apos;s
            <span className="bg-[var(--dj-blue)] text-white px-2 py-1 font-semibold rounded shadow-md  ">
              Under Constrution
            </span>
            will be here soon.
          </h2>
          <h3 className="bg-[var(--dj-blue)] text-white px-2 py-1 font-semibold text-xl lg:text-2xl uppercase inline-block rounded shadow-md mt-5 ">
            Stay Tuned!
          </h3>
        </aside>

        <aside
          data-aos="zoom-in"
          data-aos-delay="150"
          className="w-full lg:w-1/2 flex justify-center mt-5 lg:mt-0 pl-4"
        >
          <div className="max-w-[650px]">
            <Image
              src="/images/complady.png"
              alt="Developherj image"
              width={650}
              height={650}
              className="h-auto object-cover"
              priority
            />
          </div>
        </aside>
      </section>
    </main>
  );
};

export default ComingSoon;
