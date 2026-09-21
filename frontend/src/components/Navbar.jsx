import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import caldimLogo from '../assets/caldim-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (['/portal', '/register'].includes(location.pathname)) {
    return null;
  }

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'PRODUCTS', path: '/products' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'CAREERS', path: '/careers' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src={caldimLogo}
            alt="CALDIM Solutions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-10 w-auto object-contain transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-[#002B54]">
              CALDIM <span className="text-blue-600">Solutions</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 -mt-1">
              Engineering Matrix
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `inline-block px-3.5 py-2 text-xs font-bold tracking-wider rounded-xl transition-all duration-200 select-none ${
                  isActive
                    ? 'text-blue-600 bg-blue-50 border border-blue-200/80 shadow-xs'
                    : 'text-slate-600 hover:text-[#002B54] hover:bg-slate-100/80'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/portal">
            <motion.div
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#002B54] bg-slate-100 hover:bg-slate-200 rounded-full transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>PORTAL</span>
            </motion.div>
          </Link>

          <Link to="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md hover:shadow-lg shadow-blue-500/20 transition-all"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.div>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 25 }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 text-sm font-bold tracking-wide rounded-lg ${
                    isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/portal"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-[#002B54] bg-slate-100 rounded-xl"
              >
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Enterprise Portal</span>
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-md"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
