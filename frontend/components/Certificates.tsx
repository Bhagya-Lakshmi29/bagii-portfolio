"use client";
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const achievements = [
  { title: "CODE-A-THON", org: "Zeitgeist", icon: <Award size={24} /> },
  { title: "Infosys Springboard", org: "Infosys", icon: <Star size={24} /> }
];

export default function Certificates() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements & <span className="gradient-text">Certificates</span></h2>
          <div className="w-20 h-1 bg-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card p-6 rounded-2xl flex items-center gap-6 hover:bg-white/5 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green to-blue flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-green font-medium">{item.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
