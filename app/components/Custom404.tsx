/* eslint-disable react-hooks/purity */
'use client';

import { motion } from 'framer-motion';
import { Home, Construction, ArrowRight, Hammer, Wrench, Building } from 'lucide-react';
import Link from 'next/link';

export default function Custom404() {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-gray-900 via-gray-950 to-blue-950 min-h-screen flex items-center justify-center py-20">
            {/* Background Elements - Matching Hero Section */}
            <div className="absolute inset-0">
                {/* Deep gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-blue-800/40 to-blue-900/30" />

                {/* Abstract geometric shapes */}
                <div
                    className="absolute -top-20 -right-20 w-64 h-64 md:-top-32 md:-right-32 md:w-96 md:h-96 rounded-full bg-linear-to-bl from-blue-700/20 to-blue-600/10"
                    style={{ borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%' }}
                />

                <div
                    className="absolute -bottom-20 -left-20 w-64 h-64 md:-bottom-32 md:-left-32 md:w-96 md:h-96 rounded-full bg-linear-to-tr from-blue-600/15 to-blue-700/10"
                    style={{ borderRadius: '40% 60% 30% 70% / 60% 40% 70% 30%' }}
                />

                {/* Floating particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.07]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,#93c5fd_100%)] bg-size-[70px_70px]" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,#93c5fd_100%)] bg-size-[70px_70px]" />
            </div>

            <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        {/* Main Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800/40 backdrop-blur-sm rounded-full border border-blue-700/30 mb-6">
                                <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-400 to-blue-300 animate-pulse" />
                                <span className="text-sm font-semibold text-blue-200 font-body">
                                    Page Under Construction
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-body text-white mb-6">
                                Page Not Built Yet
                            </h1>

                            <p className="text-xl md:text-2xl lg:text-[26px] font-body font-light text-blue-100/90 leading-relaxed max-w-3xl mx-auto">
                                We can proceed to developing the rest of the pages if you have interest in keeping this website
                            </p>
                        </motion.div>

                        {/* Construction Tools Animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex justify-center gap-6 mb-12"
                        >
                            {[Hammer, Wrench, Building].map((Icon, index) => (
                                <motion.div
                                    key={index}
                                    animate={{
                                        rotate: [0, 10, 0, -10, 0],
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.3,
                                    }}
                                    className="p-3 md:p-4 rounded-xl bg-blue-800/30 border border-blue-700/30"
                                >
                                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-300" />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                        >
                            <Link
                                href="/"
                                className="group px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg md:rounded-xl hover:from-blue-500 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 md:gap-3"
                            >
                                <Home className="w-5 h-5" />
                                <span className="text-lg md:text-xl font-body">Return to Homepage</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </motion.div>

                        {/* Developer Note */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="mt-8 text-center"
                        >
                            <p className="text-blue-300/70 text-sm md:text-base">
                                This page is currently under development. Check back soon or contact us to discuss additional pages.
                            </p>
                            <div className="flex items-center justify-center gap-2 mt-4">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-blue-950 to-transparent" />
        </section>
    );
}