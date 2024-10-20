// File: src/components/Projects.js
import { motion } from 'framer-motion';

export default function Projects({projects}) {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
            {projects?.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-48 object-fit"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project?.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project?.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.techStack?.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  project?.link && <a
                    href={project?.link}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
