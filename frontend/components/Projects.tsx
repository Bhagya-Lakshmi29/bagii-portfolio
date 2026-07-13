"use client";
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import React, { MouseEvent } from 'react';

const projects = [
  {
    title: "StudyCircle",
    description: "Collaborative learning platform where students create study groups, share notes, discuss doubts and learn together.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Bhagya-Lakshmi29",
    live: "#",
    color: "from-primary to-pink"
  },
  {
    title: "To Do List",
    description: "A beautiful and functional task management application with local storage persistence and smooth animations.",
    tech: ["React", "Tailwind", "JavaScript", "CSS"],
    github: "https://github.com/Bhagya-Lakshmi29",
    color: "from-blue to-cyan"
  },
  {
    title: "Calculator",
    description: "Built a responsive calculator that performs basic arithmetic operations with a clean and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Bhagya-Lakshmi29",
    color: "from-orange to-pink"
  }
];

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  color: string;
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      className="group relative max-w-md w-full rounded-2xl glass-card border border-white/10 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 40%
            )
          `,
        }}
      />
      <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t: string, i: number) => (
            <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
            <Github size={18} /> Code
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan transition-colors">
            <ExternalLink size={18} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-20 h-1 bg-pink mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
