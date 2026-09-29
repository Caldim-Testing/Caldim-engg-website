import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Cpu, Palette, Code, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES, DELIVERY_PROCESS } from '../data/siteData';

export default function ServicesPage() {
  const getIcon = (name) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Cloud': return <Cloud className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      default: return <Code className="w-6 h-6" />;
    }
  };

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
            End-To-End Engineering
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Digital Services & Capabilities
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We architect and build tailored software solutions, cloud microservices, and AI-driven platforms that drive measurable growth.
          </p>
        </motion.div>
      </section>

      {/* 6 SERVICES DETAIL CARDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
                whileHover={{ scale: 1.03, y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    {getIcon(svc.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-[#002B54] mb-3">{svc.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{svc.description}</p>
                  
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Deliverables</h4>
                  <ul className="space-y-2 border-t border-slate-100 pt-4">
                    {svc.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="w-full py-2.5 inline-flex items-center justify-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-xl transition-all"
                    >
                      <span>Request Service Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5-STEP DELIVERY PROCESS */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block">
              Proven Methodology
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#002B54]">
              Our 5-Step Delivery Process
            </h3>
            <p className="text-slate-600 text-base">
              A structured agile lifecycle ensuring predictable delivery, high code quality, and on-time launches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {DELIVERY_PROCESS.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative space-y-3 hover:border-blue-300 transition-colors"
              >
                <span className="text-3xl font-extrabold text-blue-600/30 font-mono">
                  {p.step}
                </span>
                <h4 className="text-lg font-bold text-[#002B54]">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* QA & QUALITY ASSURANCE SECTION */}
      <section className="py-20 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 rounded-3xl border border-slate-200 shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Compromise QA</span>
              </div>
              <h3 className="text-2xl font-bold text-[#002B54]">
                Enterprise QA & Security Protocols
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every line of code written at CALDIM undergoes automated unit testing, static code analysis, vulnerability scanning, and manual penetration testing before deployment.
              </p>
            </div>

            <div className="md:col-span-4 flex justify-end">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md transition-all"
                >
                  <span>Talk to Engineering Lead</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </section>

    </div>
  );
}
