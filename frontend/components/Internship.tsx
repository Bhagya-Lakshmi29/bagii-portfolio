"use client";
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Internship() {
  return (
    <section className="py-10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
          <div className="w-20 h-1 bg-orange mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 rounded-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange/20 rounded-xl text-orange">
              <Briefcase size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Front-End Web Development Intern</h3>
              <p className="text-xl text-gray-300 mb-4 flex items-center gap-2">
                <span className="font-semibold text-orange">1Stop.ai</span>
              </p>
              <p className="text-gray-400">
                Gained hands-on experience in building responsive and interactive user interfaces. 
                Collaborated with the team to implement new features using modern frontend technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
