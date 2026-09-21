import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, CheckCircle2, ArrowLeft, RefreshCw } from 'lucide-react';
import caldimLogo from '../assets/caldim-logo.png';
import portalBg from '../assets/loginpage.jpg';

export default function PortalPage() {
  const [step, setStep] = useState(1); // 1: Info, 2: OTP, 3: Verified
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Step 1: Send Verification Code
  const handleSendCode = (e) => {
    e.preventDefault();
    if (!email || !fullName) {
      setError('Please fill in your name and email address.');
      return;
    }
    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1200);
  };

  // Step 2: Verify OTP Code
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!otp || otp.length < 4) {
      setError('Please enter a valid verification code.');
      return;
    }
    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1200);
  };

  // Particle Burst for Success Moment
  const particles = Array.from({ length: 16 });

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden font-sans">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img src={portalBg} alt="Cyberpunk Portal Background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-navy-gradient opacity-90 z-0"></div>

      {/* Header */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 p-6 flex items-center justify-between max-w-7xl mx-auto w-full border-b border-white/10"
      >
        <Link to="/" className="flex items-center gap-3">
          <img src={caldimLogo} alt="CALDIM" className="h-9 w-auto bg-white/10 p-1.5 rounded-xl border border-white/20" />
          <span className="font-extrabold text-lg tracking-tight text-white">CALDIM <span className="text-cyan-400">Enterprise</span></span>
        </Link>

        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Exit to Website</span>
        </Link>
      </motion.header>

      {/* Main Verification Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-white/15 p-8 sm:p-10 rounded-3xl shadow-2xl space-y-8 relative overflow-hidden"
        >
          
          {/* Scan-bar Sweep Loading Line during loading */}
          {loading && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              ></motion.div>
            </div>
          )}

          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-bold uppercase tracking-widest">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>ENCRYPTED ENTERPRISE VERIFICATION</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-white pt-2">
              {step === 1 && "Initialize Access"}
              {step === 2 && "Verify OTP Code"}
              {step === 3 && "Access Granted"}
            </h1>
            <p className="text-xs text-slate-400">
              {step === 1 && "Enter your organizational credentials to receive an access token."}
              {step === 2 && `Enter the 6-digit verification code sent to ${email}`}
              {step === 3 && "Your credentials have been authenticated by the matrix engine."}
            </p>
          </div>

          {/* Waveform Audio Bars on Loading */}
          {loading && (
            <div className="flex justify-center items-center gap-1.5 py-4">
              {[1, 2, 3, 4, 5].map((b, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [12, 36, 12] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                  className="w-1.5 bg-cyan-400 rounded-full"
                ></motion.div>
              ))}
            </div>
          )}

          {error && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs text-center font-medium">
              {error}
            </div>
          )}

          {/* STEP 1: Enter Details */}
          {step === 1 && (
            <form onSubmit={handleSendCode} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-xs text-white outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Organization / Company</label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="e.g. Cyberdyne Systems"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-xs text-white outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Business Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@enterprise.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-xs text-white outline-none transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                disabled={loading}
                className="w-full py-3.5 mt-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-full shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <span>Send Verification Code</span>}
              </motion.button>
            </form>
          )}

          {/* STEP 2: Enter OTP */}
          {step === 2 && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">6-Digit Verification Code</label>
                <input
                  type="text"
                  maxLength="6"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="123456"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-cyan-400/50 text-center font-mono text-lg tracking-widest text-cyan-300 outline-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                disabled={loading}
                className="w-full py-3.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <span>Verify OTP Code</span>}
              </motion.button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full py-2 text-[11px] font-medium text-slate-400 hover:text-white transition-colors"
              >
                ← Change Email or Name
              </button>
            </form>
          )}

          {/* STEP 3: Access Granted with Particle Burst */}
          {step === 3 && (
            <div className="text-center space-y-6 relative">
              {/* Particle Burst Elements */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {particles.map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0.7, 0],
                      scale: [0, 1.4, 0.4, 0],
                      rotate: [0, 180],
                      x: (Math.sin(idx) * 160),
                      y: (Math.cos(idx) * 160),
                    }}
                    transition={{ duration: 1.2, delay: idx * 0.04 }}
                    className={`absolute w-2.5 h-2.5 rounded-full ${
                      idx % 3 === 0 ? 'bg-cyan-400' : idx % 3 === 1 ? 'bg-blue-500' : 'bg-emerald-400'
                    }`}
                  ></motion.div>
                ))}
              </div>

              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto"
              >
                <CheckCircle2 className="w-8 h-8" />
              </motion.div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Authentication Successful</p>
                <p className="text-sm text-slate-300">
                  Your access credentials have been dispatched to: <span className="text-cyan-300 font-bold">{email}</span>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 text-xs text-slate-400 text-left space-y-2">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Authorized User:</span>
                  <span className="text-white font-semibold">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sandbox Environment:</span>
                  <span className="text-cyan-400 font-mono">CALDIM-ENT-v4</span>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/"
                  className="w-full py-3.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md block transition-all"
                >
                  Return to Main Portal
                </Link>
              </motion.div>
            </div>
          )}

        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-6 text-center text-xs text-slate-500 border-t border-white/10">
        © {new Date().getFullYear()} CALDIM Enterprise Verification System · All Encrypted Routes Active
      </footer>

    </div>
  );
}
