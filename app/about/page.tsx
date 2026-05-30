//import ComingSoon from "@/components/home/ComingSoon";
import React from "react";
import Image from "next/image";

const AboutPage = () => {
  const experiences = [
    {
      company: "ITV",
      description:
        "Worked on the Design System team building reusable, accessible UI components. Contributed to components used across ITVX, ensuring consistency, performance, and a seamless user experience.",
    },
    {
      company: "BBC",
      description:
        "Built high-traffic, accessible interfaces following strict performance standards.",
    },
    {
      company: "Barclays",
      description:
        "Developed secure and reliable financial applications with a focus on UX.",
    },
    {
      company: "Roku",
      description:
        "Created responsive streaming interfaces across multiple devices.",
    },
    {
      company: "Asorock Food",
      description:
        "Designed and built client websites with a focus on performance and UX. Developed e-commerce platforms using React, Redux, Node, and MongoDB, integrated with a headless CMS (Umbraco), and managed a Snipcart store to ensure smooth, reliable user experiences.",
    },
  ];
  return (
    // <div className="overflow-hidden">
    //   <ComingSoon />
    // </div>
    <div className="pt-[12vh]">
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div
          className="
          rounded-2xl p-8 text-center shadow-sm border
          bg-[var(--dj-background)]
          border-gray-200 dark:border-gray-800
        "
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--dj-blue)] mb-6">
            Proudly building products across media, food, and banking for over 6
            years.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Image
              src="/images/itv-logo.png"
              alt="ITV"
              width={80}
              height={40}
              className="object-contain opacity-80 hover:opacity-100 transition"
            />
            <Image
              src="/images/bbc-logo.png"
              alt="BBC"
              width={80}
              height={40}
              className="object-contain opacity-80 hover:opacity-100 transition"
            />
            <Image
              src="/images/asorock-logo.svg"
              alt="Asorock"
              width={100}
              height={60}
              className="object-contain opacity-80 hover:opacity-100 transition"
            />
            <Image
              src="/images/barclays-logo.png"
              alt="Barclays"
              width={100}
              height={40}
              className="object-contain opacity-80 hover:opacity-100 color:red transition"
            />
            <Image
              src="/images/roku-logo.png"
              alt="Roku"
              width={80}
              height={40}
              className="object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        </div>
      </section>
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[var(--dj-blue)] dark:text-white">
          About Me
        </h1>

        <p className="mb-10 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          Frontend Engineer with 5+ years experience building performant,
          accessible apps using React and TypeScript.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="
              rounded-2xl p-6 shadow-sm border
              bg-white dark:bg-[#1a1a1a]
              border-gray-200 dark:border-gray-800
              hover:shadow-md transition
            "
            >
              <h2 className="text-xl font-semibold mb-2 text-[var(--dj-pink)]">
                {exp.company}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
