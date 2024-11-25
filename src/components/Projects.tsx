import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CreditCard, Server } from 'lucide-react';

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Payment Aggregator Project',
      period: '2022-Present',
      icon: <CreditCard className="text-blue-400" size={24} />,
      description: 'Pioneered end-to-end testing initiatives for merchant onboarding and POS device ordering systems, achieving a 40% increase in test coverage and reducing defect rates by 30%. Collaborated extensively with cross-functional teams to streamline workflows and ensure seamless alignment of business objectives with technical execution. Implemented advanced testing methodologies, enhanced automation frameworks, and conducted rigorous performance testing to guarantee system reliability under high-demand scenarios. These efforts resulted in elevated product quality, improved customer satisfaction, and optimized operational efficiency across the entire delivery pipeline.',
      tags: ['E2E Testing', 'Automation', 'Payment Systems'],
    },
    {
      title: 'SA-MP Development',
      period: '2014-2018',
      icon: <Server className="text-purple-400" size={24} />,
      description: 'Successfully managed server hosting, overseeing the setup, maintenance, and optimization of file systems and server configurations. Streamlined processes for player interaction management by developing efficient systems to handle real-time requests and data exchanges. Implemented advanced security protocols to safeguard systems from vulnerabilities, ensuring data integrity and privacy. Enhanced server performance through optimization techniques, reducing downtime and increasing response efficiency. Demonstrated expertise in troubleshooting and proactive issue resolution, ensuring uninterrupted operations and a seamless user experience.Managed server hosting and developed systems for file transfers and player interaction management. Implemented robust security measures and optimization techniques.',
      tags: ['Server Management', 'Game Development', 'Security'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <span className="text-sm text-gray-400">{project.period}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};