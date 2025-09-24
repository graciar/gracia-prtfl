import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { div, ul } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectList = [
    {
      title: "Chat App",
      desc: "Real-time chat app with secure login, instant messaging, friend requests, and one-on-one chats.",
      image: "./chat.png",
      link: "https://example.com",
      tech: "Flask, React, PostgreSQL, Tailwind CSS, RESTful API, Postman, JWT, Socket.IO "
      // github: "",
    },
    {
      title: "Portfolio Website",
      desc: "A personal website built with React & Tailwind.",
      image: "./portfolio.png",
      link: "https://example.com",
      tech: "React, Tailwind CSS"
      // github: "",
    },
    {
      title: "Event Management Web App",
      desc: "A full-stack web application for managing events, tickets, and user participation. Built with Laravel and Bootstrap.",
      image: "./cal.png",
      link: "https://example.com",
      tech: "Laravel, MySQL, Bootstrap"
      // github: "",
    },
    {
      title: "Risk Assessment",
      desc: "A web-based application that assists organizations in identifying, analyzing, and prioritizing information security risks, following the guidelines of NIST SP 800-30.",
      image: "./security.png",
      link: "url('./riskmgt.png')",
      tech: "Flask, Postgres"
      // github: "",
    },
    {
      title: "Pomodoro Timer",
      desc: "A minimal web timer that switches between work and break sessions using the Pomodoro Technique.",
      image: "./clock.png",
      link: "https://example.com",
      tech: "HTML, CSS, JS"
      // github: "",
    },
  ];
  return(
    <div className="max-w-6xl mx-auto px-4 py-8" id="projects">
      <h1 className="text-3xl font-bold flex flex-row justify-center text-gray-800 dark:text-gray-200 mb-6">Projects</h1>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}


