/* eslint-disable react-hooks/purity */
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Home, Building } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-gray-900 via-gray-950 to-blue-950 min-h-[90svh] lg:min-h-svh flex py-19 md:py-22 lg:items-center">
            {/* Rich Background Elements */}
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
                {[...Array(10)].map((_, i) => (
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
            <div className="absolute inset-0 opacity-[0.05]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,#93c5fd_100%)] bg-size-[70px_70px]" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,#93c5fd_100%)] bg-size-[70px_70px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-8 md:py-12">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Content - Centered for mobile */}
                        <div className="space-y-2 md:space-y-5 text-center lg:text-left">
                            {/* Premium Tagline */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-blue-800/40 backdrop-blur-sm rounded-full border border-blue-700/30">
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-linear-to-r from-blue-400 to-blue-300 animate-pulse" />
                                    <span className="text-xs md:text-sm font-body font-semibold text-blue-200">
                                        Premium Contractor Since 2005
                                    </span>
                                </div>
                            </motion.div>

                            {/* Bold Headline with Gradient */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-4 md:space-y-6"
                            >
                                <h1 className="text-[32px] sm:text-4xl font-body md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.1]">
                                    <span className="text-white">General {` `}</span>
                                    <span className="bg-linear-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
                                        Contractor {` `}
                                    </span>
                                    <span className="text-white">in {` `}</span>
                                    <span className="text-blue-300">Southbay, CA</span>
                                </h1>

                                <p className="text-[17px] sm:text-[19px] font-body md:text-[22px] text-blue-100/90 leading-relaxed mx-auto lg:mx-0">
                                    Premier construction and remodeling services with
                                    <span className="font-semibold text-blue-200"> 19+ years</span> of unmatched craftsmanship and attention to detail.
                                </p>
                            </motion.div>

                            {/* Service Cards with Glass Effect - Centered for mobile */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0 font-body"
                            >
                                {[
                                    { icon: Home, label: 'Residential', color: 'from-blue-800/40 to-blue-700/30' },
                                    { icon: Building, label: 'Commercial', color: 'from-blue-700/40 to-blue-600/30' },
                                ].map((service, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -4 }}
                                        className={`bg-linear-to-br ${service.color} backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-blue-700/20 hover:border-blue-500/40 hover:shadow-lg transition-all duration-300`}
                                    >
                                        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-2 md:gap-3">
                                            <div className="p-1.5 md:p-2.5 rounded-lg bg-blue-900/40 text-blue-300">
                                                <service.icon className="w-4 h-4 md:w-5 md:h-5" />
                                            </div>
                                            <div className="text-center lg:text-left">
                                                <div className="text-sm md:text-base font-semibold text-white">{service.label}</div>
                                                <div className="text-xs text-blue-300/80">Expert Service</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Stats & CTA Section - Centered for mobile */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                className="space-y-6 pt-2 md:pt-4"
                            >
                                {/* Quick Stats */}
                                <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-8">
                                    <div className="text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-blue-400">19+</div>
                                        <div className="text-xs md:text-sm text-blue-300/80 font-body">Years</div>
                                    </div>
                                    <div className="h-0.5 md:h-0.75 w-3 bg-gray-300" />
                                    <div className="text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-blue-400">500+</div>
                                        <div className="text-xs md:text-sm text-blue-300/80 font-body">Projects</div>
                                    </div>
                                    <div className="h-0.5 md:h-0.75 w-3 bg-gray-300" />
                                    <div className="text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-blue-400">100%</div>
                                        <div className="text-xs md:text-sm text-blue-300/80 font-body">Licensed</div>
                                    </div>
                                </div>

                                {/* CTA Buttons - Centered for mobile */}
                                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                                    <Link
                                        href="/contact"
                                        className="group px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg md:rounded-xl hover:from-blue-500 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 md:gap-3"
                                    >
                                        <span className="text-[19px] md:text-[22px] font-body">Get Free Estimate</span>
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="/projects"
                                        className="group px-6 py-3 md:px-8 md:py-4 bg-blue-900/40 backdrop-blur-sm border border-blue-700/30 text-blue-200 font-semibold rounded-lg md:rounded-xl hover:border-blue-500 hover:text-white hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center gap-2"
                                    >
                                        <span className="text-[19px] md:text-[22px] font-body group-hover:text-white">View Portfolio</span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Content - Image Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="relative"
                        >
                            {/* Main Image Container - Adjusted size for desktop */}
                            <div className="relative max-w-md mx-auto lg:max-w-lg xl:max-w-xl">
                                {/* Background glow effect */}
                                <div className="absolute -inset-3 sm:-inset-4 md:-inset-5 bg-linear-to-br from-blue-700/20 to-blue-600/10 rounded-2xl sm:rounded-3xl blur-lg" />

                                {/* Curved image container - Adjusted aspect ratio */}
                                <div
                                    className="relative aspect-square overflow-hidden"
                                    style={{
                                        borderRadius: '35% 65% 65% 35% / 65% 35% 65% 35%',
                                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)'
                                    }}
                                >
                                    <Image
                                        src="/images/holder.jpeg"
                                        alt="JNK Construction Luxury Home Design"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                                        priority
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-blue-900/60 via-blue-900/20 to-transparent" />
                                </div>

                                {/* Floating Elements - Desktop optimized positioning */}

                                {/* Rating Badge - Bottom Left - Better desktop positioning */}
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-5 md:-left-5 bg-linear-to-br from-gray-900 to-blue-800 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl md:shadow-2xl border border-blue-600/50"
                                    style={{
                                        borderRadius: '30% 70% 70% 30% / 70% 30% 70% 30%'
                                    }}
                                >
                                    <div className="text-center">
                                        <div className="flex justify-center gap-0.5 md:gap-1 mb-1 md:mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <div className="text-xs md:text-sm font-semibold text-white">5.0 Rating</div>
                                        <div className="text-xs text-blue-300">Client Reviews</div>
                                    </div>
                                </motion.div>

                                {/* Top Floating Image - Better desktop positioning */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -10 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 1.2, type: "spring" }}
                                    className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-26 h-26 sm:w-30 sm:h-30 md:w-34 md:h-34"
                                >
                                    <div
                                        className="relative w-full h-full overflow-hidden border-2 border-blue-700/50 shadow-lg md:shadow-xl"
                                        style={{
                                            borderRadius: '60% 40% 40% 60% / 60% 40% 60% 40%'
                                        }}
                                    >
                                        <Image
                                            src="/images/New2.jpg"
                                            alt="Construction Detail"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 20vw, 15vw"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-br from-blue-600/30 to-transparent" />
                                    </div>
                                    {/* Quality Badge */}
                                    <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 md:-top-3 md:-right-3 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                                        <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                                    </div>
                                </motion.div>

                                {/* Bottom Floating Image - Better desktop positioning */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.4 }}
                                    className="absolute bottom-4 right-10 sm:bottom-6 sm:right-16 md:bottom-8 md:right-22 w-22 h-22 sm:w-26 sm:h-26 md:w-30 md:h-30 sm:block"
                                >
                                    <div
                                        className="relative w-full h-full overflow-hidden border border-blue-600/30 shadow-md md:shadow-lg"
                                        style={{
                                            borderRadius: '70% 30% 30% 70% / 70% 30% 70% 30%'
                                        }}
                                    >
                                        <Image
                                            src="/images/Remodeling1.jpg"
                                            alt="Project Work"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 15vw, 10vw"
                                        />
                                    </div>
                                </motion.div>

                                {/* Decorative Line */}
                                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-48">
                                    <div className="h-0.5 bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Hidden on mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:block"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm text-blue-300 font-medium">Scroll to Discover</span>
                    <div className="w-6 h-10 border border-blue-700/50 rounded-full flex justify-center items-start pt-2">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-1.5 h-3 bg-linear-to-b from-blue-400 to-blue-300 rounded-full"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-linear-to-t from-blue-950 to-transparent" />
        </section>
    );
}