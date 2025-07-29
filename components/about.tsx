"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-25 mt-10 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  Hello! I'm a passionate full-stack developer skilled in building fast, responsive, and scalable web apps using{" "}
  <span className="font-medium">Next.js, React, TypeScript, Tailwind CSS, and the MERN stack</span>. 
  My strength lies in crafting clean UIs, optimizing performance, and solving problems with precision.
</p>
<p className="mb-3">
  I thrive in environments that demand innovation and deep technical thinking—from developing full-stack apps to architecting APIs with{" "}
  <span className="font-medium">NestJS, Prisma, PostgreSQL, and Redis</span>. I'm also proficient in{" "}
  <span className="font-medium">CI/CD, Docker, and cloud-native workflows</span>, making deployment smooth and efficient.
</p>
<p className="mb-3">
  With a knack for Data Structures & Algorithms (LeetCode Rating 2045), I bring strong problem-solving skills to every project. 
  Feel free to explore my portfolio and see how I combine performance, design, and innovation to deliver impactful solutions.
</p>


    </motion.section>
  );
}