import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, OFFICES } from '../data/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    contactNumber: '',
    projectInfo: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    setTimeout(() => {
      setStatus({ loading: false, success: true, error: '' });
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        contactNumber: '',
        projectInfo: ''
      });
    }, 1000);
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen text-slate-900">
      
      {/* HERO */}
      <section className="bg-navy-gradient text-white py-16 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
            Get In Touch
          </span>
          <h1 className="text-4xl font-extrabold">Contact CALDIM Engineering</h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            {COMPANY_INFO.contactCTA || "Get in touch with our team for expert consultation and business solutions."}
          </p>
        </motion.div>
      </section>

      {/* CONTACT FORM & INFO SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 bg-navy-gradient text-white p-8 sm:p-10 rounded-3xl space-y-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Global Offices & Contacts</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Whether you need a full enterprise software build, custom AI automation, or an expert engineering consultation, reach out to any of our global offices.
                </p>

                <div className="space-y-6 text-xs">
                  {OFFICES.map((off, i) => (
                    <motion.div
                      key={off.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2"
                    >
                      <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                        <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{off.title}</span>
                      </div>
                      {off.companyName && (
                        <div className="text-blue-300 font-semibold">{off.companyName}</div>
                      )}
                      <p className="text-slate-300 leading-relaxed">{off.address}</p>
                      <div className="flex items-center gap-2 text-slate-400 font-medium pt-1 border-t border-white/10">
                        <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>Office Tel: {off.phone}</span>
                      </div>
                    </motion.div>
                  ))}

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider">Email Inquiry</h4>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-300 hover:text-white text-sm">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-xs text-slate-400">
                Response SLA: 24 to 48 business hours.
              </div>
            </motion.div>

            {/* Right Contact Form UI */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md"
            >
              
              <h3 className="text-2xl font-bold text-[#002B54] mb-2">Send Us a Message</h3>
              <p className="text-xs text-slate-500 mb-8">Fill out the details below and an engineering consultant will reach out.</p>

              {status.success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="font-bold">Message Sent Successfully!</strong>
                    <p>Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. John"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Company / Org</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Contact Phone / WhatsApp</label>
                  <input
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Project Details / Message *</label>
                  <textarea
                    name="projectInfo"
                    required
                    rows="4"
                    value={formData.projectInfo}
                    onChange={handleChange}
                    placeholder="Describe your software requirements, timeline, or scope..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                >
                  {status.loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Submit Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

              </form>

            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
