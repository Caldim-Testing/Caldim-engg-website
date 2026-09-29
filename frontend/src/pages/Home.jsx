import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { COMPANY_INFO, VALUE_PROPOSITIONS, PRODUCTS, SERVICES, TECH_STACK } from '../data/siteData';

import heroLaptop from '../assets/laptop.png';

export default function Home() {
  return (
    <div className="pt-20 bg-slate-50 text-slate-900 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-navy-gradient text-white py-20 lg:py-28">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        {/* Ambient Decorative Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-cyan-400/10 pointer-events-none"
        ></motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content with Blur-in Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Next-Gen Enterprise Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                {COMPANY_INFO.name}
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-gradient">
                "{COMPANY_INFO.tagline}"
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                {COMPANY_INFO.subtext} We deliver battle-tested software architectures, automated workflows, and intelligent AI platforms for modern enterprises.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-500/25 transition-all"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all"
                  >
                    <span>Request Consultation</span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/portal"
                    className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-cyan-300 hover:text-white transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>Enterprise Portal</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Hero Graphic with Slide from Right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src={heroLaptop}
                  alt="CALDIM Dashboard Preview"
                  className="relative rounded-2xl border border-white/20 shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS STRIP WITH SPRING STAGGER */}
      <section className="bg-white border-y border-slate-200 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "50+", label: "Projects Delivered", color: "text-[#002B54]" },
              { num: "99.9%", label: "System Uptime", color: "text-blue-600" },
              { num: "100%", label: "Client Satisfaction", color: "text-[#002B54]" },
              { num: "24/7", label: "Engineering Support", color: "text-blue-600" },
            ].map((st, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
                className="p-4"
              >
                <div className={`text-3xl sm:text-4xl font-extrabold ${st.color}`}>{st.num}</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{st.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER - SERVICES GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block">
              Comprehensive Capabilities
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#002B54] tracking-tight">
              What We Offer
            </h3>
            <p className="text-slate-600 text-base">
              End-to-end digital engineering services tailored for high-growth startups and enterprise transformations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
                whileHover={{ scale: 1.03, y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#002B54] mb-3">{svc.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{svc.description}</p>
                  
                  <ul className="space-y-2 border-t border-slate-100 pt-4">
                    {svc.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FLAGSHIP PRODUCTS SECTION */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block">
              Proprietary Platforms
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#002B54] tracking-tight">
              Flagship Enterprise Products
            </h3>
            <p className="text-slate-600 text-base">
              Turnkey software solutions built to optimize your core business functions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {PRODUCTS.map((prod, i) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#002B54] text-white">
                      {prod.name}
                    </span>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      Enterprise Ready
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-[#002B54] mb-2">{prod.fullName}</h4>
                  <p className="text-sm font-semibold text-blue-600 mb-4">{prod.tagline}</p>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{prod.description}</p>

                  <div className="mb-6 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-inner">
                    <img
                      src={prod.image}
                      alt={prod.fullName}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Key Features</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {prod.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/products"
                    className="block w-full py-3 text-center text-xs font-bold text-white bg-[#002B54] hover:bg-blue-950 rounded-xl transition-all shadow-md"
                  >
                    View Product Details & Demo
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US - VALUES GRID WITH 3D CARD FLIP-IN */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block">
              Why Choose Us
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#002B54] tracking-tight">
              Value Proposition & Impact
            </h3>
            <p className="text-slate-600 text-base">
              How CALDIM Solutions accelerates organizational transformation and sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPOSITIONS.map((val, i) => (
              <motion.div
                key={val.id}
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -100 : 100,
                  rotateY: i % 2 === 0 ? 25 : -25
                }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={val.image}
                    alt={val.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#002B54]/90 backdrop-blur-md text-white text-[11px] font-bold rounded-full border border-white/20">
                    {val.stat}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-[#002B54] mb-2">{val.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNOLOGY MATRIX */}
      <section className="py-20 bg-navy-gradient text-white relative overflow-hidden">
        {/* Slow 360 degree rotating background decorative ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border border-cyan-400/10 pointer-events-none"
        ></motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-300 mb-2">
            Modern Tech Stack
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Built With Battle-Tested Technologies
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed mb-12">
            We leverage cutting-edge frameworks, databases, and AI frameworks to ensure ultra-low latency and cloud resilience.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
                whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 2 : -2 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col items-center gap-3 group"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-12 w-auto object-contain transition-transform duration-300"
                />
                <span className="text-xs font-bold text-slate-200">{tech.name}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CLOSING CTA BANNER */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Ready to Build the Solution?
          </motion.h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            {COMPANY_INFO.contactCTA || "Get in touch with our team for expert consultation and business solutions."}
          </p>
          
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-all"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portal"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Verify Access</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
