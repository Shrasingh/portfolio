import React from 'react'
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from 'react-icons/lu';
import QuickCart from "@/public/QuickCart.png";
import DeployMate from "@/public/DeployMate.png";
import EcommerceCloud from "@/public/EcommerceCloud.png"

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    // {
    //   name: "Experience",
    //   hash: "#experience",
    // },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;
  
  export const projectsData = [
    {
      title: "QuickCart",
      description:
        "QuickCart, built with Next.js, React, and Tailwind CSS, integrates with EcommerceCloud for advanced browsing, filtering, purchasing, quick previews, customizable filters, detailed product pages, and a streamlined checkout, enhancing user experience",
      url : 'https://quickcart-six.vercel.app/',
      tags: ["Next.js", "React", "TypeScript", "Tailwind", "Prisma" , "Stripe"],
      imageUrl: QuickCart,
    },
    {
      title: "Ecommerce Cloud",
      description:
        "EcommerceCloud: Multi-store management dashboard with secure user authentication and reliable database management.",
      url : 'https://ecommerce-cloud-indol.vercel.app/',
      tags: ["React", "Next.js",  "TypeScript", "Tailwind", "Zustand", "Supabase", "Prisma", "Stripe", "Clerk"],
      imageUrl: EcommerceCloud,
    },
    {
      title: "DeployMate",
      description:
        "DeployMate: Automate GitHub project deployment with Next.js frontend and AWS backend.",
      url : 'https://github.com/Shrasingh/',
      tags: [ "Next.js", "TypeScript", "PostgreSQL", "Tailwind", "Docker", "AWS",  "Kafka", "ClickHouse"],
      imageUrl: DeployMate,
    },
  ] as const;
  export const skillsData = [
    "Java",
    "Python",
    "Data Structures",
    "Algorithms",
    "Operating System",
    "Computer Network",
    "Software engineering",
    "DBMS",
    "OOPs",
    "Javscript",
    "TypeScript",
    "React",
    "Tailwind",
     "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Sql",
    "PostgreSQL",
    "Prisma",
    "Git",
    "Zustand",
   // "GraphQL",
   
    "Stripe",
    "Docker",
    "Aws",
    "Linux",
    "Kafka",
    "Redis",
    "Framer Motion",

  ] as const;
  export const experiencesData = [
    {
      title: "Graduated bootcamp",
      location: "Miami, FL",
      description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
      icon: React.createElement(LuGraduationCap),
      date: "2025",
    },
    {
      title: "Front-End Developer",
      location: "Orlando, FL",
      description:
        "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
      icon: React.createElement(CgWorkAlt),
      date: "2019 - 2021",
    },
    {
      title: "Full-Stack Developer",
      location: "Houston, TX",
      description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2021 - present",
    },
  ] as const;