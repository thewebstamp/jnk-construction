/* eslint-disable react-hooks/purity */
'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, Car, Clock, CheckCircle, Compass, ArrowRight, Shield, Home } from 'lucide-react';
import { useState } from 'react';

const serviceAreas = [
    {
        id: 1,
        name: 'Manhattan Beach',
        distance: '5 miles',
        description: 'Luxury residential and commercial projects in prime coastal locations',
        color: 'from-blue-500 to-blue-600',
        icon: Home
    },
    {
        id: 2,
        name: 'Redondo Beach',
        distance: '7 miles',
        description: 'Complete home renovations and ADU constructions in beach communities',
        color: 'from-emerald-500 to-emerald-600',
        icon: Home
    },
    {
        id: 3,
        name: 'Hermosa Beach',
        distance: '6 miles',
        description: 'Premium remodeling and new construction projects',
        color: 'from-purple-500 to-purple-600',
        icon: Home
    },
    {
        id: 4,
        name: 'Torrance',
        distance: '10 miles',
        description: 'Commercial and residential construction across diverse neighborhoods',
        color: 'from-amber-500 to-amber-600',
        icon: Home
    },
    {
        id: 5,
        name: 'Palos Verdes',
        distance: '12 miles',
        description: 'High-end estate construction and luxury remodels',
        color: 'from-rose-500 to-rose-600',
        icon: Home
    },
    {
        id: 6,
        name: 'South Bay Region',
        distance: '25 mile radius',
        description: 'Comprehensive construction services across the entire South Bay area',
        color: 'from-blue-600 to-blue-700',
        icon: Navigation
    }
];

const coverageStats = [
    { value: '25+', label: 'Cities Served', icon: MapPin },
    { value: '50 mile', label: 'Service Radius', icon: Navigation },
    { value: '<60 min', label: 'Response Time', icon: Clock },
    { value: '100%', label: 'Area Coverage', icon: Shield }
];

