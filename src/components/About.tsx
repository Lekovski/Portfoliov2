import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Languages } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Aleksandar is a QA Automation Tester with nearly 3 years of professional experience, excelling in manual and automation testing. Known for his collaborative spirit and strong grasp of cross-cultural teamwork, he has consistently contributed to high-quality software solutions.
              </p>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                  <p className="text-gray-400">Bachelor's degree in Computer Systems and Technologies (2019-2023)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Languages className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Languages</h3>
                  <p className="text-gray-400">Macedonian, English, Bulgarian, Serbian</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070"
                alt="Working environment"
                className="rounded-2xl w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};