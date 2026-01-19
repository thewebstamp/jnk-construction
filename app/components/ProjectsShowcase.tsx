/* eslint-disable react-hooks/immutability */
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Home, Building, X, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'Modern Luxury Residence',
        category: 'New Construction',
        image: '/images/New2.jpg',
        icon: Home,
        color: 'from-blue-600 to-blue-700'
    },
    {
        id: 2,
        title: 'Home Renovation',
        category: 'Remodeling',
        image: '/images/Remodeling1.jpg',
        icon: Home,
        color: 'from-emerald-600 to-emerald-700'
    },
    {
        id: 3,
        title: 'Home Addition',
        category: 'Home Addition',
        image: '/images/New1.jpg',
        icon: Building,
        color: 'from-amber-600 to-amber-700'
    },
    {
        id: 4,
        title: 'Kitchen Renovation',
        category: 'Remodeling',
        image: '/images/Kitchen1.jpg',
        icon: Building,
        color: 'from-purple-600 to-purple-700'
    }
];

export default function ProjectsShowcase() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (projectId: number) => {
        setSelectedProject(projectId);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    const selectedProjectData = projects.find(project => project.id === selectedProject);

    return (
        <>
            <section className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 py-20 lg:py-28">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-amber-50/30 to-transparent" />
                    <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-linear-to-br from-amber-100/30 to-transparent" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-linear-to-tr from-gray-100/30 to-transparent" />

                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-[0.1]">
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,#f59e0b_100%)] bg-size-[60px_60px]" />
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,#f59e0b_100%)] bg-size-[60px_60px]" />
                    </div>
                </div>

                <div className="section-padding relative z-10">
                    <div className="container-custom">
                        {/* Section Header */}
                        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full mb-3"
                            >
                                <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                                <span className="text-sm font-semibold text-amber-700">Our &nbsp;Portfolio</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-body text-gray-900 mb-5"
                            >
                                Featured <span className="text-amber-600">Construction Projects</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-xl md:text-2xl lg:text-[26px] font-body text-gray-600"
                            >
                                Explore our recent work showcasing quality craftsmanship and innovative design
                            </motion.p>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group relative"
                                >
                                    {/* Main Project Card */}
                                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                                        {/* Image Container - Larger on desktop */}
                                        <div className="relative h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden cursor-pointer">
                                            <button
                                                onClick={() => handleImageClick(project.id)}
                                                className="relative w-full h-full focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                                                aria-label={`View larger image of ${project.title}`}
                                            >
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.title} - JNK Construction`}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                                                />

                                                {/* Zoom Icon Overlay */}
                                                <div className="absolute inset-0 bg-linear-to-t from-black/0 via-black/0 to-black/0 group-hover:from-black/20 group-hover:via-black/10 group-hover:to-black/5 transition-all duration-300 flex items-center justify-center">
                                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                                                        <ZoomIn className="w-6 h-6 text-gray-700" />
                                                    </div>
                                                </div>
                                            </button>

                                            {/* Category Badge */}
                                            <div className="absolute top-4 left-4 z-20">
                                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-sm">
                                                    <project.icon className="w-4 h-4" />
                                                    <span className="text-sm font-semibold text-gray-900 font-heading">{project.category}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Project Content */}
                                        <div className="p-4 md:p-6">
                                            {/* Project Header */}
                                            <div className="mb-3">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-[19px] md:text-[22px] lg:text-[26px] font-bold font-body text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                                                        {project.title}
                                                    </h3>
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-5 h-5 text-amber-500 fill-current" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative Corner */}
                                        <div className={`absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-10 lg:mt-15 bg-linear-to-r from-gray-900 to-gray-800 rounded-2xl lg:rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#f59e0b,transparent_50%)]" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#f59e0b,transparent_50%)]" />
                            </div>

                            <div className="relative z-10">
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                                    {[
                                        { value: '500+', label: 'Projects Completed' },
                                        { value: '19+', label: 'Years Experience' },
                                        { value: '98%', label: 'Client Satisfaction' },
                                        { value: '100%', label: 'Licensed Since 2005' }
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                                            className="text-center"
                                        >
                                            <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-400 mb-2">{stat.value}</div>
                                            <div className="text-gray-300 font-light text-base lg:text-lg font-body">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <div className="text-center mt-12 lg:mt-16">
                                    <Link
                                        href="/projects"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-[1.02] transition-all duration-300 group/cta"
                                    >
                                        <span className="text-lg lg:text-xl">View Full Portfolio</span>
                                        <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent" />
            </section>

            {/* Image Modal - Facebook-style */}
            <AnimatePresence>
                {isModalOpen && selectedProjectData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4"
                        onClick={closeModal}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 md:top-8 md:right-8 z-10 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
                            aria-label="Close image viewer"
                        >
                            <X className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl h-auto max-h-[90vh] rounded-lg overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={selectedProjectData.image}
                                    alt={`Full view of ${selectedProjectData.title}`}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto max-h-[90vh] object-contain"
                                    sizes="100vw"
                                    priority
                                />
                            </div>

                            {/* Image Info Overlay */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg md:text-2xl font-bold text-white font-body mb-1">
                                            {selectedProjectData.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}