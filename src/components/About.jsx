// File: src/components/About.js
import { motion } from 'framer-motion';

export default function About({aboutMe}) {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-center mb-12">{aboutMe?.title}</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            {aboutMe?.professionalSummary?.map((summary,index)=>(<p key={index} className="text-lg text-gray-600 dark:text-gray-300">{summary}</p>))}
                        </div>
                        <div className="relative">
                            <div className="rounded-lg shadow-xl flex items-center justify-center">
                                <img
                                    src={aboutMe?.image?.imgSrc}
                                    alt={aboutMe?.image?.imgAlt}
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
