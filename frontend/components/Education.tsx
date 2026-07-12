"use client";
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const eduData = [
  {
    title: "B.Tech in Computer Science",
    institution: "Aditya University",
    score: "CGPA: 8.1",
    year: "Graduation",
    icon: <GraduationCap size={24} className="text-white" />,
    color: "bg-primary"
  },
  {
    title: "Intermediate",
    institution: "Oxford Mahila Junior College",
    score: "94.5%",
    year: "Higher Secondary",
    icon: <BookOpen size={24} className="text-white" />,
    color: "bg-pink"
  },
  {
    title: "SSC",
    institution: "Sri Vidhya Model High School",
    score: "96.7%",
    year: "Secondary Education",
    icon: <Award size={24} className="text-white" />,
    color: "bg-cyan"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="gradient-text">Education</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-gray-700 ml-3 md:ml-0">
          {eduData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-10 ml-8 md:ml-12 relative"
            >
              <span className={`absolute -left-[45px] md:-left-[61px] top-0 flex h-10 w-10 items-center justify-center rounded-full ring-8 ring-background ${item.color}`}>
                {item.icon}
              </span>
              <div className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                <span className="text-sm font-semibold tracking-wider text-pink uppercase mb-2 block">{item.year}</span>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 mb-3">{item.institution}</p>
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-cyan">
                  {item.score}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
