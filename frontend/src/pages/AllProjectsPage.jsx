import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PROJECTS_CATALOG } from '../data/siteData';

export default function AllProjectsPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen text-slate-900">
      
      {/* HERO */}
      <section className="bg-navy-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects Overview</span>
          </Link>
          <h1 className="text-4xl font-extrabold">Complete Projects Catalog</h1>
          <p className="text-slate-300 text-sm mt-2">Comprehensive breakdown of active, completed, and custom engineering deployments.</p>
        </div>
      </section>

      {/* CATALOG LIST */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {PROJECTS_CATALOG.map((proj) => (
            <div key={proj.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                <img src={proj.image} alt={proj.title} className="w-full h-64 object-cover" />
              </div>
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">{proj.category}</span>
                <h3 className="text-2xl font-bold text-[#002B54]">{proj.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-4 flex gap-4">
                  <Link to="/portal" className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 rounded-full">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Access Project Sandbox</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
