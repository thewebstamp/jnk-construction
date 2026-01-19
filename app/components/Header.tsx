'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HamburgerIcon from './ui/HamburgerIcon';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Check if a link is active
    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className={`fixed top-0 z-50 font-body transition-all duration-300 w-full ${isScrolled
                ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-black/5'
                : 'bg-white/80 backdrop-blur-md'
                }`}>
                <div className="section-padding">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo with Image and Text */}
                        <Link
                            href="/"
                            className="flex items-center space-x-2 group"
                            onClick={closeMenu}
                        >
                            <div className="relative w-11 h-11 md:w-14 lg:h-14">
                                <Image
                                    src="/images/JNK.png"
                                    alt="JNK Construction Inc Logo"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                                    priority
                                />
                            </div>
                            <div className="mt-2">
                                <h1 className="text-[17px] lg:text-[19px] font-extrabold text-gray-900 tracking-tight leading-4 lg:leading-5">
                                    <span className="block">CONSTRUCTION</span>
                                    <span className="text-blue-600 text-[12px] lg:text-[16px] font-black">INC.</span>
                                </h1>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-10">
                            <nav className="flex items-center space-x-10">
                                {navigation.map((item) => {
                                    const active = isActive(item.href);
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`font-body relative text-gray-700 hover:text-blue-600 font-medium text-[20.5px] tracking-tight transition-colors duration-300 group/nav ${active ? 'text-blue-600' : ''}`}
                                        >
                                            {item.name}
                                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover/nav:w-full'}`} />
                                        </Link>
                                    );
                                })}
                            </nav>

                            {/* Contact CTA */}
                            <div className="flex items-center space-x-6 pl-6 border-l border-gray-200">
                                <a
                                    href="tel:213-269-8224"
                                    className="flex items-center space-x-3 text-gray-900 hover:text-blue-600 group/phone transition-colors duration-300"
                                >
                                    <div className="relative">
                                        <Phone size={20} className="group-hover/phone:scale-110 transition-transform duration-300" />
                                        <div className="absolute -inset-2 bg-blue-100 rounded-full opacity-0 group-hover/phone:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-500">Call Us</span>
                                        <span className="font-bold text-xl tracking-tight">(213) 269-8224</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden items-center space-x-4">
                            <a
                                href="tel:213-269-8224"
                                className="lg:hidden p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-300"
                                aria-label="Call JNK Construction"
                            >
                                <Phone size={21} />
                            </a>
                            <HamburgerIcon isOpen={isMenuOpen} toggleMenu={toggleMenu} />
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-full bg-white shadow-2xl lg:hidden"
                        >
                            <div className="flex flex-col h-full">
                                {/* Menu Header */}
                                <div className="p-6 border-b border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href="/"
                                            className="flex items-center space-x-3"
                                            onClick={closeMenu}
                                        >
                                            <div className="relative w-12 h-12">
                                                <Image
                                                    src="/images/JNK Logo.png"
                                                    alt="JNK Construction Inc Logo"
                                                    fill
                                                    className="object-contain"
                                                    sizes="64px"
                                                />
                                            </div>
                                            <div className='font-body'>
                                                <h2 className="text-[22px] font-bold text-blue-900">JNK</h2>
                                                <p className="text-sm text-gray-500 font-medium">CONSTRUCTION INC</p>
                                            </div>
                                        </Link>
                                        <button
                                            onClick={toggleMenu}
                                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                                            aria-label="Close menu"
                                        >
                                            <span className="text-5xl font-body font-light">×</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Menu Items */}
                                <nav className="flex-1 p-6 overflow-y-auto">
                                    <ul className="space-y-2">
                                        {navigation.map((item, index) => {
                                            const active = isActive(item.href);
                                            return (
                                                <motion.li
                                                    key={item.name}
                                                    initial={{ x: 20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: index * 0.05 }}
                                                >
                                                    <Link
                                                        href={item.href}
                                                        className={`flex items-center justify-between p-4 rounded-xl text-gray-700 hover:text-blue-600 group transition-all duration-300 ${active ? 'bg-blue-50 text-blue-600' : 'hover:bg-blue-50'}`}
                                                        onClick={closeMenu}
                                                    >
                                                        <span className={`text-xl font-medium font-body ${active ? 'font-semibold' : ''}`}>{item.name}</span>
                                                        {active && (
                                                            <div className="w-2 h-2 rounded-full bg-blue-600" />
                                                        )}
                                                    </Link>
                                                </motion.li>
                                            );
                                        })}
                                    </ul>
                                </nav>

                                {/* Menu Footer */}
                                <div className="p-6 border-t border-gray-100 bg-linear-to-b from-white to-gray-50">
                                    <div className="space-y-4">
                                        {/* Contact Info */}
                                        <div className="space-y-1">
                                            <a
                                                href="tel:213-269-8224"
                                                className="flex items-center font-body space-x-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 group/contact"
                                            >
                                                <div className="p-2 bg-blue-100 rounded-lg group-hover/contact:bg-blue-200 transition-colors duration-300">
                                                    <Phone size={24} className="text-blue-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-gray-500 font-medium">Call Now</p>
                                                    <p className="text-xl font-bold text-gray-900">(213) 269-8224</p>
                                                </div>
                                            </a>
                                        </div>

                                        {/* License Info */}
                                        <div className="pt-1">
                                            <p className="text-xs text-gray-400 font-body text-center">
                                                Licensed General Contractor • Since 2005<br />
                                                Serving Southbay, CA and surrounding areas
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}