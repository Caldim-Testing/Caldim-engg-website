import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS_CATALOG } from '../data/siteData';

export default function ProjectsPage() {
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
            Portfolio Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Engineering Projects & Case Studies
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of enterprise applications, AI automation platforms, and custom software systems.
          </p>
        </motion.div>
      </section>

      {/* PROJECTS GRID WITH SPRING STAGGER */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS_CATALOG.map((proj, i) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
                whileHover={{ scale: 1.03, y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#002B54]/90 backdrop-blur-md text-cyan-300 text-xs font-bold rounded-full border border-white/20">
                    {proj.category}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#002B54] mb-3">{proj.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{proj.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to="/all-projects"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                    >
                      <span>Read Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to="/portal"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#002B54]"
                    >
                      <span>Live Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link
                to="/all-projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold text-white bg-[#002B54] hover:bg-blue-950 rounded-full shadow-md transition-all"
              >
                <span>View All Projects Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}
