"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4"
            >
              Hi 👋 <br/>
              I'm <span className="gradient-text">Bhagya Lakshmi</span>
            </motion.h1>
            
            <div className="h-12 mb-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-2xl text-cyan font-medium inline-block overflow-hidden whitespace-nowrap border-r-2 border-cyan pr-2 animate-typing"
              >
                Software Developer
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg sm:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Turning Ideas into Beautiful and Functional Web Applications.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a href="/resume.pdf" download className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-pink transition-colors rounded-full font-medium">
                <Download size={20} />
                Download Resume
              </a>
              <a href="#projects" className="flex items-center gap-2 px-6 py-3 glass hover:bg-cards transition-colors rounded-full font-medium">
                View Projects
              </a>
              <a href="#contact" className="flex items-center gap-2 px-6 py-3 glass hover:bg-cards transition-colors rounded-full font-medium">
                <Mail size={20} />
                Contact Me
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center lg:justify-start gap-6 mt-8"
            >
              <a href="https://github.com/Bhagya-Lakshmi29" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/perugu-bhagyalakshmi-674050342" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue transition-colors">
                <Linkedin size={28} />
              </a>
            </motion.div>
          </div>

          {/* 3D Flip Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div 
              className="relative w-72 h-72 sm:w-96 sm:h-96 cursor-pointer"
              style={{ perspective: 1000 }}
              onClick={() => setFlipped(!flipped)}
            >
              <motion.div
                className="w-full h-full relative preserve-3d"
                initial={false}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <div 
                  className="absolute w-full h-full backface-hidden rounded-full glass-card p-4 flex items-center justify-center overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-pink/20">
                    <Image 
                      src="/avatar.png" 
                      alt="Bhagya Lakshmi" 
                      fill 
                      className="object-contain p-4"
                    />
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute w-full h-full backface-hidden rounded-full glass-card flex flex-col items-center justify-center"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue text-center leading-tight drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                    SOFTWARE<br/>DEVELOPER
                  </h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <a href="#about" className="text-gray-400 hover:text-white">
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
