import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-start gap-6 xl:gap-8">
          <div
            className="w-full md:w-5/12"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <Image
              src="/images/Developherj.jpg"
              alt="developherj image"
              className="object-cover rounded-3xl shadow-lg w-full h-[380px]"
              width={500}
              height={380}
            />
          </div>

          <div className="w-full md:w-7/12">
            <h1 className="text-3xl md:4xl text-[var(--dj-blue)] lg:text-5xl font-bold leading-[2.5rem] md:leading-[3.5rem] dark:text-white">
              About Me
            </h1>

            <p className="text-[var(--dj-blue)] mt-3 text-lg dark:text-white">
              I&apos;m Jayde, a frontend developer with a keen eye for detail
              and a strong passion for creating smooth, visually appealing,
              user-friendly experiences. With over 4 years of experience, I
              specialize in React and Next.js, bringing modern and scalable
              solutions to life.
            </p>
            <p className="text-[var(--dj-blue)] mt-3 text-lg dark:text-white">
              I&apos;m always eager to learn about new technologies and best
              practices. I also love being a tech advocate and enjoy sharing my
              skills and knowledge with others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
