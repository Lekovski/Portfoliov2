import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { CVDownloadButton } from './CVDownloadButton';

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocJpexIEveiau3u_-32L4g0pATzYBeeZfejJ_yR5YSiiSDs8Cbqr=s324-c-no"
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-white/10 relative z-10"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
              Aleksandar Lekovski
            </span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            QA Engineer & Automation Expert
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Specializing in Payments Industry & Cross-Cultural Collaboration
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
            >
              <Mail size={20} /> Get in Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors"
            >
              View Projects
            </motion.a>
            <CVDownloadButton />
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};