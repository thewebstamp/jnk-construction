'use client';

import { motion } from 'framer-motion';
import { Home, Hammer, PlusSquare, Building, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
    {
        id: 1,
        title: 'New Construction',
        description: 'Complete residential and commercial construction from ground up with modern design and sustainable materials.',
        icon: Home,
        features: ['Custom Design', 'Modern Materials', 'Full Permitting', 'Turnkey Solutions'],
        color: 'from-blue-600 to-blue-700',
        bgColor: 'bg-blue-600',
        delay: 0.1,
        image: '/images/NewConstruction.jpeg'
    },
    {
        id: 2,
        title: 'Remodeling',
        description: 'Transform existing spaces with innovative designs that enhance functionality and aesthetic appeal.',
        icon: Hammer,
        features: ['Kitchen & Bath', 'Interior Updates', 'Space Optimization', 'Modern Finishes'],
        color: 'from-emerald-600 to-emerald-700',
        bgColor: 'bg-emerald-600',
        delay: 0.2,
        image: '/images/HomeRemodeling.jpg'
    },
    {
        id: 3,
        title: 'Home Additions',
        description: 'Expand your living space with seamless additions that complement your existing home architecture.',
        icon: PlusSquare,
        features: ['Room Extensions', 'Second Stories', 'Sunrooms', 'Garage Conversions'],
        color: 'from-amber-600 to-amber-700',
        bgColor: 'bg-amber-600',
        delay: 0.3,
        image: '/images/HomeAddition.jpeg'
    },
    {
        id: 4,
        title: 'ADU Construction',
        description: 'Build accessory dwelling units for rental income, multi-generational living, or home offices.',
        icon: Building,
        features: ['Guest Houses', 'In-Law Units', 'Rental Properties', 'Home Offices'],
        color: 'from-purple-600 to-purple-700',
        bgColor: 'bg-purple-600',
        delay: 0.4,
        image: '/images/ADU.jpg'
    }
];

export default function ServicesShowcase() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 py-20 lg:py-28">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-blue-50 to-transparent" />
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-linear-to-br from-blue-100/50 to-transparent" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-linear-to-tr from-gray-100/50 to-transparent" />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.07]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,#2563eb_100%)] bg-size-[70px_70px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,#2563eb_100%)] bg-size-[70px_70px]" />
                </div>
            </div>

            <div className="section-padding relative z-10">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-3"
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-sm font-semibold text-blue-700">Our &nbsp;Expertise</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-body text-gray-900 mb-5"
                        >
                            Comprehensive <span className="text-blue-600">Construction Services</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl lg:text-[26px] font-body text-gray-600"
                        >
                            From groundbreaking to final touches, we deliver exceptional craftsmanship for every project
                        </motion.p>
                    </div>

                    {/* Service Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: service.delay }}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                {/* Main Card */}
                                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-200">
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent z-10" />
                                        <Image
                                            src={service.image}
                                            alt={`${service.title} by JNK Construction`}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-400"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />

                                        {/* Image Overlay */}
                                        <div className="absolute inset-0 z-20 flex items-end p-6">
                                            <div className={`p-3 rounded-xl ${service.bgColor}/90 backdrop-blur-sm`}>
                                                <service.icon className="w-7 h-7 text-white" />
                                            </div>
                                        </div>

                                        {/* Service Badge */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <div className={`px-3 py-1.5 rounded-full ${service.bgColor} text-white text-xs font-semibold font-heading`}>
                                                Service #{index + 1}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="mb-4 font-body">
                                            <h3 className="text-[21px] md:text-2xl lg:text-[26px] font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                                                {service.title}
                                            </h3>
                                            <p className="text-black text-xl md:text-[22px] lg:text-[24px] font-light leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Features List */}
                                        <div className="space-y-2 mb-6 font-body">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    <span className="text-[18px] md:text-xl lg:text-[22px] text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <Link
                                            href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-[15px] md:text-base lg:text-[18px] group/btn"
                                        >
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </div>

                                    {/* Hover Effect Border */}
                                    <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${service.bgColor.replace('bg-', '')}/20 transition-all duration-500 pointer-events-none`} />
                                </div>

                                {/* Floating Elements on Hover */}
                                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                </div>
                            </motion.div>
                        ))}

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="relative text-center md:col-span-2 flex items-center justify-center bg-blue-400/7 rounded-2xl overflow-hidden"
                        >
                            <div className="relative group w-fit h-fit p-6 md:p-8 rounded-2xl overflow-hidden">
                                {/* Background with Grid Pattern */}
                                <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-blue-950">
                                    {/* Grid overlay */}
                                    <div className="absolute inset-0 opacity-[0.08]">
                                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_97%,#93c5fd_100%)] bg-size-[80px_80px]" />
                                        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_97%,#93c5fd_100%)] bg-size-[80px_80px]" />
                                    </div>

                                    {/* Floating elements */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-linear-to-bl from-blue-700/20 to-blue-600/10 blur-xl" />
                                    <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-linear-to-tr from-blue-600/15 to-blue-700/10 blur-xl" />

                                    {/* Border effect */}
                                    <div className="absolute inset-0 border border-blue-700/30 rounded-2xl group-hover:border-blue-500/50 transition-all duration-500" />
                                </div>

                                {/* Shimmer effect on hover */}
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                {/* Content */}
                                <div className="relative z-10 max-w-2xl mx-auto text-center w-full">
                                    {/* Icon */}
                                    <div className="mb-6 flex justify-center">
                                        <div className="p-4 rounded-xl bg-linear-to-br from-blue-600/20 to-blue-700/20 border border-blue-600/30">
                                            <Star className="w-5 h-5 text-blue-300" />
                                        </div>
                                    </div>

                                    {/* Heading */}
                                    <h3 className="text-[26px] lg:text-3xl font-body font-bold text-white mb-4">
                                        Ready to Start Your <span className="bg-linear-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">Project?</span>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[19px] lg:text-[21px] text-blue-100/90 mb-8 font-body max-w-xl mx-auto">
                                        Get a free consultation and personalized estimate for your construction project
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center font-body">
                                        <Link
                                            href="/contact"
                                            className="text-lg lg:text-xl group relative px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                                        >
                                            {/* Shimmer effect */}
                                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                            <span>Get Free Estimate</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                        <a
                                            href="tel:213-269-8224"
                                            className="text-lg lg:text-xl group px-8 py-4 bg-linear-to-r from-blue-900/40 to-blue-800/40 backdrop-blur-sm border border-blue-700/40 text-white font-semibold rounded-xl hover:border-blue-500 hover:text-white hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center gap-3"
                                        >
                                            <span>Call Now</span>
                                            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300" />
                                        </a>
                                    </div>

                                    {/* Small text */}
                                    <p className="text-sm font-body text-blue-300/70 mt-6">
                                        No obligation • Free consultation • Transparent pricing
                                    </p>
                                </div>

                                {/* Floating decoration */}
                                <div className="absolute top-4 right-4 w-8 h-8 border border-blue-600/30 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                                <div className="absolute bottom-4 left-4 w-6 h-6 border border-blue-600/20 rounded-full" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent" />
        </section>
    );
}