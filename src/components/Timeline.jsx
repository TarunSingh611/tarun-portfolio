// File: src/components/Timeline.js
import { motion } from 'framer-motion';



export default function Timeline({experiences, education}) {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Experience & Education
          </h2>

          <div className="relative">
            {/* Timeline line for mobile */}
            <div className="md:hidden absolute left-5 top-0 w-1 h-full bg-blue-200"></div>

            {/* Timeline line for desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {/* Experience and education items */}
            <div className="space-y-16">
              {[...experiences, ...education]?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Circle indicator */}
                  <div className="absolute left-4 md:relative md:hidden transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 z-10"></div>

                  {/* Content container */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg md:w-1/2 w-full mt-8 md:mt-0  ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">
                      {item?.title || item?.degree}
                    </h3>
                    <p className="text-blue-600 mb-2">
                      {item?.company || item?.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {item?.location}
                    </p>
                    <p className="text-gray-500 mb-4">{item?.period}</p>
                    {item?.description && (
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                        {item?.description?.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
