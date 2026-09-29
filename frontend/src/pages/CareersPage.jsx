import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartPulse, Globe, Wrench, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { CAREERS_CULTURE } from '../data/siteData';

import careersHeroImg from '../assets/fdd263ac-4eeb-4e9b-92e8-ac96a28a38fb.png';
import culture1 from '../assets/img.png';
import culture2 from '../assets/result_0.png';
import culture3 from '../assets/freepik_br_f9ee2a51-81e7-4332-9232-4b4463dcf2ff.png';
import culture4 from '../assets/slazzer-preview-twxul.png';

export default function CareersPage() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case 1: return <Globe className="w-6 h-6 text-blue-500" />;
      case 2: return <Wrench className="w-6 h-6 text-amber-500" />;
      default: return <TrendingUp className="w-6 h-6 text-emerald-500" />;
    }
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen text-slate-900">
      
      {/* HERO */}
      <section className="bg-navy-gradient text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Careers at CALDIM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Build the Future of Enterprise Software
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                "{CAREERS_CULTURE.cultureText}"
              </p>

              <div className="pt-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                  <a
                    href="#openings"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-all"
                  >
                    <span>Explore Open Positions</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <img
                src={careersHeroImg}
                alt="CALDIM Engineering Culture"
                className="rounded-3xl border border-white/20 shadow-2xl w-full object-cover h-80 lg:h-96"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4 BENEFIT CARDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block">
              Perks & Benefits
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#002B54]">
              Why Work With Us
            </h3>
            <p className="text-slate-600 text-base">
              We empower our team members with everything needed to do their best work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAREERS_CULTURE.benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                  {getIcon(idx)}
                </div>
                <h4 className="text-lg font-bold text-[#002B54]">{b.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CULTURE PHOTO GALLERY */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block">
              Life at CALDIM
            </h2>
            <h3 className="text-3xl font-extrabold text-[#002B54]">
              Our Life & Culture
            </h3>
            <p className="text-slate-600 text-sm">
              Collaboration, continuous learning, and celebrating milestones together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[culture1, culture2, culture3, culture4].map((img, i) => (
              <motion.img
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                src={img}
                alt={`Culture ${i + 1}`}
                className="rounded-2xl border border-slate-200 shadow-md h-56 w-full object-cover transition-transform duration-300"
              />
            ))}
          </div>

        </div>
      </section>

      {/* OPEN POSITIONS & CLOSING CTA */}
      <section id="openings" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <h3 className="text-3xl font-extrabold text-[#002B54]">Open Engineering Positions</h3>
            <p className="text-sm text-slate-600">Send your resume and portfolio to <strong className="text-blue-600">careers@caldimengg.in</strong></p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h4 className="text-lg font-bold text-[#002B54]">Senior Full-Stack Engineer (React + Node.js)</h4>
                <p className="text-xs text-slate-500">Full Time · Hosur / Chennai / Remote · 3+ Years Exp</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="px-5 py-2 text-xs font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 inline-block">Apply Now</Link>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h4 className="text-lg font-bold text-[#002B54]">AI / ML Engineer (Python, LLM, RAG)</h4>
                <p className="text-xs text-slate-500">Full Time · Remote / Hosur · 2+ Years Exp</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="px-5 py-2 text-xs font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 inline-block">Apply Now</Link>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-[#002B54]">UI/UX Product Designer</h4>
                <p className="text-xs text-slate-500">Full Time · Remote / Chennai · 2+ Years Exp</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="px-5 py-2 text-xs font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 inline-block">Apply Now</Link>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
