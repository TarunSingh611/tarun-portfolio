// File: src/components/About.js
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                I'm a results-driven Software Developer with a strong focus on Frontend technologies,
                                including Next.js and React. My journey began with C++ and Python, eventually leading
                                me to discover my passion for creating beautiful and functional web applications.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Currently working at Axtrum Solutions pvt ltd in Noida, I've had the opportunity to
                                design and develop dynamic websites and custom web applications that solve real-world
                                problems.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                I'm constantly learning and expanding my skillset, with a particular interest in
                                Backend development to become a more well-rounded developer.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="rounded-lg shadow-xl flex items-center justify-center">
                                <img
                                    src="/images/profile/Avatar.png"
                                    alt="Tarun Singh"
                                    className="object-center w-2/3 h-2/3"
                                />
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