export default function ServiceArea() {
    const [hoveredArea, setHoveredArea] = useState<number | null>(null);

    return (
        <section className="relative overflow-hidden bg-linear-to-br from-gray-900 via-gray-950 to-blue-950 min-h-screen py-20 lg:py-28 flex items-center">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Deep gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-blue-800/30 to-blue-900/20" />

                {/* Abstract geometric shapes */}
                <div
                    className="absolute -top-20 -right-20 w-64 h-64 md:-top-32 md:-right-32 md:w-96 md:h-96 rounded-full bg-linear-to-bl from-blue-700/15 to-blue-600/10"
                    style={{ borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%' }}
                />

                <div
                    className="absolute -bottom-20 -left-20 w-64 h-64 md:-bottom-32 md:-left-32 md:w-96 md:h-96 rounded-full bg-linear-to-tr from-blue-600/15 to-blue-700/10"
                    style={{ borderRadius: '40% 60% 30% 70% / 60% 40% 70% 30%' }}
                />

                {/* Floating particles */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,#93c5fd_100%)] bg-size-[70px_70px]" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,#93c5fd_100%)] bg-size-[70px_70px]" />
            </div>

            <div className="section-padding relative z-10 w-full">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800/40 backdrop-blur-sm rounded-full border border-blue-700/30 mb-3"
                        >
                            <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-400 to-blue-300 animate-pulse" />
                            <span className="text-sm font-semibold text-blue-200 font-body">
                                Our &nbsp;Geographic &nbsp;Reach
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-body text-white mb-5"
                        >
                            Serving <span className="text-blue-300">Southbay, CA</span> & Beyond
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl lg:text-[26px] font-body text-blue-100/90 font-light leading-relaxed"
                        >
                            JNK Construction proudly serves homeowners and businesses across the South Bay region with 19+ years of local expertise
                        </motion.p>
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 lg:mb-16"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {coverageStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-linear-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="hidden lg:block p-3 rounded-lg bg-linear-to-br from-blue-500/10 to-blue-600/10">
                                            <stat.icon className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="text-[22px] lg:text-3xl font-bold text-white">{stat.value}</div>
                                            <div className="text-gray-300 text-base lg:text-lg font-light font-body">{stat.label}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12 lg:mb-16">
                        {/* Left Column - Service Areas */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-bold font-body text-white mb-2">
                                    Primary <span className="text-blue-300">Service Areas</span>
                                </h3>
                                <p className="text-gray-300 font-body font-light text-[19px] lg:text-[22px]">
                                    We specialize in construction projects across these key South Bay communities
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {serviceAreas.slice(0, 4).map((area) => (
                                    <motion.div
                                        key={area.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        onMouseEnter={() => setHoveredArea(area.id)}
                                        onMouseLeave={() => setHoveredArea(null)}
                                        className="group relative"
                                    >
                                        <div className="bg-linear-to-br from-gray-800/50 to-gray-900/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
                                            <div className="flex items-start gap-4">
                                                <div className={`p-3 rounded-xl bg-linear-to-br ${area.color} transition-transform duration-300 group-hover:scale-110`}>
                                                    <area.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between mb-2">
                                                        <h4 className="text-xl font-bold font-body text-white group-hover:text-blue-300 transition-colors duration-300">
                                                            {area.name}
                                                        </h4>
                                                        <span className="text-sm font-semibold text-blue-300 bg-blue-500/10 px-2 py-1 rounded-full">
                                                            {area.distance}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-300 text-base font-body font-light lg:text-lg mb-3">
                                                        {area.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover Effect */}
                                        <div className={`absolute -inset-1 rounded-2xl bg-linear-to-br ${area.color} opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-300 -z-10`} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column - Map Visualization */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            {/* Map Container */}
                            <div className="relative bg-linear-to-br from-gray-800/50 to-gray-900/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-700/50">
                                {/* Map Placeholder */}
                                <div className="relative h-64 md:h-80 lg:h-96 bg-linear-to-br from-blue-900/30 to-gray-900/50">
                                    {/* Simulated Map Grid */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_96%,#93c5fd_100%)] bg-size-[40px_40px]" />
                                        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_96%,#93c5fd_100%)] bg-size-[40px_40px]" />
                                    </div>

                                    {/* Location Markers */}
                                    {[
                                        { top: '30%', left: '25%', name: 'Manhattan Beach' },
                                        { top: '40%', left: '35%', name: 'Redondo Beach' },
                                        { top: '35%', left: '40%', name: 'Hermosa Beach' },
                                        { top: '55%', left: '45%', name: 'Torrance' },
                                        { top: '25%', left: '60%', name: 'Palos Verdes' },
                                    ].map((location, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="absolute group/location"
                                            style={{ top: location.top, left: location.left }}
                                        >
                                            <div className="relative">
                                                <div className="w-6 h-6 rounded-full bg-linear-to-br from-blue-500 to-blue-600 border-2 border-white shadow-lg shadow-blue-500/30 flex items-center justify-center cursor-pointer">
                                                    <MapPin className="w-3 h-3 text-white" />
                                                </div>
                                                {/* Tooltip */}
                                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1.5 rounded-lg opacity-0 group-hover/location:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                                    <span className="text-sm font-medium">{location.name}</span>
                                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {/* Service Radius Circle */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-2 border-dashed border-blue-500/30">
                                            {/* Pulsing Animation */}
                                            <motion.div
                                                className="absolute inset-0 rounded-full border-2 border-blue-500/20"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                            />
                                        </div>
                                    </div>

                                    {/* Center Point */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-linear-to-br from-blue-600 to-blue-700 border-4 border-white shadow-xl shadow-blue-500/40 flex items-center justify-center">
                                        <Navigation className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                {/* Map Legend */}
                                <div className="p-6 border-t border-gray-700/50">
                                    <div className="flex flex-wrap gap-4 font-body font-light">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-blue-500" />
                                            <span className="text-gray-300 text-sm lg:text-base">Primary Service Area</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-blue-300/50" />
                                            <span className="text-gray-300 text-sm lg:text-base">Extended Coverage</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-blue-400" />
                                            <span className="text-gray-300 text-sm lg:text-base">Active Projects</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Extended Coverage Areas */}
                            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                                <div className="flex items-center gap-3 mb-4">
                                    <Compass className="w-6 h-6 text-blue-400" />
                                    <h4 className="text-xl font-bold font-body text-white">Extended Coverage</h4>
                                </div>
                                <p className="text-gray-300 font-body font-light text-lg lg:text-xl mb-4">
                                    We also serve these additional areas within our 50-mile service radius
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Carson', 'Gardena', 'Lomita', 'Rolling Hills', 'San Pedro', 'Long Beach', 'Hawthorne'].map((city, index) => (
                                        <span key={index} className="px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-sm">
                                            {city}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Section - Full Coverage & CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Full Coverage Banner */}
                        <div className="bg-linear-to-r from-blue-600/20 to-blue-700/20 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 border border-blue-500/30">
                            <div className="grid md:grid-cols-3 gap-8 items-center">
                                <div className="md:col-span-2">
                                    <h3 className="text-2xl lg:text-3xl font-bold font-body text-white mb-3">
                                        Comprehensive South Bay Coverage
                                    </h3>
                                    <p className="text-gray-300 font-body font-light text-[19px] lg:text-[21.5px]">
                                        With our 50-mile service radius and 19+ years of local experience, we&apos;re equipped to handle any construction project across the South Bay region.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex flex-col items-center">
                                        <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
                                        <div className="text-blue-300 font-medium">Mile Radius</div>
                                        <div className="text-gray-400 text-sm mt-1">Complete Coverage</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-linear-to-r from-gray-800/50 to-gray-900/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 border border-gray-700/50">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold font-body text-white mb-4">
                                        Ready to Build in Your Area?
                                    </h3>
                                    <p className="text-gray-300 font-body font-light text-[19px] lg:text-[21.5px] mb-6">
                                        Get a free, no-obligation consultation to discuss your project in your South Bay community.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-400" />
                                            <span className="text-gray-300">Free Area Assessment</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-400" />
                                            <span className="text-gray-300">Local Permits Handled</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.a
                                        href="/contact"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 group/btn flex-1"
                                    >
                                        <span className="text-lg lg:text-xl">Request Free Quote</span>
                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </motion.a>

                                    <motion.a
                                        href="tel:213-269-8224"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600/50 text-white font-semibold rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 group/phone flex-1"
                                    >
                                        <Car className="w-5 h-5" />
                                        <span className="text-lg lg:text-xl">Check Availability</span>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-gray-950 to-transparent" />
        </section>
    );
}