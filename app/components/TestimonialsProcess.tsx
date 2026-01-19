'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Phone, ClipboardCheck, Hammer, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Michael Rodriguez',
        rating: 5,
        content: 'JNK Construction transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism exceeded our expectations. The project was completed on time and within budget!',
        project: 'Kitchen Remodel',
        date: '2024',
        image: '/images/holder.jpeg',
        color: 'from-blue-500 to-blue-600'
    },
    {
        id: 2,
        name: 'Sarah Chen',
        rating: 5,
        content: 'Our commercial space renovation was handled with exceptional skill. The team was communicative, respectful of our business hours, and delivered a stunning result that has attracted more customers.',
        project: 'Commercial Renovation',
        date: '2025',
        image: '/images/holder.jpeg',
        color: 'from-blue-600 to-blue-700'
    },
    {
        id: 3,
        name: 'Robert & Maria Johnson',
        rating: 5,
        content: 'Building our ADU with JNK was seamless. They navigated all permits effortlessly and created a beautiful rental unit that now generates passive income. Highly recommended for ADU projects!',
        project: 'ADU Construction',
        date: '2024',
        image: '/images/holder.jpeg',
        color: 'from-blue-700 to-blue-800'
    }
];

const processSteps = [
    {
        step: 1,
        title: 'Initial Consultation',
        description: 'We discuss your vision, requirements, and budget in detail during a free on-site consultation.',
        icon: Phone,
        duration: '1-2 hours',
        color: 'from-blue-500 to-blue-600'
    },
    {
        step: 2,
        title: 'Design & Planning',
        description: 'Our team creates detailed plans, obtains necessary permits, and finalizes the project timeline.',
        icon: ClipboardCheck,
        duration: '1-2 weeks',
        color: 'from-blue-600 to-blue-700'
    },
    {
        step: 3,
        title: 'Construction Phase',
        description: 'Skilled craftsmen execute the project with precision, maintaining daily communication and quality checks.',
        icon: Hammer,
        duration: 'Project specific',
        color: 'from-blue-700 to-blue-800'
    },
    {
        step: 4,
        title: 'Final Inspection & Delivery',
        description: 'We conduct thorough inspections, address any final details, and hand over your completed project.',
        icon: CheckCircle,
        duration: '1-2 days',
        color: 'from-blue-800 to-blue-900'
    }
];

