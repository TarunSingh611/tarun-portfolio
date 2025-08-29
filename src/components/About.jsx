'use client';  
// File: src/components/About.js  
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';  
import Image from 'next/image';


export default function About({ aboutMe }) {  
    const ref = useRef(null);  
    const isInView = useInView(ref, { once: true, margin: "-100px" });  


    return (  
        <section id="about" className="relative py-20 overflow-hidden">  
            {/* Background decoration */}  
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-slate-900/50 dark:via-slate-800 dark:to-slate-900/50" />  
            
            {/* Floating elements */}  
            <div className="absolute inset-0 overflow-hidden">  
                <motion.div  
                    className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"  
                    animate={{  
                        scale: [1, 1.2, 1],  
                        opacity: [0.3, 0.6, 0.3],  
                    }}  
                    transition={{  
                        duration: 8,  
                        repeat: Infinity,  
                        ease: "easeInOut",  
                    }}  
                />  
                <motion.div  
                    className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"  
                    animate={{  
                        scale: [1.2, 1, 1.2],  
                        opacity: [0.4, 0.7, 0.4],  
                    }}  
                    transition={{  
                        duration: 10,  
                        repeat: Infinity,  
                        ease: "easeInOut",  
                    }}  
                />  
            </div>  

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
                <motion.div  
                    ref={ref}  
                    initial={{ opacity: 0, y: 20 }}  
                    animate={isInView ? { opacity: 1, y: 0 } : {}}  
                    transition={{ duration: 0.8 }}  
                    className="text-center mb-16"  
                >  
                    <motion.h2  
                        initial={{ opacity: 0, y: 20 }}  
                        animate={isInView ? { opacity: 1, y: 0 } : {}}  
                        transition={{ duration: 0.6, delay: 0.1 }}  
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"  
                    >  
                        <span className="text-gradient-primary">{aboutMe?.title}</span>  
                    </motion.h2>  
                    <motion.div  
                        initial={{ opacity: 0, scale: 0.8 }}  
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}  
                        transition={{ duration: 0.6, delay: 0.2 }}  
                        className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"  
                    />  
                </motion.div>  

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">  
                    {/* Content Section */}  
                    <motion.div  
                        initial={{ opacity: 0, x: -50 }}  
                        animate={isInView ? { opacity: 1, x: 0 } : {}}  
                        transition={{ duration: 0.8, delay: 0.3 }}  
                        className="order-2 lg:order-1"  
                    >  
                        <motion.div  
                            initial={{ opacity: 0, y: 20 }}  
                            animate={isInView ? { opacity: 1, y: 0 } : {}}  
                            transition={{ duration: 0.6, delay: 0.4 }}  
                            className="card-glass p-8 hover-lift h-full flex flex-col justify-center"  
                        >  
                            <div className="space-y-6">  
                                {aboutMe?.professionalSummary?.map((summary, index) => (  
                                    <p key={index} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">  
                                        {summary}  
                                    </p>  
                                ))}  
                            </div>  
                        </motion.div>  
                    </motion.div>  

                    {/* Image Section */}  
                    <motion.div  
                        initial={{ opacity: 0, x: 50 }}  
                        animate={isInView ? { opacity: 1, x: 0 } : {}}  
                        transition={{ duration: 0.8, delay: 0.5 }}  
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"  
                    >  
                        <div className="relative group">  
                            {/* Main image container */}
                            <motion.div  
                                whileHover={{ scale: 1.05 }}  
                                transition={{ duration: 0.3 }}  
                                className="relative z-10"  
                            >  
                                <div className="relative overflow-hidden">  
                                    <Image  
                                        src={aboutMe?.image?.imgSrc}  
                                        alt={aboutMe?.image?.imgAlt}  
                                        width={400}
                                        height={400}
                                        className="w-full h-auto object-cover max-w-md mix-blend-multiply rounded-xl"  
                                        priority
                                    />  
                                </div>  
                            </motion.div>  

                            {/* Decorative elements */}  
                            <motion.div  
                                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"  
                                animate={{  
                                    scale: [1, 1.2, 1],  
                                    opacity: [0.2, 0.4, 0.2],  
                                }}  
                                transition={{  
                                    duration: 4,  
                                    repeat: Infinity,  
                                    ease: "easeInOut",  
                                }}  
                            />  
                            <motion.div  
                                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-20 blur-xl"  
                                animate={{  
                                    scale: [1.2, 1, 1.2],  
                                    opacity: [0.3, 0.5, 0.3],  
                                }}  
                                transition={{  
                                    duration: 6,  
                                    repeat: Infinity,  
                                    ease: "easeInOut",  
                                }}  
                            />  
                        </div>  
                    </motion.div>  
                </div>  
            </div>  
        </section>  
    );  
}  