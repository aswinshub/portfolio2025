import React from "react";
import { FaGithub, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "motion/react";

import html5 from "../assets/toolslogo/frontend icons/html5.png";
import javascript from "../assets/toolslogo/frontend icons/javascript.png";
import typescript from "../assets/toolslogo/frontend icons/Typescript.png";
import react from "../assets/toolslogo/frontend icons/React js.png";
import nextjs from "../assets/toolslogo/frontend icons/Next js.png";
import vuejs from "../assets/toolslogo/frontend icons/Vue js.png";
import astro from "../assets/toolslogo/frontend icons/astro.png";
import redux from "../assets/toolslogo/frontend icons/Redux.png";
import css3 from "../assets/toolslogo/styling logos/css3-plain.png";
import tailwindcss from "../assets/toolslogo/styling logos/tailwindcss-plain.png";
import bootstrap from "../assets/toolslogo/styling logos/bootstrap-original.png";
import materialui from "../assets/toolslogo/styling logos/materialui-original.png";
import shadcnui from "../assets/toolslogo/styling logos/shadcn-ui.png";
import figma from "../assets/toolslogo/styling logos/figma.png";

const TECH_CATEGORIES = [
  {
    title: "UI/UX Design",
    description:
      "Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.",
    items: [
      { name: "Figma", image: figma },
    ],
  },
  {
    title: "Front-End Development",
    description:
      "Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.",
    items: [
      { name: "HTML5", image: html5 },
      { name: "JavaScript", image: javascript },
      { name: "TypeScript", image: typescript },
      { name: "Astro", image: astro },
      { name: "Next.js", image: nextjs },
      { name: "Redux", image: redux },
      { name: "React", image: react },
      { name: "Vue.js", image: vuejs },
    ],
  },
  {
    title: "Styling & Design",
    description:
      "Crafting visually appealing and responsive designs with advanced styling tools and frameworks.",
    items: [
      { name: "CSS3", image: css3 },
      { name: "Tailwind CSS", image: tailwindcss },
      { name: "Bootstrap", image: bootstrap },
      { name: "Material UI", image: materialui },
      { name: "shadcn/ui", image: shadcnui },
    ],
  },
  {
    title: "Back-End Development",
    description:
      "Developing robust server-side logic and APIs to power dynamic and scalable web applications.",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-neutral-300" },
    ],
  },
  {
    title: "Database Management",
    description:
      "Designing and managing databases to ensure secure and efficient data storage and retrieval.",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    ],
  },
  {
    title: "Version Control & Collaboration",
    description:
      "Effectively managing code and collaborating on projects to ensure seamless teamwork.",
    items: [
      { name: "GitHub", icon: FaGithub, color: "text-neutral-100" },
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
    ],
  },
];

const TechIcon = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800/80"
      title={item.name}
    >
      {item.image ? (
        <img
          src={item.image}
          alt={item.name}
          className="h-7 w-7 object-contain"
        />
      ) : (
        <Icon className={`text-2xl ${item.color}`} />
      )}
    </div>
  );
};

const CategoryCard = ({ category, variants }) => (
  <motion.article
    variants={variants}
    className="flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 hover:border-neutral-700 hover:bg-neutral-900/60 transition-colors duration-300"
  >
    <div className="mb-4 flex flex-wrap gap-2.5">
      {category.items.map((item) => (
        <TechIcon key={item.name} item={item} />
      ))}
    </div>

    <h3 className="text-sm font-medium text-neutral-100">{category.title}</h3>
    <p className="mt-1.5 text-xs leading-relaxed text-neutral-500 font-light">
      {category.description}
    </p>
  </motion.article>
);

const Tech = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 16,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="py-24 border-b border-neutral-800/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="mb-12 text-center text-3xl md:text-4xl font-light tracking-tight text-neutral-100"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Technologies
        </motion.h2>

        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr"
          variants={containerVariants}
        >
          {TECH_CATEGORIES.map((category) => (
            <CategoryCard
              key={category.title}
              category={category}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Tech;
