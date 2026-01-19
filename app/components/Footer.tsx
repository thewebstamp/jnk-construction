'use client';

import { Phone, Mail, MapPin, Instagram, ArrowUpRight, Briefcase, Home, Building, Hammer } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
    { name: 'New Construction', icon: Building, href: '/services/new-construction' },
    { name: 'Remodeling', icon: Hammer, href: '/services/remodeling' },
    { name: 'Home Additions', icon: Home, href: '/services/additions' },
    { name: 'ADU Construction', icon: Briefcase, href: '/services/adu' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative overflow-x-hidden bg-linear-to-br from-gray-900 via-gray-900 to-gray-950 text-gray-300">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-blue-600 to-blue-700" />

            <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10 mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info - Takes full width on mobile, 2 cols on desktop */}
                    <div className="font-body md:col-span-2 space-y-6">
                        <div className="space-y-4">
                            <Link href="/" className="inline-flex items-center space-x-4 group">
                                <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                                    <Image
                                        src="/images/JNK Logo.png"
                                        alt="JNK Construction Inc Logo"
                                        fill
                                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 640px) 56px, 64px"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-6 mt-3">
                                        Construction <span className="text-blue-400">Inc.</span>
                                    </h3>
                                    <p className="text-base sm:text-lg text-blue-300 font-medium mt-1">
                                        Building Excellence Since 2005
                                    </p>
                                </div>
                            </Link>

                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                                Licensed general contractor specializing in premium construction, remodeling,
                                and ADU projects across Southbay, CA. Quality craftsmanship meets innovative
                                design for residential and commercial spaces.
                            </p>
                        </div>

                        {/* Contact Cards - Stack vertically on mobile, grid on tablet+ */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <motion.a
                                href="tel:213-269-8224"
                                whileHover={{ y: -4 }}
                                className="group bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-blue-500/30 transition-all duration-500 hover:shadow-lg sm:hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-linear-to-br from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-500">
                                        <Phone size={20} className="text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs sm:text-sm text-gray-400 font-medium">Call Us Today</p>
                                        <p className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 truncate">
                                            (213) 269-8224
                                        </p>
                                    </div>
                                    <ArrowUpRight className="hidden sm:block ml-auto text-gray-600 group-hover:text-blue-400 transition-colors duration-300 shrink-0" />
                                </div>
                            </motion.a>

                            <motion.a
                                href="mailto:info@jnkconstructioninc.com"
                                whileHover={{ y: -4 }}
                                className="group bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-blue-500/30 transition-all duration-500 hover:shadow-lg sm:hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-linear-to-br from-gray-700 to-gray-800 group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-500">
                                        <Mail size={20} className="text-gray-300" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs sm:text-sm text-gray-400 font-medium">Email Us</p>
                                        <p className="text-base sm:text-lg font-normal text-white group-hover:text-blue-300 transition-colors duration-300 wrap-break-word">
                                            Send Email
                                        </p>
                                    </div>
                                    <ArrowUpRight className="hidden sm:block ml-auto text-gray-600 group-hover:text-blue-400 transition-colors duration-300 shrink-0" />
                                </div>
                            </motion.a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-6 mt-4 lg:mt-0">
                        <div>
                            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4 pb-2 border-b border-gray-800/50">
                                Our Services
                            </h4>
                            <ul className="space-y-2">
                                {services.map((service) => (
                                    <motion.li
                                        key={service.name}
                                        whileHover={{ x: 4 }}
                                    >
                                        <Link
                                            href={service.href}
                                            className="flex font-body items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-800/30 group transition-all duration-300"
                                        >
                                            <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gray-800/50 group-hover:bg-blue-500/20 transition-colors duration-300">
                                                <service.icon size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                                            </div>
                                            <span className="text-base sm:text-[18px] text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                                                {service.name}
                                            </span>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Quick Links & Social - Full width on mobile, normal on larger */}
                    <div className="space-y-6 mt-4 lg:mt-0">
                        <div>
                            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4 pb-2 border-b border-gray-800/50">
                                Quick Links
                            </h4>
                            <ul className="space-y-2 font-body">
                                {['/services', '/projects', '/about', '/contact'].map((href, index) => (
                                    <motion.li key={href} whileHover={{ x: 4 }}>
                                        <Link
                                            href={href}
                                            className="flex items-center space-x-3 text-base sm:text-[18px] text-gray-400 hover:text-white group transition-colors duration-300 py-1.5"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-blue-500 transition-colors duration-300" />
                                            <span>
                                                {href === '/services' && 'All Services'}
                                                {href === '/projects' && 'Our Projects'}
                                                {href === '/about' && 'About Us'}
                                                {href === '/contact' && 'Contact'}
                                            </span>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className='mt-10 lg:mt-5'>
                            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4 pb-2 border-b border-gray-800/50">
                                Follow Us
                            </h4>
                            <motion.a
                                href="https://instagram.com/jnkconstructioninc"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                className="inline-flex font-body items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-pink-500/50 w-full group transition-all duration-500 hover:shadow-lg sm:hover:shadow-2xl hover:shadow-pink-500/10"
                            >
                                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-linear-to-br from-pink-500 via-pink-600 to-purple-600 group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-purple-700 transition-all duration-500">
                                    <Instagram size={20} className="text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs sm:text-sm text-gray-400 font-medium">Instagram</p>
                                    <p className="text-sm sm:text-lg font-semibold text-white group-hover:text-pink-300 transition-colors duration-300 truncate">
                                        @jnkconstructioninc
                                    </p>
                                </div>
                                <ArrowUpRight className="hidden sm:block text-gray-600 group-hover:text-pink-400 transition-colors duration-300 shrink-0" />
                            </motion.a>

                            {/* Location */}
                            <div className="mt-4 p-3 sm:p-4 font-body rounded-xl sm:rounded-2xl bg-linear-to-br from-gray-800/30 to-gray-900/30 border border-gray-800">
                                <div className="flex items-start space-x-3">
                                    <MapPin size={18} className="text-blue-400 mt-0.5" />
                                    <div className="min-w-0">
                                        <p className="text-xs sm:text-sm text-gray-400 font-medium">Location</p>
                                        <p className="text-white font-medium text-sm sm:text-base">Southbay, CA</p>
                                        <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                                            Serving all of Southbay and surrounding areas
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 lg:my-12">
                    <div className="h-px bg-linear-to-r from-transparent via-gray-800 to-transparent" />
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col font-body items-center justify-between gap-4 text-center">
                    <div>
                        <p className="text-gray-500 text-xs sm:text-sm">
                            &copy; {currentYear} JNK Construction Inc. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                            License #: Available upon request • Fully Licensed & Insured
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-xs sm:text-sm transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-xs sm:text-sm transition-colors duration-300">
                            Terms of Service
                        </Link>
                        <button
                            onClick={scrollToTop}
                            className="flex items-center space-x-1.5 sm:space-x-2 text-gray-500 hover:text-blue-400 transition-colors duration-300 group"
                            aria-label="Scroll to top"
                        >
                            <span className="text-xs sm:text-sm">Back to top</span>
                            <div className="p-1.5 sm:p-2 rounded-full bg-gray-800/50 group-hover:bg-blue-500/20 transition-colors duration-300">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Decorative Badge - Hidden on mobile, shown on desktop */}
                <div className="absolute bottom-6 right-6 hidden lg:block font-body">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full" />
                        <div className="relative px-5 py-2.5 rounded-full bg-linear-to-r from-gray-800 to-gray-900 border border-gray-800 backdrop-blur-sm">
                            <div className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs font-medium text-gray-300">Serving Since 2005</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}