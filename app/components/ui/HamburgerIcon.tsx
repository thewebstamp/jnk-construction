'use client';

import { motion } from 'framer-motion';

interface HamburgerIconProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerIcon({ isOpen, toggleMenu }: HamburgerIconProps) {
  return (
    <button
      onClick={toggleMenu}
      className="relative w-8 h-8 flex flex-col items-center justify-center group"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <motion.span
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 8 },
        }}
        className="absolute w-6 h-[2.2px] bg-gray-800 group-hover:bg-blue-600 transition-colors"
        style={{ top: '29%' }}
      />
      <motion.span
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        className="absolute w-6 h-[2.2px] bg-gray-800 group-hover:bg-blue-600 transition-colors"
        style={{ top: '50%' }}
      />
      <motion.span
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -8 },
        }}
        className="absolute w-6 h-[2.2px] bg-gray-800 group-hover:bg-blue-600 transition-colors"
        style={{ top: '71%' }}
      />
    </button>
  );
}