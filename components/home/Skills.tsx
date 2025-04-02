import { skills } from "@/app/constant/constant";
import React from "react";

const Skills = () => {
  return (
    <div className="pt-8 pb-16 bg_clip_right">
      <h1 className="text-3xl text-center md:4xl text-[var(--dj-blue)] lg:text-5xl mb-10 font-bold leading-[2.5rem] md:leading-[3.5rem] dark:text-white">
        Languages | Frameworks | Platforms | Tools
      </h1>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-anchor-placement="top-center"
              className="text-center mx-auto mb-8"
            >
              <div className="mx-auto text-center">{skill.icon}</div>
              <h1 className="text-lg font-semibold text-[var(--dj-pink)] dark:text-white ">
                {skill.title}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
