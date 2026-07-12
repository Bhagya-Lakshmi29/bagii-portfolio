"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          <div className="relative z-10 text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            <p className="mb-6">
              I am a passionate <strong className="text-white">Full Stack Developer</strong> and <strong className="text-white">Computer Science Student</strong> from Andhra Pradesh. 
              I specialize in turning complex problems into elegant, beautiful, and highly functional web applications.
            </p>
            <p>
              With a strong foundation in both frontend and backend technologies, I enjoy creating seamless digital experiences that not only look premium but perform exceptionally well. Always learning and eager to take on new challenges!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
