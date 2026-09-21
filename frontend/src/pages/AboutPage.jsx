import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Compass, Award, Shield, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, CAREERS_CULTURE } from '../data/siteData';

import aboutHeroImg from '../assets/Gemini_Generated_Image_nrizv1nrizv1nriz.png';
import cultureImg1 from '../assets/img.png';
import cultureImg2 from '../assets/result_0.png';
import cultureImg3 from '../assets/freepik_br_f9ee2a51-81e7-4332-9232-4b4463dcf2ff.png';
import cultureImg4 from '../assets/slazzer-preview-twxul.png';

export default function AboutPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen text-slate-900">
      
      {/* HERO / INTRO */}
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
                <span>About CALDIM Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Architecting Intelligent Solutions for Tomorrow
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed">
                {COMPANY_INFO.subtext} Founded with a vision to deliver sophisticated engineering for modern enterprises across {COMPANY_INFO.locations}.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Custom Enterprise Systems</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>AI & Machine Learning</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur-xl opacity-30"></div>
              <img
                src={aboutHeroImg}
                alt="CALDIM Engineering Team"
                className="relative rounded-3xl border border-white/20 shadow-2xl w-full object-cover h-80 lg:h-96"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHO WE ARE & MISSION / VISION / VALUES / COMMITMENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block">
              Core Principles
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#002B54]">
              Mission, Vision & Principles
            </h3>
            <p className="text-slate-600 text-base">
              The foundational pillars driving our engineering culture and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Our Mission", desc: COMPANY_INFO.mission, icon: <Target className="w-6 h-6" />, color: "bg-blue-50 text-blue-600" },
              { title: "Our Vision", desc: COMPANY_INFO.vision, icon: <Compass className="w-6 h-6" />, color: "bg-cyan-50 text-cyan-600" },
              { title: "Core Values", desc: "Innovation, transparency, unyielding code quality, and measurable client ROI.", icon: <Award className="w-6 h-6" />, color: "bg-indigo-50 text-indigo-600" },
              { title: "Our Commitment", desc: "Clean code, robust security compliance, zero data compromises, and 24/7 reliability.", icon: <Shield className="w-6 h-6" />, color: "bg-blue-50 text-blue-600" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center`}>
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold text-[#002B54]">{card.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* INNOVATION FIRST SECTION */}
      <section className="py-20 bg-white border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full">
                Engineering Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B54]">
                Innovation First Approach
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We believe true digital transformation requires moving beyond off-the-shelf software. We engineer custom digital products from the ground up, utilizing modern microservices, modular UI systems, and edge-native AI integrations.
              </p>
              
              <div className="space-y-3 pt-2">
                {COMPANY_INFO.values.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#002B54]">{v.title}</h4>
                      <p className="text-xs text-slate-600">{v.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 grid grid-cols-2 gap-4"
            >
              <motion.img whileHover={{ scale: 1.05 }} src={cultureImg1} alt="Innovation Hub 1" className="rounded-2xl border border-slate-200 shadow-md h-48 w-full object-cover" />
              <motion.img whileHover={{ scale: 1.05 }} src={cultureImg2} alt="Innovation Hub 2" className="rounded-2xl border border-slate-200 shadow-md h-48 w-full object-cover mt-6" />
              <motion.img whileHover={{ scale: 1.05 }} src={cultureImg3} alt="Innovation Hub 3" className="rounded-2xl border border-slate-200 shadow-md h-48 w-full object-cover -mt-6" />
              <motion.img whileHover={{ scale: 1.05 }} src={cultureImg4} alt="Innovation Hub 4" className="rounded-2xl border border-slate-200 shadow-md h-48 w-full object-cover" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block">
            Our People & Culture
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#002B54]">
            Passionate Engineers & Designers
          </h3>
          <p className="text-lg text-slate-700 font-medium italic max-w-2xl mx-auto">
            "{CAREERS_CULTURE.cultureText}"
          </p>

          <div className="pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md transition-all"
              >
                <span>Explore Career Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
