import React from 'react'
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from 'react-icons/lu';
import QuickCart from "@/public/QuickCart.png";
import DeployMate from "@/public/DeployMate.png";
import HireSight from "@/public/HireSight.png";
import EcommerceCloud from "@/public/EcommerceCloud.png"
import { FaSchool } from 'react-icons/fa';
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
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;
  
  export const projectsData = [
    
     {
  title: "Hiresight",
  description:
    "Hiresight is a full-stack AI-powered career coaching platform built with Next.js 14, React, and Tailwind CSS. It offers smart onboarding, real-time mock interviews with Gemini AI, personalized resume building, and weekly career insights via Inngest – all designed to accelerate your job readiness in one intuitive dashboard.",
  url: "https://hiresight-three.vercel.app/",
  tags: [
    "Next.js",
    "React",
    "JavaScript",
    "NextAuth.js",
    " Gemini API",
    "Inngest"
  ],
  imageUrl: HireSight, // replace with actual imported image
}


    ,
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

  ] as const;export const experiencesData = [
    // {
    //   title: "6th-12th",
    //   location: "Jawahar Navodaya Vidyalaya Kanpur dehat",
    //   icon: React.createElement(FaSchool),
    // },
    {
      title: "BTECH CSE",
      location: "CSJMU KANPUR",
      description: "2021-2025",
      icon: React.createElement(LuGraduationCap),
      date: "dece2021-May2025",
    },
    {
      title: "Full Stack Developer Intern",
      location: "Sponsogram, Delhi",
      description: `
      
        Designed, developed, and maintained 10+ dynamic React components and complex features, including an influencer dashboard, sidebar, and search bar, using Next.js, TypeScript, and React, improving performance by 25%. 
       
       
        Translated 20\% of UI/UX designs into fully functional, interactive user interfaces, ensuring seamless performance across all major browsers with HTML, Tailwind CSS, and React. 
       
       
        Enhanced user engagement by implementing responsive design and accessibility features, achieving a 30\% improvement in user satisfaction metrics on both desktop and mobile platforms. 
        
        
        Optimized cross-browser compatibility and mobile responsiveness for web application user interfaces, reducing bug reports by 40\%. 
        
        
        Collaborated with cross-functional teams to deliver high-quality solutions, contributing to an 18\% increase in user retention rates.
      `,
      icon: React.createElement(CgWorkAlt),
      date: "June 2024 – September 2024",
    },
    {
      title: "Full-Stack Developer",
      location: "Agility Solutions LLC",
      description: `
        Architected high-performance web applications using Next.js, React, TypeScript, and Tailwind CSS, improving load speeds by
40\% and ensuring seamless cross-device experiences.
 Constructed scalable RESTful & GraphQL APIs with NestJS, Node.js, and Prisma, cutting database query time by 10% while
ensuring secure authentication & authorization.
 Revamped application state management using React Context and optimized UI/UX with Tailwind CSS, decreasing API latency
by 10\% and driving user engagement up 15\% through responsive dashboards.
 Streamlined CI/CD pipelines using GitHub Actions, Docker, and AWS, reducing deployment time by 12\% and enabling
zero-downtime releases.
      `,
      icon: React.createElement(FaReact),
      date: "december 2024 - March 2025",
    },
  ] as const;
  