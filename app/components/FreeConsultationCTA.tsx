'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Calendar, ArrowRight, CheckCircle, Clock, Shield, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const contactMethods = [
    {
        id: 1,
        title: 'Call Now',
        description: 'Speak directly with our project manager for immediate assistance',
        value: '(213) 269-8224',
        icon: Phone,
        color: 'from-blue-600 to-blue-700',
        action: 'tel:213-269-8224',
    },
    {
        id: 2,
        title: 'Email Us',
        description: 'Send project details and receive a detailed quote by email',
        value: 'info@ jnkconstructioninc .com',
        icon: Mail,
        color: 'from-emerald-600 to-emerald-700',
        action: 'mailto:info@jnkconstructioninc.com',
    },
    {
        id: 3,
        title: 'Schedule Consultation',
        description: 'Book a free on-site assessment at your convenience',
        value: 'Free On-Site Visit',
        icon: Calendar,
        color: 'from-amber-600 to-amber-700',
        action: '/contact',
    }
];

const trustIndicators = [
    { text: 'Licensed & Insured', icon: Shield },
    { text: 'Free Estimate', icon: CheckCircle },
    { text: '19+ Years Experience', icon: Clock },
    { text: 'Southbay Specialists', icon: Home }
];

export default function FreeConsultationCTA() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 py-20 lg:py-28">
            {/* Background Elements - Consistent with other sections */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-blue-50/50 to-transparent" />
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-linear-to-br from-blue-100/30 to-transparent" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-linear-to-tr from-gray-100/30 to-transparent" />

                {/* Grid pattern - Consistent with ServicesShowcase */}
                <div className="absolute inset-0 opacity-[0.05]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,#3b82f6_100%)] bg-size-[70px_70px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,#3b82f6_100%)] bg-size-[70px_70px]" />
                </div>
            </div>

            <div className="section-padding relative z-10">
                <div className="container-custom">
                    {/* Section Header - Consistent with other sections */}
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-3"
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-sm font-semibold text-blue-700 font-body">Get &nbsp;Started</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-body text-gray-900 mb-5"
                        >
                            Contact Us <span className="text-blue-600">Today</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl lg:text-[26px] font-body text-gray-600"
                        >
                            Choose your preferred method to start your construction journey with JNK Construction
                        </motion.p>
                    </div>

                    {/* Main Content Grid - Consistent layout with other sections */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16 lg:mb-20">
                        {/* Left Column - Contact Methods */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8 lg:w-[50%]"
                        >
                            {/* Contact Method Cards - Styled like ServicesShowcase cards */}
                            <div className="space-y-6">
                                {contactMethods.map((method, index) => (
                                    <motion.div
                                        key={method.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className="group relative"
                                    >
                                        <Link
                                            href={method.action}
                                            className="block bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-6">
                                                {/* Icon Container - Consistent with ServicesShowcase */}
                                                <div className="relative">
                                                    <div className={`absolute -inset-3 rounded-full bg-linear-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                                    <div className={`relative w-9 h-9 md:w-14 md:h-14 rounded-xl bg-linear-to-br ${method.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                                                        <method.icon className="w-4 h-4 md:w-7 md:h-7 text-white" />
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between mb-2">
                                                        <div>
                                                            <h4 className="text-xl lg:text-2xl font-bold font-body text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                                                {method.title}
                                                            </h4>
                                                            <p className="text-black text-[19.5px] font-body font-light lg:text-[21.5px] mt-1">
                                                                {method.description}
                                                            </p>
                                                        </div>
                                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                                                    </div>

                                                    {/* Contact Value */}
                                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg mt-3">
                                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                                        <span className="text-blue-700 font-semibold text-lg lg:text-xl">
                                                            {method.value}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Trust Indicators - Consistent with other sections */}
                            <div className="pt-8 border-t border-gray-200">
                                <div className="grid grid-cols-2 gap-4">
                                    {trustIndicators.map((indicator, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="p-2 rounded-lg bg-blue-50">
                                                <indicator.icon className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <span className="text-gray-700 font-medium text-sm lg:text-base">
                                                {indicator.text}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Photo & Consultation Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8 lg:w-[50%]"
                        >
                            {/* Photo Container - Consistent with ProjectsShowcase */}
                            <div className="relative group">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                    <div className="relative aspect-4/3 lg:aspect-3/2 overflow-hidden">
                                        <Image
                                            src="/images/Contact.jpeg"
                                            alt="JNK Construction Consultation Meeting"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        {/* Gradient Overlay - Consistent with ProjectsShowcase */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Category Badge - Similar to ProjectsShowcase */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm font-semibold text-gray-900">Book Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Section - Consistent with other sections */}
                            <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 relative overflow-hidden">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#f59e0b,transparent_50%)]" />
                                </div>

                                <div className="relative z-10 text-center">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full mb-4">
                                        <Clock className="w-4 h-4 text-blue-300" />
                                        <span className="text-sm font-semibold text-blue-200 font-body">Limited {new Date().getFullYear()} Slots</span>
                                    </div>

                                    <h4 className="text-xl lg:text-2xl font-bold font-body text-white mb-4">
                                        Schedule Your Free Consultation Today
                                    </h4>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 group/cta"
                                    >
                                        <span className="text-lg lg:text-xl">Book Online Now</span>
                                        <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient - Consistent with other sections */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent" />
        </section>
    );
}