import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { PRODUCTS } from '../data/siteData';

import aiProcurementImg from '../assets/ai-procurement-workflow.png';
import projectManagementImg from '../assets/project-management.png';

export default function ProductsPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen text-slate-900">
      
      {/* HERO */}
      <section className="bg-navy-gradient text-white py-20 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
            Proprietary SaaS Platforms
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            CALRIMS & CALTIMS Enterprise Suites
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Turnkey software solutions designed to automate recruitment workflows and eliminate timesheet tracking inaccuracies.
          </p>
        </motion.div>
      </section>

      {/* PRODUCTS DETAIL SECTION (ALTERNATING LAYOUT WITH SLIDE REVEALS) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {PRODUCTS.map((prod, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={prod.id}
                id={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md hover:shadow-xl transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Text Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:order-2'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1 text-xs font-black bg-[#002B54] text-white rounded-full">
                        {prod.name}
                      </span>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        Enterprise Edition
                      </span>
                    </div>

                    <h2 className="text-3xl font-extrabold text-[#002B54]">
                      {prod.fullName}
                    </h2>

                    <p className="text-base font-semibold text-blue-600 leading-snug">
                      "{prod.tagline}"
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Feature Checklist */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Feature Checklist</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {prod.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Measurable Outcomes */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Proven Business Outcomes</h4>
                      <div className="flex flex-wrap gap-2">
                        {prod.outcomes.map((out, i) => (
                          <span key={i} className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                            ⚡ {out}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          to="/portal"
                          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md transition-all"
                        >
                          <ShieldCheck className="w-4 h-4 text-cyan-300" />
                          <span>Request Demo Access</span>
                        </Link>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-[#002B54] bg-slate-100 hover:bg-slate-200 rounded-full transition-all"
                        >
                          <span>Request Pricing</span>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Image Column with Slide in */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`lg:col-span-6 ${isEven ? '' : 'lg:order-1'}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                      <img
                        src={prod.image}
                        alt={prod.fullName}
                        className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl text-white text-xs flex justify-between items-center border border-white/10">
                        <span className="font-semibold">{prod.name} Interactive Dashboard</span>
                        <span className="text-blue-400 font-mono text-[10px]">v4.2 Production</span>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* DASHBOARD SCREENSHOT GALLERY */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block">
              Product Suite Previews
            </span>
            <h3 className="text-3xl font-extrabold text-[#002B54]">
              Dashboard Screenshot Gallery
            </h3>
            <p className="text-slate-600 text-sm">
              Intuitive interfaces engineered for maximum data clarity and speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg group"
            >
              <img src={aiProcurementImg} alt="AI Procurement Workflow" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <h4 className="font-bold text-sm text-[#002B54]">AI Procurement Module Dashboard</h4>
                <p className="text-xs text-slate-500">Automated invoice parsing & vendor compliance verification.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg group"
            >
              <img src={projectManagementImg} alt="Project Management Hub" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <h4 className="font-bold text-sm text-[#002B54]">Project Command Center</h4>
                <p className="text-xs text-slate-500">Real-time resource allocation and milestone metrics.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 14 DAYS FREE TRIAL CTA */}
      <section className="py-20 bg-navy-gradient text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>Limited Enterprise Offer</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Start Your 14 Days Free Trial Today
          </h2>

          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Experience the full capabilities of CALRIMS or CALTIMS with zero upfront commitment. Full sandbox setup included.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-all"
              >
                <span>Activate Free Sandbox</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
