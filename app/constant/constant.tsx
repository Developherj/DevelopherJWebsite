import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { BsGit, BsGithub } from "react-icons/bs";
import {
  FaAws,
  FaBootstrap,
  FaConfluence,
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJenkins,
  FaNode,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import {
  SiRedux,
  SiFormik,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiJest,
  SiCypress,
  SiJira,
} from "react-icons/si";

export const navLinks = [
  {
    id: 1,
    url: "/",
    label: "Home",
  },
  {
    id: 2,
    url: "/about",
    label: "About",
  },
  {
    id: 3,
    url: "/projects",
    label: "Projects",
  },
  {
    id: 4,
    url: "/contact",
    label: "Contact",
  },
];

export const socialIcons = [
  {
    id: "email",
    icon: (
      <MdEmail className="w-6 h-6 text-[var(--dj-blue)] dark:text-[var(--dj-blue)] mx-auto" />
    ),
    url: "mailto:developherj@gmail.com",
    ariaLabel: "email",
  },
  {
    id: "github",
    icon: (
      <BsGithub className="w-6 h-6 text-[var(--dj-blue)] dark:text-[var(--dj-blue)] mx-auto" />
    ),
    url: "https://github.com/Developherj",
    target: "_blank",
    ariaLabel: "github",
  },
];

export const skills = [
  {
    title: "React",
    icon: (
      <FaReact className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "NextJS",
    icon: (
      <RiNextjsFill className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "TypeScript",
    icon: (
      <BiLogoTypescript className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "JavaScript",
    icon: (
      <BiLogoJavascript className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },

  {
    title: "HTML",
    icon: (
      <FaHtml5 className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "CSS",
    icon: (
      <FaCss3Alt className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "Sass",
    icon: (
      <FaSass className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "Tailwind",
    icon: (
      <RiTailwindCssLine className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "Bootstrap",
    icon: (
      <FaBootstrap className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },

  {
    title: "Redux",
    icon: (
      <SiRedux className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "Formik",
    icon: (
      <SiFormik className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "Docker",
    icon: (
      <FaDocker className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "MySql",
    icon: (
      <SiMysql className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "MongoDB",
    icon: (
      <SiMongodb className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },

  {
    title: "Node",
    icon: (
      <FaNode className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "Express",
    icon: (
      <SiExpress className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "Jest",
    icon: (
      <SiJest className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "Cypress",
    icon: (
      <SiCypress className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "Jenkins",
    icon: (
      <FaJenkins className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },

  {
    title: "AWS",
    icon: (
      <FaAws className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "Jira",
    icon: (
      <SiJira className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "Confluence",
    icon: (
      <FaConfluence className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "Git",
    icon: (
      <BsGit className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
  {
    title: "Github",
    icon: (
      <BsGithub className="w-12 h-12 text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mx-auto" />
    ),
  },
];
