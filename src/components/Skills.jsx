// File: src/components/Skills.js
import { motion } from 'framer-motion';

const skills = {
  languages: ["JavaScript", "C++", "Python", "HTML", "CSS"],
  frameworks: ["React", "Next.js", "Express", "Node.js"],
  libraries: ["Formik", "Redux"],
  databases: ["MongoDB", "MySQL"],
  tools: ["Visual Studio Code", "Git"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
