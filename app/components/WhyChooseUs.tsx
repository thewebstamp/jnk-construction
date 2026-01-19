'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Clock, Trophy, CheckCircle, Home } from 'lucide-react';
import { useState } from 'react';

const whyChooseUs = [
    {
        id: 1,
        title: '19+ Years of Excellence',
        description: 'Established in 2005, we bring nearly two decades of construction expertise to every project.',
        icon: Trophy,
        stats: 'Since 2005',
        color: 'from-amber-500 to-amber-600',
        delay: 0.1
    },
    {
        id: 2,
        title: 'Fully Licensed & Insured',
        description: 'Complete protection with comprehensive insurance coverage and state licensing for your peace of mind.',
        icon: Shield,
        stats: '100% Licensed',
        color: 'from-blue-500 to-blue-600',
        delay: 0.2
    },
    {
        id: 3,
        title: 'Southbay Specialists',
        description: 'Deep local knowledge of Southbay building codes, regulations, and material suppliers.',
        icon: Home,
        stats: 'Local Experts',
        color: 'from-emerald-500 to-emerald-600',
        delay: 0.3
    },
    {
        id: 4,
        title: 'Transparent Pricing',
        description: 'No hidden costs. Detailed estimates with clear breakdowns and honest communication.',
        icon: CheckCircle,
        stats: 'No Surprises',
        color: 'from-purple-500 to-purple-600',
        delay: 0.4
    },
    {
        id: 5,
        title: 'Timely Completion',
        description: 'We respect your time. 95% of our projects finish on or before the scheduled completion date.',
        icon: Clock,
        stats: '95% On Time',
        color: 'from-cyan-500 to-cyan-600',
        delay: 0.5
    },
    {
        id: 6,
        title: 'Quality Craftsmanship',
        description: 'Attention to detail and premium materials ensure lasting results that exceed expectations.',
        icon: Award,
        stats: 'Premium Quality',
        color: 'from-rose-500 to-rose-600',
        delay: 0.6
    }
];

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <section className="relative overflow-hidden bg-linear-to-r from-gray-900 to-gray-800 py-20 lg:py-28">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle gradient mesh */}
                <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-amber-500/5 via-transparent to-transparent" />
                <div className="absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-linear-to-bl from-amber-500/10 via-transparent to-transparent blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-linear-to-tr from-blue-500/10 via-transparent to-transparent blur-3xl" />

                {/* Geometric patterns */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 md:w-3 md:h-3 rounded-full bg-amber-500/20 animate-pulse" />
                <div className="absolute top-1/3 right-1/3 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 md:w-3 md:h-3 rounded-full bg-emerald-500/20 animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-[0.07]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,#f59e0b_100%)] bg-size-[70px_70px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,#f59e0b_100%)] bg-size-[70px_70px]" />
                </div>
            </div>

            <div className="section-padding relative z-10">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 backdrop-blur-sm rounded-full mb-3 border border-amber-500/20"
                        >
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <span className="text-sm font-semibold text-amber-200">Why &nbsp;Choose &nbsp;Us</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-body text-white mb-5"
                        >
                            The <span className="text-amber-400">JNK Construction</span> Difference
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl lg:text-[26px] font-body font-light text-gray-300"
                        >
                            Experience the difference that nearly two decades of excellence, integrity, and craftsmanship makes
                        </motion.p>
                    </div>

                    {/* Why Choose Us Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-10">
                        {whyChooseUs.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: item.delay }}
                                onMouseEnter={() => setHoveredCard(item.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="group relative"
                            >
                                {/* Main Card */}
                                <div className="relative h-full bg-linear-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500">
                                    {/* Animated Background Gradient */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    {/* Content */}
                                    <div className="relative p-6 lg:p-8">
                                        {/* Icon Container */}
                                        <div className="mb-5 lg:mb-6">
                                            <div className="relative">
                                                <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-20 blur-xl rounded-full`} />
                                                <div className={`relative w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center`}>
                                                    <item.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stats Badge */}
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-700/50 backdrop-blur-sm mb-4">
                                            <span className="text-sm font-semibold text-amber-300">{item.stats}</span>
                                        </div>

                                        {/* Title & Description */}
                                        <h3 className="text-xl lg:text-2xl font-bold font-body text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300 text-lg font-body font-light lg:text-[21px] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Bottom Border Effect */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    {/* Corner Accents */}
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gray-700/50 group-hover:border-amber-500/30 transition-colors duration-500 rounded-tr-2xl" />
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gray-700/50 group-hover:border-amber-500/30 transition-colors duration-500 rounded-bl-2xl" />
                                </div>

                                {/* Floating Glow Effect */}
                                <div className={`absolute -inset-1 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-r from-amber-900/20 via-amber-800/15 to-amber-900/20" />
                            <div className="absolute -inset-10">
                                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-linear-to-bl from-amber-500/10 to-transparent blur-3xl" />
                                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-linear-to-tr from-amber-600/10 to-transparent blur-3xl" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative bg-linear-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50">
                            <div className="p-8 lg:p-12 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", damping: 20, stiffness: 200 }}
                                    className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-linear-to-br from-amber-600 to-amber-700 mb-6 lg:mb-8"
                                >
                                    <Award className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                                </motion.div>

                                <h3 className="text-2xl lg:text-3xl font-bold font-body text-white mb-4">
                                    Ready to Experience the JNK Difference?
                                </h3>
                                <p className="text-gray-300 text-xl lg:text-2xl font-light max-w-2xl mx-auto mb-8 lg:mb-10 font-body">
                                    Join hundreds of satisfied Southbay homeowners and business owners who chose JNK Construction for their project.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.a
                                        href="/contact"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 group/btn"
                                    >
                                        <span className="text-lg lg:text-xl">Schedule Free Consultation</span>
                                        <div className="relative">
                                            <div className="absolute -inset-2 bg-amber-400/20 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                            <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </motion.a>

                                    <motion.a
                                        href="tel:213-269-8224"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600/50 text-white font-semibold rounded-xl hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 group/phone"
                                    >
                                        <div className="relative">
                                            <div className="absolute -inset-2 bg-amber-500/10 rounded-full opacity-0 group-hover/phone:opacity-100 transition-opacity duration-300" />
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <span className="text-lg lg:text-xl">Call Now: (213) 269-8224</span>
                                    </motion.a>
                                </div>

                                <p className="text-gray-400 text-sm lg:text-base mt-8 font-body">
                                    No obligation • Free on-site estimate • Licensed # available upon request
                                </p>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-amber-500/20 animate-pulse" />
                            <div className="absolute bottom-6 left-6 w-6 h-6 border border-amber-500/20 rounded-lg rotate-45" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Top Gradient Fade */}
            <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-gray-900 to-transparent" />

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-gray-900 to-transparent" />
        </section>
    );
}