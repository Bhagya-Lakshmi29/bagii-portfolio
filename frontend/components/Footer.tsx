"use client";
import { Heart } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 glass mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-pink animate-pulse" /> by Bhagya Lakshmi
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Bhagya-Lakshmi29" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/perugu-bhagyalakshmi-674050342" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
