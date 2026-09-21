import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Mail, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import caldimLogo from '../assets/caldim-logo.png';
import { COMPANY_INFO, OFFICES } from '../data/siteData';

export default function Footer() {
  const location = useLocation();

  if (['/portal', '/register'].includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="bg-navy-gradient text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Blurb Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={caldimLogo}
                alt="CALDIM Solutions"
                className="h-10 w-auto object-contain bg-white/10 p-1.5 rounded-xl border border-white/20"
              />
              <span className="font-extrabold text-xl tracking-tight text-white">
                CALDIM <span className="text-blue-400">Solutions</span>
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              {COMPANY_INFO.subtext}
            </p>
            <p className="text-xs text-blue-300 font-medium italic">
              "{COMPANY_INFO.tagline}"
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects Catalog</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Location & Info (2 Columns wide for clarity) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">Location & Info</h3>
            <div className="space-y-4 text-xs text-slate-300">
              {OFFICES.map((off) => (
                <div key={off.id} className="border-l-2 border-blue-500/50 pl-3 space-y-1">
                  <div className="font-bold text-white text-xs flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{off.title}</span>
                  </div>
                  {off.companyName && (
                    <div className="text-blue-300 font-semibold">{off.companyName}</div>
                  )}
                  <div className="text-slate-300 leading-relaxed">{off.address}</div>
                  <div className="flex items-center gap-1.5 text-slate-400 pt-0.5">
                    <Phone className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>Office: {off.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} CALDIM Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
