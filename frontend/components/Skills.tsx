"use client";
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend", color: "bg-pink", skills: [
      { name: "HTML", level: 90 }, { name: "CSS", level: 85 }, { name: "JavaScript", level: 80 },
      { name: "Bootstrap", level: 75 }, { name: "Tailwind", level: 90 }, { name: "React", level: 80 }, { name: "Next.js", level: 70 }
    ]
  },
  {
    category: "Backend & Database", color: "bg-blue", skills: [
      { name: "Node.js", level: 75 }, { name: "Express.js", level: 80 }, { name: "Python", level: 70 },
      { name: "REST API", level: 85 }, { name: "MongoDB", level: 80 }, { name: "MySQL", level: 75 }
    ]
  },
  {
    category: "Tools & Soft Skills", color: "bg-green", skills: [
      { name: "Git & GitHub", level: 85 }, { name: "VS Code", level: 95 },
      { name: "Problem Solving", level: 90 }, { name: "Team Work", level: 95 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
          <div className="w-20 h-1 bg-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${group.color}`}></span>
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                        className={`h-2 rounded-full ${group.color}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