export default function TestimonialsProcess() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    return (
        <section className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 py-20 lg:py-28">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient overlays */}
                <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-blue-50/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-blue-50/50 to-transparent" />

                {/* Abstract shapes */}
                <div className="absolute top-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-linear-to-bl from-blue-100/70 to-transparent" />
                <div className="absolute bottom-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-linear-to-tr from-blue-100/70 to-transparent" />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.09]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,#3b82f6_100%)] bg-size-[70px_70px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,#3b82f6_100%)] bg-size-[70px_70px]" />
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
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-3 border border-blue-100"
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-sm font-semibold text-blue-700">Client &nbsp;Journey</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-body text-gray-900 mb-5"
                        >
                            Trusted by Homeowners, <span className="text-blue-600">Streamlined Process</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl lg:text-[26px] font-body text-gray-600"
                        >
                            See what our clients say about us and discover our proven 4-step construction process
                        </motion.p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20">
                        {/* Left Column - Testimonials */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl lg:text-3xl font-bold font-body text-gray-900">
                                    Client Testimonials
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {testimonials.map((testimonial) => (
                                    <motion.div
                                        key={testimonial.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        whileHover={{ y: -5 }}
                                        className="group relative"
                                    >
                                        {/* Blue Background Card */}
                                        <div className={`bg-linear-to-br ${testimonial.color} rounded-2xl p-6 lg:p-8 shadow-lg border border-blue-500/20 hover:shadow-xl hover:border-blue-400/40 transition-all duration-300`}>
                                            {/* Quote Icon */}
                                            <div className="absolute top-6 right-6 opacity-20">
                                                <Quote className="w-12 h-12 text-white" />
                                            </div>

                                            {/* Content */}
                                            <div className="relative">
                                                {/* Rating */}
                                                <div className="flex items-center gap-1 mb-4">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 text-amber-300 fill-current" />
                                                    ))}
                                                </div>

                                                {/* Testimonial Text */}
                                                <blockquote className="text-[19px] lg:text-[21.5px] text-blue-50 font-body font-light italic mb-6 leading-relaxed">
                                                    &quot;{testimonial.content}&quot;
                                                </blockquote>

                                                {/* Client Info */}
                                                <div className="flex items-center gap-4 pt-6 border-t border-blue-400/30">
                                                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white ring-offset-2 ring-offset-blue-600">
                                                        <Image
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            fill
                                                            className="object-cover"
                                                            sizes="56px"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-white">{testimonial.name}</div>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <span className="px-2 py-1 bg-white/20 text-white font-body text-xs lg:text-sm font-medium rounded-full backdrop-blur-sm">
                                                                {testimonial.project}
                                                            </span>
                                                            <span className="text-blue-200 text-xs">• {testimonial.date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative Corner */}
                                        <div className={`absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-amber-300 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                        <div className={`absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-amber-300 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column - Process */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-bold font-body text-blue-600 mb-2">
                                    Our 4-Step Process
                                </h3>
                            </div>

                            {/* Process Timeline */}
                            <div className="relative">
                                {/* Modern Vertical Line with Gradient */}
                                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 lg:left-1/2 lg:transform lg:-translate-x-1/2">
                                    {/* Gradient line with shadow */}
                                    <div className="absolute inset-0 bg-linear-to-b from-blue-500 via-blue-600 to-blue-800 shadow-lg shadow-blue-500/20" />

                                    {/* Pulsing animation effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-b from-transparent via-white/20 to-transparent"
                                        animate={{
                                            y: [0, "100%", 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                </div>

                                {/* Process Steps with Enhanced Design */}
                                <div className="space-y-10 md:space-y-12">
                                    {processSteps.map((step, index) => (
                                        <motion.div
                                            key={step.step}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            onMouseEnter={() => setActiveStep(step.step)}
                                            onMouseLeave={() => setActiveStep(null)}
                                            className="group relative flex items-start lg:items-center"
                                        >
                                            {/* Step Number & Icon - Enhanced Container */}
                                            <div className="relative z-10 shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
                                                {/* Animated Background Gradient */}
                                                <div className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-linear-to-br ${step.color} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl shadow-blue-500/20 ${activeStep === step.step ? 'scale-110 rotate-3' : ''}`} />

                                                {/* Inner Glow Effect */}
                                                <div className={`absolute -inset-1 rounded-2xl md:rounded-3xl bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-30 blur-md transition-all duration-500 ${activeStep === step.step ? 'opacity-30' : ''}`} />

                                                {/* Main Icon Container */}
                                                <div className="relative w-full h-full rounded-2xl md:rounded-3xl border-4 border-white bg-white p-3 md:p-4 flex items-center justify-center shadow-lg">
                                                </div>

                                                {/* Step Number Badge - Enhanced */}
                                                <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-linear-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center font-bold text-sm md:text-base lg:text-lg shadow-lg border-2 border-white animate-pulse group-hover:animate-none">
                                                    {step.step}
                                                </div>

                                                {/* Connection Dot on Timeline */}
                                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-3 h-3 rounded-full bg-blue-600 shadow-lg shadow-blue-500/30 hidden lg:block" />
                                            </div>

                                            {/* Content - Enhanced Card */}
                                            <div className="flex-1 ml-6 md:ml-8 lg:ml-10">
                                                <div className="bg-linear-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-5 md:p-7 border border-gray-200 shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden">

                                                    {/* Accent Border */}
                                                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b ${step.color} rounded-r-full`} />

                                                    {/* Content Wrapper */}
                                                    <div className="ml-4">
                                                        {/* Header with Duration */}
                                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2 md:mb-3">
                                                            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold font-body text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                                                                {step.title}
                                                            </h4>
                                                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 font-semibold rounded-full text-sm md:text-base border border-blue-100">
                                                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse group-hover:animate-none" />
                                                                {step.duration}
                                                            </span>
                                                        </div>

                                                        {/* Description - Enhanced Typography */}
                                                        <p className="text-black font-body text-[19px] md:text-xl font-light lg:text-[22px] leading-relaxed mb-2 px-1">
                                                            {step.description}
                                                        </p>

                                                        {/* Enhanced Progress Indicator */}
                                                        <div className="mt-3 md:mt-4 pt-5 md:pt-6 border-t border-gray-100">
                                                            {/* Progress Bar Container */}
                                                            <div className="h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
                                                                {/* Animated Progress Fill */}
                                                                <motion.div
                                                                    initial={{ width: 0 }}
                                                                    whileInView={{ width: `${step.step * 25}%` }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                                                                    className={`h-full rounded-full bg-linear-to-r ${step.color} shadow-inner shadow-white/50 relative overflow-hidden`}
                                                                >
                                                                    {/* Shimmer Effect */}
                                                                    <motion.div
                                                                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                                                                        animate={{
                                                                            x: ["0%", "100%"],
                                                                        }}
                                                                        transition={{
                                                                            duration: 2,
                                                                            repeat: Infinity,
                                                                            ease: "linear",
                                                                            delay: index * 0.1
                                                                        }}
                                                                    />
                                                                </motion.div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Hover Effects */}
                                                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    <div className="absolute bottom-4 left-4 w-3 h-3 border border-blue-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Timeline Completion Indicator */}
                                <div className="relative mt-12 md:mt-16">
                                    <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-linear-to-b from-blue-800 to-blue-900 lg:left-1/2 lg:transform lg:-translate-x-1/2" />
                                    <div className="flex items-center justify-center gap-4 ml-16 md:ml-24 lg:ml-0 lg:justify-center">
                                        <div className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/30 animate-pulse" />
                                        <span className="text-gray-600 font-semibold text-lg md:text-xl">Process Complete</span>
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-linear-to-r from-blue-50 to-blue-100 rounded-2xl lg:rounded-3xl p-8 lg:p-12 border border-blue-200"
                    >
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-bold font-body text-gray-900 mb-4">
                                    Ready to Start Your Construction Journey?
                                </h3>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.a
                                    href="/contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group/btn flex-1"
                                >
                                    <span className="text-lg lg:text-xl">Begin Your Project</span>
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </motion.a>

                                <motion.a
                                    href="tel:213-269-8224"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-900 font-bold rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group/phone flex-1"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span className="text-lg lg:text-xl">Call (213) 269-8224</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Top Gradient Fade */}
            <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white to-transparent" />

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent" />
        </section>
    );
}