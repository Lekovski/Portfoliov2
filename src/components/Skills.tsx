import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, TestTube2, Workflow } from 'lucide-react';

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Languages & Tools',
      icon: <Code2 className="text-blue-400" size={24} />,
      skills: [
        { name: 'Selenium', category: 'Expert' },
        { name: 'Cypress', category: 'Expert' },
        { name: 'JMeter', category: 'Advanced' },
        { name: 'Rest Assured', category: 'Advanced' },
        { name: 'Protractor', category: 'Advanced' },
        { name: 'JavaScript', category: 'Intermediate' },
        { name: 'Python', category: 'Intermediate' },
        { name: 'SQL', category: 'Advanced' },
        { name: 'Angular', category: 'Basic' },
        { name: 'jQuery', category: 'Intermediate' },
      ],
    },
    {
      title: 'Testing Techniques',
      icon: <TestTube2 className="text-purple-400" size={24} />,
      skills: [
        { name: 'Automation Testing', category: 'Expert' },
        { name: 'API Testing', category: 'Expert' },
        { name: 'Performance Testing', category: 'Advanced' },
        { name: 'E2E Testing', category: 'Expert' },
        { name: 'Load Testing', category: 'Advanced' },
        { name: 'Security Testing', category: 'Intermediate' },
        { name: 'Mobile Testing', category: 'Advanced' },
        { name: 'Test Planning', category: 'Advanced' },
        { name: 'Bug Tracking', category: 'Expert' },
        { name: 'Test Documentation', category: 'Advanced' },
      ],
    },
    {
      title: 'Methodologies',
      icon: <Workflow className="text-green-400" size={24} />,
      skills: [
        { name: 'Scrum', category: 'Expert' },
        { name: 'SAFe 6.0', category: 'Advanced' },
        { name: 'Agile', category: 'Expert' },
        { name: 'CI/CD', category: 'Advanced' },
        { name: 'Test-Driven Development', category: 'Advanced' },
        { name: 'Behavior-Driven Development', category: 'Advanced' },
      ],
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Expert':
        return 'from-blue-500 to-purple-500';
      case 'Advanced':
        return 'from-blue-400 to-purple-400';
      case 'Intermediate':
        return 'from-blue-300 to-purple-300';
      default:
        return 'from-blue-200 to-purple-200';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="text-gray-300">{skill.name}</span>
                      <span className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)} text-white font-medium`}>
                        {skill.category}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};